---
title: Publications
description: >
---

<head>
  <!-- Meta Description Tag -->
  <meta name="description" content="Publications by Chuanyang Jin.">

  <style>
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

<div class="pub-note">
  (* denotes equal contribution; † denotes project lead)<br>
</div>

<div class="pub-item">
  <span class="paper-title">The Era of Real-World Human Interaction: RL from User Conversations</span>
  <div class="authors">
    <b>Chuanyang Jin</b>, Jing Xu, Bo Liu, Leitian Tao, Olga Golovneva, Tianmin Shu, Wenting Zhao, Xian Li, Jason Weston
  </div>
  <div class="venue">
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
      <a href="https://arxiv.org/abs/2510.24684">paper</a>
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
      AutoToM is an automated agent modeling method for scalable, robust, and interpretable mental inference. 
      It achieves SOTA on five benchmarks, produces human-like confidence estimates, and supports embodied decision-making.
    </span>
    <div class="pub-links">
      <a href="https://arxiv.org/abs/2502.15676">paper</a> /
      <a href="/AutoToM">project</a> /
      <a href="https://github.com/SCAI-JHU/AutoToM">code</a>
    </div>
  </div>
</div>

<div class="pub-item">
  <span class="paper-title">SoMi-ToM: Evaluating Multi-Perspective Theory of Mind in Embodied Social Interactions</span>
  <div class="authors">
    Xianzhe Fan, Xuhui Zhou, <b>Chuanyang Jin</b>, Kolby Nottingham, Hao Zhu, Maarten Sap
  </div>
  <div class="venue">
    NeurIPS D&B 2025
  </div>
  <div class="pub-details">
    <span class="intro">
      SoMi-ToM is a Minecraft-based benchmark designed to evaluate Vision-Language Models' Theory of Mind capabilities through complex, multi-agent social interactions. 
      Experiments reveal that current models significantly underperform compared to humans.
    </span>
    <div class="pub-links">
      <a href="https://arxiv.org/abs/2506.23046">paper</a> /
      <a href="https://github.com/XianzheFan/SoMi-ToM">code</a> /
      <a href="https://huggingface.co/datasets/SoMi-ToM/SoMi-ToM">benchmark</a>
    </div>
  </div>
</div>

<div class="pub-item">
  <span class="paper-title">Do VLMs have internal World Models? Towards an Atomic Evaluation</span>
  <div class="authors">
    Qiyue Gao*, Xinyu Pi*, Kevin Liu, Junrong Chen, Ruolan Yang, Xinqi Huang, Xinyu Fang, Lu Sun, Gautham Kishore, Bo Ai, Stone Tao, Mengyang Liu, Jiaxi Yang, Chao-Jung Lai, <b>Chuanyang Jin</b>, Jiannan Xiang, Benhao Huang, Zeming Chen, David Danks, Hao Su, Tianmin Shu, Ziqiao Ma, Lianhui Qin, Zhiting Hu
  </div>
  <div class="venue">
    ACL 2025 Findings / ⭐️ Huggingface Daily Papers Top-3
  </div>
  <div class="pub-details">
    <span class="intro">
      We introduce WM-ABench, a large-scale benchmark to evaluate whether Vision-Language Models possess internal world models by assessing their perception (visual, spatial, temporal, quantitative, and motion) and prediction (mechanistic simulation, transitive inference, compositional inference).
    </span>
    <div class="pub-links">
      <a href="https://arxiv.org/abs/2506.21876">paper</a> /
      <a href="https://wm-abench.maitrix.org/">project</a> /
      <a href="https://huggingface.co/datasets/maitrix-org/WM-ABench">benchmark</a>
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
      OS-Genesis is a manual-free data pipeline for synthesizing GUI agent trajectory.
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
  <span class="paper-title">Humanity’s Last Exam</span>
  <div class="authors">
    Long Phan et al., with 1000+ contributors.
  </div>
  <div class="venue">
    Technical Report / 📰 Featured in The New York Times, Reuters, ...
  </div>
  <div class="pub-details">
    <span class="intro">
      Humanity's Last Exam (HLE) is a multi-modal benchmark designed to be the final closed-ended academic benchmark with broad subject coverage. 
      I contributed several challenging mathematics and cognitive science questions. 
    </span>
    <div class="pub-links">
      <a href="https://arxiv.org/abs/2501.14249">paper</a> /
      <a href="https://agi.safe.ai/">project</a> /
      <a href="https://huggingface.co/datasets/cais/hle">benchmark</a>
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

<div class="pub-item">
  <span class="paper-title">How Far Are We From AGI?</span>
  <div class="authors">
    Tao Feng*, <b>Chuanyang Jin</b>*, Jingyu Liu*, Kunlun Zhu*, Haoqin Tu, Zirui Cheng, Guanyu Lin, Jiaxuan You
  </div>
  <div class="venue">
    TMLR 2024 / ICLR 2024 AGI Workshop <span class="red"><b>(Oral)</b></span>
  </div>
  <div class="pub-details">
    <span class="intro">
      We explore the trajectory toward Artificial General Intelligence by comprehensively analyzing the requisite capabilities across internal, interface, and system dimensions. 
      We also outline a roadmap for responsibly achieving AGI.
    </span>
    <div class="pub-links">
      <a href="https://arxiv.org/abs/2405.10313">paper</a> /
      <a href="https://github.com/ulab-uiuc/AGI-survey">project</a>
    </div>
  </div>
</div>

<div class="pub-item">
  <span class="paper-title">Neural Amortized Inference for Nested Multi-agent Reasoning</span>
  <div class="authors">
    Kunal Jha, Tuan Anh Le, <b>Chuanyang Jin</b>, Yen-Ling Kuo, Joshua Tenenbaum, Tianmin Shu
  </div>
  <div class="venue">
    AAAI 2024 / AAAI 2024 Summer Symposium <span class="red"><b>(Oral)</b></span>
  </div>
  <div class="pub-details">
    <span class="intro">
      Multi-agent interactions often rely on higher-order social inference, i.e., understanding how others infer oneself.
      We introduce a neural amortized inference method to accelerate computationally expensive nested multi-agent reasoning within the I-POMDP framework, significantly reducing computational costs while maintaining high accuracy.
    </span>
    <div class="pub-links">
      <a href="https://arxiv.org/abs/2308.11071">paper</a> /
      <a href="https://www.tshu.io/nested_reasoning/">project</a> /
      <a href="https://github.com/KJha02/AmortizedNestedReasoning">code</a> /
      <a href="/assets/slides/Nested_Reasoning.pdf">slides</a>
    </div>
  </div>
</div>

<div class="pub-item">
  <span class="paper-title">Beyond the Binary: Capturing Diverse Preferences With Reward Regularization</span>
  <div class="authors">
    Vishakh Padmakumar*,<b>Chuanyang Jin</b>*, Hannah Rose Kirk*, He He
  </div>
  <div class="venue">
    NeurIPS 2024 Workshop on Socially Responsible Language Modelling Research
  </div>
  <div class="pub-details">
    <span class="intro">
      Standard binary feedback in RLHF fails to capture the diversity of user opinions in subjective tasks. 
      To address this, we propose a training method that incorporates estimated user disagreement, leading to reward models that better align with aggregate human preferences.
    </span>
    <div class="pub-links">
      <a href="https://arxiv.org/abs/2412.03822">paper</a> /
      <a href="https://github.com/chuanyangjin/preference-calibration">code</a>
    </div>
  </div>
</div>

<div class="pub-item">
  <span class="paper-title">The Cultural Psychology of Large Language Models</span>
  <div class="authors">
    <b>Chuanyang Jin</b>*, Songyang Zhang*, Tianmin Shu, Zhihan Cui
  </div>
  <div class="venue">
    Technical Report
  </div>
  <div class="pub-details">
    <span class="intro">
      We apply cultural psychology scales to ChatGPT to assess its cognitive processing style and value judgments.
      We find that the model exhibits Eastern-style holistic processing traits while displaying mixed alignment in its cultural values.
    </span>
    <div class="pub-links">
      <a href="https://arxiv.org/abs/2308.14242">paper</a>
    </div>
  </div>
</div>

<div class="pub-item">
  <span class="paper-title">Dynamics of RNA Localization to Nuclear Speckles are Connected to Splicing Efficiency</span>
  <div class="authors">
    Jinjun Wu*, Yu Xiao*, Yunzheng Liu*, Li Wen, <b>Chuanyang Jin</b>, Shun Liu, Sneha Paul, Chuan He, Oded Regev, Jingyi Fei
  </div>
  <div class="venue">
    Science Advances 10 (42), eadp7727
  </div>
  <div class="pub-details">
    <span class="intro">
      We demonstrate that RNA localization dynamics to nuclear speckles are tied to gene expression by influencing splicing efficiency. 
      Specifically, nuclear speckles coordinate both co- and post-transcriptional splicing regulation by facilitating the removal of inefficiently excised introns in transcripts enriched within them.
    </span>
    <div class="pub-links">
      <a href="https://www.science.org/doi/full/10.1126/sciadv.adp7727">paper</a>
    </div>
  </div>
</div>

<div class="pub-item">
  <span class="paper-title">OpenCompass: A Universal Evaluation Platform for Foundation Models</span>
  <div class="authors">
    OpenCompass Team
  </div>
  <div class="venue">
    Open-source Project / ⭐️ 6K Github Stars
  </div>
  <div class="pub-details">
    <span class="intro">
      OpenCompass is an LLM evaluation platform, supporting a wide range of models over 100+ datasets. 
    </span>
    <div class="pub-links">
      <a href="https://github.com/open-compass/opencompass">code</a>
    </div>
  </div>
</div>

<div class="pub-item">
  <span class="paper-title">Fast-DiT: Fast Diffusion Models with Transformers</span>
  <div class="authors">
    <b>Chuanyang Jin</b>, Saining Xie
  </div>
  <div class="venue">
    Open-source Project / ⭐️ 900 Github Stars
  </div>
  <div class="pub-details">
    <span class="intro">
      Fast-DiT improves the efficiency of Diffusion Transformers (DiTs) by incorporating features such as gradient checkpointing, mixed-precision training, and feature pre-extraction. 
      It delivers a 95% speed increase and a 60% reduction in memory usage, and has been integrated into the official DiT implementation.
    </span>
    <div class="pub-links">
      <a href="https://github.com/chuanyangjin/fast-DiT">code</a>
    </div>
  </div>
</div>