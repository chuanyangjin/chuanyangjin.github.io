---
title: Undergrad Projects
description: >
---

<head>
  <!-- Meta Description Tag -->
  <meta name="description" content="Undergrad projects by Chuanyang Jin.">

  <style>
  a::after, a.external::after {
    display: none !important;
  }

  /* --- Project cards --- */
  .proj-card {
    display: flex;
    gap: 20px;
    align-items: flex-start;
    margin-bottom: 16px;
    padding: 16px;
    border: 1px solid #e8e8e8;
    border-radius: 12px;
    transition: border-color 0.15s ease, box-shadow 0.15s ease;
  }
  .proj-card:hover {
    border-color: rgba(79, 177, 186, 0.5);
    box-shadow: 0 3px 14px rgba(0, 0, 0, 0.07);
  }
  .proj-thumb {
    flex-shrink: 0;
    width: 230px;
  }
  .proj-thumb img {
    width: 100%;
    display: block;
    border-radius: 8px;
    border: 1px solid #eeeeee;
  }
  .proj-body {
    min-width: 0;
  }
  .proj-title {
    font-size: 17px;
    font-weight: 700;
    color: #000000;
    line-height: 1.35;
  }
  .proj-tagline {
    font-style: italic;
    color: #666666;
    margin-top: 3px;
  }
  .proj-meta {
    font-size: 15px;
    color: #60716B;
    margin-top: 3px;
  }
  .proj-meta b {
    color: #000000;
  }
  .proj-links {
    margin-top: 8px;
    font-size: 14px;
  }
  @media screen and (max-width: 600px) {
    .proj-card {
      flex-direction: column;
    }
    .proj-thumb {
      width: 100%;
    }
  }

  /* Dark mode */
  body.dark-mode .proj-card {
    border-color: #3a3a3a;
  }
  body.dark-mode .proj-card:hover {
    border-color: rgba(79, 177, 186, 0.55);
    box-shadow: 0 3px 14px rgba(0, 0, 0, 0.35);
  }
  body.dark-mode .proj-thumb img {
    border-color: #3a3a3a;
  }
  body.dark-mode .proj-title,
  body.dark-mode .proj-meta b {
    color: #e0e0e0;
  }
  body.dark-mode .proj-tagline {
    color: #aaa;
  }
  body.dark-mode .proj-meta {
    color: #93a39c;
  }
  @media screen and (prefers-color-scheme: dark) {
    body:not(.light-mode) .proj-card {
      border-color: #3a3a3a;
    }
    body:not(.light-mode) .proj-card:hover {
      border-color: rgba(79, 177, 186, 0.55);
      box-shadow: 0 3px 14px rgba(0, 0, 0, 0.35);
    }
    body:not(.light-mode) .proj-thumb img {
      border-color: #3a3a3a;
    }
    body:not(.light-mode) .proj-title,
    body:not(.light-mode) .proj-meta b {
      color: #e0e0e0;
    }
    body:not(.light-mode) .proj-tagline {
      color: #aaa;
    }
    body:not(.light-mode) .proj-meta {
      color: #93a39c;
    }
  }
  </style>
</head>

<!-- <script>
    window.location.href = "https://chuanyangjin.com/#projects";
</script> -->


<div class="proj-card">
  <div class="proj-thumb"><img src="/assets/img/projects/fast_dit.png" alt="Fast Diffusion Transformers"></div>
  <div class="proj-body">
    <div class="proj-title">Fast Diffusion Transformers</div>
    <div class="proj-tagline">DiT models with 2x speedup and 60% less memory; 800+ GitHub Stars.</div>
    <div class="proj-links"><a href="https://github.com/chuanyangjin/fast-DiT">code</a></div>
  </div>
</div>

<div class="proj-card">
  <div class="proj-thumb"><img src="/assets/img/projects/holistic_gpt.png" alt="The Cultural Psychology of Large Language Models"></div>
  <div class="proj-body">
    <div class="proj-title">The Cultural Psychology of Large Language Models</div>
    <!-- <div class="proj-tagline">Let's explore the cultural cognitive traits of ChatGPT.</div> -->
    <div class="proj-tagline">“One day they'll have secrets. One day they'll have dreams.”</div>
    <div class="proj-meta">Authors: <b>Chuanyang Jin</b>, Songyang Zhang, Tianmin Shu, Zhihan Cui</div>
    <div class="proj-links"><a href="https://arxiv.org/abs/2308.14242">paper</a></div>
  </div>
</div>

<div class="proj-card">
  <div class="proj-thumb"><img src="/assets/img/projects/clipcap.png" alt="Self-Supervised Image Captioning with CLIP"></div>
  <div class="proj-body">
    <div class="proj-title">Self-Supervised Image Captioning with CLIP</div>
    <div class="proj-tagline">Course project presented at NeurIPS 2023 Self-Supervised Learning Workshop.</div>
    <div class="proj-meta">Author: <b>Chuanyang Jin</b></div>
    <div class="proj-links"><a href="https://arxiv.org/abs/2306.15111">paper</a></div>
  </div>
</div>

<div class="proj-card">
  <div class="proj-thumb"><img src="/assets/img/projects/autocorp.png" alt="AutoCorp: A Fully Autonomous Company"></div>
  <div class="proj-body">
    <div class="proj-title">AutoCorp: A Fully Autonomous Company</div>
    <div class="proj-tagline">LLM-driven autonomous company; 100K+ Twitter views.</div>
    <div class="proj-meta">NYC GPT/LLM Hackathon 2023</div>
    <div class="proj-links"><a href="/autocorp">project</a> / <a href="https://twitter.com/minafahmi_/status/1650861037737091083">tweet</a> / <a href="https://github.com/Czechh/chatdtc">code</a></div>
  </div>
</div>

<div class="proj-card">
  <div class="proj-thumb"><img src="/assets/img/projects/em.png" alt="Social Platform for Recording and Sharing Emotions"></div>
  <div class="proj-body">
    <div class="proj-title">Social Platform for Recording and Sharing Emotions</div>
    <div class="proj-tagline">From loneliness to connection — you have the world's resonance.</div>
    <div class="proj-meta">HackNYU 2022</div>
    <div class="proj-links"><a href="https://devpost.com/software/em-k3gf5b">project</a> / <a href="https://github.com/chuanyangjin/em">code</a></div>
  </div>
</div>

<div class="proj-card">
  <div class="proj-thumb"><img src="/assets/img/projects/asteroid_mining.png" alt="Asteroid Mining and the Promise of Global Prosperity"></div>
  <div class="proj-body">
    <div class="proj-title">Asteroid Mining and the Promise of Global Prosperity</div>
    <div class="proj-tagline">“Do not go gentle into that good night.”</div>
    <div class="proj-meta">MAA Award (Top 5/27205) and <a href="https://contest.comap.com/undergraduate/contests/mcm/contests/2022/results/2022_COMAP-Scholarship-Press-Release.pdf">COMAP Scholarship</a> (Top 4/27205, $10,000), Mathematical Contest in Modeling 2022</div>
    <div class="proj-links"><a href="/assets/reports/ICM_Report.pdf">report</a></div>
  </div>
</div>

<div class="proj-card">
  <div class="proj-thumb"><img src="/assets/img/projects/gene_mutation.png" alt="Gene Mutation Detection System"></div>
  <div class="proj-body">
    <div class="proj-title">Gene Mutation Detection System</div>
    <div class="proj-tagline">Our system powers leading hospitals in Nanjing.</div>
    <div class="proj-meta"><a href="http://www.yau-awards.com/lists-winnerslist.html">Bronze Medal</a> (Top 5/500, $10,000), Shing-Tung Yau Computer Science Award 2019</div>
    <div class="proj-links"><a href="https://oss.linstitute.net/wechatimg/2019/12/qiuchengtong2019combronze3.pdf">report</a> / <a href="https://drive.google.com/file/d/1Zdp33tiYmoppAdzMCOH_P44jzu6V9yW-/view?usp=sharing">demo</a> / <a href="/assets/slides/Yau_Gene_Mutation_Detection.pdf">slides</a></div>
  </div>
</div>
