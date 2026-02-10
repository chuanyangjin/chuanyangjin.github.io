---
layout: page
title: About
sitemap: true
---

<head>
  <meta name="description" content="Chuanyang Jin is a Computer Science PhD student at Johns Hopkins University.">

  <style>
  a::after, a.external::after {
    display: none !important;
  }
  
  ul.triangle li::marker {
    content: "▸";
  }

  .paper-title {
    font-size: 18px;
    color: #000000;
    font-weight: bold;
    display: block;
  }

  .authors b {
    color: #000000;
  }

  .red {
    color: #C04000;
  }

  .intro {
    font-size: 14px;
    display: block;
    margin-top: 14px;
  }
  
  /* --- KEYFRAME FOR LOADING BAR --- */
  @keyframes load-and-fade {
    0% { width: 0%; opacity: 1; }
    90% { width: 100%; opacity: 1; }
    100% { width: 100%; opacity: 0; }
  }
  
  /* --- PUBLICATION STYLES --- */
  .pub-item {
    margin-bottom: 12px; /* Space between items */
    position: relative; 
    padding: 12px 0; /* Vertical padding */
  }
  
  /* Loading bar pseudo-element */
  .pub-item::before {
    content: '';
    position: absolute;
    top: 0; /* Position at the top of the item */
    left: 0;
    width: 0%;
    height: 2px;
    background-color: #666666; /* Grey */
    opacity: 0; /* Hidden by default */
  }

  /* Trigger loading bar animation on hover */
  .pub-item:hover::before {
    opacity: 1;
    animation: load-and-fade 0.6s ease-out forwards;
  }
  
  .pub-item .authors {
    color: #666666;
    font-size: 16px;
    margin-top: 4px;
    line-height: 1.4;
  }

  .pub-item .venue {
    font-size: 16px;
    color: #333;
    margin-top: 4px;
  }
  
  .pub-item .pub-details {
    /* Hide by default */
    visibility: hidden;
    opacity: 0;
    max-height: 0;
    overflow: hidden;
    
    margin-top: 12px;
    padding: 0 12px 0 15px; 
    border-left: 2px solid #eee;
    
    font-size: 14px;
    line-height: 1.5;
    
    /* This is the "hide" transition: immediate (0s delay) */
    transition: opacity 0.2s ease, max-height 0.2s ease, padding 0.2s ease, visibility 0.2s;
    transition-delay: 0s;
  }

  .pub-item:hover .pub-details {
    /* Show on hover */
    visibility: visible;
    opacity: 1;
    max-height: 500px; 
    padding: 12px 12px 12px 15px;
    
    /* This is the "show" transition: happens after 0.6s delay */
    transition-delay: 0.6s;
  }
  
  .pub-item .pub-details .intro {
      display: block; 
      margin-top: 0;
      font-size: 14px;
  }
  
  .pub-item .pub-links {
      margin-top: 10px;
      font-size: 14px;
  }
  
  .pub-note {
    font-size: 14px;
    color: #666666;
    margin-bottom: 20px;
  }
  </style>
</head>

Hello! I am a 2nd-year Ph.D. student in Computer Science at [Johns Hopkins University](https://www.jhu.edu/), advised by [Tianmin Shu](https://www.tshu.io/). I'm also a part-time student researcher at Meta FAIR, mentored by [Jason Weston](https://www.thespermwhale.com/jaseweston/index.html). My research is funded by the [Amazon AI PhD Fellowship](https://ai2ai.engineering.jhu.edu/amazon-ai-phd-fellows/).

I received bachelor's degrees in Honors Computer Science and Mathematics from [NYU Courant](https://cims.nyu.edu/dynamic/) (2020–2024), where the CS Department recognized me as its [Most Promising Student](/assets/awards/most_promising_student.pdf).
I was as a research intern at [MIT](https://www.mit.edu/) (2023), advised by [Josh Tenenbaum](https://web.mit.edu/cocosci/josh.html).
I received an Outstanding Paper Award at ACL 2024 for my work on [multimodal Theory of Mind](https://arxiv.org/abs/2401.08743).

I’m interested in developing AI systems with *advanced social intelligence (ASI)*. My current areas of focus include:

<div class="pub-item" style="margin: 0; padding: 0 0 4px 0;">
  <span style="font-size: 10px; font-weight: normal; color: #333333; display: inline-block; margin-right: 5px; vertical-align: middle;">▶</span><span style="font-size: 16px; font-weight: normal; color: #333333; display: inline;"><strong>Reasoning about Human Interaction:</strong> Developing AI that can continuously perceive, reason about, and respond to human behavior and cognition.</span>
  
  <div class="pub-details">
    <span class="intro">
      <ul>
      <li>My work pushes the frontier of machine Theory of Mind (ToM), teaching AI systems to understand people's minds (e.g., goals, beliefs) based on their behavior (e.g., motion, speech). 
      This line of research has led to widely used algorithms and benchmarks recognized as <a href="https://chuanyangjin.com/mmtom-qa">ACL'24 Outstanding Paper</a>, <a href="https://scai.cs.jhu.edu/projects/MuMA-ToM/">AAAI'25 Oral</a>, and <a href="https://chuanyangjin.com/AutoToM/">NeurIPS'25 Spotlight</a>. </li>
      <li> More specifically, my work pioneers the connection between the deliberate human-like reasoning of <a href="https://arxiv.org/abs/2312.05230"><strong><em>agent models</em></strong></a> and the adaptability of <strong><em>language models</em></strong>. It advances ToM reasoning by <a href="https://chuanyangjin.com/mmtom-qa">grounding it in cognitive theories</a>, leveraging <a href="https://chuanyangjin.com/mmtom-qa">multi-modal</a>, <a href="https://scai.cs.jhu.edu/projects/MuMA-ToM/">multi-agent</a> and <a href="https://arxiv.org/abs/2506.23046">multi-perspective</a> data, and <a href="https://chuanyangjin.com/AutoToM/">scaling to long-context, complex scenarios</a>.</li>
      </ul>
    </span>
  </div>
</div><div class="pub-item" style="margin: 0; padding: 0 0 4px 0;">
  <span style="font-size: 10px; font-weight: normal; color: #333333; display: inline-block; margin-right: 5px; vertical-align: middle;">▶</span><span style="font-size: 16px; font-weight: normal; color: #333333; display: inline;"><strong>Learning from Human Interaction:</strong> Developing AI that can continuously learn from real-world human interactions.</span>

  <div class="pub-details">
    <span class="intro">
      <ul>
      <li> We advocate for an <a href="https://arxiv.org/abs/2509.25137">era of real-world human interaction</a>, where models learn from real users' diverse goals and preferences, adapt to situational demands, and scale with actual usage. We introduce <a href="https://arxiv.org/abs/2509.25137">Reinforcement Learning from Human Interaction (RLHI)</a>, a paradigm that learns directly from in-the-wild user conversations and outperforms RLHF at the user level. </li>
      <li> I co-organized <a href="https://continual-robot-learning-from-humans.github.io/">Continual Robot Learning from Humans @ RSS 2025</a> and <a href="https://relearncvpr26.github.io/ReLearn/">ReLearn @ CVPR 2026</a>. </li>
      </ul>
    </span>
  </div>
</div>

I love mentoring undergraduates—several of my mentees have been recognized with top research honors. Please fill out [this application](https://docs.google.com/forms/d/e/1FAIpQLSe2ETXOX-d8-BCV4Y9aqDnMMOlu3JlNPPgek_XkzPY2xBXT7Q/viewform) form and/or send me an email if you're interested in working with me!

Besides academics, I enjoy playing Go, piano, badminton, swimming, and [so much more](/misc).

## News
+ [Feb, 2026] Co-organizing CVPR 2026 Workshop on ["ReLearn: Rediscovering Intelligence: Can AI Still Learn from Humans?"](https://relearncvpr26.github.io/ReLearn/).
+ [Oct, 2025] Invited talks on ["Reinforcement Learning from Human Interaction"](https://arxiv.org/abs/2509.25137) at Google, WashU, and Northwestern.
+ [Oct, 2025] Excited to be awarded the <a href="https://ai2ai.engineering.jhu.edu/amazon-ai-phd-fellows/" style="color: #C04000;">Amazon AI PhD Fellowship</a>!
+ [Sep, 2025] [AutoToM](/AutoToM) is accepted by NeurIPS 2025 as a <span style="color: #C04000;">Spotlight Presentation</span>!
+ [June, 2025] Co-organized the RSS 2025 Workshop on [Continual Robot Learning from Humans](https://continual-robot-learning-from-humans.github.io/).
+ [June, 2025] I was selected as a <span style="color: #C04000;">Notable Reviwer</span> for ICLR 2025.
+ [Jan, 2025] [MuMA-ToM](https://scai.cs.jhu.edu/projects/MuMA-ToM/) is accepted by AAAI 2025 as an <span style="color: #C04000;">Oral Presentation</span>!
+ [Aug, 2024] [MMToM-QA](/mmtom-qa) won the <span style="color: #C04000;">Outstanding Paper Award</span> at ACL 2024! It was covered by [Futurity](https://www.futurity.org/artificial-intelligence-theory-of-mind-3253282/), [Synced](https://mp.weixin.qq.com/s/fRa138rmFsv8W8JOYcsAPA), and [JHU News](https://engineering.jhu.edu/news/ai-cant-read-your-mind-yet/). 
<!-- Gave an invited talks at UW. -->


## Recent Publications
<div class="pub-note">
  (* denotes equal contribution; † denotes project lead)<br>
  For a more complete list, please see my <a href="/publications" style="color: #666666;">publication page</a> or <a href="https://scholar.google.com/citations?user=OZeqpLIAAAAJ&hl=zh-EN" style="color: #666666;">Google Scholar page</a>.
</div>

<div class="pub-item">
  <span class="paper-title">The Era of Real-World Human Interaction: RL from User Conversations</span>
  <div class="authors">
    <b>Chuanyang Jin</b>, Jing Xu, Bo Liu, Leitian Tao, Olga Golovneva, Tianmin Shu, Wenting Zhao, Xian Li, Jason Weston
  </div>
  <div class="venue">
    <!-- <b>arXiv Preprint <span style="color: rgb(60,130,226)">(Invited Talk at Google; Featured as Paper of the Week by Huggingface, DAIR.AI, and TuringPost)</span></b> -->
    arXiv Preprint / 🔍  Invited Talk at Google and Meta TBD Lab / ⭐️ Paper of the Week by Huggingface, DAIR.AI, and TuringPost
  </div>
  
  <div class="pub-details">
    <span class="intro">
      We posit that to achieve continual model improvement and multifaceted alignment, future models must learn from natural human interaction.
      We introduce Reinforcement Learning from Human Interaction (RLHI), a paradigm that learns directly from in-the-wild user conversations.
      RLHI beats RLHF at the user level and enabling personalized, contextual, and continually improving AI assistants.
    </span>
    <div class="pub-links">
      <a href="https://arxiv.org/abs/2509.25137">paper</a> / 
      <a href="https://x.com/jaseweston/status/1972851921255051489">tweet</a> /
      <a href="https://docs.google.com/presentation/d/1bJHKHFH3eS-vvWcu-vpTT-Zm3Od6p2Cg0wI-qnwEO-4/edit?usp=sharing">slides</a>
    </div>
  </div>
</div>

<div class="pub-item">
  <span class="paper-title">SPICE: Self-Play In Corpus Environments Improves Reasoning</span>
  <div class="authors">
    Bo Liu, <b>Chuanyang Jin</b>, Seungone Kim, Weizhe Yuan, Wenting Zhao, Ilia Kulikov, Xian Li, Sainbayar Sukhbaatar, Jack Lanchantin, Jason Weston
  </div>
  <div class="venue">
    arXiv Preprint /  📰 Featured in VentureBeat
  </div>
  <div class="pub-details">
    <span class="intro">
      SPICE is a reinforcement learning framework where a single model improves itself by playing two roles: a Challenger that creates tasks based on corpora, and a Reasoner that solves them. 
      By grounding this self-play in corpora, SPICE addresses hallucination and lack of diversity issues, significantly outperforming standard (ungrounded) self-play across reasoning benchmarks.
    </span>
    <div class="pub-links">
      <a href="https://arxiv.org/abs/2510.24684">paper</a> / 
      <a href="https://x.com/jaseweston/status/1983343787465150814">tweet</a>
    </div>
  </div>
</div>

<div class="pub-item">
  <span class="paper-title">AutoToM: Scaling Model-based Mental Inference via Automated Agent Modeling</span>
  <div class="authors">
    Zhining Zhang*, <b>Chuanyang Jin</b>*†, Mung Yao Jia*, Shunchi Zhang*, Tianmin Shu (†: project lead)
  </div>
  <div class="venue">
    NeurIPS 2025 <span class="red"><b>(Spotlight)</b></span>
  </div>
  <div class="pub-details">
    <span class="intro">
      AutoToM is an automated agent modeling method for scalable, robust, and interpretable mental inference. It achieves SOTA on five benchmarks, produces human-like confidence estimates, and supports embodied decision-making.
    </span>
    <div class="pub-links">
      <a href="https://arxiv.org/abs/2502.15676">paper</a> /
      <a href="/AutoToM">project</a> /
      <a href="https://github.com/SCAI-JHU/AutoToM">code</a>
    </div>
  </div>
</div>

<div class="pub-item">
  <span class="paper-title">OS-Genesis: Automating GUI Agent Trajectory Construction via Reverse Task Synthesis</span>
  <div class="authors">
    Qiushi Sun*, Kanzhi Cheng*, Zichen Ding*, <b>Chuanyang Jin</b>*, Yian Wang, Fangzhi Xu, Zhenyu Wu, Chengyou Jia, Liheng Chen, Zhoumianze Liu, Ben Kao, Guohao Li, Junxian He, Yu Qiao, Zhiyong Wu
  </div>
  <div class="venue">
    ACL 2025 / ⭐️ Huggingface Daily Papers Top-1
  </div>
  <div class="pub-details">
    <span class="intro">
      We introduce OS-Genesis, a manual-free data pipeline for synthesizing GUI agent trajectory.
      It enables agents to actively explore web and mobile environments through stepwise interactions, then derive meaningful low- and high-level task instructions from observed interactions and state changes.
    </span>
    <div class="pub-links">
      <a href="https://arxiv.org/abs/2412.19723">paper</a> /
      <a href="https://qiushisun.github.io/OS-Genesis-Home">project</a> /
      <a href="https://github.com/OS-Copilot/OS-Genesis">code</a> /
      <a href="https://huggingface.co/collections/OS-Copilot/os-genesis-6768d4b6fffc431dbf624c2d">model</a> /
      <a href="https::/huggingface.co/collections/OS-Copilot/os-genesis-6768d4b6fffc431dbf624c2d">data</a> /
      <a href="/assets/slides/OS-Genesis.pdf">slides</a>
    </div>
  </div>
</div>

<div class="pub-item">
  <span class="paper-title">MuMA-ToM: Multi-modal Multi-Agent Theory of Mind</span>
  <div class="authors">
    Haojun Shi*, Suyu Ye*, Xinyu Fang, <b>Chuanyang Jin</b>, Leyla Isik, Yen-Ling Kuo, Tianmin Shu
  </div>
  <div class="venue">
    AAAI 2025 <span class="red"><b>(Oral)</b></span>
  </div>
  <div class="pub-details">
    <span class="intro">
      MuMA-ToM evaluates Theory of Mind reasoning in embodied multi-agent interactions, revealing that current multimodal LLMs significantly lag behind human performance.
      To bridge this gap, we propose LIMP, a method that combines language models with inverse multi-agent planning to achieve superior results.
    </span>
    <div class="pub-links">
      <a href="https://arxiv.org/abs/2408.12574">paper</a> /
      <a href="https://scai.cs.jhu.edu/projects/MuMA-ToM/">project</a> /
      <a href="https://github.com/SCAI-JHU/MuMA-ToM">code</a> /
      <a href="https://huggingface.co/datasets/SCAI-JHU/MUMA-TOM-BENCHMARK">benchmark</a> / 
      <a href="https://scai.cs.jhu.edu/projects/MuMA-ToM/leaderboard.html">leaderboard</a> /
      <a href="/assets/slides/MuMA-ToM.pdf">slides</a>
    </div>
  </div>
</div>

<div class="pub-item">
  <span class="paper-title">MMToM-QA: Multimodal Theory of Mind Question Answering</span>
  <div class="authors">
    <b>Chuanyang Jin</b>, Yutong Wu, Jing Cao, Jiannan Xiang, Yen-Ling Kuo, Zhiting Hu, Tomer Ullman, Antonio Torralba, Joshua Tenenbaum, Tianmin Shu
  </div>
  <div class="venue">
    ACL 2024 <span class="red"><b>(Outstanding Paper Award)</b></span> / 🔍  Invited Talk at University of Washinton
  </div>
  <div class="pub-details">
    <span class="intro">
      Can machines understand people's minds from multimodal inputs?
      We introduce a comprehensive benchmark, MMToM-QA, and highlight key limitations in current multimodal LLMs.
      We then propose a novel method that combines the flexibility of LLMs with the robustness of Bayesian inverse planning, achieving promising results.
    </span>
    <div class="pub-links">
      <a href="https://arxiv.org/abs/2401.08743">paper</a> /
      <a href="/mmtom-qa">project</a> /
      <a href="https://github.com/chuanyangjin/MMToM-QA">code</a> /
      <a href="https://github.com/chuanyangjin/MMToM-QA?tab=readme-ov-file#-mmtom-qa-benchmark">benchmark</a> /
      <a href="httpss://chuanyangjin.com/mmtom-qa-leaderboard">leaderboard</a> /
      <a href="/assets/slides/MMToM-QA.pdf">slides</a> /
      <a href="https://www.futurity.org/artificial-intelligence-theory-of-mind-3253282/">Futurity news</a> /
      <a href="https://mp.weixin.qq.com/s/fRa138rmFsv8W8JOYcsAPA">Synced news</a> /
      <a href="https://engineering.jhu.edu/news/ai-cant-read-your-mind-yet/">JHU news</a>
    </div>
  </div>
</div>


Feel free to check out [my undergrad projects](/projects). A mountain of gratitude to those who have kindly mentored and inspired me with their vision and passion!

## Selected Honors & Awards
- <span style="background-color: rgba(173, 216, 230, 0.5);">Amazon AI PhD Fellowship, 2025</span>
- Notable Reviewer, ICLR 2025
- <span style="background-color: rgba(173, 216, 230, 0.5);">Outstanding Paper Award, ACL 2024</span>
- Presidential Honors Scholar and Summa cum Laude, New York University, 2024
- <span style="background-color: rgba(173, 216, 230, 0.5);">Computer Science Prize for the Most Promising Student, New York University (1 person/year), 2023</span>
- Dean's Undergraduate Research Fund, New York University, 2023
- <span style="background-color: rgba(173, 216, 230, 0.5);">COMAP International Scholarship Award (Top 0.1%), 2022</span>
- <span style="background-color: rgba(173, 216, 230, 0.5);">MAA Award in Mathematical Contest in Modeling (Top 0.1%), 2022</span>
- Bronze Medal of Shing-Tung Yau Computer Science Award (Top 1%), 2019
- Finalist of FIRST Robotics Competition World Championship (Top 0.2%), 2019
- NFLS Outstanding Student Leader Award and Zhou Enlai Scholarship (Top 1%), 2018
- First Prize of Chinese Mathematical Olympiad (Top 0.1%), 2018
- Champion of International Regions Mathematics League, 2018