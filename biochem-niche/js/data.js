/**
 * ============================================
 * BioChem Niche - 完整数据文件
 * AP Biology + AP Chemistry 知识点、题库、词汇表
 * ============================================
 */

const BIOCHEM_DATA = {
  // ==================== 知识点分类 ====================
  categories: [
    { id: "ap-bio", name: "AP Biology", nameEn: "AP Biology", icon: "🧬", color: "#4ecdc4" },
    { id: "ap-chem", name: "AP Chemistry", nameEn: "AP Chemistry", icon: "⚗️", color: "#45b7d1" }
  ],

  // ==================== AP Biology 知识点 ====================
  bioUnits: [
    {
      id: "bio-u1", name: "Unit 1: 生命的化学基础", nameEn: "Chemistry of Life",
      topics: [
        {
          id: "bio-001", category: "ap-bio", unit: "bio-u1",
          title: "水分子与氢键", titleEn: "Water & Hydrogen Bonding",
          summary: "水分子是极性分子，氧原子带有部分负电荷，氢原子带有部分正电荷。水分子之间通过氢键相互吸引，使水具有 cohesion（内聚力）、adhesion（附着力）、高比热容、高汽化热和固态密度低于液态等独特性质。",
          summaryEn: "Water is a polar molecule with partial negative charge on oxygen and partial positive on hydrogens. Hydrogen bonding between water molecules gives water unique properties: cohesion, adhesion, high specific heat, high heat of vaporization, and lower density as solid.",
          keyPoints: ["极性共价键", "氢键（H-bond）", "内聚力与附着力", "高比热容", "疏水效应"],
          keyPointsEn: ["Polar covalent bonds", "Hydrogen bonding", "Cohesion & adhesion", "High specific heat", "Hydrophobic effect"],
          formula: "H₂O —(H-bond)→ 独特物理性质",
          hasQuiz: true
        },
        {
          id: "bio-002", category: "ap-bio", unit: "bio-u1",
          title: "碳水化合物", titleEn: "Carbohydrates",
          summary: "碳水化合物由碳、氢、氧组成，通式为(CH₂O)n。单糖如葡萄糖和果糖通过脱水缩合形成糖苷键，连接成二糖（如蔗糖、乳糖）和多糖（如淀粉、糖原、纤维素）。糖原和淀粉用于能量储存，纤维素提供结构支持。",
          summaryEn: "Carbohydrates contain C, H, O with formula (CH₂O)n. Monosaccharides like glucose and fructose join via dehydration synthesis forming glycosidic bonds to create disaccharides (sucrose, lactose) and polysaccharides (starch, glycogen, cellulose).",
          keyPoints: ["单糖/二糖/多糖", "糖苷键", "淀粉与糖原", "纤维素结构", "脱水缩合"],
          keyPointsEn: ["Mono-/di-/polysaccharides", "Glycosidic bonds", "Starch vs glycogen", "Cellulose structure", "Dehydration synthesis"],
          formula: "n(C₆H₁₂O₆) —脱水→ (C₆H₁₀O₅)n + nH₂O",
          hasQuiz: true
        },
        {
          id: "bio-003", category: "ap-bio", unit: "bio-u1",
          title: "脂质与细胞膜", titleEn: "Lipids & Membranes",
          summary: "脂质包括脂肪、磷脂和固醇。磷脂分子具有亲水头部和疏水尾部，在水环境中自发形成磷脂双分子层，构成细胞膜的基本骨架。细胞膜具有流动镶嵌模型特征，包含嵌入的蛋白质和胆固醇。",
          summaryEn: "Lipids include fats, phospholipids, and steroids. Phospholipids have hydrophilic heads and hydrophobic tails that spontaneously form bilayers in aqueous environments, forming the basic structure of cell membranes following the fluid mosaic model.",
          keyPoints: ["磷脂双分子层", "流动镶嵌模型", "饱和脂肪酸", "胆固醇功能", "膜蛋白类型"],
          keyPointsEn: ["Phospholipid bilayer", "Fluid mosaic model", "Saturated fatty acids", "Cholesterol function", "Membrane protein types"],
          formula: "亲水头部 + 疏水尾部 → 自组装双层膜",
          hasQuiz: true
        },
        {
          id: "bio-004", category: "ap-bio", unit: "bio-u1",
          title: "蛋白质结构与功能", titleEn: "Protein Structure",
          summary: "蛋白质由20种氨基酸通过肽键连接而成。结构分为四级：一级（氨基酸序列）、二级（α-螺旋和β-折叠）、三级（三维构象）、四级（多亚基组合）。蛋白质功能包括酶催化、运输、结构支持、免疫防御等。",
          summaryEn: "Proteins are polymers of 20 amino acids linked by peptide bonds. Four levels of structure: primary (sequence), secondary (α-helix, β-sheet), tertiary (3D folding), quaternary (multi-subunit). Functions include enzymatic catalysis, transport, structure, and immunity.",
          keyPoints: ["20种氨基酸", "肽键形成", "四级结构", "酶催化机制", "蛋白质变性"],
          keyPointsEn: ["20 amino acids", "Peptide bond formation", "4 structural levels", "Enzyme catalysis", "Protein denaturation"],
          formula: "氨基酸 —(脱水缩合)→ 多肽 → 蛋白质折叠",
          hasQuiz: true
        },
        {
          id: "bio-005", category: "ap-bio", unit: "bio-u1",
          title: "核酸：DNA与RNA", titleEn: "Nucleic Acids: DNA & RNA",
          summary: "DNA由脱氧核糖核苷酸组成，含A、T、G、C四种碱基，呈双螺旋结构。RNA由核糖核苷酸组成，含A、U、G、C，通常为单链。DNA是遗传信息的储存分子，RNA参与转录和翻译过程。核苷酸由含氮碱基、五碳糖和磷酸基团组成。",
          summaryEn: "DNA consists of deoxyribonucleotides with bases A, T, G, C in a double helix. RNA contains ribonucleotides with A, U, G, C, usually single-stranded. DNA stores genetic information; RNA participates in transcription and translation.",
          keyPoints: ["核苷酸结构", "双螺旋结构", "碱基配对规则", "DNA vs RNA", "半保留复制"],
          keyPointsEn: ["Nucleotide structure", "Double helix", "Base pairing rules", "DNA vs RNA differences", "Semiconservative replication"],
          formula: "DNA: A=T, G≡C | RNA: A=U, G≡C",
          hasQuiz: true
        }
      ]
    },
    {
      id: "bio-u2", name: "Unit 2: 细胞结构与功能", nameEn: "Cell Structure & Function",
      topics: [
        {
          id: "bio-006", category: "ap-bio", unit: "bio-u2",
          title: "原核细胞与真核细胞", titleEn: "Prokaryotic vs Eukaryotic",
          summary: "原核细胞无细胞核和膜包被的细胞器，DNA位于拟核区，包括细菌和古菌。真核细胞具有真正的细胞核和多种膜包被细胞器，包括动物、植物、真菌和原生生物。两者都有核糖体、细胞膜、细胞质和DNA。",
          summaryEn: "Prokaryotes lack a nucleus and membrane-bound organelles; DNA is in nucleoid region (bacteria, archaea). Eukaryotes have a true nucleus and membrane-bound organelles (animals, plants, fungi, protists). Both have ribosomes, plasma membrane, cytoplasm, and DNA.",
          keyPoints: ["无细胞核 vs 有细胞核", "膜包被细胞器", "核糖体差异", "细胞壁成分", "大小比较"],
          keyPointsEn: ["No nucleus vs nucleus", "Membrane-bound organelles", "Ribosome differences (70S/80S)", "Cell wall composition", "Size comparison"],
          formula: "原核: 拟核DNA + 无膜细胞器 | 真核: 核膜 + 膜细胞器",
          hasQuiz: true
        },
        {
          id: "bio-007", category: "ap-bio", unit: "bio-u2",
          title: "细胞膜运输", titleEn: "Membrane Transport",
          summary: "物质跨膜运输分为被动运输（不需能量，顺浓度梯度）和主动运输（需能量，逆浓度梯度）。被动运输包括简单扩散、协助扩散（通道蛋白和载体蛋白）。主动运输包括原发性主动运输（如钠钾泵）和继发性主动运输。大分子通过胞吞和胞吐运输。",
          summaryEn: "Membrane transport includes passive transport (no energy, down gradient) and active transport (requires energy, against gradient). Passive: simple diffusion, facilitated diffusion (channel and carrier proteins). Active: primary (Na⁺/K⁺ pump) and secondary. Bulk transport: endocytosis and exocytosis.",
          keyPoints: ["简单扩散", "协助扩散", "主动运输", "钠钾泵", "胞吞/胞吐"],
          keyPointsEn: ["Simple diffusion", "Facilitated diffusion", "Active transport", "Na⁺/K⁺-ATPase pump", "Endo-/exocytosis"],
          formula: "被动: 高→低浓度 | 主动: 低→高浓度 + ATP",
          hasQuiz: true
        },
        {
          id: "bio-008", category: "ap-bio", unit: "bio-u2",
          title: "细胞呼吸", titleEn: "Cellular Respiration",
          summary: "细胞呼吸将葡萄糖中的化学能转化为ATP。包括糖酵解（细胞质，净产2 ATP）、 Krebs循环/柠檬酸循环（线粒体基质，产2 ATP）和氧化磷酸化/电子传递链（线粒体内膜，产约28 ATP）。总反应：C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + ~32 ATP。",
          summaryEn: "Cellular respiration converts glucose energy to ATP. Glycolysis (cytoplasm, net 2 ATP), Krebs cycle (mitochondrial matrix, 2 ATP), oxidative phosphorylation/ETC (inner membrane, ~28 ATP). Total: C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + ~32 ATP.",
          keyPoints: ["糖酵解", "Krebs循环", "电子传递链", "ATP合酶", "有氧 vs 无氧"],
          keyPointsEn: ["Glycolysis", "Krebs/Citric acid cycle", "Electron transport chain", "ATP synthase", "Aerobic vs anaerobic"],
          formula: "C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + ~32 ATP",
          hasQuiz: true
        },
        {
          id: "bio-009", category: "ap-bio", unit: "bio-u2",
          title: "光合作用", titleEn: "Photosynthesis",
          summary: "光合作用将光能转化为化学能。光反应在类囊体膜上进行，分解水产生O₂、ATP和NADPH。暗反应（Calvin循环）在基质中进行，利用ATP和NADPH将CO₂固定为G3P，最终合成葡萄糖。总反应：6CO₂ + 6H₂O + 光能 → C₆H₁₂O₆ + 6O₂。C3、C4和CAM植物有不同的CO₂固定策略。",
          summaryEn: "Photosynthesis converts light energy to chemical energy. Light reactions (thylakoid membrane) split water producing O₂, ATP, NADPH. Calvin cycle (stroma) uses ATP and NADPH to fix CO₂ into G3P, synthesizing glucose. C3, C4, and CAM plants have different CO₂ fixation strategies.",
          keyPoints: ["光反应", "Calvin循环", "光系统I/II", "Rubisco酶", "C3/C4/CAM"],
          keyPointsEn: ["Light reactions", "Calvin cycle", "Photosystems I & II", "Rubisco enzyme", "C3/C4/CAM pathways"],
          formula: "6CO₂ + 6H₂O + 光能 → C₆H₁₂O₆ + 6O₂",
          hasQuiz: true
        },
        {
          id: "bio-010", category: "ap-bio", unit: "bio-u2",
          title: "细胞器功能", titleEn: "Organelle Functions",
          summary: "主要细胞器及其功能：线粒体（细胞呼吸、产ATP）、叶绿体（光合作用）、内质网（蛋白质/脂质合成）、高尔基体（修饰/分选/包装）、溶酶体（细胞内消化）、核糖体（蛋白质合成）、细胞核（DNA储存/转录）、过氧化物酶体（分解过氧化氢）、液泡（储存/维持膨压）、细胞骨架（结构支持/细胞运动）。",
          summaryEn: "Key organelles: mitochondria (respiration, ATP), chloroplasts (photosynthesis), ER (protein/lipid synthesis), Golgi (modification/sorting/packaging), lysosomes (intracellular digestion), ribosomes (protein synthesis), nucleus (DNA storage/transcription), peroxisomes (H₂O₂ breakdown), vacuoles (storage/turgor), cytoskeleton (structure/motility).",
          keyPoints: ["线粒体与叶绿体", "内质网与高尔基体", "溶酶体功能", "核糖体组成", "细胞骨架"],
          keyPointsEn: ["Mitochondria & chloroplasts", "ER & Golgi apparatus", "Lysosome function", "Ribosome composition", "Cytoskeleton elements"],
          formula: "核糖体 → 粗面ER → 高尔基体 → 分泌/膜嵌入",
          hasQuiz: true
        }
      ]
    },
    {
      id: "bio-u3", name: "Unit 3: 细胞能量", nameEn: "Cellular Energetics",
      topics: [
        {
          id: "bio-011", category: "ap-bio", unit: "bio-u3",
          title: "酶动力学", titleEn: "Enzyme Kinetics",
          summary: "酶是生物催化剂，通过降低活化能加速反应。酶具有特异性，与底物在活性部位结合形成酶-底物复合物。影响酶活性的因素包括温度、pH、底物浓度和抑制剂。竞争性抑制剂与底物竞争活性位点，非竞争性抑制剂结合别构位点改变酶构象。",
          summaryEn: "Enzymes are biological catalysts that lower activation energy. They exhibit specificity, binding substrates at the active site to form enzyme-substrate complexes. Factors affecting activity: temperature, pH, substrate concentration, and inhibitors. Competitive inhibitors compete for the active site; non-competitive bind allosteric sites.",
          keyPoints: ["活化能降低", "酶-底物复合物", "活性部位", "竞争性抑制", "最适温度/pH"],
          keyPointsEn: ["Lower activation energy", "Enzyme-substrate complex", "Active site", "Competitive inhibition", "Optimal temperature/pH"],
          formula: "E + S ⇌ ES → E + P",
          hasQuiz: true
        },
        {
          id: "bio-012", category: "ap-bio", unit: "bio-u3",
          title: "自由能与热力学", titleEn: "Free Energy & Thermodynamics",
          summary: "自由能变化（ΔG）决定反应的自发性。ΔG < 0为放能反应（自发），ΔG > 0为吸能反应（非自发）。ATP水解提供能量驱动吸能反应。耦合反应中，放能反应（如ATP水解）驱动吸能反应（如生物合成），总ΔG为负。",
          summaryEn: "Free energy change (ΔG) determines reaction spontaneity. ΔG < 0: exergonic (spontaneous); ΔG > 0: endergonic (non-spontaneous). ATP hydrolysis provides energy to drive endergonic reactions. In coupled reactions, exergonic processes (ATP hydrolysis) drive endergonic ones (biosynthesis), with overall negative ΔG.",
          keyPoints: ["ΔG < 0 放能", "ΔG > 0 吸能", "ATP水解", "反应耦合", "化学平衡"],
          keyPointsEn: ["ΔG < 0 exergonic", "ΔG > 0 endergonic", "ATP hydrolysis", "Coupled reactions", "Chemical equilibrium"],
          formula: "ΔG = ΔH - TΔS | ATP → ADP + Pi + 7.3 kcal/mol",
          hasQuiz: true
        },
        {
          id: "bio-013", category: "ap-bio", unit: "bio-u3",
          title: "发酵", titleEn: "Fermentation",
          summary: "发酵是在无氧条件下再生NAD⁺的过程，使糖酵解能继续进行。酒精发酵将丙酮酸转化为乙醇和CO₂（酵母）。乳酸发酵将丙酮酸转化为乳酸（肌肉细胞、某些细菌）。发酵只产生少量ATP（净2 ATP），大部分能量仍留在发酵产物中。",
          summaryEn: "Fermentation regenerates NAD⁺ under anaerobic conditions, allowing glycolysis to continue. Alcoholic fermentation converts pyruvate to ethanol and CO₂ (yeast). Lactic acid fermentation converts pyruvate to lactate (muscle cells, some bacteria). Fermentation yields only net 2 ATP; most energy remains in fermentation products.",
          keyPoints: ["NAD⁺再生", "酒精发酵", "乳酸发酵", "无氧条件", "产能效率低"],
          keyPointsEn: ["NAD⁺ regeneration", "Alcoholic fermentation", "Lactic acid fermentation", "Anaerobic conditions", "Low ATP yield"],
          formula: "丙酮酸 + NADH → 乳酸/乙醇 + NAD⁺",
          hasQuiz: true
        }
      ]
    },
    {
      id: "bio-u4", name: "Unit 4: 细胞通讯与细胞周期", nameEn: "Cell Communication & Cycle",
      topics: [
        {
          id: "bio-014", category: "ap-bio", unit: "bio-u4",
          title: "细胞信号转导", titleEn: "Cell Signaling",
          summary: "细胞信号转导包括三个阶段：接收（配体与受体结合）、转导（信号级联放大）、响应（细胞行为改变）。信号类型包括内分泌（激素，长距离）、旁分泌（局部）、自分泌（自身）和接触依赖。第二信使如cAMP、IP₃、Ca²⁺和DAG放大信号。",
          summaryEn: "Cell signaling has three stages: reception (ligand-receptor binding), transduction (signal cascade amplification), and response (cellular behavior change). Types: endocrine (hormones, long-distance), paracrine (local), autocrine (self), and contact-dependent. Second messengers (cAMP, IP₃, Ca²⁺, DAG) amplify signals.",
          keyPoints: ["G蛋白偶联受体", "第二信使", "信号级联", "酪氨酸激酶受体", "信号放大"],
          keyPointsEn: ["G-protein coupled receptors", "Second messengers", "Signal cascade", "Receptor tyrosine kinases", "Signal amplification"],
          formula: "配体 → 受体 → G蛋白 → 效应器 → 第二信使 → 响应",
          hasQuiz: true
        },
        {
          id: "bio-015", category: "ap-bio", unit: "bio-u4",
          title: "细胞周期与有丝分裂", titleEn: "Cell Cycle & Mitosis",
          summary: "细胞周期包括间期（G₁、S、G₂）和分裂期（M期：有丝分裂和胞质分裂）。有丝分裂分前期（染色体凝缩）、前中期（核膜解体）、中期（染色体排列赤道板）、后期（姐妹染色单体分离）、末期（核膜重组）。检验点（G₁/S、G₂/M、纺锤体检验点）确保细胞周期正确进行。",
          summaryEn: "Cell cycle: interphase (G₁, S, G₂) and M phase (mitosis + cytokinesis). Mitosis: prophase (condensation), prometaphase (nuclear envelope breaks down), metaphase (alignment), anaphase (sister chromatid separation), telophase (reformation). Checkpoints (G₁/S, G₂/M, spindle) ensure proper progression.",
          keyPoints: ["间期G₁/S/G₂", "有丝分裂四期", "纺锤体形成", "检验点控制", "CDK与周期蛋白"],
          keyPointsEn: ["Interphase G₁/S/G₂", "Mitosis phases", "Spindle formation", "Checkpoint control", "CDK & cyclins"],
          formula: "2n(2c) → 复制 → 2n(4c) → 有丝分裂 → 2n(2c)",
          hasQuiz: true
        },
        {
          id: "bio-016", category: "ap-bio", unit: "bio-u4",
          title: "减数分裂", titleEn: "Meiosis",
          summary: "减数分裂产生单倍体配子，包括两次连续分裂。减数分裂I：同源染色体配对（联会）、交叉互换、分离。减数分裂II：姐妹染色单体分离，类似有丝分裂。一个二倍体细胞产生四个单倍体细胞。独立分配和交叉互换产生遗传多样性。",
          summaryEn: "Meiosis produces haploid gametes through two divisions. Meiosis I: homologous chromosome pairing (synapsis), crossing over, segregation. Meiosis II: sister chromatid separation, similar to mitosis. One diploid cell produces four haploid cells. Independent assortment and crossing over generate genetic diversity.",
          keyPoints: ["同源染色体", "联会与交叉互换", "减I vs 减II", "独立分配", "遗传多样性"],
          keyPointsEn: ["Homologous chromosomes", "Synapsis & crossing over", "Meiosis I vs II", "Independent assortment", "Genetic diversity"],
          formula: "2n → 减I → n → 减II → n (4个细胞)",
          hasQuiz: true
        }
      ]
    },
    {
      id: "bio-u5", name: "Unit 5: 遗传学", nameEn: "Heredity",
      topics: [
        {
          id: "bio-017", category: "ap-bio", unit: "bio-u5",
          title: "孟德尔遗传", titleEn: "Mendelian Genetics",
          summary: "孟德尔通过豌豆实验发现了遗传的基本规律。分离定律：一对等位基因在配子形成时彼此分离。自由组合定律：不同基因的等位基因独立分配。显性和隐性决定表型。测交用于确定未知基因型。",
          summaryEn: "Mendel discovered inheritance laws through pea plant experiments. Law of Segregation: allele pairs separate during gamete formation. Law of Independent Assortment: different genes assort independently. Dominant and recessive alleles determine phenotype. Test crosses determine unknown genotype.",
          keyPoints: ["分离定律", "自由组合定律", "基因型 vs 表型", "测交", "庞尼特方格"],
          keyPointsEn: ["Law of Segregation", "Law of Independent Assortment", "Genotype vs phenotype", "Test cross", "Punnett square"],
          formula: "AaBb × AaBb → 9:3:3:1 表型比",
          hasQuiz: true
        },
        {
          id: "bio-018", category: "ap-bio", unit: "bio-u5",
          title: "非孟德尔遗传", titleEn: "Non-Mendelian Genetics",
          summary: "非孟德尔遗传包括：不完全显性（杂合子表型介于双亲之间）、共显性（两个等位基因同时表达，如ABO血型）、多基因遗传（多个基因控制一个性状）、多效性（一个基因影响多个性状）、连锁遗传（基因位于同一染色体上）、性连锁遗传和线粒体遗传（母系遗传）。",
          summaryEn: "Non-Mendelian inheritance: incomplete dominance (heterozygote intermediate), codominance (both alleles expressed, e.g., ABO blood type), polygenic inheritance (multiple genes), pleiotropy (one gene, multiple effects), linkage (genes on same chromosome), sex-linked inheritance, and mitochondrial (maternal) inheritance.",
          keyPoints: ["不完全显性", "共显性", "多基因遗传", "性连锁遗传", "基因连锁"],
          keyPointsEn: ["Incomplete dominance", "Codominance", "Polygenic inheritance", "Sex-linked inheritance", "Genetic linkage"],
          formula: "不完全: Aa = 中间表型 | 共显: IAIB = AB型血",
          hasQuiz: true
        }
      ]
    },
    {
      id: "bio-u6", name: "Unit 6: 基因表达与调控", nameEn: "Gene Expression & Regulation",
      topics: [
        {
          id: "bio-019", category: "ap-bio", unit: "bio-u6",
          title: "转录与RNA加工", titleEn: "Transcription & RNA Processing",
          summary: "转录以DNA为模板合成RNA。RNA聚合酶结合启动子开始转录。真核生物中，初级转录本（pre-mRNA）经过5'端加帽、3'端加poly-A尾和剪接（去除内含子，连接外显子）成为成熟mRNA。选择性剪接使一个基因产生多种蛋白质。",
          summaryEn: "Transcription synthesizes RNA using DNA as template. RNA polymerase binds promoters to initiate transcription. In eukaryotes, pre-mRNA undergoes 5' capping, 3' poly-A tail addition, and splicing (intron removal, exon joining) to produce mature mRNA. Alternative splicing allows one gene to produce multiple proteins.",
          keyPoints: ["RNA聚合酶", "启动子与终止子", "5'帽与Poly-A尾", "剪接体", "选择性剪接"],
          keyPointsEn: ["RNA polymerase", "Promoters & terminators", "5' cap & poly-A tail", "Spliceosome", "Alternative splicing"],
          formula: "DNA模板 → RNA聚合酶 → pre-mRNA → 加工 → 成熟mRNA",
          hasQuiz: true
        },
        {
          id: "bio-020", category: "ap-bio", unit: "bio-u6",
          title: "翻译与蛋白质合成", titleEn: "Translation & Protein Synthesis",
          summary: "翻译在核糖体上进行，以mRNA为模板合成多肽链。tRNA携带特定氨基酸，通过反密码子与mRNA密码子配对。起始密码子AUG编码甲硫氨酸。三个终止密码子（UAA、UAG、UGA）终止翻译。多个核糖体可结合一条mRNA形成多聚核糖体，提高翻译效率。",
          summaryEn: "Translation occurs at ribosomes using mRNA as template to synthesize polypeptides. tRNA carries specific amino acids, pairing anticodons with mRNA codons. Start codon AUG codes for methionine. Three stop codons (UAA, UAG, UGA) terminate translation. Multiple ribosomes can bind one mRNA forming polysomes.",
          keyPoints: ["核糖体组成", "tRNA与反密码子", "起始/延伸/终止", "多聚核糖体", "密码子表"],
          keyPointsEn: ["Ribosome composition", "tRNA & anticodon", "Initiation/elongation/termination", "Polysomes", "Codon table"],
          formula: "mRNA + tRNA + 核糖体 → 多肽链 → 蛋白质折叠",
          hasQuiz: true
        },
        {
          id: "bio-021", category: "ap-bio", unit: "bio-u6",
          title: "基因表达调控", titleEn: "Gene Expression Regulation",
          summary: "基因表达可在多个层面调控：转录（转录因子、增强子、沉默子）、转录后（RNA干扰、miRNA）、翻译和翻译后（蛋白质修饰）。操纵子模型（如lac操纵子）展示原核生物的协同调控。表观遗传修饰（DNA甲基化、组蛋白修饰）影响基因表达而不改变DNA序列。",
          summaryEn: "Gene expression regulated at multiple levels: transcription (transcription factors, enhancers, silencers), post-transcriptional (RNAi, miRNA), translation, and post-translational (protein modification). Operon model (e.g., lac operon) shows prokaryotic coordinated regulation. Epigenetic modifications (DNA methylation, histone modification) affect expression without changing DNA sequence.",
          keyPoints: ["操纵子模型", "转录因子", "表观遗传", "RNA干扰", "增强子/沉默子"],
          keyPointsEn: ["Operon model", "Transcription factors", "Epigenetics", "RNA interference", "Enhancers/silencers"],
          formula: "乳糖缺乏: 阻遏蛋白结合操纵基因 → 转录关闭 | 乳糖存在: 阻遏蛋白脱离 → 转录开启",
          hasQuiz: true
        }
      ]
    },
    {
      id: "bio-u7", name: "Unit 7: 自然选择与进化", nameEn: "Natural Selection & Evolution",
      topics: [
        {
          id: "bio-022", category: "ap-bio", unit: "bio-u7",
          title: "自然选择", titleEn: "Natural Selection",
          summary: "自然选择是进化的主要机制：种群中存在遗传变异，某些变异提高生存和繁殖成功率，有利变异在种群中频率增加，经过多代积累导致适应性进化。达尔文自然选择三要素：变异、遗传、差异繁殖。",
          summaryEn: "Natural selection is the primary mechanism of evolution: populations have genetic variation, some variants improve survival and reproduction, advantageous traits increase in frequency, and over generations this leads to adaptive evolution. Darwin's three principles: variation, heritability, differential reproduction.",
          keyPoints: ["遗传变异", "过度繁殖", "适者生存", "适应性进化", "抗药性例子"],
          keyPointsEn: ["Genetic variation", "Overproduction", "Survival of the fittest", "Adaptive evolution", "Antibiotic resistance example"],
          formula: "变异 + 选择压力 + 遗传 → 适应性进化",
          hasQuiz: true
        },
        {
          id: "bio-023", category: "ap-bio", unit: "bio-u7",
          title: "群体遗传学", titleEn: "Population Genetics",
          summary: "哈迪-温伯格定律描述理想条件下等位基因频率不变的条件：p² + 2pq + q² = 1，其中p和q是两个等位基因的频率。条件包括：大种群、无突变、无迁移、随机交配、无自然选择。实际种群偏离哈迪-温伯格平衡说明进化正在发生。",
          summaryEn: "Hardy-Weinberg equilibrium describes conditions where allele frequencies remain constant: p² + 2pq + q² = 1, where p and q are allele frequencies. Conditions: large population, no mutation, no migration, random mating, no natural selection. Deviation from H-W equilibrium indicates evolution is occurring.",
          keyPoints: ["等位基因频率", "基因型频率", "哈迪-温伯格平衡", "遗传漂变", "基因流"],
          keyPointsEn: ["Allele frequency", "Genotype frequency", "Hardy-Weinberg equilibrium", "Genetic drift", "Gene flow"],
          formula: "p² + 2pq + q² = 1 (p+q=1)",
          hasQuiz: true
        }
      ]
    },
    {
      id: "bio-u8", name: "Unit 8: 生态学", nameEn: "Ecology",
      topics: [
        {
          id: "bio-024", category: "ap-bio", unit: "bio-u8",
          title: "生态系统与能量流动", titleEn: "Ecosystems & Energy Flow",
          summary: "生态系统中能量单向流动：太阳→生产者（光合作用）→初级消费者→次级消费者→分解者。能量在各营养级间传递效率约为10%。食物链和食物网描述生物间的营养关系。生态金字塔（数量、生物量、能量）展示营养级间关系。",
          summaryEn: "Energy flows unidirectionally in ecosystems: sun→producers (photosynthesis)→primary consumers→secondary consumers→decomposers. Energy transfer efficiency between trophic levels is ~10%. Food chains and food webs describe trophic relationships. Ecological pyramids (number, biomass, energy) show inter-trophic level relationships.",
          keyPoints: ["10%能量传递法则", "食物链/食物网", "生态金字塔", "初级生产力", "分解者作用"],
          keyPointsEn: ["10% energy transfer rule", "Food chains/webs", "Ecological pyramids", "Primary productivity", "Decomposer role"],
          formula: "能量: 太阳 → 生产者(100%) → 初级(10%) → 次级(1%)",
          hasQuiz: true
        },
        {
          id: "bio-025", category: "ap-bio", unit: "bio-u8",
          title: "种群生态学", titleEn: "Population Ecology",
          summary: "种群增长模型：指数增长（dN/dt = rN，资源无限）和逻辑增长（dN/dt = rN[(K-N)/K]，受环境容纳量K限制）。密度依赖因素（竞争、捕食、疾病）和密度无关因素（气候、自然灾害）调节种群大小。r-选择物种（高繁殖率、短命）和K-选择物种（低繁殖率、长寿）。",
          summaryEn: "Population growth models: exponential (dN/dt = rN, unlimited resources) and logistic (dN/dt = rN[(K-N)/K], limited by carrying capacity K). Density-dependent (competition, predation, disease) and density-independent (climate, natural disasters) factors regulate population size. r-selected (high reproduction, short life) vs K-selected (low reproduction, long life) species.",
          keyPoints: ["指数增长", "逻辑增长", "环境容纳量K", "r/K选择", "密度依赖因素"],
          keyPointsEn: ["Exponential growth", "Logistic growth", "Carrying capacity K", "r/K selection", "Density-dependent factors"],
          formula: "dN/dt = rN[(K-N)/K]",
          hasQuiz: true
        }
      ]
    }
  ],

  // ==================== AP Chemistry 知识点 ====================
  chemUnits: [
    {
      id: "chem-u1", name: "Unit 1: 原子结构与性质", nameEn: "Atomic Structure & Properties",
      topics: [
        {
          id: "chem-001", category: "ap-chem", unit: "chem-u1",
          title: "原子结构", titleEn: "Atomic Structure",
          summary: "原子由质子（带正电，质量~1 amu）、中子（不带电，质量~1 amu）和电子（带负电，质量可忽略）组成。质子数决定元素种类，质子数+中子数=质量数。同位素是同种元素但中子数不同的原子。电子分布于核外电子层中。",
          summaryEn: "Atoms consist of protons (positive, ~1 amu), neutrons (neutral, ~1 amu), and electrons (negative, negligible mass). Proton number determines element; protons + neutrons = mass number. Isotopes are atoms of the same element with different neutron numbers. Electrons occupy energy levels outside the nucleus.",
          keyPoints: ["质子/中子/电子", "质量数与原子序数", "同位素", "电子层排布", "质量数计算"],
          keyPointsEn: ["Protons/neutrons/electrons", "Mass number & atomic number", "Isotopes", "Electron configuration", "Mass spectrometry"],
          formula: "质量数(A) = 质子数(Z) + 中子数(N)",
          hasQuiz: true
        },
        {
          id: "chem-002", category: "ap-chem", unit: "chem-u1",
          title: "元素周期律", titleEn: "Periodic Trends",
          summary: "元素周期表中，从左到右原子半径减小、电离能增大、电负性增大。从上到下原子半径增大、电离能减小、电负性减小。有效核电荷(Zeff)增加导致同周期元素收缩。金属性从左到右减弱，非金属性增强。",
          summaryEn: "Across a period: atomic radius decreases, ionization energy increases, electronegativity increases. Down a group: atomic radius increases, ionization energy decreases, electronegativity decreases. Effective nuclear charge (Zeff) increases causing periodic contraction. Metallic character decreases left to right; nonmetallic character increases.",
          keyPoints: ["原子半径趋势", "电离能趋势", "电负性趋势", "有效核电荷", "金属/非金属性"],
          keyPointsEn: ["Atomic radius trends", "Ionization energy trends", "Electronegativity trends", "Effective nuclear charge", "Metallic character"],
          formula: "同周期: Zeff↑ → 半径↓ 电离能↑ | 同族: 电子层↑ → 半径↑ 电离能↓",
          hasQuiz: true
        },
        {
          id: "chem-003", category: "ap-chem", unit: "chem-u1",
          title: "电子排布", titleEn: "Electron Configuration",
          summary: "电子按照能量最低原理、泡利不相容原理和洪特规则填充轨道。电子排布式如1s²2s²2p⁶表示各轨道电子数。价电子是最外层电子，决定化学性质。过渡金属的d电子也参与成键。离子排布时先失去最外层电子。",
          summaryEn: "Electrons fill orbitals following Aufbau principle, Pauli exclusion principle, and Hund's rule. Electron configuration notation like 1s²2s²2p⁶ shows orbital occupancies. Valence electrons (outermost) determine chemical properties. Transition metal d-electrons also participate in bonding. Ions lose outermost electrons first.",
          keyPoints: ["能量最低原理", "泡利不相容原理", "洪特规则", "价电子", "轨道表示式"],
          keyPointsEn: ["Aufbau principle", "Pauli exclusion principle", "Hund's rule", "Valence electrons", "Orbital notation"],
          formula: "1s → 2s → 2p → 3s → 3p → 4s → 3d → 4p...",
          hasQuiz: true
        }
      ]
    },
    {
      id: "chem-u2", name: "Unit 2: 分子与离子化合物", nameEn: "Molecular & Ionic Compounds",
      topics: [
        {
          id: "chem-004", category: "ap-chem", unit: "chem-u2",
          title: "化学键类型", titleEn: "Types of Chemical Bonds",
          summary: "离子键：金属与非金属间电子转移形成正负离子，靠静电引力结合（如NaCl）。共价键：非金属间共享电子对，分为极性（电负性差0.4-1.7）和非极性（电负性差<0.4）。金属键：金属阳离子沉浸在自由电子海洋中。键长越短，键能越大。",
          summaryEn: "Ionic bonds: electron transfer between metal and nonmetal forming ions held by electrostatic attraction (e.g., NaCl). Covalent bonds: electron sharing between nonmetals, polar (ΔEN 0.4-1.7) or nonpolar (ΔEN < 0.4). Metallic bonds: metal cations in a sea of delocalized electrons. Shorter bond length = stronger bond energy.",
          keyPoints: ["离子键", "共价键", "金属键", "键能与键长", "电负性差"],
          keyPointsEn: ["Ionic bonds", "Covalent bonds", "Metallic bonds", "Bond energy & length", "Electronegativity difference"],
          formula: "ΔEN > 1.7: 离子键 | 0.4-1.7: 极性共价 | <0.4: 非极性共价",
          hasQuiz: true
        },
        {
          id: "chem-005", category: "ap-chem", unit: "chem-u2",
          title: "分子几何与VSEPR", titleEn: "Molecular Geometry & VSEPR",
          summary: "VSEPR理论（价层电子对互斥理论）预测分子形状：电子对互相排斥，尽可能远离。常见构型：直线形(2对)、平面三角形(3对)、四面体(4对)、三角双锥(5对)、八面体(6对)。孤对电子排斥力大于成键电子对，影响键角。分子极性取决于键的极性和分子对称性。",
          summaryEn: "VSEPR theory predicts molecular shapes: electron pairs repel each other and position as far apart as possible. Common shapes: linear (2 pairs), trigonal planar (3), tetrahedral (4), trigonal bipyramidal (5), octahedral (6). Lone pairs repel more than bonding pairs, affecting bond angles. Molecular polarity depends on bond polarity and molecular symmetry.",
          keyPoints: ["VSEPR理论", "电子域几何", "分子形状", "键角", "分子极性判断"],
          keyPointsEn: ["VSEPR theory", "Electron domain geometry", "Molecular shape", "Bond angles", "Determining polarity"],
          formula: "2对: 直线 | 3对: 平面三角 | 4对: 四面体 | 5对: 三角双锥 | 6对: 八面体",
          hasQuiz: true
        },
        {
          id: "chem-006", category: "ap-chem", unit: "chem-u2",
          title: "杂化轨道", titleEn: "Hybridization",
          summary: "杂化轨道理论解释分子几何：原子轨道混合形成新的杂化轨道。sp杂化（2个，直线180°）、sp²（3个，平面三角120°）、sp³（4个，四面体109.5°）、sp³d（5个，三角双锥）、sp³d²（6个，八面体）。杂化类型由σ键数+孤对电子数决定。",
          summaryEn: "Hybridization explains molecular geometry: atomic orbitals mix to form hybrid orbitals. sp (2, linear 180°), sp² (3, trigonal planar 120°), sp³ (4, tetrahedral 109.5°), sp³d (5, trigonal bipyramidal), sp³d² (6, octahedral). Hybridization type determined by sigma bonds + lone pairs.",
          keyPoints: ["sp/sp²/sp³杂化", "杂化轨道数", "σ键与π键", "等性/不等性杂化", "杂化与分子形状"],
          keyPointsEn: ["sp/sp²/sp³ hybridization", "Number of hybrid orbitals", "Sigma & pi bonds", "Equivalent/non-equivalent", "Hybridization & shape"],
          formula: "σ键数 + 孤对电子数 = 杂化轨道数",
          hasQuiz: true
        }
      ]
    },
    {
      id: "chem-u3", name: "Unit 3: 化学反应", nameEn: "Chemical Reactions",
      topics: [
        {
          id: "chem-007", category: "ap-chem", unit: "chem-u3",
          title: "化学计量学", titleEn: "Stoichiometry",
          summary: "化学计量学研究化学反应中物质的量的关系。摩尔是物质的量的单位，1 mol = 6.022×10²³个粒子（阿伏伽德罗常数）。摩尔质量(M)是1 mol物质的质量(g/mol)。通过配平方程式，利用系数比计算反应物与产物之间的摩尔关系。",
          summaryEn: "Stoichiometry studies quantitative relationships in chemical reactions. The mole is the unit of amount; 1 mol = 6.022×10²³ particles (Avogadro's number). Molar mass (M) is the mass of 1 mol in g/mol. Using balanced equations, coefficient ratios determine reactant-product mole relationships.",
          keyPoints: ["摩尔概念", "阿伏伽德罗常数", "摩尔质量", "限量试剂", "产率计算"],
          keyPointsEn: ["Mole concept", "Avogadro's number", "Molar mass", "Limiting reactant", "Percent yield"],
          formula: "n = m/M = N/NA = V/Vm (STP: Vm=22.4 L/mol)",
          hasQuiz: true
        },
        {
          id: "chem-008", category: "ap-chem", unit: "chem-u3",
          title: "溶液与摩尔浓度", titleEn: "Solutions & Molarity",
          summary: "溶液由溶质和溶剂组成。摩尔浓度(M) = 溶质摩尔数/溶液体积(L)。质量百分比 = 溶质质量/溶液总质量×100%。稀释公式M₁V₁ = M₂V₂用于计算稀释后的浓度。滴定是通过已知浓度的溶液测定未知浓度溶液的方法。",
          summaryEn: "Solutions consist of solute and solvent. Molarity (M) = moles of solute / liters of solution. Mass percent = mass of solute / total mass × 100%. Dilution formula M₁V₁ = M₂V₂ calculates diluted concentration. Titration determines unknown concentration using a solution of known concentration.",
          keyPoints: ["摩尔浓度M", "质量百分比", "稀释计算", "滴定原理", "依数性"],
          keyPointsEn: ["Molarity M", "Mass percent", "Dilution calculations", "Titration principle", "Colligative properties"],
          formula: "M = n/V | M₁V₁ = M₂V₂ | 滴定: MaVa = MbVb (1:1反应)",
          hasQuiz: true
        },
        {
          id: "chem-009", category: "ap-chem", unit: "chem-u3",
          title: "氧化还原反应", titleEn: "Redox Reactions",
          summary: "氧化还原反应涉及电子转移：氧化是失去电子（氧化数升高），还原是获得电子（氧化数降低）。氧化剂和还原剂判断：氧化剂被还原，还原剂被氧化。配平氧化还原方程式可用半反应法（酸性/碱性条件）。电化学电池将化学能转化为电能。",
          summaryEn: "Redox reactions involve electron transfer: oxidation is loss of electrons (increase in oxidation number), reduction is gain of electrons (decrease in oxidation number). Oxidizing agents are reduced; reducing agents are oxidized. Balance redox equations using half-reaction method (acidic or basic conditions). Electrochemical cells convert chemical energy to electrical energy.",
          keyPoints: ["氧化数规则", "氧化剂/还原剂", "半反应法配平", "电化学电池", "标准电极电势"],
          keyPointsEn: ["Oxidation number rules", "Oxidizing/reducing agents", "Half-reaction balancing", "Electrochemical cell", "Standard reduction potentials"],
          formula: "氧化: 失电子 氧化数↑ | 还原: 得电子 氧化数↓ | E°cell = E°cathode - E°anode",
          hasQuiz: true
        }
      ]
    },
    {
      id: "chem-u4", name: "Unit 4: 气体", nameEn: "Gases",
      topics: [
        {
          id: "chem-010", category: "ap-chem", unit: "chem-u4",
          title: "理想气体定律", titleEn: "Ideal Gas Law",
          summary: "理想气体状态方程：PV = nRT，其中P为压强(atm)，V为体积(L)，n为摩尔数，R为理想气体常数(0.0821 L·atm/mol·K)，T为绝对温度(K)。标准状况(STP): 0°C(273.15K), 1 atm, 1 mol气体体积为22.4L。道尔顿分压定律：混合气体总压等于各组分分压之和。",
          summaryEn: "Ideal gas law: PV = nRT, where P=pressure (atm), V=volume (L), n=moles, R=0.0821 L·atm/mol·K, T=absolute temperature (K). STP: 0°C (273.15K), 1 atm, 1 mol gas occupies 22.4L. Dalton's law: total pressure of gas mixture equals sum of partial pressures of components.",
          keyPoints: ["理想气体方程", "STP条件", "道尔顿分压定律", "格拉罕姆扩散定律", "实际气体偏差"],
          keyPointsEn: ["Ideal gas equation", "STP conditions", "Dalton's law of partial pressures", "Graham's law of effusion", "Real gas deviations"],
          formula: "PV = nRT | P_total = P₁ + P₂ + P₃... | rate₁/rate₂ = √(M₂/M₁)",
          hasQuiz: true
        },
        {
          id: "chem-011", category: "ap-chem", unit: "chem-u4",
          title: "气体动理论", titleEn: "Kinetic Molecular Theory",
          summary: "气体动理论基本假设：气体分子体积可忽略；分子持续做无规则运动；分子间无相互作用力；碰撞完全弹性。温度正比于分子平均动能(KE_avg = 3/2 RT)。扩散是气体分子通过小孔从高浓度向低浓度的运动。 Graham定律：扩散速率与摩尔质量的平方根成反比。",
          summaryEn: "Kinetic molecular theory assumptions: gas molecules have negligible volume; constant random motion; no intermolecular forces; elastic collisions. Temperature is proportional to average kinetic energy (KE_avg = 3/2 RT). Effusion is gas passing through a tiny opening from high to low concentration. Graham's law: effusion rate inversely proportional to square root of molar mass.",
          keyPoints: ["动理论假设", "温度与动能", "扩散与逸出", "麦克斯韦速率分布", "均方根速率"],
          keyPointsEn: ["KMT assumptions", "Temperature & KE", "Diffusion & effusion", "Maxwell-Boltzmann distribution", "Root-mean-square speed"],
          formula: "KE_avg = ³/₂RT | u_rms = √(3RT/M)",
          hasQuiz: true
        }
      ]
    },
    {
      id: "chem-u5", name: "Unit 5: 热化学", nameEn: "Thermochemistry",
      topics: [
        {
          id: "chem-012", category: "ap-chem", unit: "chem-u5",
          title: "热力学基础", titleEn: "Thermodynamics Basics",
          summary: "焓变(ΔH)：恒压热，正值吸热，负值放热。赫斯定律：总反应的焓变等于各步反应焓变之和。标准生成焓(ΔHf°)：由最稳定单质生成1 mol化合物的焓变。键焓法估算：ΔH ≈ Σ(断裂键能) - Σ(形成键能)。量热法测量热效应：q = mcΔT。",
          summaryEn: "Enthalpy change (ΔH): heat at constant pressure, positive=endothermic, negative=exothermic. Hess's law: total reaction enthalpy equals sum of step enthalpies. Standard enthalpy of formation (ΔHf°): enthalpy to form 1 mol compound from most stable elements. Bond enthalpy estimation: ΔH ≈ Σ(bonds broken) - Σ(bonds formed). Calorimetry: q = mcΔT.",
          keyPoints: ["焓变ΔH", "赫斯定律", "标准生成焓", "键焓计算", "量热法"],
          keyPointsEn: ["Enthalpy change ΔH", "Hess's law", "Standard enthalpy of formation", "Bond enthalpy calculation", "Calorimetry"],
          formula: "ΔH°rxn = ΣΔHf°(产物) - ΣΔHf°(反应物) | q = mcΔT",
          hasQuiz: true
        },
        {
          id: "chem-013", category: "ap-chem", unit: "chem-u5",
          title: "熵与吉布斯自由能", titleEn: "Entropy & Gibbs Free Energy",
          summary: "熵(S)是系统混乱度的度量。吉布斯自由能G = H - TS，判断反应自发性：ΔG < 0自发，ΔG > 0非自发，ΔG = 0平衡。ΔG° = ΔH° - TΔS°。温度对自发性的影响：若ΔH<0且ΔS>0，任何温度都自发；若ΔH>0且ΔS>0，高温自发。",
          summaryEn: "Entropy (S) measures system disorder. Gibbs free energy G = H - TS determines spontaneity: ΔG < 0 spontaneous, ΔG > 0 non-spontaneous, ΔG = 0 equilibrium. ΔG° = ΔH° - TΔS°. Temperature effects: if ΔH<0 and ΔS>0, spontaneous at all T; if ΔH>0 and ΔS>0, spontaneous at high T.",
          keyPoints: ["熵增原理", "吉布斯自由能", "自发性判据", "ΔG与平衡", "温度影响"],
          keyPointsEn: ["Entropy increase principle", "Gibbs free energy", "Spontaneity criteria", "ΔG & equilibrium", "Temperature effects"],
          formula: "ΔG = ΔH - TΔS | ΔG° = -RTlnK | ΔG < 0 → 自发",
          hasQuiz: true
        }
      ]
    },
    {
      id: "chem-u6", name: "Unit 6: 化学平衡", nameEn: "Chemical Equilibrium",
      topics: [
        {
          id: "chem-014", category: "ap-chem", unit: "chem-u6",
          title: "化学平衡与K值", titleEn: "Equilibrium & K",
          summary: "化学平衡是正逆反应速率相等时的动态平衡。平衡常数K = [产物]^系数/[反应物]^系数（固体和纯液体不计入）。K > 1反应偏向产物，K < 1偏向反应物。K只与温度有关。反应商Q与K比较判断反应方向：Q < K正向进行，Q > K逆向进行。",
          summaryEn: "Chemical equilibrium is dynamic when forward and reverse rates are equal. Equilibrium constant K = [products]^coeff/[reactants]^coeff (solids and pure liquids excluded). K > 1 favors products; K < 1 favors reactants. K depends only on temperature. Reaction quotient Q compared to K determines direction: Q < K proceeds forward, Q > K proceeds reverse.",
          keyPoints: ["动态平衡", "Kc与Kp", "反应商Q", "勒夏特列原理", "K与温度关系"],
          keyPointsEn: ["Dynamic equilibrium", "Kc & Kp", "Reaction quotient Q", "Le Chatelier's principle", "K & temperature relationship"],
          formula: "Kc = [C]^c[D]^d / [A]^a[B]^b | Q < K → 正向 | Q > K → 逆向",
          hasQuiz: true
        },
        {
          id: "chem-015", category: "ap-chem", unit: "chem-u6",
          title: "勒夏特列原理", titleEn: "Le Chatelier's Principle",
          summary: "勒夏特列原理：当平衡系统受到浓度、压强或温度变化时，平衡会向减弱该变化的方向移动。增加反应物浓度→平衡右移；增加压强（减小体积）→向气体分子数少的一方移动；升高温度→向吸热方向移动。催化剂同等加快正逆反应速率，不改变平衡位置。",
          summaryEn: "Le Chatelier's principle: when a system at equilibrium is disturbed by concentration, pressure, or temperature changes, the equilibrium shifts to counteract the disturbance. Increase reactant concentration → shifts right; increase pressure (decrease volume) → shifts toward fewer gas molecules; increase temperature → shifts toward endothermic direction. Catalyst speeds both forward and reverse rates equally without changing equilibrium position.",
          keyPoints: ["浓度影响", "压强影响", "温度影响", "催化剂不影响平衡", "ICE表格"],
          keyPointsEn: ["Concentration effect", "Pressure effect", "Temperature effect", "Catalyst no effect on equilibrium", "ICE table"],
          formula: "浓度↑ → 消耗多余 | 压强↑ → 分子数少方 | 温度↑ → 吸热方向",
          hasQuiz: true
        }
      ]
    },
    {
      id: "chem-u7", name: "Unit 7: 酸碱化学", nameEn: "Acids & Bases",
      topics: [
        {
          id: "chem-016", category: "ap-chem", unit: "chem-u7",
          title: "酸碱理论", titleEn: "Acid-Base Theories",
          summary: "阿伦尼乌斯酸碱：酸在水中产生H⁺，碱产生OH⁻。布朗斯特-劳里酸碱：酸是质子给体，碱是质子受体。共轭酸碱对相差一个H⁺。路易斯酸碱：酸是电子对受体，碱是电子对给体。pH = -log[H⁺]，pOH = -log[OH⁻]，pH + pOH = 14（25°C）。",
          summaryEn: "Arrhenius: acids produce H⁺ in water, bases produce OH⁻. Brønsted-Lowry: acid is proton donor, base is proton acceptor. Conjugate acid-base pairs differ by one H⁺. Lewis: acid is electron pair acceptor, base is electron pair donor. pH = -log[H⁺], pOH = -log[OH⁻], pH + pOH = 14 at 25°C.",
          keyPoints: ["阿伦尼乌斯定义", "布朗斯特-劳里定义", "共轭酸碱对", "路易斯酸碱", "pH计算"],
          keyPointsEn: ["Arrhenius definition", "Brønsted-Lowry definition", "Conjugate acid-base pairs", "Lewis acids & bases", "pH calculations"],
          formula: "pH = -log[H⁺] | pOH = -log[OH⁻] | pH + pOH = 14 | Ka × Kb = Kw = 10⁻¹⁴",
          hasQuiz: true
        },
        {
          id: "chem-017", category: "ap-chem", unit: "chem-u7",
          title: "弱酸弱碱平衡", titleEn: "Weak Acid & Base Equilibria",
          summary: "弱酸部分电离：HA ⇌ H⁺ + A⁻，酸解离常数Ka = [H⁺][A⁻]/[HA]。Ka越大酸性越强。弱碱：B + H₂O ⇌ BH⁺ + OH⁻，Kb = [BH⁺][OH⁻]/[B]。共轭酸碱对的Ka × Kb = Kw = 10⁻¹⁴。 Henderson-Hasselbalch方程用于缓冲溶液pH计算：pH = pKa + log([A⁻]/[HA])。",
          summaryEn: "Weak acids partially dissociate: HA ⇌ H⁺ + A⁻, Ka = [H⁺][A⁻]/[HA]. Larger Ka = stronger acid. Weak bases: B + H₂O ⇌ BH⁺ + OH⁻, Kb = [BH⁺][OH⁻]/[B]. For conjugate pairs: Ka × Kb = Kw = 10⁻¹⁴. Henderson-Hasselbalch equation for buffers: pH = pKa + log([A⁻]/[HA]).",
          keyPoints: ["Ka与Kb", "电离度α", "Henderson-Hasselbalch方程", "缓冲溶液", "酸碱指示剂"],
          keyPointsEn: ["Ka & Kb", "Degree of ionization", "Henderson-Hasselbalch", "Buffer solutions", "Acid-base indicators"],
          formula: "pH = pKa + log([A⁻]/[HA]) | Ka × Kb = Kw = 10⁻¹⁴",
          hasQuiz: true
        },
        {
          id: "chem-018", category: "ap-chem", unit: "chem-u7",
          title: "滴定与缓冲溶液", titleEn: "Titration & Buffers",
          summary: "酸碱滴定通过已知浓度的酸或碱测定未知浓度。等当点是酸碱恰好完全反应的点。强酸强碱滴定等当点pH=7，弱酸强碱滴定等当点pH>7。缓冲溶液由弱酸及其共轭碱（或弱碱及其共轭酸）组成，能抵抗pH变化。缓冲范围通常为pKa±1。",
          summaryEn: "Acid-base titration determines unknown concentration using known concentration. Equivalence point: stoichiometrically complete reaction. Strong acid-strong base: pH=7 at equivalence. Weak acid-strong base: pH>7 at equivalence. Buffers contain weak acid and conjugate base (or weak base and conjugate acid), resisting pH change. Buffer range typically pKa±1.",
          keyPoints: ["等当点", "半等当点", "缓冲溶液原理", "缓冲容量", "指示剂选择"],
          keyPointsEn: ["Equivalence point", "Half-equivalence point", "Buffer principle", "Buffer capacity", "Indicator selection"],
          formula: "等当点: moles酸 = moles碱 | 半等当点: pH = pKa | 缓冲: pH = pKa ± 1",
          hasQuiz: true
        }
      ]
    },
    {
      id: "chem-u8", name: "Unit 8: 电化学", nameEn: "Electrochemistry",
      topics: [
        {
          id: "chem-019", category: "ap-chem", unit: "chem-u8",
          title: "电化学电池", titleEn: "Electrochemical Cells",
          summary: "原电池（伽伐尼电池）：自发氧化还原反应产生电能。阳极发生氧化，阴极发生还原。电子从阳极流向阴极。盐桥维持电荷平衡。标准电动势E°cell = E°cathode - E°anode > 0时反应自发。电解池利用外加电能驱动非自发反应。",
          summaryEn: "Galvanic (voltaic) cells: spontaneous redox reactions produce electrical energy. Oxidation at anode, reduction at cathode. Electrons flow from anode to cathode. Salt bridge maintains charge balance. Standard cell potential E°cell = E°cathode - E°anode > 0 indicates spontaneity. Electrolytic cells use external electrical energy to drive non-spontaneous reactions.",
          keyPoints: ["阳极氧化/阴极还原", "盐桥作用", "标准电极电势", "能斯特方程", "电解池"],
          keyPointsEn: ["Anode oxidation/cathode reduction", "Salt bridge function", "Standard electrode potential", "Nernst equation", "Electrolytic cell"],
          formula: "E°cell = E°cathode - E°anode | ΔG° = -nFE°cell",
          hasQuiz: true
        }
      ]
    },
    {
      id: "chem-u9", name: "Unit 9: 化学动力学", nameEn: "Chemical Kinetics",
      topics: [
        {
          id: "chem-020", category: "ap-chem", unit: "chem-u9",
          title: "反应速率与机理", titleEn: "Reaction Rates & Mechanisms",
          summary: "反应速率 = 浓度变化/时间。速率定律：rate = k[A]^m[B]^n，由实验确定。反应级数(m+n)不一定是化学计量系数。Arrhenius方程：k = Ae^(-Ea/RT)，温度升高速率常数增大。催化剂降低活化能，提高反应速率但不改变平衡。反应机理中的慢步骤（决速步）决定总反应速率。",
          summaryEn: "Reaction rate = change in concentration/time. Rate law: rate = k[A]^m[B]^n, determined experimentally. Overall order (m+n) may not match stoichiometric coefficients. Arrhenius equation: k = Ae^(-Ea/RT), increasing temperature increases rate constant. Catalysts lower activation energy, increasing rate without changing equilibrium. The slow step (rate-determining step) in a mechanism determines overall rate.",
          keyPoints: ["速率定律", "反应级数", "Arrhenius方程", "活化能", "决速步"],
          keyPointsEn: ["Rate law", "Reaction order", "Arrhenius equation", "Activation energy", "Rate-determining step"],
          formula: "rate = k[A]^m[B]^n | k = Ae^(-Ea/RT) | lnk = -Ea/RT + lnA",
          hasQuiz: true
        },
        {
          id: "chem-021", category: "ap-chem", unit: "chem-u9",
          title: "反应机理与碰撞理论", titleEn: "Reaction Mechanisms & Collision Theory",
          summary: "碰撞理论：反应发生需要分子碰撞、足够能量（≥活化能Ea）和正确取向。过渡态是反应过程中能量最高的不稳定状态。反应中间体在多步机理中生成又被消耗。催化剂通过提供替代反应路径降低活化能。酶是生物催化剂，具有高度专一性和高效性。",
          summaryEn: "Collision theory: reactions require molecular collisions, sufficient energy (≥ activation energy Ea), and proper orientation. Transition state is the highest energy unstable configuration during reaction. Reaction intermediates are produced and consumed in multi-step mechanisms. Catalysts lower activation energy by providing alternative pathways. Enzymes are biological catalysts with high specificity and efficiency.",
          keyPoints: ["碰撞三要素", "过渡态理论", "中间体与催化剂", "酶催化", "分子取向"],
          keyPointsEn: ["Three collision requirements", "Transition state theory", "Intermediates vs catalysts", "Enzyme catalysis", "Molecular orientation"],
          formula: "有效碰撞 = 足够能量 + 正确取向 | Ea(催化) < Ea(未催化)",
          hasQuiz: true
        }
      ]
    }
  ]
};

// ==================== 题库数据 ====================
const QUIZ_DATA = {
  bio: [
    // Unit 1
    { id: "q001", type: "choice", topicId: "bio-001",
      question: "Which property of water is most directly responsible for the transport of water from roots to leaves in plants?",
      questionCn: "水的哪种性质最直接负责植物体内水分从根部运输到叶片？",
      options: ["High specific heat capacity", "Cohesion and adhesion (capillary action)", "High heat of vaporization", "Universal solvent property"],
      answer: 1,
      explanation: "Cohesion (water-water hydrogen bonding) and adhesion (water-cell wall attraction) together create capillary action, allowing water to move upward in xylem vessels against gravity.",
      explanationCn: "内聚力（水分子间的氢键）和附着力（水与细胞壁的吸引力）共同产生毛细作用，使水分能够逆重力在木质部导管中向上运输。"
    },
    { id: "q002", type: "choice", topicId: "bio-001",
      question: "What type of bond forms between adjacent water molecules?",
      questionCn: "相邻水分子之间形成什么类型的键？",
      options: ["Covalent bond", "Ionic bond", "Hydrogen bond", "Van der Waals force"],
      answer: 2,
      explanation: "Hydrogen bonds form between the partially positive hydrogen of one water molecule and the partially negative oxygen of another. These are intermolecular forces, not true chemical bonds.",
      explanationCn: "氢键在一个水分子的部分正电性氢与另一个水分子的部分负电性氧之间形成。这些是分子间作用力，不是真正的化学键。"
    },
    { id: "q003", type: "choice", topicId: "bio-001",
      question: "Why does ice float on liquid water?",
      questionCn: "为什么冰能浮在水面上？",
      options: ["Ice has a higher density than liquid water", "Ice has a lower density than liquid water due to hydrogen bond arrangement", "Ice has more thermal energy", "Ice molecules move faster"],
      answer: 1,
      explanation: "In ice, water molecules form a crystalline lattice with hydrogen bonds holding them at fixed distances, creating more space between molecules and thus lower density than liquid water.",
      explanationCn: "在冰中，水分子形成晶体晶格，氢键将它们固定在特定距离上，分子间产生更多空隙，因此密度比液态水低。"
    },
    { id: "q004", type: "choice", topicId: "bio-001",
      question: "The hydrophobic effect causes nonpolar molecules to:",
      questionCn: "疏水效应导致非极性分子：",
      options: ["Dissolve readily in water", "Aggregate together in aqueous environments", "Form hydrogen bonds with water", "Ionize in solution"],
      answer: 1,
      explanation: "Nonpolar molecules cannot form hydrogen bonds with water. When placed in water, they aggregate to minimize disruption of the hydrogen-bonding network, a phenomenon called the hydrophobic effect.",
      explanationCn: "非极性分子无法与水形成氢键。当置于水中时，它们会聚集在一起以最小化对氢键网络的破坏，这一现象称为疏水效应。"
    },
    { id: "q005", type: "choice", topicId: "bio-001",
      question: "Which of the following best explains water's high specific heat capacity?",
      questionCn: "以下哪项最能解释水的高比热容？",
      options: ["Water molecules are small", "Extensive hydrogen bonding between water molecules", "Water is a polar molecule", "Water contains oxygen"],
      answer: 1,
      explanation: "A large amount of energy is required to break hydrogen bonds between water molecules. This means water can absorb much heat before its temperature rises significantly, giving it high specific heat capacity.",
      explanationCn: "需要大量能量才能打破水分子之间的氢键。这意味着水在温度显著升高之前可以吸收大量热量，从而具有高比热容。"
    },
    // Unit 1 - Carbohydrates
    { id: "q006", type: "choice", topicId: "bio-002",
      question: "What type of bond links glucose monomers in starch?",
      questionCn: "淀粉中连接葡萄糖单体的键是什么类型？",
      options: ["Peptide bond", "Ester bond", "Glycosidic linkage (α-1,4)", "Phosphodiester bond"],
      answer: 2,
      explanation: "Glucose monomers in starch are linked by α-1,4 glycosidic bonds (with α-1,6 branches in amylopectin). These form through dehydration synthesis between hydroxyl groups.",
      explanationCn: "淀粉中的葡萄糖单体通过α-1,4糖苷键连接（支链淀粉中还有α-1,6分支）。这些键通过羟基之间的脱水缩合形成。"
    },
    { id: "q007", type: "choice", topicId: "bio-002",
      question: "Which polysaccharide is the primary storage form of glucose in animals?",
      questionCn: "哪种多糖是动物体内葡萄糖的主要储存形式？",
      options: ["Cellulose", "Starch", "Glycogen", "Chitin"],
      answer: 2,
      explanation: "Glycogen is the storage polysaccharide in animals, primarily stored in liver and muscle cells. It is highly branched, allowing rapid glucose release when needed.",
      explanationCn: "糖原是动物体内的储存多糖，主要储存在肝脏和肌肉细胞中。它具有高度分支结构，可在需要时快速释放葡萄糖。"
    },
    { id: "q008", type: "choice", topicId: "bio-002",
      question: "Why can't humans digest cellulose?",
      questionCn: "为什么人类不能消化纤维素？",
      options: ["Humans lack the enzyme to break β-1,4 glycosidic bonds", "Cellulose is too large", "Cellulose is not a carbohydrate", "Humans lack amylase"],
      answer: 0,
      explanation: "Humans produce amylase that breaks α-1,4 glycosidic bonds in starch but lack cellulase, the enzyme needed to hydrolyze β-1,4 glycosidic bonds in cellulose.",
      explanationCn: "人类产生淀粉酶可以分解淀粉中的α-1,4糖苷键，但缺乏纤维素酶——水解纤维素中β-1,4糖苷键所需的酶。"
    },
    { id: "q009", type: "choice", topicId: "bio-002",
      question: "Which carbohydrate is a disaccharide composed of glucose and fructose?",
      questionCn: "哪种碳水化合物是由葡萄糖和果糖组成的二糖？",
      options: ["Lactose", "Maltose", "Sucrose", "Cellulose"],
      answer: 2,
      explanation: "Sucrose (table sugar) is a disaccharide consisting of one glucose and one fructose linked by an α-1,β-2 glycosidic bond. Lactose = glucose + galactose; maltose = glucose + glucose.",
      explanationCn: "蔗糖（食糖）是由一个葡萄糖和一个果糖通过α-1,β-2糖苷键连接而成的二糖。乳糖=葡萄糖+半乳糖；麦芽糖=葡萄糖+葡萄糖。"
    },
    { id: "q010", type: "choice", topicId: "bio-002",
      question: "During dehydration synthesis of carbohydrates:",
      questionCn: "碳水化合物的脱水缩合过程中：",
      options: ["Water is consumed", "Water is released", "Energy is released only", "No water is involved"],
      answer: 1,
      explanation: "Dehydration synthesis (condensation reaction) joins monomers by forming covalent bonds, releasing one water molecule per bond formed. Hydrolysis is the reverse, consuming water.",
      explanationCn: "脱水缩合（缩合反应）通过形成共价键连接单体，每形成一个键释放一个水分子。水解是逆反应，消耗水。"
    },
    // Unit 1 - Lipids
    { id: "q011", type: "choice", topicId: "bio-003",
      question: "The fluid mosaic model describes the cell membrane as:",
      questionCn: "流动镶嵌模型将细胞膜描述为：",
      options: ["A rigid, solid structure", "A phospholipid bilayer with embedded proteins", "A single layer of phospholipids", "Composed entirely of cholesterol"],
      answer: 1,
      explanation: "The fluid mosaic model describes the plasma membrane as a phospholipid bilayer with proteins embedded within or attached to it. The membrane is fluid because lipids and proteins can move laterally.",
      explanationCn: "流动镶嵌模型将质膜描述为嵌入或附着蛋白质的磷脂双分子层。膜是流动的，因为脂质和蛋白质可以侧向移动。"
    },
    { id: "q012", type: "choice", topicId: "bio-003",
      question: "Which component of the cell membrane increases membrane fluidity at low temperatures?",
      questionCn: "细胞膜的哪种成分在低温下增加膜的流动性？",
      options: ["Saturated fatty acids", "Unsaturated fatty acids (kinks)", "Proteins", "Nucleic acids"],
      answer: 1,
      explanation: "Unsaturated fatty acids have kinks (cis double bonds) that prevent tight packing of phospholipids, maintaining membrane fluidity at lower temperatures.",
      explanationCn: "不饱和脂肪酸具有弯曲（顺式双键），可防止磷脂紧密堆积，在较低温度下维持膜的流动性。"
    },
    { id: "q013", type: "choice", topicId: "bio-003",
      question: "What is the primary function of cholesterol in animal cell membranes?",
      questionCn: "胆固醇在动物细胞膜中的主要功能是什么？",
      options: ["Transport proteins across the membrane", "Maintain membrane fluidity and stability", "Store genetic information", "Catalyze chemical reactions"],
      answer: 1,
      explanation: "Cholesterol acts as a buffer, restraining phospholipid movement at high temperatures (reducing fluidity) and preventing tight packing at low temperatures (maintaining fluidity).",
      explanationCn: "胆固醇起缓冲作用，在高温下限制磷脂运动（降低流动性），在低温下防止紧密堆积（维持流动性）。"
    },
    { id: "q014", type: "choice", topicId: "bio-003",
      question: "Integral membrane proteins are characterized by:",
      questionCn: "整合膜蛋白的特征是：",
      options: ["Being loosely attached to the membrane surface", "Spanning the entire phospholipid bilayer", "Being completely hydrophilic", "Lacking tertiary structure"],
      answer: 1,
      explanation: "Integral (transmembrane) proteins span the entire phospholipid bilayer, with hydrophobic regions interacting with lipid tails and hydrophilic regions exposed to aqueous environments.",
      explanationCn: "整合（跨膜）蛋白横跨整个磷脂双分子层，疏水区域与脂质尾部相互作用，亲水区域暴露于水环境中。"
    },
    { id: "q015", type: "choice", topicId: "bio-003",
      question: "Phospholipids spontaneously form bilayers in water because:",
      questionCn: "磷脂在水中自发形成双分子层是因为：",
      options: ["They are completely hydrophobic", "They have hydrophilic heads and hydrophobic tails", "They form covalent bonds with water", "They are electrically neutral"],
      answer: 1,
      explanation: "Phospholipids are amphipathic—they have hydrophilic phosphate heads and hydrophobic fatty acid tails. In aqueous environments, they arrange into bilayers with heads facing water and tails shielded internally.",
      explanationCn: "磷脂是两亲性的——具有亲水的磷酸头部和疏水的脂肪酸尾部。在水环境中，它们排列成头部朝向水、尾部被屏蔽在内部的结构。"
    },
    // Unit 1 - Proteins
    { id: "q016", type: "choice", topicId: "bio-004",
      question: "What level of protein structure involves interactions between R groups (side chains)?",
      questionCn: "蛋白质结构的哪一层次涉及R基团（侧链）之间的相互作用？",
      options: ["Primary structure", "Secondary structure", "Tertiary structure", "Quaternary structure"],
      answer: 2,
      explanation: "Tertiary structure involves interactions between R groups: hydrogen bonds, ionic bonds, disulfide bridges, and hydrophobic interactions. Secondary involves backbone hydrogen bonding; quaternary involves subunit interactions.",
      explanationCn: "三级结构涉及R基团之间的相互作用：氢键、离子键、二硫键和疏水相互作用。二级涉及主链氢键；四级涉及亚基间相互作用。"
    },
    { id: "q017", type: "choice", topicId: "bio-004",
      question: "The sequence of amino acids in a protein determines its:",
      questionCn: "蛋白质中氨基酸的序列决定其：",
      options: ["Primary structure only", "All higher levels of structure", "Secondary structure only", "Quaternary structure only"],
      answer: 1,
      explanation: "The primary structure (amino acid sequence) dictates how the protein folds into secondary, tertiary, and quaternary structures. A change in primary structure can alter all higher levels.",
      explanationCn: "一级结构（氨基酸序列）决定蛋白质如何折叠成二级、三级和四级结构。一级结构的改变会影响所有更高层次。"
    },
    { id: "q018", type: "choice", topicId: "bio-004",
      question: "Which bond is strongest in maintaining tertiary protein structure?",
      questionCn: "维持蛋白质三级结构最强的键是哪种？",
      options: ["Hydrogen bond", "Ionic bond", "Disulfide bridge", "Hydrophobic interaction"],
      answer: 2,
      explanation: "Disulfide bridges (covalent bonds between cysteine residues) are the strongest bonds in tertiary structure. They form between -SH groups, creating -S-S- bonds.",
      explanationCn: "二硫键（半胱氨酸残基之间的共价键）是三级结构中最强的键。它们在-SH基团之间形成，产生-S-S-键。"
    },
    { id: "q019", type: "choice", topicId: "bio-004",
      question: "Enzymes increase reaction rates by:",
      questionCn: "酶通过什么方式提高反应速率？",
      options: ["Increasing the activation energy", "Lowering the activation energy", "Changing the reaction equilibrium", "Being consumed in the reaction"],
      answer: 1,
      explanation: "Enzymes are catalysts that lower the activation energy required for a reaction, increasing the rate without being consumed. They do not change the equilibrium position.",
      explanationCn: "酶是降低反应所需活化能的催化剂，提高反应速率而自身不被消耗。它们不改变平衡位置。"
    },
    { id: "q020", type: "choice", topicId: "bio-004",
      question: "Protein denaturation involves the loss of:",
      questionCn: "蛋白质变性涉及什么的丧失？",
      options: ["Primary structure only", "Secondary, tertiary, and quaternary structures", "Amino acid composition", "Peptide bonds"],
      answer: 1,
      explanation: "Denaturation disrupts the weak interactions maintaining secondary, tertiary, and quaternary structures. Primary structure (peptide bonds and amino acid sequence) remains intact.",
      explanationCn: "变性破坏维持二级、三级和四级结构的弱相互作用。一级结构（肽键和氨基酸序列）保持完整。"
    },
    // Unit 1 - Nucleic Acids
    { id: "q021", type: "choice", topicId: "bio-005",
      question: "In DNA, which base pairs with cytosine?",
      questionCn: "在DNA中，哪种碱基与胞嘧啶配对？",
      options: ["Adenine", "Thymine", "Guanine", "Uracil"],
      answer: 2,
      explanation: "In DNA, cytosine (C) always pairs with guanine (G) through three hydrogen bonds. Adenine pairs with thymine through two hydrogen bonds.",
      explanationCn: "在DNA中，胞嘧啶(C)总是与鸟嘌呤(G)通过三个氢键配对。腺嘌呤与胸腺嘧啶通过两个氢键配对。"
    },
    { id: "q022", type: "choice", topicId: "bio-005",
      question: "Which sugar is found in RNA but NOT in DNA?",
      questionCn: "哪种糖存在于RNA中但不存在于DNA中？",
      options: ["Deoxyribose", "Ribose", "Glucose", "Fructose"],
      answer: 1,
      explanation: "RNA contains ribose sugar (with -OH at 2' position), while DNA contains deoxyribose (lacks -OH at 2' position, just H). This makes DNA more chemically stable.",
      explanationCn: "RNA含有核糖（2'位有-OH），而DNA含有脱氧核糖（2'位缺少-OH，只有H）。这使DNA化学性质更稳定。"
    },
    { id: "q023", type: "choice", topicId: "bio-005",
      question: "DNA replication is described as semiconservative because:",
      questionCn: "DNA复制被称为半保留是因为：",
      options: ["Each new DNA molecule consists of one original strand and one new strand", "Half of the DNA is conserved", "Only half of the DNA is replicated", "The process requires half the energy"],
      answer: 0,
      explanation: "In semiconservative replication, each daughter DNA molecule contains one parental strand and one newly synthesized strand, conserving half of the original genetic material.",
      explanationCn: "在半保留复制中，每个子代DNA分子包含一条亲代链和一条新合成的链，保留了原始遗传物质的一半。"
    },
    { id: "q024", type: "choice", topicId: "bio-005",
      question: "The antiparallel nature of DNA refers to:",
      questionCn: "DNA的反平行性质指的是：",
      options: ["The two strands run in opposite 5' to 3' directions", "The bases face opposite directions", "The strands are not parallel to each other spatially", "The helix twists in opposite directions"],
      answer: 0,
      explanation: "DNA strands are antiparallel: one runs 5'→3' while the complementary strand runs 3'→5'. This arrangement is essential for base pairing and replication.",
      explanationCn: "DNA链是反平行的：一条从5'→3'方向运行，而互补链从3'→5'方向运行。这种排列对碱基配对和复制至关重要。"
    },
    { id: "q025", type: "choice", topicId: "bio-005",
      question: "Which nitrogenous base is found in RNA but not in DNA?",
      questionCn: "哪种含氮碱基存在于RNA中但不存在于DNA中？",
      options: ["Adenine", "Thymine", "Uracil", "Cytosine"],
      answer: 2,
      explanation: "RNA contains uracil (U) instead of thymine (T). Both pair with adenine, but uracil lacks the methyl group present in thymine.",
      explanationCn: "RNA含有尿嘧啶(U)代替胸腺嘧啶(T)。两者都与腺嘌呤配对，但尿嘧啶缺少胸腺嘧啶中的甲基。"
    },
    // Unit 2 - Cell structure
    { id: "q026", type: "choice", topicId: "bio-006",
      question: "Which structure is found in eukaryotes but NOT in prokaryotes?",
      questionCn: "哪种结构存在于真核细胞中但不存在于原核细胞中？",
      options: ["Ribosomes", "Plasma membrane", "Membrane-bound nucleus", "Cytoplasm"],
      answer: 2,
      explanation: "Eukaryotes have a membrane-bound nucleus containing genetic material. Prokaryotes lack a nucleus; their DNA is located in a nucleoid region. Both have ribosomes, plasma membrane, and cytoplasm.",
      explanationCn: "真核细胞具有包含遗传物质的膜包被细胞核。原核细胞没有细胞核；其DNA位于拟核区。两者都有核糖体、质膜和细胞质。"
    },
    { id: "q027", type: "choice", topicId: "bio-006",
      question: "Bacterial cell walls are primarily composed of:",
      questionCn: "细菌细胞壁主要由什么组成？",
      options: ["Cellulose", "Peptidoglycan", "Chitin", "Glycoproteins"],
      answer: 1,
      explanation: "Bacterial cell walls are made of peptidoglycan (murein), a polymer of sugars and amino acids. Plant cell walls contain cellulose; fungal cell walls contain chitin.",
      explanationCn: "细菌细胞壁由肽聚糖（胞壁质）组成，是糖和氨基酸的聚合物。植物细胞壁含纤维素；真菌细胞壁含几丁质。"
    },
    { id: "q028", type: "choice", topicId: "bio-006",
      question: "Prokaryotic ribosomes are classified as:",
      questionCn: "原核生物核糖体的分类是：",
      options: ["80S", "70S", "60S", "50S"],
      answer: 1,
      explanation: "Prokaryotic ribosomes are 70S (composed of 50S large subunit and 30S small subunit). Eukaryotic ribosomes are 80S (60S + 40S). Mitochondrial and chloroplast ribosomes resemble prokaryotic 70S ribosomes.",
      explanationCn: "原核生物核糖体为70S（由50S大亚基和30S小亚基组成）。真核生物核糖体为80S（60S+40S）。线粒体和叶绿体核糖体类似于原核70S核糖体。"
    },
    { id: "q029", type: "choice", topicId: "bio-006",
      question: "Which organelle is believed to have originated through endosymbiosis?",
      questionCn: "哪种细胞器被认为通过内共生起源？",
      options: ["Golgi apparatus", "Endoplasmic reticulum", "Mitochondria", "Nucleus"],
      answer: 2,
      explanation: "Mitochondria and chloroplasts are believed to have originated from free-living prokaryotes engulfed by ancestral eukaryotic cells (endosymbiotic theory). Evidence includes their own DNA, double membranes, and 70S ribosomes.",
      explanationCn: "线粒体和叶绿体被认为起源于被原始真核细胞吞噬的自由生活的原核生物（内共生学说）。证据包括它们自己的DNA、双层膜和70S核糖体。"
    },
    { id: "q030", type: "choice", topicId: "bio-006",
      question: "Archaea differ from Bacteria in that Archaea:",
      questionCn: "古菌与细菌的区别在于古菌：",
      options: ["Have a nucleus", "Have membrane lipids with ether linkages", "Are all pathogens", "Cannot live in extreme environments"],
      answer: 1,
      explanation: "Archaea have unique membrane lipids with ether linkages (not ester linkages as in bacteria and eukaryotes). They often live in extreme environments but not all are extremophiles. Neither has a nucleus.",
      explanationCn: "古菌具有独特的醚键连接膜脂（不同于细菌和真核生物的酯键）。它们常生活在极端环境中，但并非全部是极端微生物。两者都没有细胞核。"
    },
    // Unit 2 - Membrane transport
    { id: "q031", type: "choice", topicId: "bio-007",
      question: "The sodium-potassium pump transports:",
      questionCn: "钠钾泵运输：",
      options: ["3 Na⁺ in and 2 K⁺ out", "3 Na⁺ out and 2 K⁺ in", "2 Na⁺ out and 3 K⁺ in", "Equal numbers of Na⁺ and K⁺"],
      answer: 1,
      explanation: "The Na⁺/K⁺-ATPase pump moves 3 Na⁺ out and 2 K⁺ in against their concentration gradients, using ATP. This creates electrochemical gradients essential for nerve impulses.",
      explanationCn: "Na⁺/K⁺-ATPase泵将3个Na⁺泵出、2个K⁺泵入，逆浓度梯度进行，消耗ATP。这产生对神经冲动至关重要的电化学梯度。"
    },
    { id: "q032", type: "choice", topicId: "bio-007",
      question: "Facilitated diffusion differs from simple diffusion because facilitated diffusion:",
      questionCn: "协助扩散与简单扩散的区别在于协助扩散：",
      options: ["Requires ATP", "Requires membrane proteins", "Moves against the concentration gradient", "Only transports water"],
      answer: 1,
      explanation: "Facilitated diffusion requires channel or carrier proteins to move substances across the membrane, but it does not require ATP and moves down the concentration gradient.",
      explanationCn: "协助扩散需要通道蛋白或载体蛋白来转运物质穿过膜，但不需要ATP，且顺浓度梯度进行。"
    },
    { id: "q033", type: "choice", topicId: "bio-007",
      question: "Which process moves materials into a cell by engulfing them in a vesicle?",
      questionCn: "哪种过程通过将物质包裹在囊泡中将其移入细胞？",
      options: ["Exocytosis", "Endocytosis", "Diffusion", "Osmosis"],
      answer: 1,
      explanation: "Endocytosis brings materials into the cell by forming vesicles from the plasma membrane. Exocytosis releases materials by vesicle fusion with the membrane.",
      explanationCn: "胞吞作用通过从质膜形成囊泡将物质带入细胞。胞吐作用通过囊泡与膜融合释放物质。"
    },
    { id: "q034", type: "choice", topicId: "bio-007",
      question: "Osmosis is best defined as:",
      questionCn: "渗透作用的最好定义是：",
      options: ["The diffusion of any solute across a membrane", "The diffusion of water across a selectively permeable membrane", "Active transport of water", "The movement of ions against their gradient"],
      answer: 1,
      explanation: "Osmosis is the passive movement of water across a selectively permeable membrane from an area of lower solute concentration to higher solute concentration.",
      explanationCn: "渗透作用是水分子通过选择性透过膜从低溶质浓度区域向高溶质浓度区域的被动运动。"
    },
    { id: "q035", type: "choice", topicId: "bio-007",
      question: "Which type of transport requires energy input?",
      questionCn: "哪种运输类型需要能量输入？",
      options: ["Simple diffusion", "Facilitated diffusion", "Osmosis", "Active transport"],
      answer: 3,
      explanation: "Active transport moves substances against their concentration gradient and requires energy (usually ATP). Simple diffusion, facilitated diffusion, and osmosis are all passive processes.",
      explanationCn: "主动运输逆浓度梯度移动物质，需要能量（通常是ATP）。简单扩散、协助扩散和渗透作用都是被动过程。"
    },
    // Unit 2 - Cellular Respiration
    { id: "q036", type: "choice", topicId: "bio-008",
      question: "Where does the Krebs (citric acid) cycle occur?",
      questionCn: "Krebs（柠檬酸）循环发生在何处？",
      options: ["Cytoplasm", "Outer mitochondrial membrane", "Mitochondrial matrix", "Intermembrane space"],
      answer: 2,
      explanation: "The Krebs cycle takes place in the mitochondrial matrix. Glycolysis occurs in the cytoplasm; the electron transport chain is located in the inner mitochondrial membrane.",
      explanationCn: "Krebs循环发生在线粒体基质中。糖酵解发生在细胞质中；电子传递链位于线粒体内膜。"
    },
    { id: "q037", type: "choice", topicId: "bio-008",
      question: "What is the total ATP yield from one glucose molecule in aerobic respiration?",
      questionCn: "有氧呼吸中一个葡萄糖分子产生的ATP总量约为多少？",
      options: ["2 ATP", "18 ATP", "32 ATP", "100 ATP"],
      answer: 2,
      explanation: "Complete aerobic respiration of one glucose yields approximately 30-32 ATP: net 2 from glycolysis, 2 from Krebs cycle, and ~26-28 from oxidative phosphorylation (ETC + chemiosmosis).",
      explanationCn: "一个葡萄糖分子的完全有氧呼吸产生约30-32 ATP：糖酵解净产2 ATP，Krebs循环产2 ATP，氧化磷酸化（ETC+化学渗透）产约26-28 ATP。"
    },
    { id: "q038", type: "choice", topicId: "bio-008",
      question: "Which molecule is the final electron acceptor in the electron transport chain?",
      questionCn: "电子传递链中的最终电子受体是什么分子？",
      options: ["NADH", "FADH₂", "Oxygen (O₂)", "CO₂"],
      answer: 2,
      explanation: "Oxygen is the final electron acceptor in the electron transport chain. It combines with electrons and H⁺ to form water. Without oxygen, the ETC backs up and aerobic respiration cannot continue.",
      explanationCn: "氧气是电子传递链中的最终电子受体。它与电子和H⁺结合形成水。没有氧气，ETC会堵塞，有氧呼吸无法继续。"
    },
    { id: "q039", type: "choice", topicId: "bio-008",
      question: "The chemiosmotic mechanism involves:",
      questionCn: "化学渗透机制涉及：",
      options: ["Direct phosphorylation of ADP", "Use of a proton gradient to drive ATP synthesis", "Breakdown of glucose", "Transport of electrons through NADH"],
      answer: 1,
      explanation: "Chemiosmosis uses the proton gradient (proton-motive force) created by the electron transport chain to drive ATP synthesis through ATP synthase as protons flow back into the matrix.",
      explanationCn: "化学渗透利用电子传递链产生的质子梯度（质子驱动力）驱动ATP合酶在质子回流至基质时合成ATP。"
    },
    { id: "q040", type: "choice", topicId: "bio-008",
      question: "Which process produces the most ATP during cellular respiration?",
      questionCn: "细胞呼吸中哪个过程产生最多ATP？",
      options: ["Glycolysis", "Krebs cycle", "Oxidative phosphorylation", "Fermentation"],
      answer: 2,
      explanation: "Oxidative phosphorylation (ETC + chemiosmosis) produces approximately 26-28 ATP per glucose, far more than glycolysis (net 2 ATP) or the Krebs cycle (2 ATP). Fermentation produces no additional ATP beyond glycolysis.",
      explanationCn: "氧化磷酸化（ETC+化学渗透）每个葡萄糖产生约26-28 ATP，远多于糖酵解（净2 ATP）或Krebs循环（2 ATP）。发酵在糖酵解之外不产生额外ATP。"
    },
    // Unit 2 - Photosynthesis
    { id: "q041", type: "choice", topicId: "bio-009",
      question: "Where do the light-dependent reactions of photosynthesis occur?",
      questionCn: "光合作用的光反应发生在何处？",
      options: ["Stroma", "Thylakoid membrane", "Cytoplasm", "Outer membrane"],
      answer: 1,
      explanation: "Light-dependent reactions occur in the thylakoid membranes of chloroplasts. The Calvin cycle (light-independent reactions) occurs in the stroma.",
      explanationCn: "光反应发生在叶绿体的类囊体膜中。Calvin循环（暗反应）发生在基质中。"
    },
    { id: "q042", type: "choice", topicId: "bio-009",
      question: "What are the products of the light reactions?",
      questionCn: "光反应的产物是什么？",
      options: ["Glucose and O₂", "ATP, NADPH, and O₂", "CO₂ and H₂O", "Only ATP"],
      answer: 1,
      explanation: "Light reactions produce ATP, NADPH, and O₂. ATP and NADPH are used in the Calvin cycle; O₂ is released as a byproduct from water splitting (photolysis).",
      explanationCn: "光反应产生ATP、NADPH和O₂。ATP和NADPH用于Calvin循环；O₂是水分解（光解）的副产物被释放。"
    },
    { id: "q043", type: "choice", topicId: "bio-009",
      question: "Which enzyme fixes CO₂ in the Calvin cycle?",
      questionCn: "Calvin循环中固定CO₂的酶是哪种？",
      options: ["ATP synthase", "Rubisco", "NADP reductase", "Cytochrome complex"],
      answer: 1,
      explanation: "Rubisco (ribulose-1,5-bisphosphate carboxylase/oxygenase) catalyzes CO₂ fixation by attaching CO₂ to RuBP. It is the most abundant enzyme on Earth.",
      explanationCn: "Rubisco（核酮糖-1,5-二磷酸羧化酶/加氧酶）催化CO₂固定，将CO₂连接到RuBP上。它是地球上最丰富的酶。"
    },
    { id: "q044", type: "choice", topicId: "bio-009",
      question: "C4 plants are adapted to hot, dry environments because:",
      questionCn: "C4植物适应炎热干燥环境是因为：",
      options: ["They don't need water", "They concentrate CO₂ to reduce photorespiration", "They don't perform photosynthesis", "They have no stomata"],
      answer: 1,
      explanation: "C4 plants use PEP carboxylase to fix CO₂ into a 4-carbon compound, concentrating CO₂ around Rubisco. This reduces photorespiration, which is problematic at high temperatures when stomata are closed.",
      explanationCn: "C4植物使用PEP羧化酶将CO₂固定为4碳化合物，在Rubisco周围浓缩CO₂。这减少了光呼吸，当气孔在高温下关闭时光呼吸会成为问题。"
    },
    { id: "q045", type: "choice", topicId: "bio-009",
      question: "The overall equation for photosynthesis is:",
      questionCn: "光合作用的总反应式是：",
      options: ["C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O", "6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂", "6CO₂ + 6H₂O → 6C + 12H₂O", "C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂"],
      answer: 1,
      explanation: "Photosynthesis uses carbon dioxide and water, driven by light energy, to produce glucose and oxygen. This is the reverse of aerobic respiration.",
      explanationCn: "光合作用利用二氧化碳和水，在光能驱动下产生葡萄糖和氧气。这是有氧呼吸的逆反应。"
    },
    // Unit 2 - Organelles
    { id: "q046", type: "choice", topicId: "bio-010",
      question: "Which organelle is responsible for modifying, sorting, and packaging proteins?",
      questionCn: "哪种细胞器负责修饰、分选和包装蛋白质？",
      options: ["Mitochondria", "Rough ER", "Golgi apparatus", "Lysosome"],
      answer: 2,
      explanation: "The Golgi apparatus modifies proteins (e.g., glycosylation), sorts them, and packages them into vesicles for transport to their final destinations (lysosomes, plasma membrane, or secretion).",
      explanationCn: "高尔基体修饰蛋白质（如糖基化），对其进行分选，并包装成囊泡运输至最终目的地（溶酶体、质膜或分泌）。"
    },
    { id: "q047", type: "choice", topicId: "bio-010",
      question: "Lysosomes contain hydrolytic enzymes that function optimally at:",
      questionCn: "溶酶体含有水解酶，其最佳功能pH为：",
      options: ["Neutral pH (~7)", "Acidic pH (~5)", "Basic pH (~9)", "Any pH"],
      answer: 1,
      explanation: "Lysosomal enzymes are acid hydrolases that function optimally at about pH 5. The lysosome maintains this acidic pH using proton pumps. If released into cytoplasm (pH ~7.2), these enzymes are less active, protecting the cell.",
      explanationCn: "溶酶体酶是酸性水解酶，在约pH 5时功能最佳。溶酶体使用质子泵维持这种酸性pH。如果释放到细胞质（pH~7.2），这些酶活性较低，保护细胞免受损害。"
    },
    { id: "q048", type: "choice", topicId: "bio-010",
      question: "Smooth endoplasmic reticulum is involved in:",
      questionCn: "光面内质网参与：",
      options: ["Protein synthesis", "Lipid synthesis and detoxification", "DNA replication", "Cell division"],
      answer: 1,
      explanation: "Smooth ER lacks ribosomes and is involved in lipid synthesis, steroid hormone production, and detoxification of drugs/poisons. Rough ER has ribosomes and synthesizes proteins.",
      explanationCn: "光面内质网缺乏核糖体，参与脂质合成、类固醇激素产生和药物/毒物解毒。粗面内质网有核糖体，负责蛋白质合成。"
    },
    { id: "q049", type: "choice", topicId: "bio-010",
      question: "Which cytoskeletal element is composed of tubulin?",
      questionCn: "哪种细胞骨架成分由微管蛋白组成？",
      options: ["Microfilaments (actin)", "Intermediate filaments", "Microtubules", "All of the above"],
      answer: 2,
      explanation: "Microtubules are hollow tubes made of α- and β-tubulin dimers. They form the mitotic spindle, cilia, and flagella. Microfilaments are actin; intermediate filaments are various proteins (keratins, lamins, etc.).",
      explanationCn: "微管是由α和β微管蛋白二聚体组成的空心管。它们形成有丝分裂纺锤体、纤毛和鞭毛。微丝是肌动蛋白；中间丝是各种蛋白质（角蛋白、核纤层蛋白等）。"
    },
    { id: "q050", type: "choice", topicId: "bio-010",
      question: "The endomembrane system includes all EXCEPT:",
      questionCn: "内膜系统包括以下所有，除了：",
      options: ["Nuclear envelope", "Endoplasmic reticulum", "Mitochondria", "Golgi apparatus"],
      answer: 2,
      explanation: "The endomembrane system includes the nuclear envelope, ER, Golgi apparatus, lysosomes, vacuoles, and plasma membrane. Mitochondria and chloroplasts are NOT part of this system; they originated independently through endosymbiosis.",
      explanationCn: "内膜系统包括核膜、内质网、高尔基体、溶酶体、液泡和质膜。线粒体和叶绿体不属于该系统；它们通过内共生独立起源。"
    }
  ],

  chem: [
    // Unit 1
    { id: "cq001", type: "choice", topicId: "chem-001",
      question: "How many neutrons are in an atom of ¹⁴C?",
      questionCn: "¹⁴C原子中有多少个中子？",
      options: ["6", "8", "14", "20"],
      answer: 1,
      explanation: "Carbon-14 has a mass number of 14 and atomic number 6 (6 protons). Neutrons = mass number - atomic number = 14 - 6 = 8.",
      explanationCn: "碳-14的质量数为14，原子序数为6（6个质子）。中子数=质量数-原子序数=14-6=8。"
    },
    { id: "cq002", type: "choice", topicId: "chem-001",
      question: "Isotopes of an element have different numbers of:",
      questionCn: "一种元素的同位素具有不同的：",
      options: ["Protons", "Electrons", "Neutrons", "Atomic number"],
      answer: 2,
      explanation: "Isotopes have the same number of protons (same atomic number) but different numbers of neutrons, giving them different mass numbers.",
      explanationCn: "同位素具有相同数量的质子（相同原子序数），但中子数不同，因此质量数不同。"
    },
    { id: "cq003", type: "choice", topicId: "chem-001",
      question: "The mass of one mole of carbon-12 atoms is exactly:",
      questionCn: "一摩尔碳-12原子的质量恰好是：",
      options: ["12 g", "6.02 g", "1 g", "24 g"],
      answer: 0,
      explanation: "By definition, one mole of carbon-12 atoms has a mass of exactly 12 grams. This defines the atomic mass unit (amu) and the mole.",
      explanationCn: "根据定义，一摩尔碳-12原子的质量恰好为12克。这定义了原子质量单位(amu)和摩尔。"
    },
    { id: "cq004", type: "choice", topicId: "chem-001",
      question: "How many electrons can occupy the third electron shell (n=3) at maximum?",
      questionCn: "第三电子层(n=3)最多可容纳多少个电子？",
      options: ["8", "18", "32", "50"],
      answer: 1,
      explanation: "Maximum electrons in shell n = 2n². For n=3: 2 × 3² = 18 electrons (2 in 3s, 6 in 3p, 10 in 3d).",
      explanationCn: "第n层最多电子数=2n²。对于n=3：2×3²=18个电子（3s中2个，3p中6个，3d中10个）。"
    },
    { id: "cq005", type: "choice", topicId: "chem-001",
      question: "An atom loses an electron to become a:",
      questionCn: "原子失去一个电子变成：",
      options: ["Negative ion (anion)", "Positive ion (cation)", "Isotope", "Neutral atom"],
      answer: 1,
      explanation: "When an atom loses electrons, it has more protons than electrons, becoming a positively charged ion called a cation.",
      explanationCn: "当原子失去电子时，质子数多于电子数，变成带正电的离子，称为阳离子。"
    },
    // Unit 1 - Periodic Trends
    { id: "cq006", type: "choice", topicId: "chem-002",
      question: "Which element has the highest first ionization energy?",
      questionCn: "哪种元素具有最高的第一电离能？",
      options: ["Na", "Mg", "Al", "Cl"],
      answer: 3,
      explanation: "Ionization energy increases across a period and decreases down a group. Among these Period 3 elements, Cl (Group 17) has the highest ionization energy.",
      explanationCn: "电离能同周期从左到右增大，同族从上到下减小。在这些第三周期元素中，Cl（第17族）具有最高的电离能。"
    },
    { id: "cq007", type: "choice", topicId: "chem-002",
      question: "Atomic radius generally decreases across a period because:",
      questionCn: "原子半径同周期一般减小是因为：",
      options: ["Electrons are added to higher energy levels", "Effective nuclear charge increases", "More shielding electrons", "Atomic mass decreases"],
      answer: 1,
      explanation: "Across a period, protons are added to the nucleus while electrons enter the same shell. The increasing effective nuclear charge pulls electrons closer, reducing atomic radius.",
      explanationCn: "同周期中，质子加入原子核而电子进入同一电子层。有效核电荷的增加将电子拉得更近，减小原子半径。"
    },
    { id: "cq008", type: "choice", topicId: "chem-002",
      question: "Which element is the most electronegative?",
      questionCn: "哪种元素电负性最强？",
      options: ["Oxygen", "Fluorine", "Chlorine", "Nitrogen"],
      answer: 1,
      explanation: "Fluorine is the most electronegative element (4.0 on Pauling scale) due to its small atomic radius and high effective nuclear charge.",
      explanationCn: "氟是电负性最强的元素（鲍林标度4.0），因其原子半径小且有效核电荷高。"
    },
    { id: "cq009", type: "choice", topicId: "chem-002",
      question: "Which ion is larger: Na⁺ or F⁻?",
      questionCn: "哪个离子更大：Na⁺还是F⁻？",
      options: ["Na⁺", "F⁻", "They are the same size", "Cannot be determined"],
      answer: 1,
      explanation: "Both Na⁺ and F⁻ are isoelectronic (10 electrons). However, Na⁺ has 11 protons pulling on 10 electrons, while F⁻ has only 9 protons. Therefore, F⁻ is larger.",
      explanationCn: "Na⁺和F⁻都是等电子的（10个电子）。但Na⁺有11个质子拉10个电子，而F⁻只有9个质子。因此F⁻更大。"
    },
    { id: "cq010", type: "choice", topicId: "chem-002",
      question: "Metallic character increases:",
      questionCn: "金属性如何变化？",
      options: ["Across a period from left to right", "Down a group", "Both of the above", "Neither of the above"],
      answer: 1,
      explanation: "Metallic character decreases across a period (left to right) as elements become more nonmetallic. It increases down a group as valence electrons are farther from the nucleus.",
      explanationCn: "金属性同周期从左到右减小（元素变得更非金属）。同族从上到下增大，因为价电子离原子核更远。"
    },
    // Unit 1 - Electron Configuration
    { id: "cq011", type: "choice", topicId: "chem-003",
      question: "What is the electron configuration of oxygen (atomic number 8)?",
      questionCn: "氧（原子序数8）的电子排布式是什么？",
      options: ["1s²2s⁶", "1s²2s²2p⁶", "1s²2s²2p⁴", "1s²2s²2p²3s²"],
      answer: 2,
      explanation: "Oxygen (Z=8) has 8 electrons: 1s² 2s² 2p⁴. The 2p subshell has 4 electrons, with two unpaired electrons according to Hund's rule.",
      explanationCn: "氧(Z=8)有8个电子：1s² 2s² 2p⁴。根据洪特规则，2p亚层有4个电子，其中两个未成对。"
    },
    { id: "cq012", type: "choice", topicId: "chem-003",
      question: "How many unpaired electrons does a ground-state nitrogen atom have?",
      questionCn: "基态氮原子有多少个未成对电子？",
      options: ["1", "2", "3", "5"],
      answer: 2,
      explanation: "Nitrogen (1s²2s²2p³) has 3 unpaired electrons in the 2p subshell, each occupying a separate orbital according to Hund's rule.",
      explanationCn: "氮(1s²2s²2p³)在2p亚层有3个未成对电子，根据洪特规则各占一个轨道。"
    },
    { id: "cq013", type: "choice", topicId: "chem-003",
      question: "Which rule states that electrons fill degenerate orbitals singly before pairing?",
      questionCn: "哪条规则指出电子在成对之前先单独填充简并轨道？",
      options: ["Aufbau principle", "Pauli exclusion principle", "Hund's rule", "Heisenberg uncertainty principle"],
      answer: 2,
      explanation: "Hund's rule states that electrons fill all orbitals of equal energy (degenerate orbitals) singly before any pairing occurs. This minimizes electron-electron repulsion.",
      explanationCn: "洪特规则指出电子在成对之前先单独填充所有等能量轨道（简并轨道）。这最小化了电子间排斥。"
    },
    { id: "cq014", type: "choice", topicId: "chem-003",
      question: "The electron configuration of Cr (Z=24) is an exception to the Aufbau principle because it is:",
      questionCn: "Cr(Z=24)的电子排布是能量最低原理的例外，因为它是：",
      options: ["[Ar] 3d⁶4s²", "[Ar] 3d⁵4s¹", "[Ar] 3d⁴4s²", "[Ar] 3d⁶"],
      answer: 1,
      explanation: "Cr has [Ar] 3d⁵4s¹ instead of the expected [Ar] 3d⁴4s² because half-filled d subshell (d⁵) provides extra stability.",
      explanationCn: "Cr具有[Ar] 3d⁵4s¹而非预期的[Ar] 3d⁴4s²，因为半满d亚层(d⁵)提供额外的稳定性。"
    },
    { id: "cq015", type: "choice", topicId: "chem-003",
      question: "How many valence electrons does phosphorus (P) have?",
      questionCn: "磷(P)有多少个价电子？",
      options: ["3", "5", "7", "15"],
      answer: 1,
      explanation: "Phosphorus (1s²2s²2p⁶3s²3p³) has 5 valence electrons (3s²3p³). Valence electrons are in the outermost shell.",
      explanationCn: "磷(1s²2s²2p⁶3s²3p³)有5个价电子(3s²3p³)。价电子位于最外层。"
    },
    // Unit 2 - Chemical Bonds
    { id: "cq016", type: "choice", topicId: "chem-004",
      question: "What type of bond forms between sodium and chlorine in NaCl?",
      questionCn: "NaCl中钠和氯之间形成什么类型的键？",
      options: ["Covalent bond", "Ionic bond", "Metallic bond", "Hydrogen bond"],
      answer: 1,
      explanation: "Sodium (metal) transfers one electron to chlorine (nonmetal), forming Na⁺ and Cl⁻ ions held together by electrostatic attraction—an ionic bond.",
      explanationCn: "钠（金属）将一个电子转移给氯（非金属），形成Na⁺和Cl⁻离子，通过静电吸引力结合在一起——离子键。"
    },
    { id: "cq017", type: "choice", topicId: "chem-004",
      question: "Which molecule has a polar covalent bond?",
      questionCn: "哪种分子具有极性共价键？",
      options: ["H₂", "Cl₂", "HCl", "N₂"],
      answer: 2,
      explanation: "HCl has a polar covalent bond because chlorine (EN=3.0) is more electronegative than hydrogen (EN=2.1), creating a dipole. H₂, Cl₂, and N₂ have nonpolar bonds (ΔEN = 0).",
      explanationCn: "HCl具有极性共价键，因为氯(EN=3.0)比氢(EN=2.1)电负性更强，产生偶极。H₂、Cl₂和N₂具有非极性键(ΔEN=0)。"
    },
    { id: "cq018", type: "choice", topicId: "chem-004",
      question: "Metallic bonding is best described as:",
      questionCn: "金属键最好的描述是：",
      options: ["Sharing of electron pairs between atoms", "Attraction between positive and negative ions", "Attraction between metal cations and delocalized electrons", "Weak intermolecular forces"],
      answer: 2,
      explanation: "Metallic bonding involves metal cations arranged in a lattice surrounded by a 'sea' of delocalized valence electrons that are free to move throughout the structure.",
      explanationCn: "金属键涉及排列在晶格中的金属阳离子，周围是被离域的价电子"海洋"，这些电子可在整个结构中自由移动。"
    },
    { id: "cq019", type: "choice", topicId: "chem-004",
      question: "A bond with electronegativity difference of 1.8 is best classified as:",
      questionCn: "电负性差为1.8的键最好归类为：",
      options: ["Nonpolar covalent", "Polar covalent", "Ionic", "Metallic"],
      answer: 2,
      explanation: "Generally: ΔEN < 0.4 = nonpolar covalent; 0.4-1.7 = polar covalent; > 1.7 = ionic. A difference of 1.8 falls in the ionic range.",
      explanationCn: "一般：ΔEN<0.4为非极性共价；0.4-1.7为极性共价；>1.7为离子。1.8的电负性差属于离子键范围。"
    },
    { id: "cq020", type: "choice", topicId: "chem-004",
      question: "Which property is characteristic of ionic compounds?",
      questionCn: "哪种性质是离子化合物的特征？",
      options: ["Low melting point", "Poor electrical conductivity when molten", "High melting point", "Soft and malleable"],
      answer: 2,
      explanation: "Ionic compounds have high melting points due to strong electrostatic forces between ions. They conduct electricity when molten or dissolved, and are typically brittle, not malleable.",
      explanationCn: "离子化合物因离子间强静电作用力而具有高熔点。它们在熔融或溶解时导电，通常脆而非可塑。"
    },
    // Unit 2 - VSEPR
    { id: "cq021", type: "choice", topicId: "chem-005",
      question: "What is the molecular geometry of CH₄?",
      questionCn: "CH₄的分子几何形状是什么？",
      options: ["Trigonal planar", "Tetrahedral", "Trigonal pyramidal", "Linear"],
      answer: 1,
      explanation: "CH₄ has 4 bonding pairs around carbon with no lone pairs. According to VSEPR, this gives a tetrahedral geometry with bond angles of 109.5°.",
      explanationCn: "CH₄中碳周围有4对成键电子对，无孤对电子。根据VSEPR理论，这产生四面体几何，键角109.5°。"
    },
    { id: "cq022", type: "choice", topicId: "chem-005",
      question: "A molecule with 3 bonding pairs and 1 lone pair has what molecular geometry?",
      questionCn: "具有3对成键电子对和1对孤对电子的分子是什么几何形状？",
      options: ["Tetrahedral", "Trigonal planar", "Trigonal pyramidal", "Bent"],
      answer: 2,
      explanation: "Electron geometry is tetrahedral (4 electron domains), but molecular geometry considers only atom positions. With 3 bonds and 1 lone pair, the shape is trigonal pyramidal (like NH₃).",
      explanationCn: "电子几何为四面体（4个电子域），但分子几何只考虑原子位置。3个键和1对孤对电子的形状为三角锥形（如NH₃）。"
    },
    { id: "cq023", type: "choice", topicId: "chem-005",
      question: "The bond angle in H₂O is approximately:",
      questionCn: "H₂O中的键角约为：",
      options: ["109.5°", "120°", "104.5°", "180°"],
      answer: 2,
      explanation: "Water has 2 bonding pairs and 2 lone pairs. Lone pair-lone pair repulsion > lone pair-bond pair > bond pair-bond pair, compressing the H-O-H angle to ~104.5° (less than the ideal tetrahedral 109.5°).",
      explanationCn: "水有2对成键电子对和2对孤对电子。孤对-孤对排斥>孤对-成键排斥>成键-成键排斥，将H-O-H角压缩至约104.5°（小于理想四面体的109.5°）。"
    },
    { id: "cq024", type: "choice", topicId: "chem-005",
      question: "Which molecule is nonpolar despite having polar bonds?",
      questionCn: "哪种分子虽有极性键但为非极性分子？",
      options: ["HCl", "H₂O", "CO₂", "NH₃"],
      answer: 2,
      explanation: "CO₂ has polar C=O bonds, but its linear geometry causes the bond dipoles to cancel, making the molecule nonpolar overall. HCl, H₂O, and NH₃ are all polar.",
      explanationCn: "CO₂有极性C=O键，但其直线几何使键偶极抵消，整个分子为非极性。HCl、H₂O和NH₃都是极性的。"
    },
    { id: "cq025", type: "choice", topicId: "chem-005",
      question: "The electron domain geometry of SF₆ is:",
      questionCn: "SF₆的电子域几何是：",
      options: ["Tetrahedral", "Trigonal bipyramidal", "Octahedral", "Square planar"],
      answer: 2,
      explanation: "SF₆ has 6 bonding pairs and no lone pairs around sulfur, giving an octahedral electron domain geometry and molecular geometry with 90° bond angles.",
      explanationCn: "SF₆中硫周围有6对成键电子对，无孤对电子，产生八面体电子域几何和分子几何，键角90°。"
    },
    // Unit 2 - Hybridization
    { id: "cq026", type: "choice", topicId: "chem-006",
      question: "What is the hybridization of carbon in methane (CH₄)?",
      questionCn: "甲烷(CH₄)中碳的杂化类型是什么？",
      options: ["sp", "sp²", "sp³", "sp³d"],
      answer: 2,
      explanation: "Carbon in CH₄ forms 4 sigma bonds with no lone pairs. Hybridization = number of sigma bonds + lone pairs = 4, which corresponds to sp³.",
      explanationCn: "CH₄中的碳形成4个σ键，无孤对电子。杂化数=σ键数+孤对电子数=4，对应sp³杂化。"
    },
    { id: "cq027", type: "choice", topicId: "chem-006",
      question: "Ethene (C₂H₄) has what hybridization at each carbon?",
      questionCn: "乙烯(C₂H₄)中每个碳的杂化类型是什么？",
      options: ["sp", "sp²", "sp³", "unhybridized"],
      answer: 1,
      explanation: "Each carbon in ethene forms 3 sigma bonds (2 C-H, 1 C-C) and 1 pi bond (C=C). With 3 sigma bonds and no lone pairs, hybridization is sp², giving trigonal planar geometry.",
      explanationCn: "乙烯中每个碳形成3个σ键（2个C-H，1个C-C）和1个π键（C=C）。3个σ键无孤对电子，杂化为sp²，产生平面三角形几何。"
    },
    { id: "cq028", type: "choice", topicId: "chem-006",
      question: "A triple bond consists of:",
      questionCn: "三键由什么组成？",
      options: ["3 sigma bonds", "1 sigma and 2 pi bonds", "2 sigma and 1 pi bond", "3 pi bonds"],
      answer: 1,
      explanation: "A triple bond consists of 1 sigma bond (head-on overlap) and 2 pi bonds (sideways overlap of p orbitals). A double bond is 1 sigma + 1 pi.",
      explanationCn: "三键由1个σ键（头对头重叠）和2个π键（p轨道侧向重叠）组成。双键是1个σ+1个π。"
    },
    { id: "cq029", type: "choice", topicId: "chem-006",
      question: "What hybridization corresponds to a linear geometry?",
      questionCn: "哪种杂化对应直线几何？",
      options: ["sp", "sp²", "sp³", "sp³d"],
      answer: 0,
      explanation: "sp hybridization (2 hybrid orbitals) gives linear geometry with 180° bond angles. Examples: CO₂, BeCl₂, C₂H₂ (acetylene).",
      explanationCn: "sp杂化（2个杂化轨道）产生直线几何，键角180°。例子：CO₂、BeCl₂、C₂H₂（乙炔）。"
    },
    { id: "cq030", type: "choice", topicId: "chem-006",
      question: "How many sigma and pi bonds are in a benzene (C₆H₆) molecule?",
      questionCn: "苯(C₆H₆)分子中有多少个σ键和π键？",
      options: ["6σ, 6π", "12σ, 3π", "6σ, 3π", "9σ, 3π"],
      answer: 1,
      explanation: "Benzene has 6 C-C sigma bonds, 6 C-H sigma bonds (12 sigma total), and 3 pi bonds delocalized over the ring (the second bond of each 'double bond' in resonance structures).",
      explanationCn: "苯有6个C-C σ键、6个C-H σ键（共12个σ），以及离域在环上的3个π键（共振结构中每个"双键"的第二个键）。"
    },
    // Unit 3 - Stoichiometry
    { id: "cq031", type: "choice", topicId: "chem-007",
      question: "How many moles of CO₂ are produced when 2 moles of C₃H₈ burn completely?",
      questionCn: "2摩尔C₃H₈完全燃烧产生多少摩尔CO₂？",
      options: ["2 mol", "3 mol", "6 mol", "8 mol"],
      answer: 2,
      explanation: "C₃H₈ + 5O₂ → 3CO₂ + 4H₂O. The mole ratio of C₃H₈ to CO₂ is 1:3. So 2 mol C₃H₈ produces 2 × 3 = 6 mol CO₂.",
      explanationCn: "C₃H₈ + 5O₂ → 3CO₂ + 4H₂O。C₃H₈与CO₂的摩尔比为1:3。因此2 mol C₃H₈产生2×3=6 mol CO₂。"
    },
    { id: "cq032", type: "choice", topicId: "chem-007",
      question: "What is the limiting reactant in a reaction?",
      questionCn: "反应中的限量试剂是什么？",
      options: ["The reactant present in the largest amount", "The reactant that is completely consumed first", "The reactant with the highest molar mass", "The catalyst"],
      answer: 1,
      explanation: "The limiting reactant is the reactant that is completely consumed first, limiting the amount of product that can be formed. Excess reactants remain after the reaction.",
      explanationCn: "限量试剂是首先被完全消耗的反应物，限制了可形成的产物量。过量试剂在反应后剩余。"
    },
    { id: "cq033", type: "choice", topicId: "chem-007",
      question: "How many atoms are in 1 mole of H₂O?",
      questionCn: "1摩尔H₂O中有多少个原子？",
      options: ["6.02 × 10²³", "3 × 6.02 × 10²³", "2 × 6.02 × 10²³", "18 × 6.02 × 10²³"],
      answer: 1,
      explanation: "Each H₂O molecule contains 3 atoms (2 H + 1 O). One mole of H₂O contains 3 × 6.02 × 10²³ = 1.806 × 10²⁴ atoms.",
      explanationCn: "每个H₂O分子含3个原子（2个H+1个O）。1摩尔H₂O含3×6.02×10²³=1.806×10²⁴个原子。"
    },
    { id: "cq034", type: "choice", topicId: "chem-007",
      question: "Percent yield is calculated as:",
      questionCn: "产率计算公式为：",
      options: ["(actual yield / theoretical yield) × 100%", "(theoretical yield / actual yield) × 100%", "actual yield + theoretical yield", "(actual yield - theoretical yield) / theoretical yield"],
      answer: 0,
      explanation: "Percent yield = (actual yield / theoretical yield) × 100%. Actual yield is experimentally obtained; theoretical yield is calculated from stoichiometry.",
      explanationCn: "产率=(实际产量/理论产量)×100%。实际产量是实验获得的；理论产量是根据化学计量计算的。"
    },
    { id: "cq035", type: "choice", topicId: "chem-007",
      question: "At STP, what volume does 0.5 mol of O₂ gas occupy?",
      questionCn: "在STP下，0.5 mol O₂气体占多大体积？",
      options: ["11.2 L", "22.4 L", "44.8 L", "5.6 L"],
      answer: 0,
      explanation: "At STP, 1 mol of any ideal gas occupies 22.4 L. So 0.5 mol occupies 0.5 × 22.4 = 11.2 L.",
      explanationCn: "在STP下，1摩尔任何理想气体占22.4 L。因此0.5摩尔占0.5×22.4=11.2 L。"
    },
    // Unit 3 - Solutions
    { id: "cq036", type: "choice", topicId: "chem-008",
      question: "What is the molarity of a solution containing 2 moles of NaCl in 0.5 L of solution?",
      questionCn: "0.5 L溶液中含2摩尔NaCl，其摩尔浓度是多少？",
      options: ["1 M", "2 M", "4 M", "0.5 M"],
      answer: 2,
      explanation: "Molarity = moles of solute / liters of solution = 2 mol / 0.5 L = 4 M.",
      explanationCn: "摩尔浓度=溶质摩尔数/溶液体积(L)=2 mol/0.5 L=4 M。"
    },
    { id: "cq037", type: "choice", topicId: "chem-008",
      question: "In a titration, what is the equivalence point?",
      questionCn: "滴定中的等当点是什么？",
      options: ["Where the indicator changes color", "Where moles of acid = moles of base (stoichiometrically)", "Where pH = 7", "Where the reaction stops"],
      answer: 1,
      explanation: "The equivalence point is where stoichiometrically equivalent amounts of acid and base have reacted. For strong acid-strong base titrations, this occurs at pH = 7, but not for other combinations.",
      explanationCn: "等当点是酸和碱按化学计量等当量反应的点。对于强酸强碱滴定，这在pH=7时发生，但其他组合不一定。"
    },
    { id: "cq038", type: "choice", topicId: "chem-008",
      question: "How much water must be added to 100 mL of 2.0 M NaCl to make it 0.5 M?",
      questionCn: "需要加多少水到100 mL 2.0 M NaCl中使其变为0.5 M？",
      options: ["100 mL", "200 mL", "300 mL", "400 mL"],
      answer: 2,
      explanation: "Using M₁V₁ = M₂V₂: 2.0 × 100 = 0.5 × V₂, so V₂ = 400 mL. Water to add = 400 - 100 = 300 mL.",
      explanationCn: "使用M₁V₁=M₂V₂：2.0×100=0.5×V₂，因此V₂=400 mL。需加水=400-100=300 mL。"
    },
    { id: "cq039", type: "choice", topicId: "chem-008",
      question: "Which of the following is a colligative property?",
      questionCn: "以下哪项是依数性？",
      options: ["Boiling point elevation", "Color of the solution", "Density of the solution", "Refractive index"],
      answer: 0,
      explanation: "Colligative properties depend on the number of solute particles, not their identity. They include boiling point elevation, freezing point depression, vapor pressure lowering, and osmotic pressure.",
      explanationCn: "依数性取决于溶质粒子数量而非其种类。包括沸点升高、凝固点降低、蒸气压降低和渗透压。"
    },
    { id: "cq040", type: "choice", topicId: "chem-008",
      question: "A solution contains 10 g NaOH (MW=40 g/mol) in 500 mL. What is the molarity?",
      questionCn: "500 mL溶液中含10 g NaOH(MW=40 g/mol)，其摩尔浓度是多少？",
      options: ["0.25 M", "0.5 M", "1.0 M", "2.0 M"],
      answer: 1,
      explanation: "Moles of NaOH = 10 g / 40 g/mol = 0.25 mol. Molarity = 0.25 mol / 0.5 L = 0.5 M.",
      explanationCn: "NaOH摩尔数=10 g/40 g/mol=0.25 mol。摩尔浓度=0.25 mol/0.5 L=0.5 M。"
    },
    // Unit 3 - Redox
    { id: "cq041", type: "choice", topicId: "chem-009",
      question: "In the reaction 2Na + Cl₂ → 2NaCl, what is oxidized?",
      questionCn: "在反应2Na + Cl₂ → 2NaCl中，什么被氧化了？",
      options: ["Na", "Cl₂", "NaCl", "Nothing"],
      answer: 0,
      explanation: "Na goes from oxidation state 0 to +1 (loses electrons), so Na is oxidized. Cl goes from 0 to -1 (gains electrons), so Cl₂ is reduced.",
      explanationCn: "Na从氧化态0变为+1（失去电子），因此Na被氧化。Cl从0变为-1（获得电子），因此Cl₂被还原。"
    },
    { id: "cq042", type: "choice", topicId: "chem-009",
      question: "What is the oxidation state of sulfur in SO₄²⁻?",
      questionCn: "SO₄²⁻中硫的氧化态是多少？",
      options: ["+4", "+6", "+2", "-2"],
      answer: 1,
      explanation: "Each O is -2 (total -8). The overall charge is -2. So S + (-8) = -2, therefore S = +6.",
      explanationCn: "每个O为-2（共-8）。总电荷为-2。因此S+(-8)=-2，所以S=+6。"
    },
    { id: "cq043", type: "choice", topicId: "chem-009",
      question: "In an electrochemical cell, oxidation occurs at the:",
      questionCn: "在电化学电池中，氧化发生在：",
      options: ["Cathode", "Anode", "Salt bridge", "External wire"],
      answer: 1,
      explanation: "Oxidation occurs at the anode (AN OX - oxidation at anode). Reduction occurs at the cathode (RED CAT - reduction at cathode).",
      explanationCn: "氧化发生在阳极（AN OX-阳极氧化）。还原发生在阴极（RED CAT-阴极还原）。"
    },
    { id: "cq044", type: "choice", topicId: "chem-009",
      question: "What is the standard cell potential for a galvanic cell with E°cathode = +0.34 V and E°anode = -0.76 V?",
      questionCn: "E°阴极=+0.34 V、E°阳极=-0.76 V的原电池标准电动势是多少？",
      options: ["0.42 V", "1.10 V", "-0.42 V", "-1.10 V"],
      answer: 1,
      explanation: "E°cell = E°cathode - E°anode = 0.34 - (-0.76) = 0.34 + 0.76 = 1.10 V. Positive E°cell indicates a spontaneous reaction.",
      explanationCn: "E°cell=E°cathode-E°anode=0.34-(-0.76)=0.34+0.76=1.10 V。正的E°cell表示自发反应。"
    },
    { id: "cq045", type: "choice", topicId: "chem-009",
      question: "Which species is the strongest reducing agent among the following?",
      questionCn: "以下哪种物质是最强的还原剂？",
      options: ["F₂", "Na", "Cu²⁺", "Ag⁺"],
      answer: 1,
      explanation: "Na has the most negative standard reduction potential (E° = -2.71 V), meaning it is most easily oxidized. The species most easily oxidized is the strongest reducing agent.",
      explanationCn: "Na具有最负的标准还原电势(E°=-2.71 V)，意味着它最容易被氧化。最容易被氧化的物质是最强的还原剂。"
    },
    // Unit 4 - Gases
    { id: "cq046", type: "choice", topicId: "chem-010",
      question: "At constant temperature, if the volume of a gas is halved, the pressure:",
      questionCn: "恒温下，如果气体体积减半，压力：",
      options: ["Halves", "Doubles", "Quadruples", "Stays the same"],
      answer: 1,
      explanation: "Boyle's Law: P ∝ 1/V at constant T. If volume is halved, pressure doubles (P₁V₁ = P₂V₂).",
      explanationCn: "波义耳定律：恒温下P∝1/V。如果体积减半，压力加倍(P₁V₁=P₂V₂)。"
    },
    { id: "cq047", type: "choice", topicId: "chem-010",
      question: "At STP, which gas has the greatest density?",
      questionCn: "在STP下，哪种气体密度最大？",
      options: ["H₂ (2 g/mol)", "O₂ (32 g/mol)", "CO₂ (44 g/mol)", "All have the same density"],
      answer: 2,
      explanation: "At STP, density = molar mass / 22.4 L/mol. Higher molar mass means higher density. CO₂ (44 g/mol) has the highest density among these options.",
      explanationCn: "在STP下，密度=摩尔质量/22.4 L/mol。摩尔质量越大密度越大。CO₂(44 g/mol)在这些选项中密度最大。"
    },
    { id: "cq048", type: "choice", topicId: "chem-010",
      question: "Dalton's Law of Partial Pressures states that:",
      questionCn: "道尔顿分压定律指出：",
      options: ["Total pressure equals the sum of partial pressures", "All gases have the same pressure", "Pressure is inversely proportional to volume", "Pressure is directly proportional to temperature"],
      answer: 0,
      explanation: "Dalton's Law: P_total = P₁ + P₂ + P₃ + ... The total pressure of a gas mixture equals the sum of the partial pressures of each component gas.",
      explanationCn: "道尔顿定律：P_total=P₁+P₂+P₃+...。混合气体总压等于各组分气体分压之和。"
    },
    { id: "cq049", type: "choice", topicId: "chem-010",
      question: "Which gas effuses fastest at the same temperature?",
      questionCn: "同温度下哪种气体逸出最快？",
      options: ["O₂ (32 g/mol)", "N₂ (28 g/mol)", "H₂ (2 g/mol)", "CO₂ (44 g/mol)"],
      answer: 2,
      explanation: "According to Graham's Law, rate of effusion is inversely proportional to the square root of molar mass. H₂ has the lowest molar mass, so it effuses fastest.",
      explanationCn: "根据格拉罕姆定律，逸出速率与摩尔质量的平方根成反比。H₂摩尔质量最小，因此逸出最快。"
    },
    { id: "cq050", type: "choice", topicId: "chem-010",
      question: "If a gas occupies 5.0 L at 300 K and 1.0 atm, what volume does it occupy at 300 K and 2.0 atm?",
      questionCn: "气体在300 K和1.0 atm下占5.0 L，在300 K和2.0 atm下占多大体积？",
      options: ["10.0 L", "2.5 L", "5.0 L", "1.25 L"],
      answer: 1,
      explanation: "Boyle's Law: P₁V₁ = P₂V₂. 1.0 × 5.0 = 2.0 × V₂, so V₂ = 5.0/2.0 = 2.5 L.",
      explanationCn: "波义耳定律：P₁V₁=P₂V₂。1.0×5.0=2.0×V₂，因此V₂=5.0/2.0=2.5 L。"
    }
  ]
};

// ==================== 词汇表数据 ====================
const GLOSSARY_DATA = [
  { word: "Activation energy", phonetic: "/ˌæktɪˈveɪʃən ˈenədʒi/", meaning: "活化能", category: "chem", example: "Enzymes lower the activation energy required for biochemical reactions to proceed." },
  { word: "Active site", phonetic: "/ˈæktɪv saɪt/", meaning: "活性部位", category: "bio", example: "The substrate binds to the enzyme's active site, where catalysis occurs." },
  { word: "Active transport", phonetic: "/ˈæktɪv ˈtrænspɔːrt/", meaning: "主动运输", category: "bio", example: "The sodium-potassium pump uses ATP to actively transport ions against their concentration gradient." },
  { word: "Adenine", phonetic: "/ˈædənɪn/", meaning: "腺嘌呤", category: "bio", example: "Adenine pairs with thymine in DNA through two hydrogen bonds." },
  { word: "Adhesion", phonetic: "/ədˈhiːʒn/", meaning: "附着力", category: "bio", example: "Adhesion between water molecules and xylem walls helps water move up plants." },
  { word: "Allele", phonetic: "/əˈliːl/", meaning: "等位基因", category: "bio", example: "An organism inherits two alleles for each gene, one from each parent." },
  { word: "Amino acid", phonetic: "/əˈmiːnoʊ ˈæsɪd/", meaning: "氨基酸", category: "bio", example: "Proteins are polymers of 20 different amino acids linked by peptide bonds." },
  { word: "Amylase", phonetic: "/ˈæmɪleɪs/", meaning: "淀粉酶", category: "bio", example: "Salivary amylase begins the digestion of starch in the mouth." },
  { word: "Aneuploidy", phonetic: "/ˌænjuˈplɔɪdi/", meaning: "非整倍性", category: "bio", example: "Down syndrome is caused by aneuploidy, specifically trisomy 21." },
  { word: "Anode", phonetic: "/ˈænoʊd/", meaning: "阳极", category: "chem", example: "In an electrochemical cell, oxidation occurs at the anode." },
  { word: "Anticodon", phonetic: "/ˌæntiˈkoʊdɒn/", meaning: "反密码子", category: "bio", example: "The tRNA anticodon pairs with the complementary mRNA codon during translation." },
  { word: "Arrhenius acid", phonetic: "/əˈriːniəs ˈæsɪd/", meaning: "阿伦尼乌斯酸", category: "chem", example: "According to Arrhenius, an acid is a substance that produces H⁺ ions in water." },
  { word: "Atom", phonetic: "/ˈætəm/", meaning: "原子", category: "chem", example: "The atom is the basic unit of matter, consisting of protons, neutrons, and electrons." },
  { word: "Atomic mass", phonetic: "/əˈtɒmɪk mæs/", meaning: "原子质量", category: "chem", example: "The atomic mass of carbon-12 is exactly 12 atomic mass units." },
  { word: "Atomic orbital", phonetic: "/əˈtɒmɪk ˈɔːrbɪtl/", meaning: "原子轨道", category: "chem", example: "An s orbital is spherical, while p orbitals have a dumbbell shape." },
  { word: "ATP", phonetic: "/ˌeɪ tiː ˈpiː/", meaning: "三磷酸腺苷", category: "bio", example: "ATP is the primary energy currency of the cell, powering most cellular processes." },
  { word: "Autotroph", phonetic: "/ˈɔːtətroʊf/", meaning: "自养生物", category: "bio", example: "Plants are autotrophs that produce their own food through photosynthesis." },
  { word: "Avogadro's number", phonetic: "/ˌɑːvəˈɡɑːdroʊz ˈnʌmbər/", meaning: "阿伏伽德罗常数", category: "chem", example: "Avogadro's number (6.022 × 10²³) represents the number of particles in one mole." },
  { word: "Base pairing", phonetic: "/beɪs ˈpeərɪŋ/", meaning: "碱基配对", category: "bio", example: "In DNA, base pairing follows Chargaff's rules: A pairs with T, and G pairs with C." },
  { word: "Buffer", phonetic: "/ˈbʌfər/", meaning: "缓冲溶液", category: "chem", example: "Blood contains bicarbonate buffer to maintain pH around 7.4." },
  { word: "Calvin cycle", phonetic: "/ˈkælvɪn ˈsaɪkl/", meaning: "卡尔文循环", category: "bio", example: "The Calvin cycle uses ATP and NADPH to fix CO₂ into carbohydrates." },
  { word: "Carbohydrate", phonetic: "/ˌkɑːrboʊˈhaɪdreɪt/", meaning: "碳水化合物", category: "bio", example: "Glucose is a simple carbohydrate that serves as the primary energy source for cells." },
  { word: "Catalyst", phonetic: "/ˈkætəlɪst/", meaning: "催化剂", category: "chem", example: "A catalyst speeds up a chemical reaction without being consumed in the process." },
  { word: "Cathode", phonetic: "/ˈkæθoʊd/", meaning: "阴极", category: "chem", example: "Reduction occurs at the cathode in both galvanic and electrolytic cells." },
  { word: "Cell membrane", phonetic: "/sel ˈmembreɪn/", meaning: "细胞膜", category: "bio", example: "The cell membrane is a selectively permeable phospholipid bilayer." },
  { word: "Cellular respiration", phonetic: "/ˈseljələr ˌrespəˈreɪʃn/", meaning: "细胞呼吸", category: "bio", example: "Cellular respiration breaks down glucose to produce ATP for cellular work." },
  { word: "Centromere", phonetic: "/ˈsentrəmiːr/", meaning: "着丝粒", category: "bio", example: "The centromere is the region where sister chromatids are joined together." },
  { word: "Chemical bond", phonetic: "/ˈkemɪkl bɒnd/", meaning: "化学键", category: "chem", example: "Chemical bonds include ionic, covalent, and metallic types." },
  { word: "Chemical equilibrium", phonetic: "/ˈkemɪkl ˌiːkwɪˈlɪbriəm/", meaning: "化学平衡", category: "chem", example: "At chemical equilibrium, the forward and reverse reaction rates are equal." },
  { word: "Chemiosmosis", phonetic: "/ˌkemiˈɒzməsɪs/", meaning: "化学渗透", category: "bio", example: "Chemiosmosis uses the proton gradient to drive ATP synthesis." },
  { word: "Chloroplast", phonetic: "/ˈklɔːrəplæst/", meaning: "叶绿体", category: "bio", example: "Chloroplasts contain chlorophyll and are the site of photosynthesis in plant cells." },
  { word: "Chromatid", phonetic: "/ˈkroʊmətɪd/", meaning: "染色单体", category: "bio", example: "After DNA replication, each chromosome consists of two sister chromatids." },
  { word: "Chromosome", phonetic: "/ˈkroʊməsoʊm/", meaning: "染色体", category: "bio", example: "Humans have 46 chromosomes arranged in 23 pairs in somatic cells." },
  { word: "Codon", phonetic: "/ˈkoʊdɒn/", meaning: "密码子", category: "bio", example: "Each mRNA codon consists of three nucleotides that specify one amino acid." },
  { word: "Cohesion", phonetic: "/koʊˈhiːʒn/", meaning: "内聚力", category: "bio", example: "Cohesion between water molecules creates surface tension." },
  { word: "Concentration", phonetic: "/ˌkɑːnsnˈtreɪʃn/", meaning: "浓度", category: "chem", example: "Molarity is a measure of concentration expressed in moles per liter." },
  { word: "Covalent bond", phonetic: "/koʊˈveɪlənt bɒnd/", meaning: "共价键", category: "chem", example: "A covalent bond forms when two atoms share a pair of electrons." },
  { word: "Crossing over", phonetic: "/ˈkrɔːsɪŋ ˈoʊvər/", meaning: "交叉互换", category: "bio", example: "Crossing over during prophase I increases genetic diversity in gametes." },
  { word: "Cyclin", phonetic: "/ˈsaɪklɪn/", meaning: "周期蛋白", category: "bio", example: "Cyclins regulate the cell cycle by activating cyclin-dependent kinases (CDKs)." },
  { word: "Cytoplasm", phonetic: "/ˈsaɪtəplæzəm/", meaning: "细胞质", category: "bio", example: "The cytoplasm includes the cytosol and all organelles except the nucleus." },
  { word: "Cytoskeleton", phonetic: "/ˌsaɪtəˈskelɪtn/", meaning: "细胞骨架", category: "bio", example: "The cytoskeleton provides structural support and enables cell movement." },
  { word: "Dehydration synthesis", phonetic: "/ˌdiːhaɪˈdreɪʃn ˈsɪnθəsɪs/", meaning: "脱水缩合", category: "bio", example: "Dehydration synthesis joins monomers by removing a water molecule." },
  { word: "Denaturation", phonetic: "/diːˌneɪtʃəˈreɪʃn/", meaning: "变性", category: "bio", example: "High temperatures can cause protein denaturation by disrupting weak bonds." },
  { word: "Diffusion", phonetic: "/dɪˈfjuːʒn/", meaning: "扩散", category: "bio", example: "Oxygen enters cells by simple diffusion across the plasma membrane." },
  { word: "Diploid", phonetic: "/ˈdɪplɔɪd/", meaning: "二倍体", category: "bio", example: "Somatic cells in humans are diploid, containing 46 chromosomes." },
  { word: "Dissociation", phonetic: "/dɪˌsoʊʃiˈeɪʃn/", meaning: "解离", category: "chem", example: "Strong acids completely dissociate into ions in aqueous solution." },
  { word: "DNA ligase", phonetic: "/ˌdiː en ˈeɪ ˈlaɪɡeɪs/", meaning: "DNA连接酶", category: "bio", example: "DNA ligase joins Okazaki fragments during DNA replication." },
  { word: "DNA polymerase", phonetic: "/ˌdiː en ˈeɪ pəˈlɪməreɪs/", meaning: "DNA聚合酶", category: "bio", example: "DNA polymerase synthesizes new DNA strands during replication." },
  { word: "Electrolyte", phonetic: "/ɪˈlektrəlaɪt/", meaning: "电解质", category: "chem", example: "NaCl is a strong electrolyte because it completely dissociates in water." },
  { word: "Electron", phonetic: "/ɪˈlektrɒn/", meaning: "电子", category: "chem", example: "Electrons occupy orbitals around the atomic nucleus." },
  { word: "Electronegativity", phonetic: "/ɪˌlektrɒneɡəˈtɪvəti/", meaning: "电负性", category: "chem", example: "Fluorine has the highest electronegativity on the Pauling scale." },
  { word: "Endocytosis", phonetic: "/ˌendoʊsaɪˈtoʊsɪs/", meaning: "胞吞作用", category: "bio", example: "Phagocytosis is a type of endocytosis where cells engulf large particles." },
  { word: "Endoplasmic reticulum", phonetic: "/ˌendoʊˈplæzmɪk rɪˈtɪkjələm/", meaning: "内质网", category: "bio", example: "The rough ER has ribosomes on its surface and synthesizes proteins." },
  { word: "Endosymbiosis", phonetic: "/ˌendoʊˌsɪmbaɪˈoʊsɪs/", meaning: "内共生", category: "bio", example: "The endosymbiotic theory explains the origin of mitochondria and chloroplasts." },
  { word: "Enthalpy", phonetic: "/ˈenθəlpi/", meaning: "焓", category: "chem", example: "The enthalpy change (ΔH) represents heat absorbed or released at constant pressure." },
  { word: "Entropy", phonetic: "/ˈentrəpi/", meaning: "熵", category: "chem", example: "The second law states that entropy of the universe always increases." },
  { word: "Enzyme", phonetic: "/ˈenzaɪm/", meaning: "酶", category: "bio", example: "Each enzyme catalyzes a specific reaction by binding to its substrate." },
  { word: "Equilibrium constant", phonetic: "/ˌiːkwɪˈlɪbriəm ˈkɒnstənt/", meaning: "平衡常数", category: "chem", example: "K > 1 indicates products are favored at equilibrium." },
  { word: "Ester bond", phonetic: "/ˈestər bɒnd/", meaning: "酯键", category: "bio", example: "Lipids are joined by ester bonds between fatty acids and glycerol." },
  { word: "Eukaryote", phonetic: "/juːˈkærioʊt/", meaning: "真核生物", category: "bio", example: "Animals, plants, fungi, and protists are all eukaryotes." },
  { word: "Exocytosis", phonetic: "/ˌeksoʊsaɪˈtoʊsɪs/", meaning: "胞吐作用", category: "bio", example: "Neurotransmitters are released from neurons through exocytosis." },
  { word: "Exon", phonetic: "/ˈeksɒn/", meaning: "外显子", category: "bio", example: "Exons are the coding regions of genes that remain in mature mRNA." },
  { word: "Facilitated diffusion", phonetic: "/fəˈsɪlɪteɪtɪd dɪˈfjuːʒn/", meaning: "协助扩散", category: "bio", example: "Glucose enters cells through facilitated diffusion via GLUT transporters." },
  { word: "Fermentation", phonetic: "/ˌfɜːrmənˈteɪʃn/", meaning: "发酵", category: "bio", example: "Lactic acid fermentation occurs in muscle cells during intense exercise." },
  { word: "Fluid mosaic model", phonetic: "/ˈfluːɪd moʊˈzeɪɪk ˈmɑːdl/", meaning: "流动镶嵌模型", category: "bio", example: "The fluid mosaic model describes the cell membrane as a dynamic lipid bilayer with embedded proteins." },
  { word: "Gibbs free energy", phonetic: "/ɡɪbz friː ˈenədʒi/", meaning: "吉布斯自由能", category: "chem", example: "A reaction is spontaneous when ΔG < 0." },
  { word: "Glycolysis", phonetic: "/ɡlaɪˈkɒləsɪs/", meaning: "糖酵解", category: "bio", example: "Glycolysis splits glucose into two pyruvate molecules in the cytoplasm." },
  { word: "Golgi apparatus", phonetic: "/ˈɡoʊldʒi ˌæpəˈreɪtəs/", meaning: "高尔基体", category: "bio", example: "The Golgi apparatus modifies, sorts, and packages proteins for transport." },
  { word: "Haploid", phonetic: "/ˈhæplɔɪd/", meaning: "单倍体", category: "bio", example: "Gametes are haploid cells containing 23 chromosomes." },
  { word: "Hardy-Weinberg equilibrium", phonetic: "/ˈhɑːrdi ˈwaɪnbɜːrɡ ˌiːkwɪˈlɪbriəm/", meaning: "哈迪-温伯格平衡", category: "bio", example: "The Hardy-Weinberg equation (p² + 2pq + q² = 1) describes genetic equilibrium." },
  { word: "Henderson-Hasselbalch equation", phonetic: "/ˈhendərsən ˈhæsəlbɑːk ɪˈkweɪʒn/", meaning: "亨德森-哈塞尔巴赫方程", category: "chem", example: "The Henderson-Hasselbalch equation calculates buffer pH: pH = pKa + log([A⁻]/[HA])." },
  { word: "Heterotroph", phonetic: "/ˈhetərətroʊf/", meaning: "异养生物", category: "bio", example: "Animals are heterotrophs that obtain energy by consuming other organisms." },
  { word: "Homeostasis", phonetic: "/ˌhoʊmiəˈsteɪsɪs/", meaning: "稳态", category: "bio", example: "Homeostasis maintains stable internal conditions despite environmental changes." },
  { word: "Homologous chromosomes", phonetic: "/həˈmɒləɡəs ˈkroʊməsoʊmz/", meaning: "同源染色体", category: "bio", example: "Homologous chromosomes pair during meiosis I and may undergo crossing over." },
  { word: "Hydrogen bond", phonetic: "/ˈhaɪdrədʒən bɒnd/", meaning: "氢键", category: "bio", example: "Hydrogen bonds between base pairs hold the two DNA strands together." },
  { word: "Hydrophilic", phonetic: "/ˌhaɪdrəˈfɪlɪk/", meaning: "亲水的", category: "bio", example: "The phosphate head of a phospholipid is hydrophilic." },
  { word: "Hydrophobic", phonetic: "/ˌhaɪdrəˈfoʊbɪk/", meaning: "疏水的", category: "bio", example: "The fatty acid tails of phospholipids are hydrophobic." },
  { word: "Hydrolysis", phonetic: "/haɪˈdrɒləsɪs/", meaning: "水解", category: "bio", example: "Hydrolysis breaks polymers into monomers by adding water." },
  { word: "Induced fit", phonetic: "/ɪnˈduːst fɪt/", meaning: "诱导契合", category: "bio", example: "The induced fit model states that the enzyme changes shape to better fit the substrate." },
  { word: "Inhibitor", phonetic: "/ɪnˈhɪbɪtər/", meaning: "抑制剂", category: "bio", example: "Competitive inhibitors bind to the enzyme's active site." },
  { word: "Integral protein", phonetic: "/ˈɪntɪɡrəl ˈproʊtiːn/", meaning: "整合蛋白", category: "bio", example: "Integral proteins span the entire phospholipid bilayer." },
  { word: "Intermolecular force", phonetic: "/ˌɪntərməˈlekjələr fɔːrs/", meaning: "分子间作用力", category: "chem", example: "Hydrogen bonding is a strong type of intermolecular force." },
  { word: "Intron", phonetic: "/ˈɪntrɒn/", meaning: "内含子", category: "bio", example: "Introns are non-coding sequences removed during RNA splicing." },
  { word: "Ion", phonetic: "/ˈaɪən/", meaning: "离子", category: "chem", example: "A sodium ion (Na⁺) forms when a sodium atom loses one electron." },
  { word: "Ionic bond", phonetic: "/aɪˈɒnɪk bɒnd/", meaning: "离子键", category: "chem", example: "NaCl forms through ionic bonding between Na⁺ and Cl⁻ ions." },
  { word: "Isotope", phonetic: "/ˈaɪsətoʊp/", meaning: "同位素", category: "chem", example: "Carbon-12 and carbon-14 are isotopes of carbon." },
  { word: "Kinetic energy", phonetic: "/kɪˈnetɪk ˈenədʒi/", meaning: "动能", category: "chem", example: "The average kinetic energy of gas molecules is proportional to temperature." },
  { word: "Krebs cycle", phonetic: "/kreɪbz ˈsaɪkl/", meaning: "Krebs循环", category: "bio", example: "The Krebs cycle generates NADH and FADH₂ for the electron transport chain." },
  { word: "Le Chatelier's principle", phonetic: "/lə ʃɑːˈteliːeɪz ˈprɪnsəpl/", meaning: "勒夏特列原理", category: "chem", example: "Le Chatelier's principle predicts how systems at equilibrium respond to disturbances." },
  { word: "Lipid", phonetic: "/ˈlɪpɪd/", meaning: "脂质", category: "bio", example: "Triglycerides are lipids composed of glycerol and three fatty acids." },
  { word: "Lysosome", phonetic: "/ˈlaɪsəsoʊm/", meaning: "溶酶体", category: "bio", example: "Lysosomes contain hydrolytic enzymes for intracellular digestion." },
  { word: "Meiosis", phonetic: "/maɪˈoʊsɪs/", meaning: "减数分裂", category: "bio", example: "Meiosis produces four haploid gametes from one diploid cell." },
  { word: "Metabolism", phonetic: "/məˈtæbəlɪzəm/", meaning: "新陈代谢", category: "bio", example: "Metabolism includes all chemical reactions that occur in living organisms." },
  { word: "Mitochondria", phonetic: "/ˌmaɪtəˈkɒndriə/", meaning: "线粒体", category: "bio", example: "Mitochondria are the powerhouses of the cell, producing ATP through respiration." },
  { word: "Mitosis", phonetic: "/maɪˈtoʊsɪs/", meaning: "有丝分裂", category: "bio", example: "Mitosis produces two genetically identical daughter cells." },
  { word: "Molarity", phonetic: "/moʊˈlærəti/", meaning: "摩尔浓度", category: "chem", example: "A 1 M solution contains 1 mole of solute per liter of solution." },
  { word: "Mole", phonetic: "/moʊl/", meaning: "摩尔", category: "chem", example: "One mole of any substance contains 6.022 × 10²³ particles." },
  { word: "Molecular geometry", phonetic: "/məˈlekjələr dʒiˈɒmətri/", meaning: "分子几何", category: "chem", example: "VSEPR theory predicts molecular geometry based on electron domains." },
  { word: "Monomer", phonetic: "/ˈmɒnəmər/", meaning: "单体", category: "bio", example: "Amino acids are the monomers that make up proteins." },
  { word: "mRNA", phonetic: "/ˌem ɑːr en ˈeɪ/", meaning: "信使RNA", category: "bio", example: "mRNA carries genetic information from DNA to the ribosome." },
  { word: "Mutation", phonetic: "/mjuːˈteɪʃn/", meaning: "突变", category: "bio", example: "Point mutations involve a change in a single nucleotide." },
  { word: "NADH", phonetic: "/en eɪ diː ˈeɪtʃ/", meaning: "还原型烟酰胺腺嘌呤二核苷酸", category: "bio", example: "NADH carries electrons to the electron transport chain." },
  { word: "Natural selection", phonetic: "/ˈnætʃrəl sɪˈlekʃn/", meaning: "自然选择", category: "bio", example: "Natural selection favors traits that enhance survival and reproduction." },
  { word: "Nernst equation", phonetic: "/nɜːrnst ɪˈkweɪʒn/", meaning: "能斯特方程", category: "chem", example: "The Nernst equation calculates cell potential under non-standard conditions." },
  { word: "Nonpolar", phonetic: "/nɒnˈpoʊlər/", meaning: "非极性的", category: "chem", example: "Oil is nonpolar and does not mix with water." },
  { word: "Nucleotide", phonetic: "/ˈnuːkliətaɪd/", meaning: "核苷酸", category: "bio", example: "A nucleotide consists of a sugar, phosphate group, and nitrogenous base." },
  { word: "Osmosis", phonetic: "/ɒzˈmoʊsɪs/", meaning: "渗透", category: "bio", example: "Osmosis is the diffusion of water across a selectively permeable membrane." },
  { word: "Oxidation", phonetic: "/ˌɒksɪˈdeɪʃn/", meaning: "氧化", category: "chem", example: "Oxidation involves loss of electrons or increase in oxidation state." },
  { word: "Oxidative phosphorylation", phonetic: "/ɒkˈsɪdeɪtɪv ˌfɒsfərɪˈleɪʃn/", meaning: "氧化磷酸化", category: "bio", example: "Oxidative phosphorylation produces the majority of ATP during cellular respiration." },
  { word: "Passive transport", phonetic: "/ˈpæsɪv ˈtrænspɔːrt/", meaning: "被动运输", category: "bio", example: "Simple diffusion is a type of passive transport that requires no energy." },
  { word: "pH", phonetic: "/piː ˈeɪtʃ/", meaning: "酸碱度", category: "chem", example: "pH is defined as the negative logarithm of the hydrogen ion concentration." },
  { word: "Phenotype", phonetic: "/ˈfiːnətaɪp/", meaning: "表型", category: "bio", example: "The phenotype is the observable expression of an organism's genotype." },
  { word: "Phospholipid", phonetic: "/ˌfɒsfəˈlɪpɪd/", meaning: "磷脂", category: "bio", example: "Phospholipids form the basic structure of all cell membranes." },
  { word: "Photosynthesis", phonetic: "/ˌfoʊtoʊˈsɪnθəsɪs/", meaning: "光合作用", category: "bio", example: "Photosynthesis converts light energy into chemical energy stored in glucose." },
  { word: "Photosystem", phonetic: "/ˈfoʊtoʊsɪstəm/", meaning: "光系统", category: "bio", example: "Photosystem II splits water molecules during the light reactions." },
  { word: "Polar", phonetic: "/ˈpoʊlər/", meaning: "极性的", category: "chem", example: "Water is a polar molecule due to the electronegativity difference between O and H." },
  { word: "Polymer", phonetic: "/ˈpɒlɪmər/", meaning: "聚合物", category: "bio", example: "Proteins are polymers composed of amino acid monomers." },
  { word: "Polypeptide", phonetic: "/ˌpɒliˈpeptaɪd/", meaning: "多肽", category: "bio", example: "A polypeptide is a chain of amino acids linked by peptide bonds." },
  { word: "Population", phonetic: "/ˌpɒpjuˈleɪʃn/", meaning: "种群", category: "bio", example: "A population consists of all individuals of the same species in a given area." },
  { word: "Prokaryote", phonetic: "/proʊˈkærioʊt/", meaning: "原核生物", category: "bio", example: "Bacteria and archaea are prokaryotes that lack membrane-bound nuclei." },
  { word: "Promoter", phonetic: "/prəˈmoʊtər/", meaning: "启动子", category: "bio", example: "The promoter is a DNA sequence where RNA polymerase binds to initiate transcription." },
  { word: "Protein", phonetic: "/ˈproʊtiːn/", meaning: "蛋白质", category: "bio", example: "Proteins perform diverse functions including catalysis, transport, and structure." },
  { word: "Rate law", phonetic: "/reɪt lɔː/", meaning: "速率定律", category: "chem", example: "The rate law expresses reaction rate as a function of reactant concentrations." },
  { word: "Rate-determining step", phonetic: "/reɪt dɪˈtɜːrmɪnɪŋ step/", meaning: "决速步", category: "chem", example: "The slowest step in a reaction mechanism is the rate-determining step." },
  { word: "Reaction mechanism", phonetic: "/riˈækʃn ˈmekənɪzəm/", meaning: "反应机理", category: "chem", example: "A reaction mechanism describes the step-by-step process of a chemical reaction." },
  { word: "Reduction", phonetic: "/rɪˈdʌkʃn/", meaning: "还原", category: "chem", example: "Reduction involves gain of electrons or decrease in oxidation state." },
  { word: "Replication", phonetic: "/ˌreplɪˈkeɪʃn/", meaning: "复制", category: "bio", example: "DNA replication ensures each daughter cell receives a complete copy of genetic material." },
  { word: "Ribosome", phonetic: "/ˈraɪbəsoʊm/", meaning: "核糖体", category: "bio", example: "Ribosomes are the cellular structures where protein synthesis occurs." },
  { word: "RNA polymerase", phonetic: "/ˈɑːrenˈeɪ pəˈlɪməreɪs/", meaning: "RNA聚合酶", category: "bio", example: "RNA polymerase synthesizes RNA during transcription." },
  { word: "Rubisco", phonetic: "/ˈruːbɪskoʊ/", meaning: "核酮糖-1,5-二磷酸羧化酶", category: "bio", example: "Rubisco catalyzes CO₂ fixation in the Calvin cycle." },
  { word: "Saturated", phonetic: "/ˈsætʃəreɪtɪd/", meaning: "饱和的", category: "bio", example: "Saturated fatty acids have no double bonds between carbon atoms." },
  { word: "Second messenger", phonetic: "/ˈsekənd ˈmesɪndʒər/", meaning: "第二信使", category: "bio", example: "cAMP is a second messenger that amplifies signals inside cells." },
  { word: "Semiconservative replication", phonetic: "/ˌsemiːkənˈsɜːrvətɪv ˌreplɪˈkeɪʃn/", meaning: "半保留复制", category: "bio", example: "DNA replication is semiconservative: each daughter DNA has one parental strand." },
  { word: "Signal transduction", phonetic: "/ˈsɪɡnəl trænzˈdʌkʃn/", meaning: "信号转导", category: "bio", example: "Signal transduction converts extracellular signals into cellular responses." },
  { word: "Solubility", phonetic: "/ˌsɒljuˈbɪləti/", meaning: "溶解度", category: "chem", example: "The solubility product constant (Ksp) describes the equilibrium between a solid and its ions." },
  { word: "Specific heat", phonetic: "/spəˈsɪfɪk hiːt/", meaning: "比热容", category: "chem", example: "Water has a high specific heat, requiring much energy to change its temperature." },
  { word: "Stoichiometry", phonetic: "/ˌstɔɪkiˈɒmɪtri/", meaning: "化学计量学", category: "chem", example: "Stoichiometry uses balanced equations to calculate reactant and product amounts." },
  { word: "Substrate", phonetic: "/ˈsʌbstreɪt/", meaning: "底物", category: "bio", example: "The substrate binds to the enzyme's active site for catalysis." },
  { word: "Synapsis", phonetic: "/sɪˈnæpsɪs/", meaning: "联会", category: "bio", example: "Synapsis is the pairing of homologous chromosomes during prophase I of meiosis." },
  { word: "Telomere", phonetic: "/ˈteləmiːr/", meaning: "端粒", category: "bio", example: "Telomeres protect chromosome ends from degradation during replication." },
  { word: "Transcription", phonetic: "/trænˈskrɪpʃn/", meaning: "转录", category: "bio", example: "Transcription produces mRNA from a DNA template." },
  { word: "Translation", phonetic: "/trænsˈleɪʃn/", meaning: "翻译", category: "bio", example: "Translation synthesizes proteins using mRNA as a template." },
  { word: "Triglyceride", phonetic: "/traɪˈɡlɪsəraɪd/", meaning: "甘油三酯", category: "bio", example: "Triglycerides are storage lipids composed of glycerol and three fatty acids." },
  { word: "Trophic level", phonetic: "/ˈtrɒfɪk ˈlevl/", meaning: "营养级", category: "bio", example: "Producers occupy the first trophic level in an ecosystem." },
  { word: "Unsaturated", phonetic: "/ʌnˈsætʃəreɪtɪd/", meaning: "不饱和的", category: "bio", example: "Unsaturated fatty acids contain one or more double bonds." },
  { word: "Vacuole", phonetic: "/ˈvækjuoʊl/", meaning: "液泡", category: "bio", example: "Plant cells have a large central vacuole for storage and turgor pressure." },
  { word: "Valence electron", phonetic: "/ˈveɪləns ɪˈlektrɒn/", meaning: "价电子", category: "chem", example: "Valence electrons participate in chemical bonding and determine reactivity." },
  { word: "VSEPR", phonetic: "/ˈvespər/", meaning: "价层电子对互斥理论", category: "chem", example: "VSEPR theory predicts molecular geometry based on electron pair repulsion." },
  { word: "Water potential", phonetic: "/ˈwɔːtər poʊˈtenʃl/", meaning: "水势", category: "bio", example: "Water moves from areas of higher water potential to lower water potential." },
  { word: "Wild type", phonetic: "/waɪld taɪp/", meaning: "野生型", category: "bio", example: "The wild type allele is the most common form in a natural population." },
  { word: "X-linked inheritance", phonetic: "/eks lɪŋkt ɪnˈherɪtəns/", meaning: "X连锁遗传", category: "bio", example: "Color blindness is an X-linked recessive trait." },
  { word: "Zygote", phonetic: "/ˈzaɪɡoʊt/", meaning: "合子", category: "bio", example: "A zygote forms when a sperm fertilizes an egg, creating a diploid cell." }
];

// 确保数据可全局访问
if (typeof window !== 'undefined') {
  window.BIOCHEM_DATA = BIOCHEM_DATA;
  window.QUIZ_DATA = QUIZ_DATA;
  window.GLOSSARY_DATA = GLOSSARY_DATA;
}
