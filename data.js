/**
 * ============================================
 * BioChem Niche - Main Application Logic
 * ============================================
 */

// ==================== Global State ====================
const AppState = {
  lang: 'zh',
  module: 'home',
  favs: JSON.parse(localStorage.getItem('bc_favs') || '[]'),
  wrong: JSON.parse(localStorage.getItem('bc_wrong') || '[]'),
  vocab: JSON.parse(localStorage.getItem('bc_vocab') || '[]'),
  read: JSON.parse(localStorage.getItem('bc_read') || '[]'),
  history: JSON.parse(localStorage.getItem('bc_history') || '[]'),
  interested: JSON.parse(localStorage.getItem('bc_interested') || '[]'),
  quiz: null,
  timer: null,
  seconds: 0
};

const $ = s => document.querySelector(s);
const $$ = s => document.querySelectorAll(s);
const _save = (k, v) => localStorage.setItem('bc_' + k, JSON.stringify(v));
const _fmtTime = s => { const m = Math.floor(s / 60).toString().padStart(2, '0'); const sec = (s % 60).toString().padStart(2, '0'); return m + ':' + sec; };
const _shuffle = a => { const arr = [...a]; for (let i = arr.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [arr[i], arr[j]] = [arr[j], arr[i]]; } return arr; };

// ==================== Data Access ====================
function getTopics() { return window.KNOWLEDGE_DATA || []; }
function getQuizzes() { return window.QUIZ_DATA || []; }
function getGlossary() { return window.GLOSSARY_DATA || []; }
function getMajors() { return window.MAJORS_DATA || { undergrad: [], grad: [], tips: [] }; }

// ==================== Language ====================
function setLang(l) {
  AppState.lang = l;
  const btn = $('.lang-current');
  if (btn) btn.textContent = l === 'zh' ? 'EN' : '中';
  $$('[data-en][data-zh]').forEach(el => {
    const txt = el.getAttribute('data-' + l);
    if (txt !== null && el.children.length === 0) el.textContent = txt;
    if (txt !== null && el.children.length > 0) {
      const tn = el.childNodes[0];
      if (tn && tn.nodeType === 3) tn.textContent = txt + ' ';
    }
  });
  $$('[data-zh-placeholder][data-en-placeholder]').forEach(el => {
    el.placeholder = l === 'zh' ? el.getAttribute('data-zh-placeholder') : el.getAttribute('data-en-placeholder');
  });
  // Refresh current module
  if (AppState.module === 'knowledge') renderKnowledge(getTopics());
  if (AppState.module === 'glossary') renderGlossary();
  if (AppState.module === 'majors') renderMajors();
  if (AppState.module === 'quiz') initQuiz();
}
function toggleLang() { setLang(AppState.lang === 'zh' ? 'en' : 'zh'); }

// ==================== Module Switching ====================
function goModule(name) {
  $$('.module').forEach(m => m.classList.add('hidden'));
  $$('.nav-link').forEach(l => l.classList.remove('active'));
  const map = { home: 'homeModule', knowledge: 'knowledgeModule', quiz: 'quizModule', glossary: 'glossaryModule', majors: 'majorsModule' };
  const el = document.getElementById(map[name]);
  if (el) { el.classList.remove('hidden'); el.style.animation = 'none'; el.offsetHeight; el.style.animation = 'fadeIn 0.4s ease'; }
  const nl = document.querySelector('.nav-link[data-module="' + name + '"]');
  if (nl) nl.classList.add('active');
  AppState.module = name;
  if (name === 'knowledge') initKnowledge();
  if (name === 'quiz') initQuiz();
  if (name === 'glossary') initGlossary();
  if (name === 'majors') initMajors();
  const nav = document.getElementById('navLinks');
  if (nav) nav.classList.remove('open');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ==================== Knowledge Module ====================
function initKnowledge() {
  renderCatTree();
  renderKnowledge(getTopics());
  updateKProgress();
  // Search
  const sb = document.getElementById('knowledgeSearch');
  if (sb) sb.oninput = () => {
    const q = sb.value.toLowerCase();
    const all = getTopics();
    const filtered = q ? all.filter(t => (t.titleEn || '').toLowerCase().includes(q) || (t.titleZh || '').includes(q) || (t.summaryEn || '').toLowerCase().includes(q) || (t.summaryZh || '').includes(q)) : all;
    renderKnowledge(filtered);
  };
  // Filter buttons
  $$('.knowledge-filters .filter-btn').forEach(b => {
    b.onclick = () => {
      $$('.knowledge-filters .filter-btn').forEach(x => x.classList.remove('active'));
      b.classList.add('active');
      const f = b.getAttribute('data-filter');
      const topics = f === 'all' ? getTopics() : getTopics().filter(t => t.category === f);
      renderKnowledge(topics);
    };
  });
}

function renderCatTree() {
  const tree = document.getElementById('categoryTree');
  if (!tree) return;
  tree.innerHTML = '';
  const topics = getTopics();
  const units = {};
  topics.forEach(t => { if (!units[t.unit]) units[t.unit] = []; units[t.unit].push(t); });
  Object.entries(units).forEach(([unit, ts]) => {
    const g = document.createElement('div'); g.className = 'category-group';
    const h = document.createElement('div'); h.className = 'category-header';
    h.innerHTML = '<span>' + unit + '</span><span class="toggle-icon">&#9654;</span>';
    const d = document.createElement('div'); d.className = 'category-topics';
    ts.forEach(tp => {
      const it = document.createElement('div'); it.className = 'topic-item';
      it.textContent = AppState.lang === 'zh' ? tp.titleZh : tp.titleEn;
      it.onclick = () => openKDetail(tp);
      d.appendChild(it);
    });
    h.onclick = () => { h.classList.toggle('expanded'); d.classList.toggle('expanded'); };
    g.appendChild(h); g.appendChild(d); tree.appendChild(g);
  });
}

function renderKnowledge(topics) {
  const grid = document.getElementById('knowledgeGrid');
  if (!grid) return;
  if (!topics.length) { grid.innerHTML = '<div style="grid-column:1/-1;text-align:center;color:var(--text-muted);padding:2rem;">' + (AppState.lang === 'zh' ? '没有找到匹配的知识点' : 'No matching topics') + '</div>'; return; }
  const lang = AppState.lang;
  grid.innerHTML = topics.map(t => {
    const isFav = AppState.favs.includes(t.id);
    const title = lang === 'zh' ? t.titleZh : t.titleEn;
    const enTi = lang === 'zh' ? t.titleEn : t.titleZh;
    const sum = lang === 'zh' ? t.summaryZh : t.summaryEn;
    const kps = lang === 'zh' ? t.keyPointsZh : t.keyPointsEn;
    const tags = (kps || []).slice(0, 3);
    return '<div class="knowledge-card ' + (isFav ? 'favorited' : '') + '" data-id="' + t.id + '">' +
      '<div class="card-header"><div><div class="card-title">' + title + '</div>' +
      (lang === 'zh' ? '<div class="card-title-cn">' + enTi + '</div>' : '') +
      '</div><button class="fav-btn ' + (isFav ? 'active' : '') + '" data-id="' + t.id + '" onclick="event.stopPropagation();toggleFav(\'' + t.id + '\')">' + (isFav ? '&#9733;' : '&#9734;') + '</button></div>' +
      '<div class="card-summary">' + sum + '</div>' +
      '<div class="card-meta"><div class="card-tags">' + tags.map(tg => '<span class="card-tag">' + tg + '</span>').join('') + '</div></div></div>';
  }).join('');
  $$('.knowledge-card').forEach(c => {
    c.onclick = e => { if (!e.target.closest('.fav-btn')) { const t = topics.find(x => x.id === c.getAttribute('data-id')); if (t) openKDetail(t); } };
  });
}

function openKDetail(topic) {
  const detail = document.getElementById('knowledgeDetail');
  const modal = document.getElementById('knowledgeModal');
  if (!detail || !modal) return;
  const l = AppState.lang;
  const title = l === 'zh' ? topic.titleZh : topic.titleEn;
  const other = l === 'zh' ? topic.titleEn : topic.titleZh;
  const sum = l === 'zh' ? topic.summaryZh : topic.summaryEn;
  const sumO = l === 'zh' ? topic.summaryEn : topic.summaryZh;
  const kps = l === 'zh' ? topic.keyPointsZh : topic.keyPointsEn;
  detail.innerHTML = '<div class="detail-header"><div class="detail-title">' + title + '</div><div class="detail-title-cn">' + other + '</div></div>' +
    '<div class="detail-section"><h4>' + (l === 'zh' ? '核心概念' : 'Core Concept') + '</h4><p>' + sum + '</p>' + (l === 'zh' ? '<p style="margin-top:0.5rem;color:var(--text-muted)">' + sumO + '</p>' : '') + '</div>' +
    (topic.formula ? '<div class="detail-section"><h4>' + (l === 'zh' ? '关键公式' : 'Key Formula') + '</h4><div class="formula-box">' + topic.formula + '</div></div>' : '') +
    '<div class="detail-section"><h4>' + (l === 'zh' ? '关键要点' : 'Key Points') + '</h4><ul class="keypoints-list">' + (kps || []).map(k => '<li>' + k + '</li>').join('') + '</ul></div>' +
    '<div class="detail-section"><h4>' + (l === 'zh' ? '教材来源' : 'Source') + '</h4><p style="color:var(--text-muted);font-size:0.82rem">' + (topic.source || '') + '</p></div>' +
    '<div class="detail-actions"><button class="btn btn-primary" onclick="markRead(\'' + topic.id + '\')">' + (AppState.read.includes(topic.id) ? '&#10003; ' + (l === 'zh' ? '已读' : 'Read') : (l === 'zh' ? '标记为已读' : 'Mark as Read')) + '</button>' +
    '<button class="btn btn-secondary" onclick="toggleFav(\'' + topic.id + '\');openKDetail(getTopics().find(t=>t.id===\'' + topic.id + '\'));">' + (AppState.favs.includes(topic.id) ? '&#9733; ' + (l === 'zh' ? '已收藏' : 'Favorited') : '&#9734; ' + (l === 'zh' ? '收藏' : 'Favorite')) + '</button></div>';
  modal.classList.remove('hidden');
}

function toggleFav(id) {
  const idx = AppState.favs.indexOf(id);
  if (idx > -1) AppState.favs.splice(idx, 1); else AppState.favs.push(id);
  _save('favs', AppState.favs);
  if (AppState.module === 'knowledge') { renderKnowledge(getTopics()); updateKProgress(); }
}
function markRead(id) {
  if (!AppState.read.includes(id)) { AppState.read.push(id); _save('read', AppState.read); updateKProgress(); }
  const btn = document.querySelector('#knowledgeDetail .btn-primary');
  if (btn) btn.innerHTML = '&#10003; ' + (AppState.lang === 'zh' ? '已读' : 'Read');
}
function updateKProgress() {
  const all = getTopics(); if (!all.length) return;
  const pct = Math.round(AppState.read.length / all.length * 100);
  const fill = document.getElementById('knowledgeProgressFill');
  const txt = document.getElementById('knowledgeProgressText');
  if (fill) fill.style.width = pct + '%';
  if (txt) txt.textContent = (AppState.lang === 'zh' ? '已学 ' : 'Learned ') + pct + '% (' + AppState.read.length + '/' + all.length + ')';
}

// ==================== Quiz Module ====================
function initQuiz() {
  document.getElementById('quizStart').classList.remove('hidden');
  document.getElementById('quizInterface').classList.add('hidden');
  document.getElementById('quizResult').classList.add('hidden');
  updateWrongBadge();
}
function startQuiz() {
  const subject = document.querySelector('[data-quiz-subject].active')?.getAttribute('data-quiz-subject') || 'both';
  const count = parseInt(document.querySelector('[data-quiz-count].active')?.getAttribute('data-quiz-count') || '10');
  const timerOn = (document.querySelector('[data-quiz-timer].active')?.getAttribute('data-quiz-timer') || 'off') === 'on';
  let pool = getQuizzes();
  if (subject === 'bio') pool = pool.filter(q => q.subject === 'bio');
  if (subject === 'chem') pool = pool.filter(q => q.subject === 'chem');
  if (!pool.length) { alert(AppState.lang === 'zh' ? '题库为空' : 'Quiz pool empty'); return; }
  const selected = _shuffle(pool).slice(0, Math.min(count, pool.length));
  AppState.quiz = { questions: selected, idx: 0, score: 0, answers: [], timerOn: timerOn, startTime: Date.now() };
  document.getElementById('quizStart').classList.add('hidden');
  document.getElementById('quizInterface').classList.remove('hidden');
  document.getElementById('quizResult').classList.add('hidden');
  const te = document.getElementById('quizTimer');
  if (te) te.classList.toggle('hidden', !timerOn);
  AppState.seconds = 0;
  startTimer();
  renderQuestion();
}
function startTimer() {
  if (AppState.timer) clearInterval(AppState.timer);
  const d = document.getElementById('timerDisplay'); if (d) d.textContent = '00:00';
  AppState.timer = setInterval(() => { AppState.seconds++; const dd = document.getElementById('timerDisplay'); if (dd) dd.textContent = _fmtTime(AppState.seconds); }, 1000);
}
function stopTimer() { if (AppState.timer) { clearInterval(AppState.timer); AppState.timer = null; } }
function renderQuestion() {
  const qz = AppState.quiz; if (!qz || qz.idx >= qz.questions.length) return;
  const q = qz.questions[qz.idx];
  const total = qz.questions.length;
  document.getElementById('quizCurrent').textContent = qz.idx + 1;
  document.getElementById('quizTotal').textContent = total;
  document.getElementById('quizScore').textContent = qz.score;
  document.getElementById('quizProgressFill').style.width = ((qz.idx + 1) / total * 100) + '%';
  document.getElementById('nextQuestionBtn').classList.add('hidden');
  document.getElementById('finishQuizBtn').classList.add('hidden');
  const letters = ['A', 'B', 'C', 'D'];
  const area = document.getElementById('quizQuestionArea');
  const opts = (q.options || []).map((opt, i) => '<div class="answer-option" data-index="' + i + '"><span class="option-letter">' + letters[i] + '</span><span class="option-text">' + opt + '</span></div>').join('');
  area.innerHTML = '<div class="question-text">' + q.question + '</div><div class="answer-options">' + opts + '</div><div class="explanation-box hidden" id="explanationBox"></div>';
  $$('.answer-option').forEach(opt => { opt.onclick = () => selectAnswer(parseInt(opt.getAttribute('data-index'))); });
}
function selectAnswer(selIdx) {
  const qz = AppState.quiz; if (!qz || qz.idx >= qz.questions.length) return;
  const q = qz.questions[qz.idx]; const isCorrect = selIdx === q.answer;
  $$('.answer-option').forEach((opt, i) => {
    opt.classList.add('disabled');
    if (i === q.answer) opt.classList.add('correct');
    else if (i === selIdx) opt.classList.add('wrong');
  });
  if (isCorrect) { qz.score++; document.getElementById('quizScore').textContent = qz.score; }
  else { addWrong(q); }
  qz.answers.push({ qid: q.id, sel: selIdx, correct: q.answer, ok: isCorrect });
  const box = document.getElementById('explanationBox');
  if (box) {
    box.classList.remove('hidden');
    const expl = AppState.lang === 'zh' ? (q.explanationZh || q.explanationEn) : q.explanationEn;
    box.innerHTML = '<span class="explanation-label">' + (isCorrect ? '&#10003; ' + (AppState.lang === 'zh' ? '正确!' : 'Correct!') : '&#10007; ' + (AppState.lang === 'zh' ? '错误!' : 'Wrong!')) + '</span><p><strong>' + (AppState.lang === 'zh' ? '解析: ' : 'Explanation: ') + '</strong>' + expl + '</p>';
    box.style.background = isCorrect ? 'rgba(46,204,113,0.08)' : 'rgba(231,76,60,0.08)';
    box.style.borderColor = isCorrect ? 'rgba(46,204,113,0.3)' : 'rgba(231,76,60,0.3)';
  }
  if (qz.idx < qz.questions.length - 1) document.getElementById('nextQuestionBtn').classList.remove('hidden');
  else document.getElementById('finishQuizBtn').classList.remove('hidden');
}
function nextQuestion() { if (AppState.quiz) { AppState.quiz.idx++; renderQuestion(); } }
function addWrong(q) {
  if (!AppState.wrong.find(w => w.id === q.id)) {
    AppState.wrong.push({ id: q.id, question: q.question, options: q.options, answer: q.answer, explanationEn: q.explanationEn, explanationZh: q.explanationZh });
    _save('wrong', AppState.wrong); updateWrongBadge();
  }
}
function updateWrongBadge() { const b = document.getElementById('wrongCountBadge'); if (b) b.textContent = AppState.wrong.length; }
function finishQuiz() {
  stopTimer(); const qz = AppState.quiz; if (!qz) return;
  const total = qz.questions.length; const score = qz.score; const pct = Math.round(score / total * 100);
  AppState.history.push({ date: new Date().toISOString(), score, total, pct, time: AppState.seconds });
  _save('history', AppState.history);
  document.getElementById('quizInterface').classList.add('hidden');
  document.getElementById('quizResult').classList.remove('hidden');
  document.getElementById('resultScore').textContent = score + '/' + total;
  document.getElementById('resultPercent').textContent = pct + '%';
  document.getElementById('resultTime').textContent = _fmtTime(AppState.seconds);
  const fb = document.getElementById('resultFeedback');
  let cls = 'needs-work', txt = '';
  if (pct >= 90) { cls = 'excellent'; txt = AppState.lang === 'zh' ? '太棒了!接近满分!' : 'Excellent! Near perfect!'; }
  else if (pct >= 70) { cls = 'good'; txt = AppState.lang === 'zh' ? '不错!继续加油!' : 'Good job! Keep it up!'; }
  else if (pct >= 50) { cls = 'needs-work'; txt = AppState.lang === 'zh' ? '还需要更多练习!' : 'Needs more practice!'; }
  else { cls = 'needs-work'; txt = AppState.lang === 'zh' ? '建议先复习知识点再测试。' : 'Review topics before trying again.'; }
  fb.className = 'result-feedback ' + cls; fb.textContent = txt;
}
function showWrongBook() {
  document.getElementById('wrongBookModal').classList.remove('hidden');
  const list = document.getElementById('wrongList');
  if (!AppState.wrong.length) { list.innerHTML = '<div style="text-align:center;color:var(--text-muted);padding:2rem;">' + (AppState.lang === 'zh' ? '暂无错题' : 'No wrong answers') + '</div>'; return; }
  const letters = ['A', 'B', 'C', 'D'];
  list.innerHTML = AppState.wrong.map(w => {
    const correctText = w.options ? w.options[w.answer] : '';
    return '<div class="wrong-item"><div class="wrong-q">' + w.question + '</div><div class="correct-a">' + (AppState.lang === 'zh' ? '正确答案' : 'Correct') + ': ' + letters[w.answer] + '. ' + correctText + '</div></div>';
  }).join('');
}
function showStats() {
  document.getElementById('statsModal').classList.remove('hidden');
  const h = AppState.history; const l = AppState.lang;
  const totalQ = h.length;
  const avgPct = totalQ ? Math.round(h.reduce((s, x) => s + x.pct, 0) / totalQ) : 0;
  const totalQuestions = h.reduce((s, x) => s + x.total, 0);
  const totalCorrect = h.reduce((s, x) => s + x.score, 0);
  document.getElementById('statsContent').innerHTML =
    '<div class="stat-item"><span class="stat-label">' + (l === 'zh' ? '总测试次数' : 'Total Quizzes') + '</span><span class="stat-value">' + totalQ + '</span></div>' +
    '<div class="stat-item"><span class="stat-label">' + (l === 'zh' ? '平均正确率' : 'Avg Accuracy') + '</span><span class="stat-value">' + avgPct + '%</span></div>' +
    '<div class="stat-item"><span class="stat-label">' + (l === 'zh' ? '总答题数' : 'Total Questions') + '</span><span class="stat-value">' + totalQuestions + '</span></div>' +
    '<div class="stat-item"><span class="stat-label">' + (l === 'zh' ? '正确数' : 'Correct') + '</span><span class="stat-value">' + totalCorrect + '</span></div>' +
    '<div class="stat-item"><span class="stat-label">' + (l === 'zh' ? '错题本' : 'Wrong Book') + '</span><span class="stat-value">' + AppState.wrong.length + '</span></div>';
}

// ==================== Glossary Module ====================
function initGlossary() {
  renderAzIndex(); renderDaily(); renderGlossary();
  const sb = document.getElementById('glossarySearch');
  if (sb) sb.oninput = () => renderGlossary(sb.value.toLowerCase());
  $$('[data-gfilter]').forEach(b => { b.onclick = () => { $$('[data-gfilter]').forEach(x => x.classList.remove('active')); b.classList.add('active'); renderGlossary(); }; });
  document.getElementById('refreshDaily').onclick = renderDaily;
}
function renderAzIndex() {
  const idx = document.getElementById('azIndex'); if (!idx) return;
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  const avail = new Set((getGlossary() || []).map(g => g.word[0].toUpperCase()));
  idx.innerHTML = letters.map(l => '<span class="az-letter ' + (avail.has(l) ? '' : 'disabled') + '" data-letter="' + l + '">' + l + '</span>').join('');
  $$('.az-letter:not(.disabled)').forEach(el => { el.onclick = () => { $$('.az-letter').forEach(a => a.classList.remove('active')); el.classList.add('active'); filterByLetter(el.getAttribute('data-letter')); }; });
}
function filterByLetter(letter) { renderGlossaryTerms(getGlossary().filter(g => g.word.toUpperCase().startsWith(letter))); }
function renderDaily() {
  const c = document.getElementById('dailyCards'); if (!c) return;
  const gg = getGlossary(); if (!gg.length) return;
  const daily = _shuffle(gg).slice(0, 5);
  c.innerHTML = daily.map(g => {
    const inNb = AppState.vocab.includes(g.word);
    return '<div class="daily-card"><div class="daily-word">' + g.word + '</div><div class="daily-meaning">' + g.meaning + '</div><button class="vocab-action" data-word="' + g.word + '" onclick="event.stopPropagation();toggleVocab(\'' + g.word + '\')">' + (inNb ? '&#128214;' : '&#128441;') + '</button></div>';
  }).join('');
}
function renderGlossary(query) {
  const fb = document.querySelector('[data-gfilter].active');
  const cat = fb ? fb.getAttribute('data-gfilter') : 'all';
  let terms = getGlossary();
  if (cat !== 'all') terms = terms.filter(g => g.category === cat);
  if (query) terms = terms.filter(g => g.word.toLowerCase().includes(query) || g.meaning.includes(query));
  renderGlossaryTerms(terms);
}
function renderGlossaryTerms(terms) {
  const list = document.getElementById('glossaryList');
  if (!terms.length) { list.innerHTML = '<div style="grid-column:1/-1;text-align:center;color:var(--text-muted);padding:2rem;">' + (AppState.lang === 'zh' ? '没有找到匹配的词汇' : 'No matching terms') + '</div>'; return; }
  list.innerHTML = terms.map(g => {
    const inNb = AppState.vocab.includes(g.word);
    const catLabel = g.category === 'bio' ? 'Biology' : 'Chemistry';
    return '<div class="glossary-item ' + (inNb ? 'in-notebook' : '') + '"><div class="vocab-actions"><button class="vocab-action" data-word="' + g.word + '" onclick="toggleVocab(\'' + g.word + '\')">' + (inNb ? '&#128214;' : '&#128441;') + '</button></div><div class="vocab-word">' + g.word + '</div><div class="vocab-meaning">' + g.meaning + '</div><span class="vocab-category ' + g.category + '">' + catLabel + '</span>' + (g.example ? '<div class="vocab-example">"' + g.example + '"</div>' : '') + '</div>';
  }).join('');
}
function toggleVocab(word) {
  const idx = AppState.vocab.indexOf(word);
  if (idx > -1) AppState.vocab.splice(idx, 1); else AppState.vocab.push(word);
  _save('vocab', AppState.vocab); renderGlossary(); renderDaily();
}

// ==================== Majors Module ====================
let currentMajorTab = 'undergrad';
function initMajors() { currentMajorTab = 'undergrad'; renderMajors(); }
function renderMajors() {
  const data = getMajors();
  // Tab switching
  $$('.major-tab').forEach(t => {
    t.onclick = () => {
      $$('.major-tab').forEach(x => x.classList.remove('active')); t.classList.add('active');
      currentMajorTab = t.getAttribute('data-tab');
      document.getElementById('undergradPanel').classList.toggle('hidden', currentMajorTab !== 'undergrad');
      document.getElementById('gradPanel').classList.toggle('hidden', currentMajorTab !== 'grad');
      renderMajorsList();
    };
  });
  // Tips
  const tipsEl = document.getElementById('undergradTips');
  if (tipsEl) tipsEl.innerHTML = data.tips.map(tp => '<div class="tip-card"><div class="tip-title">' + (AppState.lang === 'zh' ? tp.titleZh : tp.titleEn) + '</div><div class="tip-desc">' + (AppState.lang === 'zh' ? tp.descZh : tp.descEn) + '</div></div>').join('');
  // Search
  const ms = document.getElementById('majorsSearch');
  if (ms) ms.oninput = () => renderMajorsList();
  renderMajorsList();
}
function renderMajorsList() {
  const data = getMajors();
  const query = (document.getElementById('majorsSearch')?.value || '').toLowerCase();
  const list = currentMajorTab === 'undergrad' ? data.undergrad : data.grad;
  let filtered = list;
  if (query) filtered = list.filter(m => (m.nameEn || '').toLowerCase().includes(query) || (m.nameZh || '').includes(query));
  const gridId = currentMajorTab === 'undergrad' ? 'undergradGrid' : 'gradGrid';
  const grid = document.getElementById(gridId);
  if (!filtered.length) { grid.innerHTML = '<div style="grid-column:1/-1;text-align:center;color:var(--text-muted);padding:2rem;">' + (AppState.lang === 'zh' ? '没有找到匹配的专业' : 'No matching majors') + '</div>'; return; }
  const l = AppState.lang;
  grid.innerHTML = filtered.map(m => {
    const isInt = AppState.interested.includes(m.id);
    const desc = l === 'zh' ? m.descriptionZh : m.descriptionEn;
    const tags = m.courses ? m.courses.slice(0, 3) : (m.methods ? m.methods.slice(0, 3) : []);
    return '<div class="major-card ' + (isInt ? 'interested' : '') + ' ' + m.level + '" data-id="' + m.id + '">' +
      '<div class="major-name">' + (l === 'zh' ? m.nameZh : m.nameEn) + '</div>' +
      '<div class="major-name-cn">' + (l === 'zh' ? m.nameEn : m.nameZh) + '</div>' +
      '<div class="major-desc">' + desc + '</div>' +
      '<div class="major-tags">' + tags.map(tg => '<span class="major-tag">' + tg + '</span>').join('') + '</div>' +
      '<button class="interest-btn" data-id="' + m.id + '" onclick="event.stopPropagation();toggleInterest(\'' + m.id + '\')" title="' + (isInt ? '取消标记' : '标记感兴趣') + '">' + (isInt ? '&#9733;' : '&#9734;') + '</button></div>';
  }).join('');
  $$('.major-card').forEach(c => { c.onclick = () => { const m = list.find(x => x.id === c.getAttribute('data-id')); if (m) openMajorDetail(m); }; });
}
function toggleInterest(id) {
  const idx = AppState.interested.indexOf(id);
  if (idx > -1) AppState.interested.splice(idx, 1); else AppState.interested.push(id);
  _save('interested', AppState.interested); renderMajorsList();
}
function openMajorDetail(m) {
  const detail = document.getElementById('majorDetail');
  const modal = document.getElementById('majorModal');
  if (!detail || !modal) return;
  const l = AppState.lang;
  const isUG = m.level === 'undergrad';
  const typeLabel = l === 'zh' ? (isUG ? '本科专业' : '研究生方向') : (isUG ? 'Undergraduate' : 'Graduate');
  const typeCls = m.level;
  let html = '<div class="detail-header"><div class="detail-name">' + (l === 'zh' ? m.nameZh : m.nameEn) + '</div>' +
    '<div class="detail-name-cn">' + (l === 'zh' ? m.nameEn : m.nameZh) + '</div>' +
    '<span class="detail-type ' + typeCls + '">' + typeLabel + '</span></div>' +
    '<div class="detail-section"><h4>' + (l === 'zh' ? '专业简介' : 'Description') + '</h4><p>' + (l === 'zh' ? m.descriptionZh : m.descriptionEn) + '</p></div>';
  if (m.courses) {
    html += '<div class="detail-section"><h4>' + (l === 'zh' ? '核心课程' : 'Core Courses') + '</h4><ul>' + m.courses.map(c => '<li>' + c + '</li>').join('') + '</ul></div>';
    html += '<div class="detail-section"><h4>' + (l === 'zh' ? '适合人群' : 'Suitable For') + '</h4><p>' + (l === 'zh' ? m.suitableZh : m.suitableEn) + '</p></div>';
    html += '<div class="detail-section"><h4>' + (l === 'zh' ? '就业/深造方向' : 'Career Directions') + '</h4><p>' + (l === 'zh' ? m.careerZh : m.careerEn) + '</p></div>';
    if (m.schools) html += '<div class="detail-section"><h4>' + (l === 'zh' ? '代表院校' : 'Notable Schools') + '</h4><p>' + m.schools + '</p></div>';
  }
  if (m.methods) {
    html += '<div class="detail-section"><h4>' + (l === 'zh' ? '关键技术/方法' : 'Key Methods') + '</h4><ul>' + m.methods.map(mth => '<li>' + mth + '</li>').join('') + '</ul></div>';
    html += '<div class="detail-section"><h4>' + (l === 'zh' ? '本科衔接专业' : 'Undergraduate Background') + '</h4><p>' + (l === 'zh' ? m.backgroundZh : m.backgroundEn) + '</p></div>';
    html += '<div class="detail-section"><h4>' + (l === 'zh' ? '就业前景' : 'Career Prospects') + '</h4><p>' + (l === 'zh' ? m.careerZh : m.careerEn) + '</p></div>';
  }
  html += '<div class="detail-actions"><button class="btn btn-primary" onclick="toggleInterest(\'' + m.id + '\');openMajorDetail(window._currentMajor);">' + (AppState.interested.includes(m.id) ? '&#9733; ' + (l === 'zh' ? '已标记' : 'Interested') : '&#9734; ' + (l === 'zh' ? '标记感兴趣' : 'Mark Interested')) + '</button></div>';
  detail.innerHTML = html;
  window._currentMajor = m;
  modal.classList.remove('hidden');
}

// ==================== Home Stats ====================
function updateHomeStats() {
  const st = document.getElementById('statTopics'); if (st) st.textContent = getTopics().length;
  const sq = document.getElementById('statQuizzes'); if (sq) sq.textContent = getQuizzes().length;
  const sg = document.getElementById('statGlossary'); if (sg) sg.textContent = getGlossary().length;
}

// ==================== Initialization ====================
document.addEventListener('DOMContentLoaded', () => {
  // Nav links
  $$('.nav-link[data-module]').forEach(l => { l.onclick = e => { e.preventDefault(); goModule(l.getAttribute('data-module')); }; });
  // Home shortcuts
  $$('.hero-buttons .btn[data-module], .feature-card[data-module]').forEach(b => { b.onclick = () => goModule(b.getAttribute('data-module')); });
  $('.nav-brand').onclick = () => goModule('home');
  // Language
  document.getElementById('langToggle').onclick = toggleLang;
  // Mobile menu
  document.getElementById('mobileMenuBtn').onclick = () => document.getElementById('navLinks').classList.toggle('open');
  // Modals close
  $$('.modal-overlay').forEach(o => { o.onclick = e => { if (e.target === o) o.classList.add('hidden'); }; });
  document.getElementById('knowledgeModalClose').onclick = () => document.getElementById('knowledgeModal').classList.add('hidden');
  document.getElementById('wrongBookClose').onclick = () => document.getElementById('wrongBookModal').classList.add('hidden');
  document.getElementById('statsClose').onclick = () => document.getElementById('statsModal').classList.add('hidden');
  document.getElementById('majorModalClose').onclick = () => document.getElementById('majorModal').classList.add('hidden');
  // Quiz buttons
  document.getElementById('startQuizBtn').onclick = startQuiz;
  document.getElementById('nextQuestionBtn').onclick = nextQuestion;
  document.getElementById('finishQuizBtn').onclick = finishQuiz;
  document.getElementById('wrongBookBtn').onclick = showWrongBook;
  document.getElementById('quizStatsBtn').onclick = showStats;
  document.getElementById('clearWrongBtn').onclick = () => { if (confirm(AppState.lang === 'zh' ? '确定清空?' : 'Clear all?')) { AppState.wrong = []; _save('wrong', []); updateWrongBadge(); showWrongBook(); } };
  document.getElementById('restartQuizBtn').onclick = () => { document.getElementById('quizResult').classList.add('hidden'); document.getElementById('quizStart').classList.remove('hidden'); };
  document.getElementById('reviewWrongBtn').onclick = () => { document.getElementById('quizResult').classList.add('hidden'); showWrongBook(); };
  document.getElementById('backToQuizStart').onclick = () => { document.getElementById('quizResult').classList.add('hidden'); document.getElementById('quizStart').classList.remove('hidden'); };
  // Quiz options
  $$('[data-quiz-subject]').forEach(b => { b.onclick = () => { $$('[data-quiz-subject]').forEach(x => x.classList.remove('active')); b.classList.add('active'); }; });
  $$('[data-quiz-count]').forEach(b => { b.onclick = () => { $$('[data-quiz-count]').forEach(x => x.classList.remove('active')); b.classList.add('active'); }; });
  $$('[data-quiz-timer]').forEach(b => { b.onclick = () => { $$('[data-quiz-timer]').forEach(x => x.classList.remove('active')); b.classList.add('active'); }; });
  // Back to top
  const btt = document.getElementById('backToTop');
  window.onscroll = () => { if (window.scrollY > 300) btt.classList.remove('hidden'); else btt.classList.add('hidden'); };
  btt.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  // ESC to close modals
  document.onkeydown = e => { if (e.key === 'Escape') $$('.modal-overlay').forEach(m => m.classList.add('hidden')); };
  // Init
  setLang('zh');
  updateHomeStats();
  goModule('home');
});
