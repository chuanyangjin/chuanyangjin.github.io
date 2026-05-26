---
layout: page
title: About
sitemap: true
---

<!-- Local run:
cd chuanyangjin.github.io
bundle install
bundle exec jekyll serve 
http://localhost:4000 -->

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

  /* Focus-card variant: no left indent in the collapsed state;
     on hover, the details attach seamlessly under the header, forming
     a single rounded box with the header's bottom border as divider. */
  .pub-item .focus-details {
    border-left: none;
    padding-left: 0 !important;
    padding-right: 0 !important;
    margin-top: 0 !important;
  }
  .pub-item:hover .focus-header {
    border-radius: 10px 10px 0 0 !important;
  }
  .pub-item:hover .focus-details {
    border: 1px solid #e5e5e5;
    border-top: none;
    border-radius: 0 0 10px 10px;
    padding: 10px 20px 4px !important;
  }
  .pub-item .focus-details ul {
    margin-bottom: 10px;
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

  /* Dark mode overrides */
  body.dark-mode .paper-title,
  body.dark-mode .authors b,
  body.dark-mode .focus-header span {
    color: #e0e0e0 !important;
  }
  body.dark-mode .pub-item .authors,
  body.dark-mode .pub-note,
  body.dark-mode .pub-note a {
    color: #aaa !important;
  }
  body.dark-mode .pub-item .venue {
    color: #bbb;
  }
  body.dark-mode .pub-details {
    border-left-color: #444;
  }
  body.dark-mode .focus-header {
    background-color: #2a2a2a !important;
    border-color: #444 !important;
  }
  body.dark-mode .pub-item:hover .focus-details {
    border-color: #444;
  }

  @media screen and (prefers-color-scheme: dark) {
    body:not(.light-mode) .paper-title,
    body:not(.light-mode) .authors b,
    body:not(.light-mode) .focus-header span {
      color: #e0e0e0 !important;
    }
    body:not(.light-mode) .pub-item .authors,
    body:not(.light-mode) .pub-note,
    body:not(.light-mode) .pub-note a {
      color: #aaa !important;
    }
    body:not(.light-mode) .pub-item .venue {
      color: #bbb;
    }
    body:not(.light-mode) .pub-details {
      border-left-color: #444;
    }
    body:not(.light-mode) .focus-header {
      background-color: #2a2a2a !important;
      border-color: #444 !important;
    }
    body:not(.light-mode) .pub-item:hover .focus-details {
      border-color: #444;
    }
  }
  </style>
</head>

Hello! I am a 2nd-year Ph.D. student in Computer Science at [Johns Hopkins University](https://www.jhu.edu/), advised by [Tianmin Shu](https://www.tshu.io/). I'm also a student researcher at Meta FAIR, mentored by [Jason Weston](https://www.thespermwhale.com/jaseweston/index.html). I'm honored to be named an [Amazon AI PhD Fellow](https://www.amazon.science/news/amazon-launches-68-million-ai-phd-fellowship-program).

I received bachelor's degrees in Honors Computer Science and Mathematics from [NYU Courant](https://cims.nyu.edu/dynamic/) (2020–2024), where the CS Department recognized me as its [most promising student](/assets/awards/most_promising_student.pdf).
I was as a research intern at [MIT](https://www.mit.edu/) (2023), advised by [Josh Tenenbaum](https://web.mit.edu/cocosci/josh.html).
I received an Outstanding Paper Award at ACL 2024 for my work on [multimodal Theory of Mind](https://arxiv.org/abs/2401.08743).

I'm developing AI models and agents with *advanced social intelligence (ASI)*. Particularly, I am working on:

<div class="pub-item" style="margin: 10px 0; padding: 0;">
  <div class="focus-header" style="padding: 10px 20px; background-color: #f5f5f5; border: 1px solid #e5e5e5; border-radius: 10px; line-height: 1.3;">
    <span style="font-size: 12px; font-weight: normal; color: #333333; display: inline-block; margin-right: 8px; vertical-align: middle;">▶</span><span style="font-size: 16px; color: #000000; display: inline;"><strong>Reasoning about Human Interaction</strong></span>
    <!-- Developing AI that can continuously perceive, reason about, and respond to human behavior and cognition. -->
  </div>

  <div class="pub-details focus-details">
    <span class="intro">
      <ul>
      <li>I lead <a href="https://chuanyangjin.com/mmtom-qa">MMToM-QA</a> (ACL'24 Outstanding Paper) and <a href="https://chuanyangjin.com/AutoToM/">AutoToM</a> (NeurIPS'25 Spotlight), pushing the frontier of machine Theory of Mind (ToM)—teaching AI systems to understand people's minds (e.g., goals, beliefs) from their behavior.</li>
      <li>We bridge the deliberate human-like reasoning of <a href="https://chuanyangjin.com/AutoToM/"><em>agent models</em></a> with the adaptability of <em>language models</em>, advancing ToM by <a href="https://chuanyangjin.com/mmtom-qa">grounding it in cognitive theories</a>, leveraging <a href="https://chuanyangjin.com/mmtom-qa">multi-modal</a>, <a href="https://scai.cs.jhu.edu/projects/MuMA-ToM/">multi-agent</a>, and <a href="https://arxiv.org/abs/2506.23046">multi-perspective</a> data, <a href="https://chuanyangjin.com/AutoToM/">scaling to long-context, complex scenarios</a>, and <a href="https://openreview.net/forum?id=R2V8TaxsCH">learning with zero mental annotations</a>.</li>
      </ul>
    </span>
  </div>
</div><div class="pub-item" style="margin: 10px 0; padding: 0;">
  <div class="focus-header" style="padding: 10px 20px; background-color: #f5f5f5; border: 1px solid #e5e5e5; border-radius: 10px; line-height: 1.3;">
    <span style="font-size: 12px; font-weight: normal; color: #333333; display: inline-block; margin-right: 8px; vertical-align: middle;">▶</span><span style="font-size: 16px; color: #000000; display: inline;"><strong>Learning from Human Interaction</strong></span>
    <!-- Developing AI that can continuously learn from real-world human interactions. -->
  </div>

  <div class="pub-details focus-details">
    <span class="intro">
      <ul>
      <li> We advocate for an <a href="https://arxiv.org/abs/2509.25137">era of real-world human interaction</a>, where models learn from natural human interaction to achieve continual model improvement and multifaceted alignment. We introduce <a href="https://arxiv.org/abs/2509.25137">Reinforcement Learning from Human Interaction (RLHI)</a>, a paradigm that learns directly from in-the-wild user conversations. </li>
      <li> I co-organized <a href="https://continual-robot-learning-from-humans.github.io/">Continual Robot Learning from Humans @ RSS 2025</a> and <a href="https://relearncvpr26.github.io/ReLearn/">ReLearn @ CVPR 2026</a>. </li>
      </ul>
    </span>
  </div>
</div>

<!-- I love mentoring undergraduates-several of my mentees have been recognized with top research honors. Please fill out [this application](https://docs.google.com/forms/d/e/1FAIpQLSe2ETXOX-d8-BCV4Y9aqDnMMOlu3JlNPPgek_XkzPY2xBXT7Q/viewform) form and/or send me an email if you're interested in working with me!

Besides academics, I enjoy playing Go, piano, badminton, swimming, and [so much more](/misc). -->

## News
+ [Feb, 2026] Co-organizing CVPR 2026 Workshop on ["Rediscovering Intelligence: Can AI Still Learn from Humans?"](https://relearncvpr26.github.io/ReLearn/).
+ [Oct, 2025] Invited talks on ["Reinforcement Learning from Human Interaction"](https://arxiv.org/abs/2509.25137) at Google DeepMind, Meta TBD Lab, WashU, and Northwestern.
+ [Oct, 2025] Excited to be awarded the <a href="https://ai2ai.engineering.jhu.edu/amazon-ai-phd-fellows/" style="color: #C04000;">Amazon AI PhD Fellowship</a>!
+ [Sep, 2025] [AutoToM](/AutoToM) is accepted by NeurIPS 2025 as a <span style="color: #C04000;">Spotlight Presentation</span>!
+ [June, 2025] Lead-organized RSS 2025 Workshop on [Continual Robot Learning from Humans](https://continual-robot-learning-from-humans.github.io/).
+ [June, 2025] I was selected as a <span style="color: #C04000;">Notable Reviewer</span> for ICLR 2025.
+ [Jan, 2025] [MuMA-ToM](https://scai.cs.jhu.edu/projects/MuMA-ToM/) is accepted by AAAI 2025 as an <span style="color: #C04000;">Oral Presentation</span>!
+ [Aug, 2024] [MMToM-QA](/mmtom-qa) won the <span style="color: #C04000;">Outstanding Paper Award</span> at ACL 2024! It was covered by [Futurity](https://www.futurity.org/artificial-intelligence-theory-of-mind-3253282/), [Synced](https://mp.weixin.qq.com/s/fRa138rmFsv8W8JOYcsAPA), and [JHU News](https://engineering.jhu.edu/news/ai-cant-read-your-mind-yet/). 


## Recent Publications
<div class="pub-note">
  (* denotes equal contribution; † denotes project lead)<br>
  For a more complete list, please see my <a href="/publications" style="color: #666666;">publication page</a> or <a href="https://scholar.google.com/citations?user=OZeqpLIAAAAJ&hl=zh-EN" style="color: #666666;">Google Scholar page</a>.
</div>

{% assign selected_pubs = site.data.publications | where: "selected", true %}
{% for pub in selected_pubs %}
  {% include publication-item.html pub=pub %}
{% endfor %}


Feel free to check out [my undergrad projects](/projects). A mountain of gratitude to those who have kindly mentored and inspired me with their vision and passion!

## Selected Honors & Awards
- <span style="background-color: rgba(173, 216, 230, 0.5);">Amazon AI PhD Fellowship, 2025</span>
- Notable Reviewer Award, ICLR 2025
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


## Services
- Co-organizer: [CVPR 2026 Workshop on Rediscovering Intelligence: Can AI Still Learn from Humans? (ReLearn @ CVPR 2026)](https://relearncvpr26.github.io/ReLearn/)
- Co-organizer: [RSS 2025 Workshop on Continual Robot Learning from Humans (CRLH @ RSS 2025)](https://continual-robot-learning-from-humans.github.io/)
- Conference Program Committee / Reviewer: Machine Learning (ICLR - Notable Reviewer Award, NeurIPS, ICML, AAAI), Natural Language Processing (ARR, ACL, EMNLP, NAACL), Computer Vision (CVPR), Robotics (RSS)
- Head Teaching Assistant: [JHU EN.601 Machine Social Intelligence](https://www.tshu.io/teaching/MSI/sp26/) with Tianmin Shu