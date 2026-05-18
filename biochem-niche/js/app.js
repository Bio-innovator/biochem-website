/**
 * ============================================
 * BioChem Niche - 主应用逻辑
 * 模块切换、语言切换、知识点、小测、词汇表
 * ============================================
 */

// ==================== 全局状态 ====================
const AppState = {
  currentModule: 'home',
  language: 'zh', // 'zh' 或 'en'
  favorites: JSON.parse(localStorage.getItem('biochem_favorites') || '[]'),
  wrongAnswers: JSON.parse(localStorage.getItem('biochem_wrong') || '[]'),
  vocabNotebook: JSON.parse(localStorage.getItem('biochem_vocab') || '[]'),
  readTopics: JSON.parse(localStorage.getItem('biochem_read') || '[]'),
  quizHistory: JSON.parse(localStorage.getItem('biochem_history') || '[]'),
  currentQuiz: null,
  timerInterval: null,
  timerSeconds: 0
};

// ==================== 工具函数 ====================
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

function saveStorage(key, data) {
  localStorage.setItem('biochem_' + key, JSON.stringify(data));
}

function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function formatTime(seconds) {
  const m = Math.floor(seconds / 60).toString().padStart(2, '0');
  const s = (seconds % 60).toString().padStart(2, '0');
  return m + ':' + s;
}

// 防抖函数
function debounce(fn, delay) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}

// ==================== 语言切换 ====================
function toggleLanguage() {
  AppState.language = AppState.language === 'zh' ? 'en' : 'zh';
  updateLanguageUI();
}

function updateLanguageUI() {
  const lang = AppState.language;
  const btn = $('#langToggle .lang-current');
  if (btn) btn.textContent = lang === 'zh' ? 'EN' : '中';

  // 切换所有带 data-en/data-zh 的元素
  $$('[data-en][data-zh]').forEach(el => {
    if (el.hasAttribute('data-en-placeholder') && el.hasAttribute('data-zh-placeholder')) {
      el.placeholder = lang === 'zh' ? el.getAttribute('data-zh-placeholder') : el.getAttribute('data-en-placeholder');
    }
    if (el.tagName === 'INPUT') return;
    const text = el.getAttribute('data-' + lang);
    if (text && el.children.length === 0) el.textContent = text;
    // 如果元素有子元素，只更新直接文本节点
    if (text && el.children.length > 0) {
      // 检查第一个子节点是否是文本
      if (el.childNodes[0] && el.childNodes[0].nodeType === 3) {
        el.childNodes[0].textContent = text + ' ';
      }
    }
  });

  // 更新 placeholder
  $$('[data-zh-placeholder][data-en-placeholder]').forEach(el => {
    el.placeholder = lang === 'zh'
      ? el.getAttribute('data-zh-placeholder')
      : el.getAttribute('data-en-placeholder');
  });

  // 重新渲染当前模块
  if (AppState.currentModule === 'knowledge') renderKnowledgeCards(getAllTopics());
  if (AppState.currentModule === 'glossary') renderGlossary();
}

// ==================== 模块切换 ====================
function switchModule(moduleName) {
  // 隐藏所有模块
  $$('.module').forEach(m => m.classList.add('hidden'));
  // 移除导航激活状态
  $$('.nav-link').forEach(l => l.classList.remove('active'));

  // 显示目标模块
  const targetMap = {
    home: 'homeModule',
    knowledge: 'knowledgeModule',
    quiz: 'quizModule',
    glossary: 'glossaryModule'
  };

  const targetId = targetMap[moduleName];
  if (targetId) {
    const target = $('#' + targetId);
    if (target) {
      target.classList.remove('hidden');
      // 触发淡入动画
      target.style.animation = 'none';
      target.offsetHeight; // 强制重排
      target.style.animation = 'fadeIn 0.4s ease';
    }
  }

  // 更新导航
  const navLink = $(`.nav-link[data-module="${moduleName}"]`);
  if (navLink) navLink.classList.add('active');

  AppState.currentModule = moduleName;

  // 模块特定初始化
  if (moduleName === 'knowledge') {
    initKnowledgeModule();
  } else if (moduleName === 'quiz') {
    initQuizModule();
  } else if (moduleName === 'glossary') {
    initGlossaryModule();
  }

  // 移动端关闭菜单
  $('#navLinks').classList.remove('open');

  // 滚动到顶部
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ==================== 知识点模块 ====================
function getAllTopics() {
  const topics = [];
  if (window.BIOCHEM_DATA) {
    BIOCHEM_DATA.bioUnits.forEach(u => topics.push(...u.topics));
    BIOCHEM_DATA.chemUnits.forEach(u => topics.push(...u.topics));
  }
  return topics;
}

function getTopicsByCategory(category) {
  if (!window.BIOCHEM_DATA) return [];
  const units = category === 'ap-bio' ? BIOCHEM_DATA.bioUnits : BIOCHEM_DATA.chemUnits;
  const topics = [];
  units.forEach(u => topics.push(...u.topics));
  return topics;
}

function initKnowledgeModule() {
  renderCategoryTree();
  renderKnowledgeCards(getAllTopics());
  updateKnowledgeProgress();

  // 搜索
  const searchBox = $('#knowledgeSearch');
  if (searchBox) {
    searchBox.oninput = debounce(() => {
      const query = searchBox.value.toLowerCase();
      const all = getAllTopics();
      const lang = AppState.language;
      const filtered = query
        ? all.filter(t => {
            const titleMatch = (t.title || '').toLowerCase().includes(query) ||
                              (t.titleEn || '').toLowerCase().includes(query);
            const summaryMatch = (t.summary || '').toLowerCase().includes(query) ||
                                 (t.summaryEn || '').toLowerCase().includes(query);
            return titleMatch || summaryMatch;
          })
        : all;
      renderKnowledgeCards(filtered);
    }, 200);
  }

  // 分类过滤按钮
  $$('.knowledge-filters .filter-btn').forEach(btn => {
    btn.onclick = () => {
      $$('.knowledge-filters .filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.getAttribute('data-filter');
      const topics = filter === 'all' ? getAllTopics() : getTopicsByCategory(filter);
      renderKnowledgeCards(topics);
    };
  });
}

function renderCategoryTree() {
  const tree = $('#categoryTree');
  if (!tree || !window.BIOCHEM_DATA) return;
  tree.innerHTML = '';

  const allUnits = [
    ...BIOCHEM_DATA.bioUnits.map(u => ({ ...u, cat: 'ap-bio' })),
    ...BIOCHEM_DATA.chemUnits.map(u => ({ ...u, cat: 'ap-chem' }))
  ];

  allUnits.forEach(unit => {
    const group = document.createElement('div');
    group.className = 'category-group';

    const header = document.createElement('div');
    header.className = 'category-header';
    header.innerHTML = `<span>${unit.name}</span><span class="toggle-icon">▶</span>`;

    const topicsDiv = document.createElement('div');
    topicsDiv.className = 'category-topics';

    unit.topics.forEach(topic => {
      const item = document.createElement('div');
      item.className = 'topic-item';
      item.textContent = AppState.language === 'zh' ? topic.title : topic.titleEn;
      item.onclick = () => openKnowledgeDetail(topic);
      topicsDiv.appendChild(item);
    });

    header.onclick = () => {
      header.classList.toggle('expanded');
      topicsDiv.classList.toggle('expanded');
    };

    group.appendChild(header);
    group.appendChild(topicsDiv);
    tree.appendChild(group);
  });
}

function renderKnowledgeCards(topics) {
  const grid = $('#knowledgeGrid');
  if (!grid) return;

  if (topics.length === 0) {
    grid.innerHTML = `<div class="text-center" style="grid-column: 1/-1; color: var(--text-muted); padding: 2rem;">
      ${AppState.language === 'zh' ? '没有找到匹配的知识点' : 'No matching topics found'}
    </div>`;
    return;
  }

  const lang = AppState.language;
  grid.innerHTML = topics.map(t => {
    const isFav = AppState.favorites.includes(t.id);
    const title = lang === 'zh' ? t.title : t.titleEn;
    const summary = lang === 'zh' ? t.summary : t.summaryEn;
    const keyPoints = lang === 'zh' ? t.keyPoints : t.keyPointsEn;
    const tags = (keyPoints || []).slice(0, 3);

    return `
      <div class="knowledge-card ${isFav ? 'favorited' : ''}" data-id="${t.id}">
        <div class="card-header">
          <div>
            <div class="card-title">${title}</div>
            ${lang === 'zh' ? `<div class="card-title-cn">${t.titleEn}</div>` : ''}
          </div>
          <button class="fav-btn ${isFav ? 'active' : ''}" data-id="${t.id}" title="${isFav ? '取消收藏' : '收藏'}">
            ${isFav ? '⭐' : '☆'}
          </button>
        </div>
        <div class="card-summary">${summary}</div>
        <div class="card-meta">
          <div class="card-tags">
            ${tags.map(tag => `<span class="card-tag">${tag}</span>`).join('')}
          </div>
        </div>
      </div>
    `;
  }).join('');

  // 绑定卡片点击事件
  $$('.knowledge-card').forEach(card => {
    card.onclick = (e) => {
      if (e.target.closest('.fav-btn')) {
        toggleFavorite(e.target.closest('.fav-btn').getAttribute('data-id'));
        return;
      }
      const topic = topics.find(t => t.id === card.getAttribute('data-id'));
      if (topic) openKnowledgeDetail(topic);
    };
  });
}

function toggleFavorite(topicId) {
  const idx = AppState.favorites.indexOf(topicId);
  if (idx > -1) {
    AppState.favorites.splice(idx, 1);
  } else {
    AppState.favorites.push(topicId);
  }
  saveStorage('favorites', AppState.favorites);

  // 刷新当前视图
  const card = $(`.knowledge-card[data-id="${topicId}"]`);
  if (card) {
    const isFav = AppState.favorites.includes(topicId);
    card.classList.toggle('favorited', isFav);
    const btn = card.querySelector('.fav-btn');
    if (btn) {
      btn.classList.toggle('active', isFav);
      btn.innerHTML = isFav ? '⭐' : '☆';
    }
  }
  updateKnowledgeProgress();
}

function openKnowledgeDetail(topic) {
  const detail = $('#knowledgeDetail');
  const modal = $('#knowledgeModal');
  if (!detail || !modal) return;

  const lang = AppState.language;
  const title = lang === 'zh' ? topic.title : topic.titleEn;
  const titleOther = lang === 'zh' ? topic.titleEn : topic.title;
  const summary = lang === 'zh' ? topic.summary : topic.summaryEn;
  const summaryOther = lang === 'zh' ? topic.summaryEn : topic.summary;
  const keyPoints = lang === 'zh' ? topic.keyPoints : topic.keyPointsEn;
  const keyPointsOther = lang === 'zh' ? topic.keyPointsEn : topic.keyPoints;

  detail.innerHTML = `
    <div class="detail-header">
      <div class="detail-title">${title}</div>
      <div class="detail-title-cn">${titleOther}</div>
    </div>
    <div class="detail-section">
      <h4>${lang === 'zh' ? '核心概念' : 'Core Concept'}</h4>
      <p>${summary}</p>
      ${lang === 'zh' ? `<p style="margin-top: 0.5rem; color: var(--text-muted);">${summaryOther}</p>` : ''}
    </div>
    ${topic.formula ? `
    <div class="detail-section">
      <h4>${lang === 'zh' ? '关键公式' : 'Key Formula'}</h4>
      <div class="formula-box">${topic.formula}</div>
    </div>` : ''}
    <div class="detail-section">
      <h4>${lang === 'zh' ? '关键要点' : 'Key Points'}</h4>
      <ul class="keypoints-list">
        ${(keyPoints || []).map(kp => `<li>${kp}</li>`).join('')}
      </ul>
      ${lang === 'zh' && keyPointsOther ? `
      <ul class="keypoints-list" style="margin-top: 0.5rem; opacity: 0.7;">
        ${keyPointsOther.map(kp => `<li>${kp}</li>`).join('')}
      </ul>` : ''}
    </div>
    <div class="detail-actions">
      <button class="btn btn-primary" onclick="markAsRead('${topic.id}')">
        ${AppState.readTopics.includes(topic.id)
          ? (lang === 'zh' ? '✓ 已读' : '✓ Read')
          : (lang === 'zh' ? '标记为已读' : 'Mark as Read')}
      </button>
      <button class="btn btn-secondary" onclick="toggleFavorite('${topic.id}'); openKnowledgeDetail(getTopicById('${topic.id}'));">
        ${AppState.favorites.includes(topic.id)
          ? (lang === 'zh' ? '⭐ 已收藏' : '⭐ Favorited')
          : (lang === 'zh' ? '☆ 收藏' : '☆ Favorite')}
      </button>
    </div>
  `;

  modal.classList.remove('hidden');

  // 记录为已读
  if (!AppState.readTopics.includes(topic.id)) {
    // 不自动标记，让用户自己点击
  }
}

function getTopicById(id) {
  return getAllTopics().find(t => t.id === id);
}

function markAsRead(topicId) {
  if (!AppState.readTopics.includes(topicId)) {
    AppState.readTopics.push(topicId);
    saveStorage('read', AppState.readTopics);
    updateKnowledgeProgress();
    const btn = $('#knowledgeDetail .btn-primary');
    if (btn) btn.textContent = AppState.language === 'zh' ? '✓ 已读' : '✓ Read';
  }
}

function updateKnowledgeProgress() {
  const all = getAllTopics();
  if (all.length === 0) return;
  const readCount = AppState.readTopics.length;
  const favCount = AppState.favorites.length;
  const percent = Math.round((readCount / all.length) * 100);

  const fill = $('#knowledgeProgressFill');
  const text = $('#knowledgeProgressText');
  if (fill) fill.style.width = percent + '%';
  if (text) {
    text.textContent = AppState.language === 'zh'
      ? `已学 ${percent}% (${readCount}/${all.length})`
      : `${percent}% Learned (${readCount}/${all.length})`;
  }
}

// ==================== 小测模块 ====================
function getAllQuizzes() {
  const quizzes = [];
  if (window.QUIZ_DATA) {
    quizzes.push(...(QUIZ_DATA.bio || []));
    quizzes.push(...(QUIZ_DATA.chem || []));
  }
  return quizzes;
}

function initQuizModule() {
  // 重置界面
  $('#quizStart').classList.remove('hidden');
  $('#quizInterface').classList.add('hidden');
  $('#quizResult').classList.add('hidden');

  // 更新错题本数量
  updateWrongBadge();

  // 绑定选项按钮
  $$('[data-quiz-subject]').forEach(btn => {
    btn.onclick = () => {
      $$('[data-quiz-subject]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    };
  });

  $$('[data-quiz-count]').forEach(btn => {
    btn.onclick = () => {
      $$('[data-quiz-count]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    };
  });

  $$('[data-quiz-timer]').forEach(btn => {
    btn.onclick = () => {
      $$('[data-quiz-timer]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    };
  });

  // 开始测试
  $('#startQuizBtn').onclick = startQuiz;

  // 错题本
  $('#wrongBookBtn').onclick = showWrongBook;
  $('#wrongBookClose').onclick = () => $('#wrongBookModal').classList.add('hidden');
  $('#clearWrongBtn').onclick = () => {
    if (confirm(AppState.language === 'zh' ? '确定清空所有错题？' : 'Clear all wrong answers?')) {
      AppState.wrongAnswers = [];
      saveStorage('wrong', []);
      updateWrongBadge();
      renderWrongList();
    }
  };

  // 统计
  $('#quizStatsBtn').onclick = showStats;
  $('#statsClose').onclick = () => $('#statsModal').classList.add('hidden');

  // 结果页按钮
  $('#restartQuizBtn').onclick = () => {
    $('#quizResult').classList.add('hidden');
    $('#quizStart').classList.remove('hidden');
  };
  $('#reviewWrongBtn').onclick = () => {
    $('#quizResult').classList.add('hidden');
    showWrongBook();
  };
  $('#backToQuizStart').onclick = () => {
    $('#quizResult').classList.add('hidden');
    $('#quizStart').classList.remove('hidden');
  };

  // 下一题和完成
  $('#nextQuestionBtn').onclick = nextQuestion;
  $('#finishQuizBtn').onclick = finishQuiz;
}

function startQuiz() {
  const subject = $('[data-quiz-subject].active')?.getAttribute('data-quiz-subject') || 'both';
  const count = parseInt($('[data-quiz-count].active')?.getAttribute('data-quiz-count') || '10');
  const timer = $('[data-quiz-timer].active')?.getAttribute('data-quiz-timer') || 'off';

  let pool = getAllQuizzes();
  if (subject === 'bio') pool = QUIZ_DATA.bio || [];
  if (subject === 'chem') pool = QUIZ_DATA.chem || [];

  if (pool.length === 0) {
    alert(AppState.language === 'zh' ? '题库为空' : 'Quiz pool is empty');
    return;
  }

  const shuffled = shuffleArray(pool);
  const selected = shuffled.slice(0, Math.min(count, pool.length));

  AppState.currentQuiz = {
    questions: selected,
    currentIndex: 0,
    score: 0,
    answers: [],
    timerEnabled: timer === 'on',
    timePerQuestion: 60, // 每题60秒
    startTime: Date.now()
  };

  $('#quizStart').classList.add('hidden');
  $('#quizInterface').classList.remove('hidden');
  $('#quizResult').classList.add('hidden');

  // 设置计时器
  const timerEl = $('#quizTimer');
  if (timerEl) {
    timerEl.classList.toggle('hidden', !AppState.currentQuiz.timerEnabled);
  }
  AppState.timerSeconds = 0;
  startTimer();

  renderQuestion();
}

function startTimer() {
  if (AppState.timerInterval) clearInterval(AppState.timerInterval);
  const display = $('#timerDisplay');
  if (!display) return;

  display.textContent = '00:00';
  AppState.timerInterval = setInterval(() => {
    AppState.timerSeconds++;
    display.textContent = formatTime(AppState.timerSeconds);
  }, 1000);
}

function stopTimer() {
  if (AppState.timerInterval) {
    clearInterval(AppState.timerInterval);
    AppState.timerInterval = null;
  }
}

function renderQuestion() {
  const quiz = AppState.currentQuiz;
  if (!quiz || quiz.currentIndex >= quiz.questions.length) return;

  const q = quiz.questions[quiz.currentIndex];
  const lang = AppState.language;
  const isEn = lang === 'en';
  const total = quiz.questions.length;
  const current = quiz.currentIndex + 1;

  // 更新进度
  $('#quizCurrent').textContent = current;
  $('#quizTotal').textContent = total;
  $('#quizScore').textContent = quiz.score;
  $('#quizProgressFill').style.width = (current / total * 100) + '%';

  // 隐藏控制按钮
  $('#nextQuestionBtn').classList.add('hidden');
  $('#finishQuizBtn').classList.add('hidden');

  // 渲染题目
  const area = $('#quizQuestionArea');
  const questionText = isEn ? q.question : (q.questionCn || q.question);
  const questionTextEn = isEn ? '' : q.question;

  const letters = ['A', 'B', 'C', 'D'];
  const optionsHtml = (q.options || []).map((opt, i) => `
    <div class="answer-option" data-index="${i}">
      <span class="option-letter">${letters[i]}</span>
      <span class="option-text">${opt}</span>
    </div>
  `).join('');

  area.innerHTML = `
    <div class="question-text">${questionText}</div>
    ${!isEn ? `<div class="question-text-cn">${questionTextEn}</div>` : ''}
    <div class="answer-options">${optionsHtml}</div>
    <div class="explanation-box hidden" id="explanationBox"></div>
  `;

  // 绑定选项点击
  $$('.answer-option').forEach(opt => {
    opt.onclick = () => selectAnswer(parseInt(opt.getAttribute('data-index')));
  });
}

function selectAnswer(selectedIndex) {
  const quiz = AppState.currentQuiz;
  if (!quiz || quiz.currentIndex >= quiz.questions.length) return;

  const q = quiz.questions[quiz.currentIndex];
  const isCorrect = selectedIndex === q.answer;
  const lang = AppState.language;

  // 禁用所有选项
  $$('.answer-option').forEach((opt, i) => {
    opt.classList.add('disabled');
    if (i === q.answer) opt.classList.add('correct');
    else if (i === selectedIndex && !isCorrect) opt.classList.add('wrong');
  });

  // 更新分数
  if (isCorrect) {
    quiz.score++;
    $('#quizScore').textContent = quiz.score;
  } else {
    // 记录错题
    addWrongAnswer(q);
  }

  // 记录答案
  quiz.answers.push({
    questionId: q.id,
    selected: selectedIndex,
    correct: q.answer,
    isCorrect: isCorrect
  });

  // 显示解析
  const explanation = $(q.explanationCn && lang === 'zh' ? q.explanationCn : q.explanation);
  const explanationBox = $('#explanationBox');
  if (explanationBox) {
    explanationBox.classList.remove('hidden');
    explanationBox.innerHTML = `
      <span class="explanation-label">${isCorrect
        ? (lang === 'zh' ? '✓ 回答正确' : '✓ Correct!')
        : (lang === 'zh' ? '✗ 回答错误' : '✗ Wrong!')}</span>
      <p><strong>${lang === 'zh' ? '解析：' : 'Explanation: '}</strong>${q.explanationCn && lang === 'zh' ? q.explanationCn : q.explanation}</p>
    `;
    explanationBox.style.background = isCorrect
      ? 'rgba(46, 204, 113, 0.08)'
      : 'rgba(231, 76, 60, 0.08)';
    explanationBox.style.borderColor = isCorrect
      ? 'rgba(46, 204, 113, 0.3)'
      : 'rgba(231, 76, 60, 0.3)';
  }

  // 显示下一题或完成按钮
  if (quiz.currentIndex < quiz.questions.length - 1) {
    $('#nextQuestionBtn').classList.remove('hidden');
  } else {
    $('#finishQuizBtn').classList.remove('hidden');
  }
}

function nextQuestion() {
  if (!AppState.currentQuiz) return;
  AppState.currentQuiz.currentIndex++;
  renderQuestion();
}

function addWrongAnswer(q) {
  const exists = AppState.wrongAnswers.find(w => w.id === q.id);
  if (!exists) {
    AppState.wrongAnswers.push({
      id: q.id,
      question: q.question,
      questionCn: q.questionCn || q.question,
      answer: q.answer,
      options: q.options,
      explanation: q.explanation,
      explanationCn: q.explanationCn || q.explanation,
      timestamp: Date.now()
    });
    saveStorage('wrong', AppState.wrongAnswers);
    updateWrongBadge();
  }
}

function updateWrongBadge() {
  const badge = $('#wrongCountBadge');
  if (badge) badge.textContent = AppState.wrongAnswers.length;
}

function finishQuiz() {
  stopTimer();
  const quiz = AppState.currentQuiz;
  if (!quiz) return;

  const lang = AppState.language;
  const total = quiz.questions.length;
  const score = quiz.score;
  const percent = Math.round((score / total) * 100);
  const timeUsed = formatTime(AppState.timerSeconds);

  // 保存历史
  AppState.quizHistory.push({
    date: new Date().toISOString(),
    score: score,
    total: total,
    percent: percent,
    time: AppState.timerSeconds,
    subject: 'mixed'
  });
  saveStorage('history', AppState.quizHistory);

  // 显示结果
  $('#quizInterface').classList.add('hidden');
  $('#quizResult').classList.remove('hidden');

  $('#resultScore').textContent = score + '/' + total;
  $('#resultPercent').textContent = percent + '%';
  $('#resultTime').textContent = timeUsed;

  const feedback = $('#resultFeedback');
  let feedbackClass = 'needs-work';
  let feedbackText = '';

  if (percent >= 90) {
    feedbackClass = 'excellent';
    feedbackText = lang === 'zh' ? '太棒了！接近满分！' : 'Excellent! Near perfect!';
  } else if (percent >= 70) {
    feedbackClass = 'good';
    feedbackText = lang === 'zh' ? '不错！继续加油！' : 'Good job! Keep it up!';
  } else if (percent >= 50) {
    feedbackClass = 'needs-work';
    feedbackText = lang === 'zh' ? '还需要更多练习！' : 'Needs more practice!';
  } else {
    feedbackClass = 'needs-work';
    feedbackText = lang === 'zh' ? '建议先复习知识点再测试。' : 'Review topics before trying again.';
  }

  feedback.className = 'result-feedback ' + feedbackClass;
  feedback.textContent = feedbackText;
}

function showWrongBook() {
  const modal = $('#wrongBookModal');
  if (!modal) return;
  modal.classList.remove('hidden');
  renderWrongList();
}

function renderWrongList() {
  const list = $('#wrongList');
  if (!list) return;

  if (AppState.wrongAnswers.length === 0) {
    list.innerHTML = `<div style="text-align: center; color: var(--text-muted); padding: 2rem;">
      ${AppState.language === 'zh' ? '暂无错题，快去测试吧！' : 'No wrong answers yet. Take a quiz!'}
    </div>`;
    return;
  }

  const lang = AppState.language;
  list.innerHTML = AppState.wrongAnswers.map(w => {
    const qText = lang === 'zh' ? (w.questionCn || w.question) : w.question;
    const letters = ['A', 'B', 'C', 'D'];
    const correctText = w.options ? w.options[w.answer] : '';
    return `
      <div class="wrong-item">
        <div class="wrong-q">${qText}</div>
        <div class="correct-a">${lang === 'zh' ? '正确答案' : 'Correct'}: ${letters[w.answer] || ''}. ${correctText}</div>
      </div>
    `;
  }).join('');
}

function showStats() {
  const modal = $('#statsModal');
  if (!modal) return;
  modal.classList.remove('hidden');

  const history = AppState.quizHistory;
  const lang = AppState.language;
  const totalQuizzes = history.length;
  const avgPercent = totalQuizzes > 0
    ? Math.round(history.reduce((s, h) => s + h.percent, 0) / totalQuizzes)
    : 0;
  const totalQuestions = history.reduce((s, h) => s + h.total, 0);
  const totalCorrect = history.reduce((s, h) => s + h.score, 0);

  $('#statsContent').innerHTML = `
    <div class="stat-item">
      <span class="stat-label">${lang === 'zh' ? '总测试次数' : 'Total Quizzes'}</span>
      <span class="stat-value">${totalQuizzes}</span>
    </div>
    <div class="stat-item">
      <span class="stat-label">${lang === 'zh' ? '平均正确率' : 'Avg Accuracy'}</span>
      <span class="stat-value">${avgPercent}%</span>
    </div>
    <div class="stat-item">
      <span class="stat-label">${lang === 'zh' ? '总答题数' : 'Total Questions'}</span>
      <span class="stat-value">${totalQuestions}</span>
    </div>
    <div class="stat-item">
      <span class="stat-label">${lang === 'zh' ? '正确数' : 'Correct'}</span>
      <span class="stat-value">${totalCorrect}</span>
    </div>
    <div class="stat-item">
      <span class="stat-label">${lang === 'zh' ? '错题本' : 'Wrong Book'}</span>
      <span class="stat-value">${AppState.wrongAnswers.length}</span>
    </div>
  `;
}

// ==================== 词汇表模块 ====================
function initGlossaryModule() {
  renderAzIndex();
  renderDailyFive();
  renderGlossary();

  // 搜索
  const searchBox = $('#glossarySearch');
  if (searchBox) {
    searchBox.oninput = debounce(() => {
      renderGlossary(searchBox.value.toLowerCase());
    }, 200);
  }

  // 分类过滤
  $$('[data-gfilter]').forEach(btn => {
    btn.onclick = () => {
      $$('[data-gfilter]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderGlossary();
    };
  });

  // 每日推荐刷新
  $('#refreshDaily').onclick = renderDailyFive;
}

function renderAzIndex() {
  const index = $('#azIndex');
  if (!index) return;

  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  const availableLetters = new Set((window.GLOSSARY_DATA || []).map(g => g.word[0].toUpperCase()));

  index.innerHTML = letters.map(l => {
    const hasWords = availableLetters.has(l);
    return `<span class="az-letter ${hasWords ? '' : 'disabled'}" data-letter="${l}">${l}</span>`;
  }).join('');

  $$('.az-letter').forEach(el => {
    if (!el.classList.contains('disabled')) {
      el.onclick = () => {
        $$('.az-letter').forEach(a => a.classList.remove('active'));
        el.classList.add('active');
        const letter = el.getAttribute('data-letter');
        filterGlossaryByLetter(letter);
      };
    }
  });
}

function filterGlossaryByLetter(letter) {
  const terms = (window.GLOSSARY_DATA || []).filter(g =>
    g.word.toUpperCase().startsWith(letter)
  );
  renderGlossaryTerms(terms);
}

function renderDailyFive() {
  const container = $('#dailyCards');
  if (!container || !window.GLOSSARY_DATA) return;

  const shuffled = shuffleArray(GLOSSARY_DATA);
  const daily = shuffled.slice(0, 5);

  container.innerHTML = daily.map(g => {
    const inNotebook = AppState.vocabNotebook.includes(g.word);
    return `
      <div class="daily-card">
        <div class="daily-word">${g.word}</div>
        <div class="daily-phonetic">${g.phonetic || ''}</div>
        <div class="daily-meaning">${g.meaning}</div>
        <button class="vocab-action ${inNotebook ? 'active' : ''}" data-word="${g.word}" title="${inNotebook ? '从生词本移除' : '加入生词本'}">
          ${inNotebook ? '📖' : '📑'}
        </button>
      </div>
    `;
  }).join('');

  $$('.daily-card .vocab-action').forEach(btn => {
    btn.onclick = () => toggleVocabNotebook(btn.getAttribute('data-word'));
  });
}

function renderGlossary(searchQuery) {
  const filterBtn = $('[data-gfilter].active');
  const category = filterBtn ? filterBtn.getAttribute('data-gfilter') : 'all';

  let terms = window.GLOSSARY_DATA || [];

  // 分类过滤
  if (category !== 'all') {
    terms = terms.filter(g => g.category === category);
  }

  // 搜索过滤
  if (searchQuery) {
    terms = terms.filter(g =>
      g.word.toLowerCase().includes(searchQuery) ||
      g.meaning.includes(searchQuery) ||
      (g.phonetic && g.phonetic.includes(searchQuery))
    );
  }

  renderGlossaryTerms(terms);
}

function renderGlossaryTerms(terms) {
  const list = $('#glossaryList');
  if (!list) return;

  if (terms.length === 0) {
    list.innerHTML = `<div style="grid-column: 1/-1; text-align: center; color: var(--text-muted); padding: 2rem;">
      ${AppState.language === 'zh' ? '没有找到匹配的词汇' : 'No matching terms'}
    </div>`;
    return;
  }

  list.innerHTML = terms.map(g => {
    const inNotebook = AppState.vocabNotebook.includes(g.word);
    return `
      <div class="glossary-item ${inNotebook ? 'in-notebook' : ''}" data-word="${g.word}">
        <div class="vocab-actions">
          <button class="vocab-action ${inNotebook ? 'active' : ''}" data-word="${g.word}" title="${inNotebook ? '移除' : '收藏'}">
            ${inNotebook ? '📖' : '📑'}
          </button>
        </div>
        <div class="vocab-word">${g.word}</div>
        ${g.phonetic ? `<div class="vocab-phonetic">${g.phonetic}</div>` : ''}
        <div class="vocab-meaning">${g.meaning}</div>
        <span class="vocab-category ${g.category}">${g.category === 'bio' ? 'Biology' : 'Chemistry'}</span>
        ${g.example ? `<div class="vocab-example">"${g.example}"</div>` : ''}
      </div>
    `;
  }).join('');

  $$('.glossary-item .vocab-action').forEach(btn => {
    btn.onclick = (e) => {
      e.stopPropagation();
      toggleVocabNotebook(btn.getAttribute('data-word'));
    };
  });
}

function toggleVocabNotebook(word) {
  const idx = AppState.vocabNotebook.indexOf(word);
  if (idx > -1) {
    AppState.vocabNotebook.splice(idx, 1);
  } else {
    AppState.vocabNotebook.push(word);
  }
  saveStorage('vocab', AppState.vocabNotebook);
  renderGlossary($('#glossarySearch')?.value.toLowerCase());
  renderDailyFive();
}

// ==================== 初始化 ====================
document.addEventListener('DOMContentLoaded', () => {
  // 导航链接
  $$('.nav-link[data-module]').forEach(link => {
    link.onclick = (e) => {
      e.preventDefault();
      const module = link.getAttribute('data-module');
      switchModule(module);
    };
  });

  // 首页快捷入口
  $$('.hero-buttons .btn[data-module]').forEach(btn => {
    btn.onclick = () => {
      const module = btn.getAttribute('data-module');
      switchModule(module);
    };
  });

  $$('.feature-card[data-module]').forEach(card => {
    card.onclick = () => {
      const module = card.getAttribute('data-module');
      switchModule(module);
    };
  });

  // 品牌点击回首页
  $('.nav-brand').onclick = () => switchModule('home');

  // 语言切换
  $('#langToggle').onclick = toggleLanguage;

  // 移动端菜单
  $('#mobileMenuBtn').onclick = () => {
    $('#navLinks').classList.toggle('open');
  };

  // 弹窗关闭
  $$('.modal-overlay').forEach(overlay => {
    overlay.onclick = (e) => {
      if (e.target === overlay) overlay.classList.add('hidden');
    };
  });

  $('#knowledgeModalClose').onclick = () => $('#knowledgeModal').classList.add('hidden');

  // 键盘ESC关闭弹窗
  document.onkeydown = (e) => {
    if (e.key === 'Escape') {
      $$('.modal-overlay').forEach(m => m.classList.add('hidden'));
    }
  };

  // 回到顶部
  const backToTop = $('#backToTop');
  window.onscroll = () => {
    if (window.scrollY > 300) {
      backToTop.classList.remove('hidden');
    } else {
      backToTop.classList.add('hidden');
    }
  };
  backToTop.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  // 初始化语言
  updateLanguageUI();

  // 默认显示首页
  switchModule('home');
});

// 使全局函数可用（供内联事件调用）
window.toggleFavorite = toggleFavorite;
window.openKnowledgeDetail = openKnowledgeDetail;
window.getTopicById = getTopicById;
window.markAsRead = markAsRead;
