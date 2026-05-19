/**
 * BioChem Niche - Complete Data File
 * Sources: AP Bio CED 2025, Campbell Biology 11e, Zumdahl Chemistry 9e
 */

// ==================== KNOWLEDGE TOPICS ====================
const KNOWLEDGE_DATA = [

{id:"bio-001",category:"bio",unit:"Unit 1: Chemistry of Life",
titleEn:"Structure of Water and Hydrogen Bonding",titleZh:"水的结构与氢键",
summaryEn:"Water molecules are polar because oxygen is electronegative. This polarity allows hydrogen bonding, giving water unique properties essential for life.",
summaryZh:"水分子因氧电负性高而为极性分子，这种极性使水分子间形成氢键，赋予其生命必需的独特性质。",
keyPointsEn:["Water is polar","Hydrogen bonds","Cohesion and adhesion","High specific heat","Ice less dense"],
keyPointsZh:["水是极性分子","分子间氢键","内聚力和附着力","高比热容","冰密度小于水"],
formula:"H2O(polar) -> H-bonds -> unique properties",source:"AP Bio CED 2025 Topic 1.1"}
,
{id:"bio-002",category:"bio",unit:"Unit 1: Chemistry of Life",
titleEn:"Elements of Life and Biological Macromolecules",titleZh:"生命元素与生物大分子",
summaryEn:"Living organisms are composed primarily of CHNOPS. Biological macromolecules include carbohydrates, lipids, proteins, and nucleic acids. Monomers join through dehydration synthesis to form polymers.",
summaryZh:"生物体主要由CHNOPS组成。生物大分子包括碳水化合物、脂质、蛋白质和核酸。单体通过脱水缩合连接形成聚合物。",
keyPointsEn:["CHNOPS essential elements","Four macromolecule types","Dehydration synthesis","Hydrolysis","Structure determines function"],
keyPointsZh:["CHNOPS必需元素","四种大分子类型","脱水缩合","水解分解聚合物","结构决定功能"],
formula:"Monomer + Monomer -(dehydration)-> Polymer + H2O",source:"AP Bio CED 2025 Topic 1.3"}
,
{id:"bio-003",category:"bio",unit:"Unit 1: Chemistry of Life",
titleEn:"Carbohydrates: Structure and Function",titleZh:"碳水化合物的结构与功能",
summaryEn:"Monosaccharides like glucose are monomers for polysaccharides. Starch and glycogen are storage polysaccharides; cellulose provides structural support in plant cell walls.",
summaryZh:"葡萄糖等单糖是多糖的单体。淀粉和糖原是储存性多糖；纤维素提供植物细胞壁的结构支持。",
keyPointsEn:["Monosaccharides are monomers","Glucose is key","Starch stores plant energy","Glycogen stores animal energy","Cellulose provides structure"],
keyPointsZh:["单糖是单体","葡萄糖是关键","淀粉储存植物能量","糖原储存动物能量","纤维素提供结构"],
formula:"n Glucose -> Starch/Glycogen/Cellulose",source:"AP Bio CED 2025 Topic 1.4"}
,
{id:"bio-004",category:"bio",unit:"Unit 1: Chemistry of Life",
titleEn:"Lipids: Structure and Function",titleZh:"脂质的结构与功能",
summaryEn:"Lipids are hydrophobic molecules. Fatty acids can be saturated or unsaturated. Phospholipids form bilayers in cell membranes with hydrophilic heads and hydrophobic tails.",
summaryZh:"脂质是疏水分子。脂肪酸可分为饱和和不饱和。磷脂形成细胞膜的脂双层，具有亲水头部和疏水尾部。",
keyPointsEn:["Lipids are hydrophobic","Saturated vs unsaturated","Phospholipid bilayer","Cholesterol function","Fats store energy"],
keyPointsZh:["脂质疏水","饱和与不饱和脂肪酸","磷脂双分子层","胆固醇功能","脂肪储存能量"],
formula:"Phospholipid: hydrophilic head + hydrophobic tails -> bilayer",source:"AP Bio CED 2025 Topic 1.5"}
,
{id:"bio-005",category:"bio",unit:"Unit 1: Chemistry of Life",
titleEn:"Nucleic Acids: DNA and RNA Structure",titleZh:"核酸：DNA与RNA结构",
summaryEn:"DNA is a double helix with antiparallel strands. A pairs with T (2 H-bonds), C pairs with G (3 H-bonds). RNA differs by containing ribose, uracil instead of thymine, and being single-stranded.",
summaryZh:"DNA是反向平行双螺旋。A与T配对，C与G配对。RNA含核糖和尿嘧啶代替胸腺嘧啶，为单链。",
keyPointsEn:["DNA antiparallel double helix","A-T and C-G pairing","RNA has ribose and uracil","RNA is single-stranded","Nucleotide structure"],
keyPointsZh:["DNA反向平行双螺旋","A-T和C-G配对","RNA含核糖和尿嘧啶","RNA单链","核苷酸结构"],
formula:"DNA: 5'-ATGC-3' // 3'-TACG-5'",source:"AP Bio CED 2025 Topic 1.6"}
,
{id:"bio-006",category:"bio",unit:"Unit 1: Chemistry of Life",
titleEn:"Proteins: Structure and Function",titleZh:"蛋白质：结构与功能",
summaryEn:"Proteins are chains of amino acids linked by peptide bonds. Primary structure is the sequence; secondary involves alpha-helices and beta-sheets; tertiary involves R-group interactions; quaternary involves multiple subunits.",
summaryZh:"蛋白质是由肽键连接的氨基酸链。一级结构是序列；二级涉及alpha-螺旋和beta-折叠；三级涉及R基团相互作用；四级涉及多个亚基。",
keyPointsEn:["Amino acids are monomers","Peptide bonds","Four levels of structure","R groups determine interactions","Denaturation disrupts structure"],
keyPointsZh:["氨基酸是单体","肽键","四级结构","R基团决定相互作用","变性破坏结构"],
formula:"AA1-COOH + H2N-AA2 -> Peptide bond + H2O",source:"AP Bio CED 2025 Topic 1.7"}
,
{id:"bio-007",category:"bio",unit:"Unit 2: Cell Structure",
titleEn:"Cell Structure and Organelles",titleZh:"细胞结构与细胞器",
summaryEn:"Eukaryotic cells contain a membrane-enclosed nucleus and organelles. The endomembrane system (ER, Golgi, lysosomes, vacuoles) processes proteins. Mitochondria produce ATP; chloroplasts perform photosynthesis in plants.",
summaryZh:"真核细胞含有膜包被的细胞核和细胞器。内膜系统处理蛋白质。线粒体产生ATP；叶绿体在植物中进行光合作用。",
keyPointsEn:["Eukaryotes have membrane-bound nucleus","Endomembrane system","Mitochondria generate ATP","Chloroplasts do photosynthesis","Ribosomes synthesize proteins"],
keyPointsZh:["真核生物有膜包被细胞核","内膜系统","线粒体产生ATP","叶绿体进行光合作用","核糖体合成蛋白质"],
formula:"ER -> Golgi -> Vesicles -> Plasma membrane",source:"AP Bio CED 2025 Topic 2.1-2.4"}
,
{id:"bio-008",category:"bio",unit:"Unit 2: Cell Structure",
titleEn:"Cell Membrane and Transport",titleZh:"细胞膜与物质运输",
summaryEn:"The cell membrane is a phospholipid bilayer with embedded proteins. Small nonpolar molecules cross by simple diffusion. Polar molecules use facilitated diffusion. Active transport moves substances against gradients using ATP.",
summaryZh:"细胞膜是嵌有蛋白质的磷脂双分子层。小非极性分子通过简单扩散跨膜。极性分子通过协助扩散。主动运输利用ATP逆梯度移动物质。",
keyPointsEn:["Phospholipid bilayer","Simple diffusion","Facilitated diffusion","Active transport uses ATP","Endocytosis/exocytosis"],
keyPointsZh:["磷脂双分子层","简单扩散","协助扩散","主动运输需ATP","胞吞/胞吐"],
formula:"Passive: high->low | Active: low->high + ATP",source:"AP Bio CED 2025 Topic 2.5-2.6"}
,
{id:"chem-001",category:"chem",unit:"Unit 1: Atomic Structure",
titleEn:"Atomic Structure and Periodic Table",titleZh:"原子结构与周期表",
summaryEn:"Atoms consist of protons, neutrons, and electrons. Atomic number equals protons; mass number equals protons plus neutrons. Isotopes have different neutron numbers. The periodic table organizes elements by atomic number with periodic trends.",
summaryZh:"原子由质子、中子和电子组成。原子序数=质子数；质量数=质子+中子。同位素中子数不同。周期表按原子序数排列，显示周期性趋势。",
keyPointsEn:["Protons neutrons electrons","Atomic and mass number","Isotopes","Periodic trends","Atomic radius trends"],
keyPointsZh:["质子中子电子","原子序数和质量数","同位素","周期趋势","原子半径趋势"],
formula:"A = Z + N",source:"Zumdahl Ch.2,7"}
,
{id:"chem-002",category:"chem",unit:"Unit 1: Atomic Structure",
titleEn:"Electron Configuration and Periodic Trends",titleZh:"电子排布与周期律",
summaryEn:"Electrons fill orbitals by Aufbau principle, Pauli exclusion, and Hund's rule. Across a period: effective nuclear charge increases, radius decreases, ionization energy and electronegativity increase. Down a group: radius increases, IE decreases.",
summaryZh:"电子按能量最低原理、泡利原理和洪特规则填充轨道。同周期：有效核电荷增加，半径减小，电离能和电负性增大。同族：半径增大，IE减小。",
keyPointsEn:["Aufbau Pauli Hund rules","s p d f orbitals","Effective nuclear charge","Atomic radius trends","IE and EN trends"],
keyPointsZh:["能量最低泡利洪特规则","s p d f轨道","有效核电荷","原子半径趋势","电离能和电负性趋势"],
formula:"Across: Zeff up -> r down, IE up, EN up",source:"Zumdahl Ch.7,8"}
,
{id:"chem-003",category:"chem",unit:"Unit 2: Chemical Bonding",
titleEn:"Ionic and Covalent Bonding",titleZh:"离子键与共价键",
summaryEn:"Ionic bonds form between metals and nonmetals via electron transfer. Covalent bonds form via electron sharing. Electronegativity difference determines type: greater than 1.7 is ionic, 0.4-1.7 is polar covalent, less than 0.4 is nonpolar covalent.",
summaryZh:"离子键在金属和非金属间通过电子转移形成。共价键通过电子共享形成。电负性差决定类型：大于1.7为离子键，0.4-1.7为极性共价键，小于0.4为非极性共价键。",
keyPointsEn:["Ionic bonds","Covalent bonds","Electronegativity difference","Polar vs nonpolar","Metallic bonding"],
keyPointsZh:["离子键","共价键","电负性差","极性与非极性","金属键"],
formula:"dEN>1.7: ionic | 0.4-1.7: polar | <0.4: nonpolar",source:"Zumdahl Ch.8"}
,
{id:"chem-004",category:"chem",unit:"Unit 2: Chemical Bonding",
titleEn:"VSEPR Theory and Molecular Geometry",titleZh:"VSEPR理论与分子几何",
summaryEn:"VSEPR predicts shapes based on electron domain repulsion. Key shapes: linear (2 domains, 180 degrees), trigonal planar (3, 120 degrees), tetrahedral (4, 109.5 degrees), trigonal bipyramidal (5), octahedral (6). Lone pairs repel more than bonding pairs.",
summaryZh:"VSEPR基于电子域排斥预测形状。关键形状：直线形(2域,180度)、平面三角形(3,120度)、四面体(4,109.5度)、三角双锥(5)、八面体(6)。孤对电子比成键电子对排斥更强。",
keyPointsEn:["VSEPR theory","Linear trigonal planar tetrahedral","Lone pair effects","Hybridization","Molecular polarity"],
keyPointsZh:["VSEPR理论","直线平面三角四面体","孤对电子影响","杂化","分子极性"],
formula:"2->linear(180) | 3->trigonal planar(120) | 4->tetrahedral(109.5)",source:"Zumdahl Ch.8,9"}
,
{id:"chem-005",category:"chem",unit:"Unit 3: Stoichiometry",
titleEn:"Stoichiometry and Mole Concept",titleZh:"化学计量学与摩尔概念",
summaryEn:"The mole contains 6.022 x 10^23 particles (Avogadro's number). Molar mass is grams per mole. Balanced equation coefficients give mole ratios. Limiting reactants determine maximum product. Percent yield equals actual over theoretical times 100%.",
summaryZh:"摩尔含6.022x10^23个粒子（阿伏伽德罗常数）。摩尔质量为克每摩尔。配平方程式系数给出摩尔比。限量反应物决定最大产量。产率=实际/理论x100%。",
keyPointsEn:["Avogadro's number","Molar mass","Balanced equations","Limiting reactant","Percent yield"],
keyPointsZh:["阿伏伽德罗常数","摩尔质量","配平方程式","限量反应物","产率"],
formula:"n=m/M=N/NA | %yield=(actual/theoretical)x100%",source:"Zumdahl Ch.3,4"}
,
{id:"chem-006",category:"chem",unit:"Unit 3: Stoichiometry",
titleEn:"Solutions and Molarity",titleZh:"溶液与摩尔浓度",
summaryEn:"Molarity (M) equals moles of solute per liter of solution. Dilution: M1V1 = M2V2. Titration determines unknown concentration. At equivalence point, moles of acid equals moles of base.",
summaryZh:"摩尔浓度(M)=每升溶液中溶质的摩尔数。稀释：M1V1=M2V2。滴定测定未知浓度。等当点时酸的摩尔数=碱的摩尔数。",
keyPointsEn:["Molarity = mol/L","Dilution formula","Titration","Equivalence point","Indicators"],
keyPointsZh:["摩尔浓度=摩尔/升","稀释公式","滴定","等当点","指示剂"],
formula:"M=n/V | M1V1=M2V2 | At eq: n(acid)=n(base)",source:"Zumdahl Ch.4,14,15"}
,
{id:"chem-007",category:"chem",unit:"Unit 3: Reactions",
titleEn:"Redox Reactions and Electrochemistry",titleZh:"氧化还原与电化学",
summaryEn:"Redox involves electron transfer: oxidation is electron loss (oxidation number increases), reduction is electron gain. In electrochemical cells: oxidation at anode, reduction at cathode. E cell equals E cathode minus E anode.",
summaryZh:"氧化还原涉及电子转移：氧化是失电子（氧化数升高），还原是得电子。电化学电池中：阳极氧化，阴极还原。Ecell=Ecathode-Eanode。",
keyPointsEn:["Oxidation and reduction","Oxidation numbers","Galvanic cells","Standard potentials","Nernst equation"],
keyPointsZh:["氧化和还原","氧化数","原电池","标准电势","能斯特方程"],
formula:"Ecell=Ecathode-Eanode | dG=-nFEcell",source:"Zumdahl Ch.4,18"}
,
{id:"chem-008",category:"chem",unit:"Unit 4: Gases",
titleEn:"Gas Laws and Kinetic Theory",titleZh:"气体定律与分子动理论",
summaryEn:"Ideal gas law: PV = nRT. At STP, 1 mol equals 22.4 L. Boyle's Law (P proportional to 1/V), Charles's Law (V proportional to T), Avogadro's Law (V proportional to n). Kinetic theory: molecules in constant random motion, collisions elastic.",
summaryZh:"理想气体定律：PV=nRT。STP下1摩尔=22.4L。波义耳定律、查理定律、阿伏伽德罗定律。分子动理论：分子持续无规则运动，碰撞弹性。",
keyPointsEn:["Ideal gas law","Boyle's Charles's Avogadro's laws","STP conditions","Dalton's law","Kinetic theory"],
keyPointsZh:["理想气体定律","波义耳查理阿伏伽德罗定律","STP条件","道尔顿分压定律","分子动理论"],
formula:"PV=nRT | STP: 1mol=22.4L | Ptotal=sum of Pi",source:"Zumdahl Ch.5"}
,
{id:"chem-009",category:"chem",unit:"Unit 5: Thermochemistry",
titleEn:"Thermochemistry and Enthalpy",titleZh:"热化学与焓",
summaryEn:"Enthalpy change (delta H) measures heat at constant pressure. Endothermic: delta H greater than 0; exothermic: delta H less than 0. Hess's Law: total delta H equals sum of step enthalpies. Calorimetry: q equals mc delta T.",
summaryZh:"焓变(delta H)衡量恒压热。吸热：deltaH>0；放热：deltaH<0。赫斯定律：总deltaH等于各步焓变之和。量热法：q=mc delta T。",
keyPointsEn:["Delta H at constant pressure","Endothermic vs exothermic","Hess's Law","Calorimetry","Standard enthalpy of formation"],
keyPointsZh:["恒压下的deltaH","吸热与放热","赫斯定律","量热法","标准生成焓"],
formula:"dHrxn=sum dHf(products)-sum dHf(reactants) | q=mc dT",source:"Zumdahl Ch.6"}
,
{id:"chem-010",category:"chem",unit:"Unit 5: Thermochemistry",
titleEn:"Entropy and Gibbs Free Energy",titleZh:"熵与吉布斯自由能",
summaryEn:"Entropy (S) measures disorder; second law: universe entropy always increases. Gibbs free energy G=H-TS determines spontaneity: delta G less than 0 means spontaneous. Delta G zero equals negative RT ln K connects free energy and equilibrium.",
summaryZh:"熵(S)衡量无序度；第二定律：宇宙熵总是增加。吉布斯自由能G=H-TS决定自发性：deltaG<0自发。deltaG零=-RT ln K连接自由能与平衡。",
keyPointsEn:["Entropy and disorder","Second law","Gibbs free energy","Spontaneity criteria","Delta G and K"],
keyPointsZh:["熵与无序度","第二定律","吉布斯自由能","自发性判据","deltaG与K"],
formula:"dG=dH-TdS | dG<0->spontaneous | dGzero=-RT ln K",source:"Zumdahl Ch.17"}
,
{id:"chem-011",category:"chem",unit:"Unit 6: Equilibrium",
titleEn:"Chemical Equilibrium and Le Chatelier",titleZh:"化学平衡与勒夏特列",
summaryEn:"At equilibrium, forward and reverse rates are equal. K equals products over reactants with stoichiometric exponents. K depends only on temperature. Le Chatelier's Principle: systems counteract stress.",
summaryZh:"平衡时正逆反应速率相等。K=产物/反应物（升至化学计量次方）。K只取决于温度。勒夏特列原理：系统抵消压力。",
keyPointsEn:["Dynamic equilibrium","K expression","K depends on T only","Le Chatelier's Principle","ICE tables"],
keyPointsZh:["动态平衡","K表达式","K只取决于温度","勒夏特列原理","ICE表格"],
formula:"K=[C]^c[D]^d/[A]^a[B]^b | Stress->System shifts to oppose",source:"Zumdahl Ch.13"}
,
{id:"chem-012",category:"chem",unit:"Unit 7: Acids and Bases",
titleEn:"Acids Bases and pH",titleZh:"酸碱与pH",
summaryEn:"Bronsted-Lowry: acids donate protons, bases accept protons. pH equals negative log of H+ concentration. Strong acids/bases dissociate completely; weak ones partially. Ka measures acid strength. Henderson-Hasselbalch equation for buffer calculations.",
summaryZh:"布朗斯特-劳里：酸给质子，碱受质子。pH=-log[H+]。强酸强碱完全解离；弱酸弱碱部分解离。Ka衡量酸强度。Henderson-Hasselbalch方程用于缓冲液计算。",
keyPointsEn:["Bronsted-Lowry definition","pH scale","Strong vs weak","Ka and Kb","Henderson-Hasselbalch"],
keyPointsZh:["布朗斯特-劳里定义","pH标度","强与弱","Ka和Kb","Henderson-Hasselbalch"],
formula:"pH=-log[H+] | pH+pOH=14 | Ka x Kb=Kw=10^-14",source:"Zumdahl Ch.14,15"}
,
{id:"chem-013",category:"chem",unit:"Unit 7: Acids and Bases",
titleEn:"Buffers and Titrations",titleZh:"缓冲溶液与滴定",
summaryEn:"Buffers resist pH change, containing weak acid plus conjugate base. Best when pH approximately equals pKa. Equivalence point: stoichiometrically equivalent acid and base reacted. Half-equivalence of weak acid-strong base: pH equals pKa.",
summaryZh:"缓冲溶液抵抗pH变化，含弱酸+共轭碱。pH约等于pKa时效果最佳。等当点：酸碱按化学计量等当量反应。弱酸强碱滴定半等当点：pH=pKa。",
keyPointsEn:["Buffer components","Buffer capacity","Equivalence point","Half-equivalence pH=pKa","Indicator selection"],
keyPointsZh:["缓冲组分","缓冲容量","等当点","半等当点pH=pKa","指示剂选择"],
formula:"pH=pKa+log([A-]/[HA]) | Buffer range: pKa plus/minus 1",source:"Zumdahl Ch.15,16"}
,
{id:"chem-014",category:"chem",unit:"Unit 8: Kinetics",
titleEn:"Reaction Rates and Rate Laws",titleZh:"反应速率与速率定律",
summaryEn:"Rate equals delta concentration over delta time. Rate law: rate equals k times A to the m times B to the n, orders determined experimentally. Rate-determining step is slowest in mechanism. Catalysts provide alternative pathway with lower activation energy.",
summaryZh:"速率=Delta浓度/Delta时间。速率定律：rate=k[A]^m[B]^n，级数由实验确定。决速步是机理中最慢的步骤。催化剂提供较低活化能的替代路径。",
keyPointsEn:["Rate definition","Rate law and order","Rate-determining step","Activation energy","Catalysts"],
keyPointsZh:["速率定义","速率定律和级数","决速步","活化能","催化剂"],
formula:"rate=k[A]^m[B]^n | k=Ae^(-Ea/RT)",source:"Zumdahl Ch.12"}
,
{id:"chem-015",category:"chem",unit:"Unit 9: Applications",
titleEn:"Solubility and Complex Ions",titleZh:"溶解度与配离子",
summaryEn:"Ksp describes equilibrium between sparingly soluble compound and its ions. Common ion effect decreases solubility. Complex ion formation increases solubility by removing free metal ions. Selective precipitation separates ions based on different Ksp values.",
summaryZh:"Ksp描述微溶化合物与其离子间的平衡。同离子效应降低溶解度。配离子形成通过去除游离金属离子增加溶解度。选择性沉淀基于不同Ksp值分离离子。",
keyPointsEn:["Ksp and solubility","Common ion effect","Complex ions","Selective precipitation","Qualitative analysis"],
keyPointsZh:["Ksp和溶解度","同离子效应","配离子","选择性沉淀","定性分析"],
formula:"Ksp=[A+]^a[B-]^b | Common ion->solubility decreases",source:"Zumdahl Ch.16"}

];

// ==================== QUIZ DATA ====================
const QUIZ_DATA = [

{id:"qb-001",subject:"bio",type:"choice",
question:"Which of the following best describes the structure of a water molecule?",
options:["Linear with equal sharing","Bent with unequal sharing creating partial charges","Tetrahedral with four H","Planar with double bonds"],
answer:1,
explanationEn:"Water is a polar molecule with a bent (104.5 degree) shape. Oxygen is more electronegative than hydrogen, creating partial negative charge on oxygen and partial positive on hydrogens.",
explanationZh:"水分子由于氧原子上两对孤对电子而呈弯曲形(104.5度)。氧比氢电负性更强，形成极性分子。"}
,
{id:"qb-002",subject:"bio",type:"choice",
question:"Hydrogen bonds between water molecules are responsible for which properties?",
options:["Ability to dissolve nonpolar substances","Cohesion adhesion and high specific heat","Low surface tension","Linear shape"],
answer:1,
explanationEn:"Hydrogen bonds create cohesion (water-water), adhesion (water-surface), high specific heat capacity, and high surface tension. These properties are essential for biological systems.",
explanationZh:"氢键产生内聚力、附着力、高比热容和高表面张力。这些性质对生物系统至关重要。"}
,
{id:"qb-003",subject:"bio",type:"choice",
question:"In DNA, which nitrogenous base pairs with guanine?",
options:["Adenine","Thymine","Cytosine","Uracil"],
answer:2,
explanationEn:"In DNA, guanine (G) pairs with cytosine (C) through three hydrogen bonds. Adenine pairs with thymine through two hydrogen bonds.",
explanationZh:"DNA中，鸟嘌呤(G)与胞嘧啶(C)通过三个氢键配对。腺嘌呤与胸腺嘧啶通过两个氢键配对。"}
,
{id:"qb-004",subject:"bio",type:"choice",
question:"Which describes the primary structure of a protein?",
options:["3D folding of chain","Alpha-helix or beta-sheet patterns","Sequence of amino acids","Association of subunits"],
answer:2,
explanationEn:"The primary structure is the linear sequence of amino acids. Secondary involves alpha-helices and beta-sheets; tertiary is 3D folding; quaternary involves multiple subunits.",
explanationZh:"一级结构是多肽链中氨基酸的线性序列。二级结构涉及alpha-螺旋和beta-折叠；三级是三维折叠；四级涉及多个亚基。"}
,
{id:"qb-005",subject:"bio",type:"choice",
question:"Which organelle produces ATP through cellular respiration?",
options:["Chloroplast","Mitochondrion","Nucleus","Ribosome"],
answer:1,
explanationEn:"Mitochondria are the sites of cellular respiration, where glucose is broken down to produce ATP. Chloroplasts perform photosynthesis, not respiration.",
explanationZh:"线粒体是细胞呼吸的场所，葡萄糖在此分解产生ATP。叶绿体进行光合作用，而非呼吸。"}
,
{id:"qb-006",subject:"bio",type:"choice",
question:"During which phase of mitosis do sister chromatids separate?",
options:["Prophase","Metaphase","Anaphase","Telophase"],
answer:2,
explanationEn:"During anaphase, cohesin proteins are cleaved, allowing sister chromatids to separate and move to opposite poles. This ensures each daughter cell receives identical genetic material.",
explanationZh:"在后期，黏连蛋白被切割，姐妹染色单体分离并移向两极。这确保每个子细胞获得相同遗传物质。"}
,
{id:"qb-007",subject:"bio",type:"choice",
question:"What is the function of Rubisco in photosynthesis?",
options:["Splitting water","Fixing CO2 into organic molecules","Electron transfer","ATP synthesis"],
answer:1,
explanationEn:"Rubisco catalyzes the fixation of CO2 into RuBP during the Calvin cycle. It is the most abundant enzyme on Earth.",
explanationZh:"Rubisco在Calvin循环中催化CO2固定到RuBP上。它是地球上最丰富的酶。"}
,
{id:"qb-008",subject:"bio",type:"choice",
question:"According to Mendel's law of segregation, what happens to alleles during gamete formation?",
options:["Both go into every gamete","Alleles separate so each gamete gets one","They fuse in gametes","Only dominant is passed"],
answer:1,
explanationEn:"Mendel's law of segregation states that allele pairs separate during gamete formation, so each gamete receives only one allele for each gene.",
explanationZh:"孟德尔分离定律指出，等位基因对在配子形成时分离，每个配子只获得一个等位基因。"}
,
{id:"qb-009",subject:"bio",type:"choice",
question:"In the lac operon, what happens when lactose is present?",
options:["Repressor binds more tightly","Repressor is inactivated and transcription occurs","RNA polymerase cannot bind","Operon is deleted"],
answer:1,
explanationEn:"When lactose is present, allolactose binds to the repressor, changing its shape so it cannot bind the operator. This allows RNA polymerase to transcribe the lac genes.",
explanationZh:"乳糖存在时，异乳糖结合阻遏蛋白使其不能结合操纵基因，RNA聚合酶得以转录lac基因。"}
,
{id:"qb-010",subject:"bio",type:"choice",
question:"What is a source of genetic variation during meiosis?",
options:["DNA replication in S phase only","Crossing over and independent assortment","Chromosome condensation only","Cytokinesis"],
answer:1,
explanationEn:"Genetic variation is produced by crossing over (exchange of genetic material between homologous chromosomes) and independent assortment (random orientation of homologous pairs).",
explanationZh:"遗传变异由交叉互换（同源染色体间遗传物质交换）和独立分配（同源对随机定向）产生。"}
,
{id:"qb-011",subject:"bio",type:"choice",
question:"What is the role of tRNA during translation?",
options:["Carries amino acids to ribosome","Synthesizes mRNA","Forms peptide bonds","Unwinds DNA"],
answer:0,
explanationEn:"tRNA molecules have anticodons that pair with mRNA codons, and each tRNA carries a specific amino acid to the ribosome.",
explanationZh:"tRNA分子具有与mRNA密码子配对的反密码子，每种tRNA携带特定氨基酸到核糖体。"}
,
{id:"qb-012",subject:"bio",type:"choice",
question:"Which population is most likely to experience genetic drift?",
options:["Large population with random mating","Small isolated population","Population with high gene flow","Population in H-W equilibrium"],
answer:1,
explanationEn:"Genetic drift has the greatest effect in small, isolated populations where chance events can significantly alter allele frequencies.",
explanationZh:"遗传漂变在小的隔离种群中影响最大，偶然事件可显著改变等位基因频率。"}
,
{id:"qb-013",subject:"bio",type:"choice",
question:"Approximately what percentage of energy transfers between trophic levels?",
options:["50%","25%","10%","90%"],
answer:2,
explanationEn:"The 10% rule states that approximately 10% of energy is transferred between trophic levels. The remaining 90% is lost as heat.",
explanationZh:"10%法则指出约10%的能量在营养级间传递。剩余90%以热量散失。"}
,
{id:"qb-014",subject:"bio",type:"choice",
question:"What is the main difference between prokaryotic and eukaryotic cells?",
options:["Prokaryotes have a nucleus","Eukaryotes have membrane-bound organelles","Prokaryotes are always larger","Eukaryotes lack ribosomes"],
answer:1,
explanationEn:"Eukaryotic cells have a membrane-enclosed nucleus and other membrane-bound organelles. Prokaryotic cells lack these structures.",
explanationZh:"真核细胞具有膜包被的细胞核和其他膜包被细胞器。原核细胞缺乏这些结构。"}
,
{id:"qb-015",subject:"bio",type:"choice",
question:"Which best describes active transport?",
options:["Movement down gradient without energy","Movement against gradient using ATP","Diffusion of water","Movement through channels"],
answer:1,
explanationEn:"Active transport moves substances against their concentration gradient, requiring ATP. The sodium-potassium pump moves 3 Na+ out and 2 K+ in against gradients.",
explanationZh:"主动运输逆浓度梯度移动物质，需要ATP。钠钾泵将3个Na+泵出、2个K+泵入，逆梯度进行。"}
,
{id:"qb-016",subject:"bio",type:"choice",
question:"What is the significance of complementary base pairing in DNA replication?",
options:["Ensures new strand matches template","Allows triple helix","Prevents mutations","Causes single-stranded DNA"],
answer:0,
explanationEn:"Complementary base pairing (A-T, C-G) ensures each new strand is complementary to its template, producing two identical daughter DNA molecules.",
explanationZh:"互补碱基配对(A-T, C-G)确保每条新链与模板互补，产生两个相同的子代DNA分子。"}
,
{id:"qb-017",subject:"bio",type:"choice",
question:"Where does the Calvin cycle take place?",
options:["Thylakoid membrane","Stroma of chloroplast","Cytoplasm","Mitochondrial matrix"],
answer:1,
explanationEn:"The Calvin cycle occurs in the stroma of chloroplasts, using ATP and NADPH from light reactions to fix CO2. Light reactions occur on thylakoid membranes.",
explanationZh:"Calvin循环发生在叶绿体基质中，利用光反应产生的ATP和NADPH固定CO2。光反应在类囊体膜上。"}
,
{id:"qb-018",subject:"bio",type:"choice",
question:"What is the function of restriction enzymes in biotechnology?",
options:["Synthesize DNA strands","Cut DNA at specific sequences","Join DNA fragments","Amplify DNA"],
answer:1,
explanationEn:"Restriction enzymes recognize and cut DNA at specific nucleotide sequences. They are essential for creating recombinant DNA.",
explanationZh:"限制性内切酶识别并在特定序列处切割DNA。它们是创建重组DNA的基本工具。"}
,
{id:"qb-019",subject:"bio",type:"choice",
question:"Which describes directional selection?",
options:["Favors both extremes","Favors intermediates","Favors one extreme","Eliminates all variation"],
answer:2,
explanationEn:"Directional selection favors individuals at one extreme of a phenotypic range, causing the population average to shift in that direction.",
explanationZh:"定向选择有利于表型范围某一极端的个体，使种群平均值向该方向偏移。"}
,
{id:"qb-020",subject:"bio",type:"choice",
question:"Where is most ATP produced during aerobic respiration?",
options:["Glycolysis in cytoplasm","Krebs cycle in matrix","Electron transport chain and chemiosmosis","Fermentation"],
answer:2,
explanationEn:"The majority of ATP (~28-34) is produced by the electron transport chain and chemiosmosis on the inner mitochondrial membrane.",
explanationZh:"大部分ATP(约28-34个)由线粒体内膜上的电子传递链和化学渗透产生。"}
,
{id:"qb-021",subject:"bio",type:"choice",
question:"What happens during crossing over in meiosis?",
options:["Sister chromatids separate","Homologous chromosomes exchange genetic material","Nuclear envelope reforms","Chromosomes condense"],
answer:1,
explanationEn:"Crossing over occurs during prophase I when homologous chromosomes pair up and exchange corresponding DNA segments, creating recombinant chromosomes.",
explanationZh:"交叉互换发生在减I前期，同源染色体配对并交换相应DNA片段，产生重组染色体。"}
,
{id:"qb-022",subject:"bio",type:"choice",
question:"Which is NOT a characteristic of living organisms?",
options:["Ability to reproduce","Response to stimuli","Ability to evolve","Fixed number of cells"],
answer:3,
explanationEn:"Living organisms reproduce, respond to stimuli, maintain homeostasis, and evolve. Cell number is not fixed; organisms grow by increasing cell number.",
explanationZh:"生物体繁殖、响应刺激、维持稳态和进化。细胞数量不固定；生物体通过增加细胞数量来生长。"}
,
{id:"qb-023",subject:"bio",type:"choice",
question:"What is the role of oxygen in cellular respiration?",
options:["Initial electron donor","Final electron acceptor in ETC","Directly phosphorylates ADP","Breaks down glucose"],
answer:1,
explanationEn:"Oxygen serves as the final electron acceptor at the end of the electron transport chain, combining with electrons and protons to form water.",
explanationZh:"氧气作为电子传递链末端的最终电子受体，与电子和质子结合形成水。"}
,
{id:"qb-024",subject:"bio",type:"choice",
question:"Which level involves interactions between R groups of amino acids?",
options:["Primary structure","Secondary structure","Tertiary structure","Quaternary structure"],
answer:2,
explanationEn:"Tertiary structure involves interactions between R groups: hydrogen bonds, ionic bonds, disulfide bridges, and hydrophobic interactions.",
explanationZh:"三级结构涉及R基团之间的相互作用：氢键、离子键、二硫键和疏水相互作用。"}
,
{id:"qb-025",subject:"bio",type:"choice",
question:"Which hormone lowers blood glucose levels?",
options:["Glucagon","Insulin","Epinephrine","Thyroxine"],
answer:1,
explanationEn:"Insulin is produced by pancreatic beta cells and lowers blood glucose by promoting cellular uptake and conversion to glycogen.",
explanationZh:"胰岛素由胰岛beta细胞产生，通过促进细胞摄取葡萄糖并将其转化为糖原来降低血糖。"}
,
{id:"qc-001",subject:"chem",type:"choice",
question:"How many significant figures in 0.00450 g?",
options:["Two","Three","Four","Five"],
answer:1,
explanationEn:"Leading zeros are not significant. The digits 4, 5, and the trailing zero after 5 are significant. Therefore 0.00450 has three significant figures.",
explanationZh:"前导零不显著。数字4、5和5后面的末尾零都是有效数字。因此0.00450有三位有效数字。"}
,
{id:"qc-002",subject:"chem",type:"choice",
question:"What is the molar mass of CaCO3? (Ca=40.08, C=12.01, O=16.00)",
options:["68.09 g/mol","100.09 g/mol","112.09 g/mol","140.09 g/mol"],
answer:1,
explanationEn:"Molar mass = 40.08 + 12.01 + 3(16.00) = 40.08 + 12.01 + 48.00 = 100.09 g/mol.",
explanationZh:"摩尔质量=40.08+12.01+3(16.00)=100.09 g/mol。"}
,
{id:"qc-003",subject:"chem",type:"choice",
question:"Which compound contains both ionic and covalent bonds?",
options:["NaCl","CO2","NH4Cl","H2O"],
answer:2,
explanationEn:"NH4Cl contains ionic bonds between NH4+ and Cl- ions, and covalent bonds within the ammonium ion (N-H bonds).",
explanationZh:"NH4Cl中NH4+与Cl-离子之间含离子键，铵根离子内部(N-H键)含共价键。"}
,
{id:"qc-004",subject:"chem",type:"choice",
question:"What is the molecular geometry of NH3 by VSEPR?",
options:["Trigonal planar","Tetrahedral","Trigonal pyramidal","Bent"],
answer:2,
explanationEn:"NH3 has 4 electron domains (3 bonding + 1 lone pair). Electron geometry is tetrahedral, but molecular geometry is trigonal pyramidal due to the lone pair.",
explanationZh:"NH3有4个电子域(3对成键+1对孤对)。电子几何为四面体，分子几何为三角锥形。"}
,
{id:"qc-005",subject:"chem",type:"choice",
question:"What volume does 2.00 mol of ideal gas occupy at STP?",
options:["11.2 L","22.4 L","44.8 L","67.2 L"],
answer:2,
explanationEn:"At STP (0°C, 1 atm), 1 mole of ideal gas occupies 22.4 L. Therefore 2.00 mol occupies 2.00 x 22.4 = 44.8 L.",
explanationZh:"STP下1摩尔理想气体占22.4 L。因此2.00摩尔占44.8 L。"}
,
{id:"qc-006",subject:"chem",type:"choice",
question:"For 2H2 + O2 -> 2H2O, how many moles of O2 react with 4.0 mol H2?",
options:["1.0 mol","2.0 mol","4.0 mol","8.0 mol"],
answer:1,
explanationEn:"The balanced equation shows 2 mol H2 reacts with 1 mol O2. So 4.0 mol H2 requires 4.0/2 = 2.0 mol O2.",
explanationZh:"配平方程式显示2 mol H2与1 mol O2反应。因此4.0 mol H2需要2.0 mol O2。"}
,
{id:"qc-007",subject:"chem",type:"choice",
question:"What is the pH of a solution with [H+] = 1.0 x 10^-5 M?",
options:["3","5","7","9"],
answer:1,
explanationEn:"pH = -log[H+] = -log(1.0 x 10^-5) = 5. This is an acidic solution since pH < 7.",
explanationZh:"pH=-log[H+]=-log(1.0x10^-5)=5。由于pH<7，这是酸性溶液。"}
,
{id:"qc-008",subject:"chem",type:"choice",
question:"Which element has configuration 1s2 2s2 2p6 3s2 3p4?",
options:["Oxygen","Sulfur","Silicon","Phosphorus"],
answer:1,
explanationEn:"The configuration has 16 electrons (2+2+6+2+4=16). The element with atomic number 16 is sulfur (S).",
explanationZh:"该排布有16个电子。原子序数16的元素是硫(S)。"}
,
{id:"qc-009",subject:"chem",type:"choice",
question:"What is the oxidation number of Cr in Cr2O7^2-?",
options:["+3","+6","+7","+12"],
answer:1,
explanationEn:"Each oxygen is -2 (total -14). Overall charge is -2. So 2Cr + (-14) = -2, giving Cr = +6.",
explanationZh:"每个氧为-2(共-14)。总电荷为-2。因此2Cr+(-14)=-2，得Cr=+6。"}
,
{id:"qc-010",subject:"chem",type:"choice",
question:"Which is the strongest acid?",
options:["HClO (Ka=3.0x10^-8)","HCN (Ka=6.2x10^-10)","HNO2 (Ka=4.0x10^-4)","HF (Ka=7.2x10^-4)"],
answer:3,
explanationEn:"The strongest acid has the largest Ka value. HF has Ka = 7.2 x 10^-4, which is the largest among these options.",
explanationZh:"最强的酸具有最大的Ka值。HF的Ka=7.2x10^-4，是这些选项中最大的。"}
,
{id:"qc-011",subject:"chem",type:"choice",
question:"In an electrochemical cell, oxidation occurs at the:",
options:["Cathode","Anode","Salt bridge","External wire"],
answer:1,
explanationEn:"Oxidation always occurs at the anode (remember: AN OX). Reduction occurs at the cathode (RED CAT).",
explanationZh:"氧化总是在阳极发生(AN OX)。还原在阴极发生(RED CAT)。"}
,
{id:"qc-012",subject:"chem",type:"choice",
question:"What is the hybridization of carbon in CH4?",
options:["sp","sp2","sp3","sp3d"],
answer:2,
explanationEn:"Carbon in CH4 forms 4 sigma bonds with no lone pairs. With 4 electron domains, hybridization is sp3, giving tetrahedral geometry.",
explanationZh:"CH4中的碳形成4个sigma键，无孤对电子。4个电子域，杂化为sp3，产生四面体几何。"}
,
{id:"qc-013",subject:"chem",type:"choice",
question:"Which will increase the rate of a chemical reaction?",
options:["Decreasing temperature","Decreasing concentration","Adding a catalyst","Decreasing surface area"],
answer:2,
explanationEn:"A catalyst increases reaction rate by providing an alternative pathway with lower activation energy without being consumed.",
explanationZh:"催化剂通过提供较低活化能的替代反应路径来提高速率，自身不被消耗。"}
,
{id:"qc-014",subject:"chem",type:"choice",
question:"For N2 + 3H2 <=> 2NH3 (delta H < 0), what happens when temperature increases?",
options:["More NH3 produced","Less NH3 produced","No change","K increases"],
answer:1,
explanationEn:"Since the reaction is exothermic (delta H < 0), increasing temperature shifts equilibrium toward reactants (left), producing less NH3.",
explanationZh:"由于反应放热(delta H<0)，升温使平衡向反应物(左)移动，产生更少NH3。"}
,
{id:"qc-015",subject:"chem",type:"choice",
question:"What is delta H if Ea forward = 80 kJ/mol and Ea reverse = 120 kJ/mol?",
options:["-40 kJ/mol","+40 kJ/mol","-200 kJ/mol","+200 kJ/mol"],
answer:0,
explanationEn:"delta H = Ea(forward) - Ea(reverse) = 80 - 120 = -40 kJ/mol. The negative value means the forward reaction is exothermic.",
explanationZh:"delta H=Ea(正)-Ea(逆)=80-120=-40 kJ/mol。负值表示正反应为放热反应。"}
,
{id:"qc-016",subject:"chem",type:"choice",
question:"Which quantum number determines orbital shape?",
options:["Principal n","Angular momentum l","Magnetic ml","Spin ms"],
answer:1,
explanationEn:"The angular momentum quantum number (l) determines orbital shape: l=0 is s (spherical), l=1 is p (dumbbell), l=2 is d.",
explanationZh:"角量子数(l)决定轨道形状：l=0为s(球形)，l=1为p(哑铃形)，l=2为d。"}
,
{id:"qc-017",subject:"chem",type:"choice",
question:"What is the molarity of 0.50 mol NaCl in 2.0 L solution?",
options:["0.25 M","0.50 M","1.0 M","2.0 M"],
answer:0,
explanationEn:"Molarity = moles / liters = 0.50 mol / 2.0 L = 0.25 M.",
explanationZh:"摩尔浓度=摩尔数/升=0.50/2.0=0.25 M。"}
,
{id:"qc-018",subject:"chem",type:"choice",
question:"Which intermolecular force is present in ALL molecules?",
options:["Hydrogen bonding","Dipole-dipole","London dispersion","Ion-dipole"],
answer:2,
explanationEn:"London dispersion forces are present in all molecules, whether polar or nonpolar, resulting from temporary electron fluctuations.",
explanationZh:"伦敦色散力存在于所有分子中，无论极性还是非极性，由电子临时波动产生。"}
,
{id:"qc-019",subject:"chem",type:"choice",
question:"For weak acid-strong base titration, pH at equivalence point is:",
options:["Less than 7","Equal to 7","Greater than 7","Exactly 1"],
answer:2,
explanationEn:"At equivalence, the conjugate base of the weak acid is present, making the solution basic (pH > 7). For strong acid-strong base, pH = 7.",
explanationZh:"等当点时弱酸的共轭碱存在，使溶液呈碱性(pH>7)。强酸强碱滴定pH=7。"}
,
{id:"qc-020",subject:"chem",type:"choice",
question:"What is the electron configuration of Fe3+? (Fe Z=26)",
options:["[Ar] 3d5","[Ar] 3d6 4s2","[Ar] 3d6 4s1","[Ar] 3d4 4s2"],
answer:0,
explanationEn:"Fe is [Ar] 3d6 4s2. Fe3+ loses 3 electrons: first two 4s electrons, then one 3d electron, giving [Ar] 3d5.",
explanationZh:"Fe为[Ar] 3d6 4s2。Fe3+失去3个电子：先两个4s电子，再一个3d电子，得[Ar] 3d5。"}
,
{id:"qc-021",subject:"chem",type:"choice",
question:"Which statement about entropy is TRUE?",
options:["Entropy always decreases in spontaneous processes","Universe entropy increases in spontaneous processes","Solids have higher entropy than gases","Entropy decreases when solute dissolves"],
answer:1,
explanationEn:"The second law states that the entropy of the universe increases in any spontaneous process. Gases have higher entropy than solids.",
explanationZh:"第二定律指出，在任何自发过程中宇宙熵增加。气体熵高于固体。"}
,
{id:"qc-022",subject:"chem",type:"choice",
question:"What mass of CO2 is produced from 5.00 g C2H4 (M=28.05) combustion?",
options:["5.72 g","11.4 g","15.7 g","22.9 g"],
answer:2,
explanationEn:"C2H4 + 3O2 -> 2CO2 + 2H2O. Moles C2H4 = 5.00/28.05 = 0.178. Moles CO2 = 2 x 0.178 = 0.356. Mass = 0.356 x 44.01 = 15.7 g.",
explanationZh:"C2H4+3O2->2CO2+2H2O。C2H4摩尔=5.00/28.05=0.178。CO2摩尔=0.356。质量=15.7 g。"}
,
{id:"qc-023",subject:"chem",type:"choice",
question:"In HF/NaF buffer, what happens when NaOH is added?",
options:["pH increases dramatically","F- reacts with OH- to form HF","HF reacts with OH- to form F- and water","Buffer capacity exceeded"],
answer:2,
explanationEn:"When base (OH-) is added, the weak acid (HF) reacts: HF + OH- -> F- + H2O. This resists large pH changes.",
explanationZh:"加碱时弱酸(HF)与OH-反应：HF+OH-→F-+H2O。这抵抗pH的大幅变化。"}
,
{id:"qc-024",subject:"chem",type:"choice",
question:"What is the bond order of O2 by MO theory?",
options:["1","2","2.5","3"],
answer:1,
explanationEn:"O2 has 12 valence electrons. MO configuration gives 8 bonding and 4 antibonding electrons. Bond order = (8-4)/2 = 2.",
explanationZh:"O2有12个价电子。MO排布给出8个成键和4个反键电子。键级=(8-4)/2=2。"}
,
{id:"qc-025",subject:"chem",type:"choice",
question:"Which compound is most soluble in water?",
options:["CH3CH2CH3 (propane)","CH3OH (methanol)","C6H14 (hexane)","CCl4"],
answer:1,
explanationEn:"Methanol (CH3OH) has an -OH group that forms hydrogen bonds with water, making it highly soluble. Others are nonpolar.",
explanationZh:"甲醇(CH3OH)具有-OH基团，可与水形成氢键，使其高度可溶。其他是非极性的。"}

];

// ==================== GLOSSARY DATA ====================
const GLOSSARY_DATA = [

{word:"Activation energy",meaning:"活化能",category:"bio",example:"Enzymes lower the activation energy required for biochemical reactions to proceed."}
,
{word:"Active site",meaning:"活性位点",category:"bio",example:"The substrate binds to the enzyme's active site, where catalysis occurs."}
,
{word:"Active transport",meaning:"主动运输",category:"bio",example:"The sodium-potassium pump uses ATP to actively transport ions against their concentration gradient."}
,
{word:"Adenine",meaning:"腺嘌呤",category:"bio",example:"Adenine pairs with thymine in DNA through two hydrogen bonds."}
,
{word:"Allele",meaning:"等位基因",category:"bio",example:"An organism inherits two alleles for each gene, one from each parent."}
,
{word:"Amino acid",meaning:"氨基酸",category:"bio",example:"Proteins are polymers of 20 different amino acids linked by peptide bonds."}
,
{word:"ATP",meaning:"三磷酸腺苷",category:"bio",example:"ATP is the primary energy currency of the cell, powering most cellular processes."}
,
{word:"Calvin cycle",meaning:"卡尔文循环",category:"bio",example:"The Calvin cycle uses ATP and NADPH to fix CO2 into carbohydrates."}
,
{word:"Carbohydrate",meaning:"碳水化合物",category:"bio",example:"Glucose is a simple carbohydrate that serves as the primary energy source for cells."}
,
{word:"Cell membrane",meaning:"细胞膜",category:"bio",example:"The cell membrane is a selectively permeable phospholipid bilayer."}
,
{word:"Cellular respiration",meaning:"细胞呼吸",category:"bio",example:"Cellular respiration breaks down glucose to produce ATP for cellular work."}
,
{word:"Centromere",meaning:"着丝粒",category:"bio",example:"The centromere is the region where sister chromatids are joined together."}
,
{word:"Chemiosmosis",meaning:"化学渗透",category:"bio",example:"Chemiosmosis uses the proton gradient to drive ATP synthesis through ATP synthase."}
,
{word:"Chloroplast",meaning:"叶绿体",category:"bio",example:"Chloroplasts contain chlorophyll and are the site of photosynthesis in plant cells."}
,
{word:"Chromosome",meaning:"染色体",category:"bio",example:"Humans have 46 chromosomes arranged in 23 pairs in somatic cells."}
,
{word:"Codon",meaning:"密码子",category:"bio",example:"Each mRNA codon consists of three nucleotides that specify one amino acid."}
,
{word:"Cohesion",meaning:"内聚力",category:"bio",example:"Cohesion between water molecules creates surface tension."}
,
{word:"Crossing over",meaning:"交叉互换",category:"bio",example:"Crossing over during prophase I increases genetic diversity in gametes."}
,
{word:"Dehydration synthesis",meaning:"脱水缩合",category:"bio",example:"Dehydration synthesis joins monomers by removing a water molecule."}
,
{word:"Denaturation",meaning:"变性",category:"bio",example:"High temperatures can cause protein denaturation by disrupting weak bonds."}
,
{word:"Diffusion",meaning:"扩散",category:"bio",example:"Oxygen enters cells by simple diffusion across the plasma membrane."}
,
{word:"Diploid",meaning:"二倍体",category:"bio",example:"Somatic cells in humans are diploid, containing 46 chromosomes."}
,
{word:"DNA ligase",meaning:"DNA连接酶",category:"bio",example:"DNA ligase joins Okazaki fragments during DNA replication."}
,
{word:"DNA polymerase",meaning:"DNA聚合酶",category:"bio",example:"DNA polymerase synthesizes new DNA strands during replication."}
,
{word:"Electron transport chain",meaning:"电子传递链",category:"bio",example:"The ETC pumps protons to create a gradient for ATP synthesis."}
,
{word:"Endocytosis",meaning:"胞吞作用",category:"bio",example:"Phagocytosis is a type of endocytosis where cells engulf large particles."}
,
{word:"Endoplasmic reticulum",meaning:"内质网",category:"bio",example:"The rough ER has ribosomes on its surface and synthesizes proteins."}
,
{word:"Enzyme",meaning:"酶",category:"bio",example:"Each enzyme catalyzes a specific reaction by binding to its substrate."}
,
{word:"Epigenetics",meaning:"表观遗传学",category:"bio",example:"Epigenetic modifications like DNA methylation regulate gene expression."}
,
{word:"Eukaryote",meaning:"真核生物",category:"bio",example:"Animals, plants, fungi, and protists are all eukaryotes."}
,
{word:"Exon",meaning:"外显子",category:"bio",example:"Exons are the coding regions of genes that remain in mature mRNA."}
,
{word:"Facilitated diffusion",meaning:"协助扩散",category:"bio",example:"Glucose enters cells through facilitated diffusion via GLUT transporters."}
,
{word:"Fermentation",meaning:"发酵",category:"bio",example:"Lactic acid fermentation occurs in muscle cells during intense exercise."}
,
{word:"Gene expression",meaning:"基因表达",category:"bio",example:"Gene expression involves transcription and translation to produce proteins."}
,
{word:"Genetic drift",meaning:"遗传漂变",category:"bio",example:"Genetic drift has a greater effect in small populations than in large ones."}
,
{word:"Glycolysis",meaning:"糖酵解",category:"bio",example:"Glycolysis splits glucose into two pyruvate molecules in the cytoplasm."}
,
{word:"Golgi apparatus",meaning:"高尔基体",category:"bio",example:"The Golgi apparatus modifies, sorts, and packages proteins for transport."}
,
{word:"Haploid",meaning:"单倍体",category:"bio",example:"Gametes are haploid cells containing 23 chromosomes."}
,
{word:"Homeostasis",meaning:"稳态",category:"bio",example:"Homeostasis maintains stable internal conditions despite environmental changes."}
,
{word:"Hydrogen bond",meaning:"氢键",category:"bio",example:"Hydrogen bonds between base pairs hold the two DNA strands together."}
,
{word:"Hydrophilic",meaning:"亲水的",category:"bio",example:"The phosphate head of a phospholipid is hydrophilic."}
,
{word:"Hydrophobic",meaning:"疏水的",category:"bio",example:"The fatty acid tails of phospholipids are hydrophobic."}
,
{word:"Hydrolysis",meaning:"水解",category:"bio",example:"Hydrolysis breaks polymers into monomers by adding water."}
,
{word:"Interphase",meaning:"间期",category:"bio",example:"Interphase consists of G1, S, and G2 phases before cell division begins."}
,
{word:"Intron",meaning:"内含子",category:"bio",example:"Introns are non-coding sequences removed during RNA splicing."}
,
{word:"Krebs cycle",meaning:"克雷布斯循环",category:"bio",example:"The Krebs cycle generates NADH and FADH2 for the electron transport chain."}
,
{word:"Lipid",meaning:"脂质",category:"bio",example:"Triglycerides are lipids composed of glycerol and three fatty acids."}
,
{word:"Lysosome",meaning:"溶酶体",category:"bio",example:"Lysosomes contain hydrolytic enzymes for intracellular digestion."}
,
{word:"Meiosis",meaning:"减数分裂",category:"bio",example:"Meiosis produces four haploid gametes from one diploid cell."}
,
{word:"Mitochondrion",meaning:"线粒体",category:"bio",example:"Mitochondria are the powerhouses of the cell, producing ATP through respiration."}
,
{word:"Mitosis",meaning:"有丝分裂",category:"bio",example:"Mitosis produces two genetically identical daughter cells."}
,
{word:"mRNA",meaning:"信使RNA",category:"bio",example:"mRNA carries genetic information from DNA to the ribosome."}
,
{word:"Mutation",meaning:"突变",category:"bio",example:"Point mutations involve a change in a single nucleotide."}
,
{word:"NADH",meaning:"还原型辅酶I",category:"bio",example:"NADH carries electrons to the electron transport chain."}
,
{word:"Natural selection",meaning:"自然选择",category:"bio",example:"Natural selection favors traits that enhance survival and reproduction."}
,
{word:"Nucleotide",meaning:"核苷酸",category:"bio",example:"A nucleotide consists of a sugar, phosphate group, and nitrogenous base."}
,
{word:"Osmosis",meaning:"渗透",category:"bio",example:"Osmosis is the diffusion of water across a selectively permeable membrane."}
,
{word:"Oxidative phosphorylation",meaning:"氧化磷酸化",category:"bio",example:"Oxidative phosphorylation produces the majority of ATP during cellular respiration."}
,
{word:"Passive transport",meaning:"被动运输",category:"bio",example:"Simple diffusion is a type of passive transport that requires no energy."}
,
{word:"Peptide bond",meaning:"肽键",category:"bio",example:"Peptide bonds connect amino acids in a polypeptide chain."}
,
{word:"Phagocytosis",meaning:"吞噬作用",category:"bio",example:"White blood cells use phagocytosis to engulf and destroy pathogens."}
,
{word:"Phenotype",meaning:"表型",category:"bio",example:"The phenotype is the observable expression of an organism's genotype."}
,
{word:"Phospholipid",meaning:"磷脂",category:"bio",example:"Phospholipids form the basic structure of all cell membranes."}
,
{word:"Photosynthesis",meaning:"光合作用",category:"bio",example:"Photosynthesis converts light energy into chemical energy stored in glucose."}
,
{word:"Polymer",meaning:"聚合物",category:"bio",example:"Proteins are polymers composed of amino acid monomers."}
,
{word:"Polypeptide",meaning:"多肽",category:"bio",example:"A polypeptide is a chain of amino acids linked by peptide bonds."}
,
{word:"Prokaryote",meaning:"原核生物",category:"bio",example:"Bacteria and archaea are prokaryotes that lack membrane-bound nuclei."}
,
{word:"Promoter",meaning:"启动子",category:"bio",example:"The promoter is a DNA sequence where RNA polymerase binds to initiate transcription."}
,
{word:"Protein",meaning:"蛋白质",category:"bio",example:"Proteins perform diverse functions including catalysis, transport, and structure."}
,
{word:"Recombinant DNA",meaning:"重组DNA",category:"bio",example:"Recombinant DNA technology combines DNA from different sources."}
,
{word:"Ribosome",meaning:"核糖体",category:"bio",example:"Ribosomes are the cellular structures where protein synthesis occurs."}
,
{word:"RNA polymerase",meaning:"RNA聚合酶",category:"bio",example:"RNA polymerase synthesizes RNA during transcription."}
,
{word:"Rubisco",meaning:"核酮糖羧化酶",category:"bio",example:"Rubisco catalyzes CO2 fixation in the Calvin cycle."}
,
{word:"Semiconservative replication",meaning:"半保留复制",category:"bio",example:"DNA replication is semiconservative: each daughter DNA has one parental strand."}
,
{word:"Transcription",meaning:"转录",category:"bio",example:"Transcription produces mRNA from a DNA template."}
,
{word:"Translation",meaning:"翻译",category:"bio",example:"Translation synthesizes proteins using mRNA as a template."}
,
{word:"tRNA",meaning:"转运RNA",category:"bio",example:"tRNA delivers specific amino acids to the ribosome during translation."}
,
{word:"Activation energy",meaning:"活化能",category:"chem",example:"Catalysts work by providing an alternative pathway with lower activation energy."}
,
{word:"Amphoteric",meaning:"两性的",category:"chem",example:"Water is amphoteric: it can act as both an acid and a base."}
,
{word:"Anode",meaning:"阳极",category:"chem",example:"In a galvanic cell, oxidation occurs at the anode."}
,
{word:"Avogadro's number",meaning:"阿伏伽德罗常数",category:"chem",example:"Avogadro's number (6.022 x 10^23) is the number of particles in one mole."}
,
{word:"Bond energy",meaning:"键能",category:"chem",example:"Bond energy is the energy required to break one mole of bonds in the gas phase."}
,
{word:"Buffer solution",meaning:"缓冲溶液",category:"chem",example:"A buffer solution resists pH change when small amounts of acid or base are added."}
,
{word:"Calorimetry",meaning:"量热法",category:"chem",example:"Calorimetry measures heat transfer in chemical reactions using q = mc delta T."}
,
{word:"Catalyst",meaning:"催化剂",category:"chem",example:"A catalyst speeds up a reaction without being consumed in the process."}
,
{word:"Cathode",meaning:"阴极",category:"chem",example:"Reduction occurs at the cathode in both galvanic and electrolytic cells."}
,
{word:"Colloid",meaning:"胶体",category:"chem",example:"Milk is a colloid containing fat droplets dispersed in water."}
,
{word:"Concentration",meaning:"浓度",category:"chem",example:"Molarity is a common unit of concentration in chemistry."}
,
{word:"Covalent bond",meaning:"共价键",category:"chem",example:"A covalent bond forms when atoms share electron pairs."}
,
{word:"Dipole moment",meaning:"偶极矩",category:"chem",example:"The dipole moment measures the polarity of a molecule."}
,
{word:"Electrolyte",meaning:"电解质",category:"chem",example:"NaCl is a strong electrolyte because it completely dissociates in water."}
,
{word:"Electronegativity",meaning:"电负性",category:"chem",example:"Fluorine has the highest electronegativity on the Pauling scale."}
,
{word:"Empirical formula",meaning:"实验式",category:"chem",example:"The empirical formula gives the simplest whole number ratio of atoms."}
,
{word:"Endothermic",meaning:"吸热的",category:"chem",example:"Endothermic reactions absorb heat from surroundings, so delta H > 0."}
,
{word:"Enthalpy",meaning:"焓",category:"chem",example:"The enthalpy change (delta H) represents heat absorbed or released at constant pressure."}
,
{word:"Entropy",meaning:"熵",category:"chem",example:"The second law states that entropy of the universe always increases."}
,
{word:"Equilibrium constant",meaning:"平衡常数",category:"chem",example:"K > 1 indicates products are favored at equilibrium."}
,
{word:"Exothermic",meaning:"放热的",category:"chem",example:"Exothermic reactions release heat, so delta H < 0."}
,
{word:"Half-life",meaning:"半衰期",category:"chem",example:"The half-life of a first-order reaction is independent of initial concentration."}
,
{word:"Hess's Law",meaning:"赫斯定律",category:"chem",example:"Hess's Law allows calculation of enthalpy changes using known reactions."}
,
{word:"Hybridization",meaning:"杂化",category:"chem",example:"sp3 hybridization gives tetrahedral geometry with 109.5 degree bond angles."}
,
{word:"Ideal gas law",meaning:"理想气体定律",category:"chem",example:"The ideal gas law (PV = nRT) relates pressure, volume, temperature, and moles."}
,
{word:"Ionic bond",meaning:"离子键",category:"chem",example:"NaCl forms through ionic bonding between Na+ and Cl- ions."}
,
{word:"Isotope",meaning:"同位素",category:"chem",example:"Carbon-12 and carbon-14 are isotopes of carbon."}
,
{word:"Le Chatelier's principle",meaning:"勒夏特列原理",category:"chem",example:"Le Chatelier's principle predicts how systems at equilibrium respond to disturbances."}
,
{word:"Limiting reactant",meaning:"限量反应物",category:"chem",example:"The limiting reactant is completely consumed first and determines maximum product yield."}
,
{word:"London dispersion forces",meaning:"伦敦色散力",category:"chem",example:"London dispersion forces exist between all molecules, even nonpolar ones."}
,
{word:"Molarity",meaning:"摩尔浓度",category:"chem",example:"A 1 M solution contains 1 mole of solute per liter of solution."}
,
{word:"Mole",meaning:"摩尔",category:"chem",example:"One mole of any substance contains 6.022 x 10^23 particles."}
,
{word:"Net ionic equation",meaning:"净离子方程式",category:"chem",example:"The net ionic equation shows only species that participate in the reaction."}
,
{word:"Osmotic pressure",meaning:"渗透压",category:"chem",example:"Osmotic pressure is a colligative property depending on solute concentration."}
,
{word:"Oxidation number",meaning:"氧化数",category:"chem",example:"The oxidation number of oxygen in H2O is -2."}
,
{word:"pH",meaning:"酸碱度",category:"chem",example:"pH is defined as the negative logarithm of hydrogen ion concentration."}
,
{word:"Pi bond",meaning:"pi键",category:"chem",example:"A double bond consists of one sigma bond and one pi bond."}
,
{word:"Polar molecule",meaning:"极性分子",category:"chem",example:"Water is a polar molecule due to the electronegativity difference between O and H."}
,
{word:"Rate law",meaning:"速率定律",category:"chem",example:"The rate law expresses reaction rate as a function of reactant concentrations."}
,
{word:"Redox reaction",meaning:"氧化还原反应",category:"chem",example:"Redox reactions involve transfer of electrons between species."}
,
{word:"Salt bridge",meaning:"盐桥",category:"chem",example:"A salt bridge maintains electrical neutrality in an electrochemical cell."}
,
{word:"Sigma bond",meaning:"sigma键",category:"chem",example:"A single covalent bond is always a sigma bond formed by head-on orbital overlap."}
,
{word:"Solubility product",meaning:"溶度积",category:"chem",example:"Ksp describes equilibrium between a solid and its dissolved ions."}
,
{word:"Specific heat",meaning:"比热容",category:"chem",example:"Water has a high specific heat, requiring much energy to change temperature."}
,
{word:"Standard reduction potential",meaning:"标准还原电势",category:"chem",example:"Standard reduction potentials predict the direction of redox reactions."}
,
{word:"Stoichiometry",meaning:"化学计量学",category:"chem",example:"Stoichiometry uses balanced equations to calculate reactant and product amounts."}
,
{word:"Titration",meaning:"滴定",category:"chem",example:"Titration determines unknown concentration using a solution of known concentration."}
,
{word:"van der Waals forces",meaning:"范德华力",category:"chem",example:"Van der Waals forces include dipole-dipole and London dispersion forces."}
,
{word:"VSEPR",meaning:"价层电子对互斥理论",category:"chem",example:"VSEPR theory predicts molecular geometry based on electron pair repulsion."}

];

// ==================== MAJORS DATA ====================
const MAJORS_DATA = {
undergrad:[
{id:"ug-001",nameEn:"Biological Sciences",nameZh:"生物科学",level:"undergrad",descriptionEn:"Biological Sciences is the broad study of living organisms, from molecular biology to ecology. Unlike specialized biotech programs, it provides a comprehensive foundation across all biological disciplines, preparing students for diverse career paths or advanced research.",descriptionZh:"生物科学是对生物体的广泛研究，从分子生物学到生态学。与专业化的生物技术项目不同，它提供所有生物学领域的综合基础，为多元化的职业道路或高级研究做准备。",courses:["General Biology","Genetics","Cell Biology","Ecology","Evolutionary Biology","Biochemistry"],suitableEn:"Students with broad curiosity about nature, strong analytical skills, and interest in research or teaching.",suitableZh:"对自然有广泛好奇心、分析能力强、对研究或教学感兴趣的学生。",careerEn:"Research scientist, educator, environmental consultant, healthcare professional, or graduate studies in any biology subfield.",careerZh:"研究科学家、教育工作者、环境顾问、医疗专业人员，或任何生物学子领域的研究生学习。",schools:"Harvard, Stanford, UC Berkeley, Oxford, Cambridge"},
{id:"ug-002",nameEn:"Biotechnology",nameZh:"生物技术",level:"undergrad",descriptionEn:"Biotechnology applies biological systems and organisms to develop products and technologies for medicine, agriculture, and industry. It bridges biology with engineering and business, focusing on practical applications like genetic engineering, drug development, and bio manufacturing.",descriptionZh:"生物技术应用生物系统和生物体来开发医药、农业和工业的产品和技术。它连接生物学与工程学和商业，专注于遗传工程、药物开发和生物制造等实际应用。",courses:["Molecular Biology","Genetic Engineering","Bioprocess Engineering","Immunology","Bioinformatics","Biostatistics"],suitableEn:"Students interested in applying science to real-world problems, entrepreneurship, and the intersection of biology and technology.",suitableZh:"对将科学应用于实际问题、创业精神，以及生物学与技术交叉领域感兴趣的学生。",careerEn:"Biotech R&D, pharmaceutical industry, agricultural technology, biomanufacturing, or bioentrepreneurship.",careerZh:"生物技术研发、制药行业、农业技术、生物制造或生物创业。",schools:"MIT, Johns Hopkins, UC San Diego, Imperial College London, ETH Zurich"},
{id:"ug-003",nameEn:"Bioengineering",nameZh:"生物工程",level:"undergrad",descriptionEn:"Bioengineering combines engineering principles with biology to design solutions for healthcare, environment, and industry. It emphasizes quantitative approaches, systems thinking, and the design of biological systems and medical devices.",descriptionZh:"生物工程将工程原理与生物学结合，为医疗保健、环境和工业设计解决方案。它强调定量方法、系统思维，以及生物系统和医疗设备的设计。",courses:["Engineering Principles","Biomechanics","Biomaterials","Systems Biology","Bioinstrumentation","Process Design"],suitableEn:"Students with strong math and physics backgrounds who want to engineer solutions using biological principles.",suitableZh:"数学和物理基础扎实，希望利用生物学原理设计工程解决方案的学生。",careerEn:"Medical device design, tissue engineering, bioprocess development, consulting, or graduate engineering programs.",careerZh:"医疗设备设计、组织工程、生物工艺开发、咨询或工程类研究生项目。",schools:"MIT, Stanford, UC Berkeley, Caltech, Georgia Tech"},
{id:"ug-004",nameEn:"Biomedical Engineering",nameZh:"生物医学工程",level:"undergrad",descriptionEn:"Biomedical Engineering (BME) applies engineering and physics principles to medicine and biology. It focuses on developing medical devices, imaging systems, prosthetics, and therapeutic technologies to improve human health.",descriptionZh:"生物医学工程将工程和物理学原理应用于医学和生物学。它专注于开发医疗设备、成像系统、假肢和治疗技术以改善人类健康。",courses:["Physiology for Engineers","Medical Imaging","Biomechanics","Biomaterials","Neural Engineering","Regenerative Medicine"],suitableEn:"Students interested in healthcare innovation, device design, and bridging medicine with engineering.",suitableZh:"对医疗保健创新、设备设计以及连接医学与工程感兴趣的学生。",careerEn:"Medical device industry, hospital technology departments, pharma companies, or MD/PhD programs.",careerZh:"医疗器械行业、医院技术部门、制药公司或MD/PhD项目。",schools:"Johns Hopkins, MIT, Duke, UC San Diego, University of Michigan"},
{id:"ug-005",nameEn:"Neuroscience",nameZh:"神经科学",level:"undergrad",descriptionEn:"Neuroscience is the interdisciplinary study of the nervous system, combining biology, psychology, chemistry, and physics. It investigates how the brain and nervous system function at molecular, cellular, systems, and behavioral levels.",descriptionZh:"神经科学是对神经系统的跨学科研究，结合生物学、心理学、化学和物理学。它在分子、细胞、系统和行为层面研究大脑和神经系统的功能。",courses:["Neuroanatomy","Cognitive Neuroscience","Computational Neuroscience","Neuropharmacology","Sensory Systems","Behavioral Neurobiology"],suitableEn:"Students fascinated by the brain, with interest in both biological mechanisms and behavioral phenomena.",suitableZh:"对大脑着迷，对生物机制和行为现象都感兴趣的学生。",careerEn:"Neuroscience research, pharmaceutical R&D, clinical psychology, medical school, or neurotechnology industry.",careerZh:"神经科学研究、制药研发、临床心理学、医学院或神经科技行业。",schools:"Harvard, Stanford, UC San Diego, Johns Hopkins, Oxford"},
{id:"ug-006",nameEn:"Bioinformatics",nameZh:"生物信息学",level:"undergrad",descriptionEn:"Bioinformatics combines computer science, statistics, and biology to analyze and interpret biological data, especially genomic and proteomic datasets. It is essential for modern genomics research, drug discovery, and personalized medicine.",descriptionZh:"生物信息学结合计算机科学、统计学和生物学来分析和解释生物数据，特别是基因组和蛋白质组数据集。它对现代基因组学研究、药物发现和个性化医学至关重要。",courses:["Programming for Biology","Genomics","Machine Learning","Data Structures","Statistical Methods","Systems Biology"],suitableEn:"Students with strong computational skills who are passionate about biology and big data analysis.",suitableZh:"具有扎实计算能力，对生物学和大数据分析充满热情的学生。",careerEn:"Data scientist in biotech, pharmaceutical companies, genomics labs, healthcare analytics, or software development.",careerZh:"生物技术数据科学家、制药公司、基因组学实验室、医疗分析或软件开发。",schools:"MIT, CMU, Stanford, UC Berkeley, University of Cambridge"},
{id:"ug-007",nameEn:"Ecology",nameZh:"生态学",level:"undergrad",descriptionEn:"Ecology studies the interactions between organisms and their environment, from individual species to entire ecosystems. It addresses critical issues like biodiversity conservation, climate change impacts, and sustainable resource management.",descriptionZh:"生态学研究生物体与其环境之间的相互作用，从单个物种到整个生态系统。它解决生物多样性保护、气候变化影响和可持续资源管理等关键问题。",courses:["Population Ecology","Community Ecology","Ecosystem Ecology","Conservation Biology","Biostatistics","Environmental Science"],suitableEn:"Students passionate about nature conservation, environmental problem-solving, and field research.",suitableZh:"对自然保护、环境问题解决和野外研究充满热情的学生。",careerEn:"Environmental consulting, conservation organizations, government agencies, ecological research, or environmental policy.",careerZh:"环境咨询、保护组织、政府机构、生态研究或环境政策。",schools:"UC Davis, University of Washington, Yale, Duke, ETH Zurich"},
{id:"ug-008",nameEn:"Marine Biology",nameZh:"海洋生物学",level:"undergrad",descriptionEn:"Marine Biology focuses on organisms and ecosystems in ocean and saltwater environments. It covers topics from marine microbiology and coral reef ecology to fisheries science and deep-sea biology, addressing critical issues like ocean conservation.",descriptionZh:"海洋生物学专注于海洋和咸水环境中的生物体和生态系统。它涵盖海洋微生物学、珊瑚礁生态学、渔业科学和深海生物学等主题，解决海洋保护等关键问题。",courses:["Oceanography","Marine Ecology","Ichthyology","Marine Mammalogy","Coastal Biology","Deep-Sea Biology"],suitableEn:"Students passionate about ocean life, fieldwork, environmental conservation, and aquatic research.",suitableZh:"对海洋生物、野外工作、环境保护和水生研究充满热情的学生。",careerEn:"Marine research, aquarium management, fisheries science, environmental consulting, ocean conservation organizations.",careerZh:"海洋研究、水族馆管理、渔业科学、环境咨询、海洋保护组织。",schools:"UC San Diego (Scripps), University of Washington, Duke, University of Queensland, MIT-WHOI"},
{id:"ug-009",nameEn:"Molecular Biology",nameZh:"分子生物学",level:"undergrad",descriptionEn:"Molecular Biology focuses on the molecular mechanisms underlying biological processes, including DNA replication, gene expression, protein synthesis, and molecular genetics. It serves as the foundation for genetic engineering and biotechnology.",descriptionZh:"分子生物学专注于生物过程背后的分子机制，包括DNA复制、基因表达、蛋白质合成和分子遗传学。它是遗传工程和生物技术的基础。",courses:["Molecular Genetics","Gene Expression","Protein Structure","Recombinant DNA Technology","Genomics","Cell Signaling"],suitableEn:"Students interested in understanding life at the molecular level and laboratory research techniques.",suitableZh:"对在分子层面理解生命和实验室研究技术感兴趣的学生。",careerEn:"Research labs, biotech companies, pharmaceutical R&D, clinical diagnostics, or graduate programs in genetics/biochemistry.",careerZh:"研究实验室、生物技术公司、制药研发、临床诊断或遗传学/生物化学研究生项目。",schools:"MIT, Stanford, Harvard, Cold Spring Harbor Lab, UC San Francisco"},
{id:"ug-010",nameEn:"Biochemistry",nameZh:"生物化学",level:"undergrad",descriptionEn:"Biochemistry bridges biology and chemistry, studying chemical processes within living organisms. It focuses on enzymes, metabolism, nucleic acids, proteins, and lipids, providing essential knowledge for medicine, research, and biotechnology.",descriptionZh:"生物化学连接生物学和化学，研究生物体内的化学过程。它专注于酶、新陈代谢、核酸、蛋白质和脂质，为医学、研究和生物技术提供基础知识。",courses:["Organic Chemistry","Enzymology","Metabolism","Structural Biology","Spectroscopy","Nucleic Acid Chemistry"],suitableEn:"Students who enjoy both chemistry and biology, with strong analytical and laboratory skills.",suitableZh:"喜欢化学和生物学，具有扎实分析和实验技能的学生。",careerEn:"Pharmaceutical industry, clinical labs, food science, forensic science, medical school, or biochemical research.",careerZh:"制药行业、临床实验室、食品科学、法医学、医学院或生物化学研究。",schools:"Harvard, Stanford, UC Berkeley, Oxford, Caltech"},
{id:"ug-011",nameEn:"Microbiology",nameZh:"微生物学",level:"undergrad",descriptionEn:"Microbiology studies microscopic organisms including bacteria, viruses, fungi, and protozoa. It covers microbial physiology, genetics, pathogenesis, immunology, and the roles of microbes in health, disease, and the environment.",descriptionZh:"微生物学研究微观生物体，包括细菌、病毒、真菌和原生动物。它涵盖微生物生理学、遗传学、致病机制、免疫学，以及微生物在健康、疾病和环境中的作用。",courses:["Bacteriology","Virology","Immunology","Microbial Genetics","Medical Microbiology","Environmental Microbiology"],suitableEn:"Students interested in infectious diseases, public health, laboratory diagnostics, and microbial research.",suitableZh:"对传染病、公共卫生、实验室诊断和微生物研究感兴趣的学生。",careerEn:"Clinical microbiology, pharmaceutical R&D, public health agencies, food safety, vaccine development.",careerZh:"临床微生物学、制药研发、公共卫生机构、食品安全、疫苗开发。",schools:"Johns Hopkins, UC San Diego, University of Wisconsin-Madison, Imperial College London"},
{id:"ug-012",nameEn:"Genetics",nameZh:"遗传学",level:"undergrad",descriptionEn:"Genetics studies how traits are inherited and expressed, from classical Mendelian patterns to modern molecular genetics. It encompasses population genetics, human genetics, genomics, and epigenetics, with applications in medicine and agriculture.",descriptionZh:"遗传学研究性状如何遗传和表达，从经典孟德尔模式到现代分子遗传学。它涵盖群体遗传学、人类遗传学、基因组学和表观遗传学，在医学和农业中有应用。",courses:["Mendelian Genetics","Population Genetics","Human Genetics","Genomics","Epigenetics","Cytogenetics"],suitableEn:"Students fascinated by inheritance patterns, DNA analysis, and the genetic basis of disease.",suitableZh:"对遗传模式、DNA分析和疾病遗传基础着迷的学生。",careerEn:"Genetic counseling, clinical genetics labs, agricultural breeding, pharmaceutical R&D, or research.",careerZh:"遗传咨询、临床遗传学实验室、农业育种、制药研发或研究。",schools:"Stanford, UC Davis, University of Michigan, Edinburgh, UC San Diego"},
{id:"ug-013",nameEn:"Immunology",nameZh:"免疫学",level:"undergrad",descriptionEn:"Immunology studies the immune system's structure and function, including how the body defends against pathogens, autoimmune diseases, allergies, and cancer. It bridges basic biology with clinical medicine and pharmaceutical development.",descriptionZh:"免疫学研究免疫系统的结构和功能，包括身体如何防御病原体、自身免疫疾病、过敏和癌症。它将基础生物学与临床医学和药物开发连接起来。",courses:["Innate Immunity","Adaptive Immunity","Immunopathology","Vaccinology","Cancer Immunology","Microbiology"],suitableEn:"Students interested in medicine, disease mechanisms, and the body's defense systems.",suitableZh:"对医学、疾病机制和人体防御系统感兴趣的学生。",careerEn:"Medical research, pharmaceutical industry, clinical immunology, vaccine development, or medical school.",careerZh:"医学研究、制药行业、临床免疫学、疫苗开发或医学院。",schools:"Johns Hopkins, Harvard, Stanford, University of Pennsylvania, Oxford"}],
grad:[
{id:"gd-001",nameEn:"Molecular Biology & Genetics",nameZh:"分子生物学与遗传学",level:"grad",descriptionEn:"This direction investigates the molecular mechanisms of gene function, regulation, and inheritance. Research areas include gene editing (CRISPR), functional genomics, epigenetics, and the genetic basis of human diseases.",descriptionZh:"该方向研究基因功能、调控和遗传的分子机制。研究领域包括基因编辑(CRISPR)、功能基因组学、表观遗传学和人类疾病的遗传基础。",methods:["CRISPR-Cas9 gene editing","Next-generation sequencing","RNA interference","Fluorescence microscopy","Bioinformatics analysis"],backgroundEn:"Undergraduate in Biological Sciences, Molecular Biology, Genetics, or Biochemistry.",backgroundZh:"本科为生物科学、分子生物学、遗传学或生物化学。",careerEn:"Academic research (postdoc to professor), biotech R&D, pharmaceutical genetics teams, clinical genomics labs.",careerZh:"学术研究（博士后到教授）、生物技术研发、制药遗传学团队、临床基因组学实验室。"},
{id:"gd-002",nameEn:"Cell & Developmental Biology",nameZh:"细胞与发育生物学",level:"grad",descriptionEn:"This field studies how cells grow, divide, differentiate, and organize into tissues and organisms. Research spans stem cell biology, organogenesis, regeneration, and the cellular basis of developmental disorders.",descriptionZh:"该领域研究细胞如何生长、分裂、分化和组织成组织和生物体。研究涵盖干细胞生物学、器官发生、再生和发育障碍的细胞基础。",methods:["Stem cell culture","Confocal microscopy","Gene knockout models","Live-cell imaging","Organoid technology"],backgroundEn:"Undergraduate in Biology, Biochemistry, or Bioengineering.",backgroundZh:"本科为生物学、生物化学或生物工程。",careerEn:"Stem cell research, regenerative medicine industry, developmental biology labs, tissue engineering companies.",careerZh:"干细胞研究、再生医学行业、发育生物学实验室、组织工程公司。"},
{id:"gd-003",nameEn:"Neurobiology",nameZh:"神经生物学",level:"grad",descriptionEn:"Neurobiology explores the structure and function of the nervous system at cellular and molecular levels. Research focuses on neural circuits, synaptic transmission, neurodegenerative diseases (Alzheimer's, Parkinson's), and brain-machine interfaces.",descriptionZh:"神经生物学在细胞和分子层面探索神经系统的结构和功能。研究聚焦于神经回路、突触传递、神经退行性疾病（阿尔茨海默病、帕金森病）和脑机接口。",methods:["Electrophysiology (patch clamp)","Optogenetics","Two-photon microscopy","Neural tracing","Computational modeling"],backgroundEn:"Undergraduate in Neuroscience, Biology, Psychology, or Biomedical Engineering.",backgroundZh:"本科为神经科学、生物学、心理学或生物医学工程。",careerEn:"Academic neuroscience labs, pharmaceutical neurobiology, neurotechnology startups, clinical research.",careerZh:"学术神经科学实验室、制药神经生物学、神经科技创业公司、临床研究。"},
{id:"gd-004",nameEn:"Immunology",nameZh:"免疫学",level:"grad",descriptionEn:"Graduate immunology focuses on understanding immune responses and developing immunotherapies. Hot research areas include CAR-T cell therapy, checkpoint inhibitors, vaccine development, and understanding autoimmune diseases.",descriptionZh:"研究生免疫学专注于理解免疫反应和开发免疫疗法。热门研究领域包括CAR-T细胞疗法、检查点抑制剂、疫苗开发和理解自身免疫疾病。",methods:["Flow cytometry","ELISA and Western blot","Animal models","Single-cell RNA sequencing","Protein engineering"],backgroundEn:"Undergraduate in Immunology, Microbiology, Biology, or Medicine.",backgroundZh:"本科为免疫学、微生物学、生物学或医学。",careerEn:"Biopharma (immunotherapy), vaccine companies, clinical immunology, academic research, regulatory science.",careerZh:"生物制药（免疫疗法）、疫苗公司、临床免疫学、学术研究、监管科学。"},
{id:"gd-005",nameEn:"Structural Biology",nameZh:"结构生物学",level:"grad",descriptionEn:"Structural Biology determines the 3D structures of biological macromolecules to understand their functions. It is critical for rational drug design and understanding disease mechanisms at the atomic level.",descriptionZh:"结构生物学确定生物大分子的三维结构以理解其功能。它对合理药物设计和在原子层面理解疾病机制至关重要。",methods:["X-ray crystallography","Cryo-electron microscopy (Cryo-EM)","NMR spectroscopy","Protein crystallization","Molecular dynamics simulation"],backgroundEn:"Undergraduate in Biochemistry, Biophysics, Chemistry, or Biology with strong quantitative skills.",backgroundZh:"本科为生物化学、生物物理学、化学或生物学，具有扎实定量技能。",careerEn:"Structural genomics consortia, pharmaceutical structure-based drug design, biotech protein engineering, cryo-EM facilities.",careerZh:"结构基因组学联盟、制药基于结构的药物设计、生物技术蛋白质工程、冷冻电镜设施。"},
{id:"gd-006",nameEn:"Synthetic Biology",nameZh:"合成生物学",level:"grad",descriptionEn:"Synthetic Biology designs and constructs new biological parts, devices, and systems for useful purposes. It combines biology, engineering, and computer science to create organisms that produce biofuels, drugs, and novel materials.",descriptionZh:"合成生物学设计和构建新的生物部件、装置和系统以实现有用目的。它结合生物学、工程学和计算机科学来创造生产生物燃料、药物和新型材料的生物体。",methods:["Gene circuit design","Metabolic engineering","DNA synthesis","Microfluidics","Mathematical modeling"],backgroundEn:"Undergraduate in Bioengineering, Molecular Biology, or Biology with programming experience.",backgroundZh:"本科为生物工程、分子生物学或生物学，具有编程经验。",careerEn:"Synthetic biology startups, biomanufacturing, biofuel companies, government labs, biofoundries.",careerZh:"合成生物学创业公司、生物制造、生物燃料公司、政府实验室、生物铸造厂。"},
{id:"gd-007",nameEn:"Genomics & Bioinformatics",nameZh:"基因组学与生物信息学",level:"grad",descriptionEn:"This interdisciplinary field analyzes large-scale genomic data to understand gene function, evolution, and disease. It is essential for precision medicine, evolutionary biology, and agricultural genomics.",descriptionZh:"这个跨学科领域分析大规模基因组数据以理解基因功能、进化和疾病。它对精准医学、进化生物学和农业基因组学至关重要。",methods:["Whole-genome sequencing","RNA-seq analysis","Machine learning for genomics","Variant calling","Phylogenomics"],backgroundEn:"Undergraduate in Bioinformatics, Computer Science, Biology, or Statistics with programming skills.",backgroundZh:"本科为生物信息学、计算机科学、生物学或统计学，具有编程技能。",careerEn:"Genomics institutes, big tech health divisions, pharmaceutical bioinformatics, clinical sequencing companies.",careerZh:"基因组学研究所、大型科技健康部门、制药生物信息学、临床测序公司。"},
{id:"gd-008",nameEn:"Cancer Biology",nameZh:"癌症生物学",level:"grad",descriptionEn:"Cancer Biology investigates the molecular and cellular mechanisms of cancer development, progression, and treatment resistance. Research focuses on oncogenes, tumor suppressors, cancer immunology, and targeted therapies.",descriptionZh:"癌症生物学研究癌症发展、进展和治疗抗性的分子和细胞机制。研究聚焦于癌基因、肿瘤抑制因子、癌症免疫学和靶向治疗。",methods:["Tumor cell culture","Mouse xenograft models","CRISPR screening","Flow cytometry","Immunohistochemistry"],backgroundEn:"Undergraduate in Biology, Biochemistry, or related biomedical fields.",backgroundZh:"本科为生物学、生物化学或相关生物医学领域。",careerEn:"Cancer research centers, pharmaceutical oncology R&D, clinical trials, biotech targeted therapy companies.",careerZh:"癌症研究中心、制药肿瘤学研发、临床试验、生物技术靶向治疗公司。"},
{id:"gd-009",nameEn:"Biophysics",nameZh:"生物物理学",level:"grad",descriptionEn:"Biophysics applies physical principles and methods to understand biological systems. It bridges physics and biology, using techniques like single-molecule imaging, computational modeling, and structural analysis to study proteins, membranes, and cells.",descriptionZh:"生物物理学应用物理学原理和方法来理解生物系统。它连接物理学和生物学，使用单分子成像、计算建模和结构分析等技术来研究蛋白质、膜和细胞。",methods:["Single-molecule fluorescence","Atomic force microscopy","Molecular dynamics simulations","Optical tweezers","Cryo-EM"],backgroundEn:"Undergraduate in Physics, Biophysics, Chemistry, or Engineering with strong math background.",backgroundZh:"本科为物理学、生物物理学、化学或工程学，数学基础扎实。",careerEn:"Academic biophysics labs, pharmaceutical structural biology, medical physics, instrumentation companies.",careerZh:"学术生物物理学实验室、制药结构生物学、医学物理、仪器公司。"},
{id:"gd-010",nameEn:"Systems Biology",nameZh:"系统生物学",level:"grad",descriptionEn:"Systems Biology takes a holistic approach to understanding complex biological systems by integrating data from genomics, proteomics, and metabolomics. It uses mathematical modeling and computational analysis to predict system behavior.",descriptionZh:"系统生物学采取整体方法来理解复杂生物系统，整合基因组学、蛋白质组学和代谢组学的数据。它使用数学建模和计算分析来预测系统行为。",methods:["Omics data integration","Network analysis","Mathematical modeling","High-throughput screening","Machine learning"],backgroundEn:"Undergraduate in Biology, Bioengineering, Computer Science, or Mathematics.",backgroundZh:"本科为生物学、生物工程、计算机科学或数学。",careerEn:"Systems biology institutes, pharma systems pharmacology, computational biology companies, academic research.",careerZh:"系统生物学研究所、制药系统药理学、计算生物学公司、学术研究。"}],
tips:[
{titleEn:"Biological Sciences vs. Biotechnology: How to Choose?",titleZh:"生物科学 vs. 生物技术：怎么选？",descEn:"Choose Biological Sciences if you want a broad foundation and flexibility. Choose Biotechnology if you prefer applied science with industry focus. Both can lead to graduate school or industry careers.",descZh:"如果你想要广泛基础和灵活性，选择生物科学。如果你偏好应用科学且关注产业，选择生物技术。两者都可以通往研究生院或产业职业。"},
{titleEn:"No Lab Experience? How to Apply for Grad School",titleZh:"没有实验室经验？如何申请研究生",descEn:"Take initiative: reach out to professors for volunteer positions, apply to summer research programs (REU), or do independent projects online. Demonstrating curiosity and self-motivation matters more than formal experience.",descZh:"主动争取：联系教授寻找志愿岗位，申请暑期研究项目(REU)，或在线做独立项目。展示好奇心和自驱力比正式经验更重要。"},
{titleEn:"Preparing for a Biology PhD Application",titleZh:"如何准备生物学博士申请",descEn:"Key elements: strong research letters, a clear statement of purpose, prior research experience, and good GRE scores (if required). Start reaching out to potential advisors 6-12 months before deadlines.",descZh:"关键要素：有力的研究推荐信、清晰的个人陈述、先前的研究经验和良好的GRE成绩（如需要）。在截止日期前6-12个月开始联系潜在导师。"}]
};

// ==================== Export ====================
if(typeof window!=="undefined"){
window.KNOWLEDGE_DATA=KNOWLEDGE_DATA;
window.QUIZ_DATA=QUIZ_DATA;
window.GLOSSARY_DATA=GLOSSARY_DATA;
window.MAJORS_DATA=MAJORS_DATA;
}
