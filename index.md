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

<style>
  a::after {
    display: none !important;
  }
  
  /* --- Section headings: subtle divider --- */
  article.page h2 {
    padding-bottom: 0.3em;
    border-bottom: 1px solid #e8e8e8;
  }

  /* --- News list: scrollable box with muted date column + hairline separators --- */
  /* Scroll affordance: fade the bottom edge into the page background */
  .news-fade {
    position: relative;
    margin-bottom: 1rem; /* section spacing lives here, not on the ul, so the fade hugs the scrollbox */
  }
  .news-fade::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 40px;
    pointer-events: none;
    background: linear-gradient(to bottom, transparent, var(--body-bg));
    opacity: 1;
    transition: opacity 0.3s ease; /* smooth fade-out when the list reaches the bottom */
  }
  .news-fade.is-at-bottom::after {
    opacity: 0;
  }
  .news-list {
    list-style: none;
    margin-left: 0;
    margin-bottom: 0; /* spacing moved to .news-fade wrapper */
    padding-left: 0;
    /* Scrollable news box */
    max-height: 250px;
    overflow-y: auto;
    padding-right: 10px;               /* clearance for the scrollbar */
    overscroll-behavior: contain;      /* don't chain scroll to the page */
    -webkit-overflow-scrolling: touch; /* momentum scroll on iOS */
    scrollbar-width: thin;             /* Firefox */
    scrollbar-color: #d0d0d0 transparent;
  }
  /* Thin, subtle scrollbar (WebKit/Blink) */
  .news-list::-webkit-scrollbar {
    width: 6px;
  }
  .news-list::-webkit-scrollbar-track {
    background: transparent;
  }
  .news-list::-webkit-scrollbar-thumb {
    background: #d0d0d0;
    border-radius: 6px;
  }
  .news-list::-webkit-scrollbar-thumb:hover {
    background: #b3b3b3;
  }
  .news-list li {
    position: relative;
    margin: 0;
    padding: 8px 0 8px 92px;
    border-bottom: 1px solid #eeeeee;
    line-height: 1.55;
  }
  .news-list li:last-child {
    border-bottom: none;
  }
  .news-date {
    position: absolute;
    left: 0;
    top: 9px;
    width: 84px;
    color: #999999;
    font-size: 14px;
    font-variant-numeric: tabular-nums;
  }
  @media screen and (max-width: 500px) {
    .news-list li { padding-left: 0; padding-top: 26px; }
    .news-date { top: 7px; }
  }

  /* --- Award highlight --- */
  .hl {
    background: rgba(79, 177, 186, 0.16);
    padding: 1px 6px;
    border-radius: 4px;
  }

  /* --- Awards: name left, muted year right --- */
  .award-list {
    list-style: none;
    margin-left: 0;
    padding-left: 0;
  }
  .award-list li {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    gap: 16px;
    margin: 0;
    padding: 7px 0;
    border-bottom: 1px solid #eeeeee;
    line-height: 1.5;
  }
  .award-list li:last-child {
    border-bottom: none;
  }
  .award-year {
    flex-shrink: 0;
    color: #999999;
    font-size: 14px;
    font-variant-numeric: tabular-nums;
  }

  /* --- Services: bold role label + hairline rows --- */
  .service-list {
    list-style: none;
    margin-left: 0;
    padding-left: 0;
  }
  .service-list li {
    margin: 0;
    padding: 8px 0;
    border-bottom: 1px solid #eeeeee;
    line-height: 1.55;
  }
  .service-list li:last-child {
    border-bottom: none;
  }
  .service-role {
    font-weight: 600;
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
    border-radius: 10px 10px 0 0;
  }
  .pub-item:hover .focus-details {
    border: 1px solid rgba(79, 177, 186, 0.35);
    border-left: 3px solid rgb(79, 177, 186);
    border-top: none;
    border-radius: 0 0 10px 10px;
    padding: 10px 20px 4px 18px !important;
  }
  .pub-item .focus-details ul {
    margin-bottom: 10px;
  }
  .focus-header {
    padding: 10px 18px 10px 16px;
    background: rgba(79, 177, 186, 0.09);
    border: 1px solid rgba(79, 177, 186, 0.35);
    border-left: 3px solid rgb(79, 177, 186);
    border-radius: 10px;
    line-height: 1.3;
    transition: box-shadow 0.15s ease;
  }
  .pub-item:hover .focus-header {
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.06);
  }
  .focus-caret {
    font-size: 12px;
    color: rgb(79, 177, 186);
    display: inline-block;
    margin-right: 8px;
    vertical-align: middle;
    transition: transform 0.2s ease;
  }
  .pub-item:hover .focus-caret {
    transform: rotate(90deg);
  }
  .focus-title {
    font-size: 16px;
    color: #000000;
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
  body.dark-mode .focus-title {
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
    background: rgba(79, 177, 186, 0.12);
    border-color: rgba(79, 177, 186, 0.45);
    border-left-color: rgb(79, 177, 186);
  }
  body.dark-mode .pub-item:hover .focus-details {
    border-color: rgba(79, 177, 186, 0.45);
    border-left-color: rgb(79, 177, 186);
  }
  body.dark-mode .award-list li,
  body.dark-mode .service-list li {
    border-bottom-color: #333;
  }
  body.dark-mode .award-year {
    color: #888;
  }
  body.dark-mode article.page h2 {
    border-bottom-color: #3a3a3a;
  }
  body.dark-mode .news-list li {
    border-bottom-color: #333;
  }
  body.dark-mode .news-list {
    scrollbar-color: #444 transparent;
  }
  body.dark-mode .news-list::-webkit-scrollbar-thumb {
    background: #444;
  }
  body.dark-mode .news-list::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
  body.dark-mode .news-date {
    color: #888;
  }
  body.dark-mode .hl {
    background: rgba(79, 177, 186, 0.28);
  }

  @media screen and (prefers-color-scheme: dark) {
    body:not(.light-mode) .paper-title,
    body:not(.light-mode) .authors b,
    body:not(.light-mode) .focus-title {
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
      background: rgba(79, 177, 186, 0.12);
      border-color: rgba(79, 177, 186, 0.45);
      border-left-color: rgb(79, 177, 186);
    }
    body:not(.light-mode) .pub-item:hover .focus-details {
      border-color: rgba(79, 177, 186, 0.45);
      border-left-color: rgb(79, 177, 186);
    }
    body:not(.light-mode) .award-list li,
    body:not(.light-mode) .service-list li {
      border-bottom-color: #333;
    }
    body:not(.light-mode) .award-year {
      color: #888;
    }
    body:not(.light-mode) article.page h2 {
      border-bottom-color: #3a3a3a;
    }
    body:not(.light-mode) .news-list li {
      border-bottom-color: #333;
    }
    body:not(.light-mode) .news-list {
      scrollbar-color: #444 transparent;
    }
    body:not(.light-mode) .news-list::-webkit-scrollbar-thumb {
      background: #444;
    }
    body:not(.light-mode) .news-list::-webkit-scrollbar-thumb:hover {
      background: #555;
    }
    body:not(.light-mode) .news-date {
      color: #888;
    }
    body:not(.light-mode) .hl {
      background: rgba(79, 177, 186, 0.28);
    }
  }
  </style>

Hello! I am a 3rd-year PhD student in Computer Science at [Johns Hopkins University](https://www.jhu.edu/), advised by [Tianmin Shu](https://www.tshu.io/). I'm also a student researcher at Meta FAIR, mentored by [Jason Weston](https://ai.meta.com/people/1163645124801199/jason-weston/). I'm honored to be named an [Amazon AI PhD Fellow](https://www.amazon.science/news/amazon-launches-68-million-ai-phd-fellowship-program).

I received bachelor's degrees in Honors Computer Science and Mathematics from [NYU Courant](https://cims.nyu.edu/dynamic/) (2020–2024), where I was recognized as the [most promising student](/assets/awards/most_promising_student.pdf).
I was a research intern at [MIT](https://www.mit.edu/) (2023), advised by [Josh Tenenbaum](https://cocosci.mit.edu/josh-tenenbaum/).
My first-author works have received the [ACL Outstanding Paper Award](https://arxiv.org/abs/2401.08743), [Best Paper Award at an ICML workshop](https://arxiv.org/abs/2605.20087), and multiple spotlights/orals at top venues. 
<!-- I received an Outstanding Paper Award at ACL 2024 for my work on [multimodal Theory of Mind](https://arxiv.org/abs/2401.08743). -->

I'm developing AI models and agents with *advanced social intelligence (ASI)*. Particularly, I am working on:

<div class="pub-item" style="margin: 10px 0; padding: 0;">
  <div class="focus-header">
    <span class="focus-caret">▶</span><span class="focus-title"><strong>Reasoning about Human Interaction</strong></span>
    <!-- Developing AI that can continuously perceive, reason about, and respond to human behavior and cognition. -->
  </div>

  <div class="pub-details focus-details">
    <span class="intro">
      <ul>
      <li>I lead <a href="/mmtom-qa">MMToM-QA</a> (ACL'24 Outstanding Paper) and <a href="/AutoToM/">AutoToM</a> (NeurIPS'25 Spotlight), which push the frontier of machine Theory of Mind (ToM) by teaching AI systems to understand people's minds from their behavior.</li>
      <li>We advance machine Theory of Mind by <a href="/mmtom-qa">grounding it in cognitive theories</a> and <a href="/mmtom-qa">multi-modal</a> / <a href="https://scai.cs.jhu.edu/projects/MuMA-ToM/">multi-agent</a> / <a href="https://arxiv.org/abs/2506.23046">multi-perspective</a> data, <a href="https://scai.cs.jhu.edu/MindZero/">learning it self-supervised from human actions</a>, and <a href="/AutoToM/">scaling mental inference to long-horizon, complex scenarios</a>.</li>
      </ul>
    </span>
  </div>
</div><div class="pub-item" style="margin: 10px 0; padding: 0;">
  <div class="focus-header">
    <span class="focus-caret">▶</span><span class="focus-title"><strong>Learning from Human Interaction</strong></span>
    <!-- Developing AI that can continuously learn from real-world human interactions. -->
  </div>

  <div class="pub-details focus-details">
    <span class="intro">
      <ul>
      <li> We advocate for an <a href="https://arxiv.org/abs/2509.25137">era of real-world human interaction</a>, where models learn from natural human interaction for continual improvement and personalized alignment. We introduce <a href="https://arxiv.org/abs/2509.25137">Reinforcement Learning from Human Interaction (RLHI)</a> as a first step toward this vision. </li>
      <li> We present <a href="https://thoughttrace-project.github.io">ThoughtTrace</a> (ICML 2026 RLxF Best Paper Award), introducing users' unspoken thoughts as a new data modality for understanding users and improving models. </li>
      <li> I co-organized <a href="https://continual-robot-learning-from-humans.github.io/">Continual Robot Learning from Humans @ RSS 2025</a>, <a href="https://relearncvpr26.github.io/ReLearn/">Learning from Humans @ CVPR 2026</a>, and <a href="https://ttcl-agents.github.io">Test-Time Continual Learning Agents @ NeurIPS 2026</a>. </li>
      </ul>
    </span>
  </div>
</div>

<!-- I love mentoring undergraduates-several of my mentees have been recognized with top research honors. Please fill out [this application](https://docs.google.com/forms/d/e/1FAIpQLSe2ETXOX-d8-BCV4Y9aqDnMMOlu3JlNPPgek_XkzPY2xBXT7Q/viewform) form and/or send me an email if you're interested in working with me!

Besides academics, I enjoy playing Go, piano, badminton, swimming, and [so much more](/misc). -->

## News

<div class="news-fade">
<ul class="news-list">
  <li markdown="span"><span class="news-date">Dec 2026</span>Co-organizing the NeurIPS 2026 Workshop on [Test-Time Continual Learning Agents](https://ttcl-agents.github.io).</li>
  <li markdown="span"><span class="news-date">Jul 2026</span>[ThoughtTrace](https://thoughttrace-project.github.io/) received the <span style="color: #C04000;">Best Paper Award</span> at the [ICML 2026 RLxF Workshop](https://sites.google.com/view/rlxf-icml2026)! Gave an [invited talk](/assets/slides/Talk_at_UW_2026-08.pdf) at UW.</li>
  <li markdown="span"><span class="news-date">Jun 2026</span>Co-organized CVPR 2026 Workshop on [Can AI Still Learn from Humans](https://relearncvpr26.github.io/ReLearn/).</li>
  <li markdown="span"><span class="news-date">Oct 2025</span>Invited talks on ["Reinforcement Learning from Human Interaction"](https://arxiv.org/abs/2509.25137) at Meta TBD Lab, Google Research, WashU, Northwestern and UW.</li>
  <li markdown="span"><span class="news-date">Oct 2025</span>Excited to be awarded the <a href="https://ai2ai.engineering.jhu.edu/amazon-ai-phd-fellows/" style="color: #C04000;">Amazon AI PhD Fellowship</a>!</li>
  <li markdown="span"><span class="news-date">Sep 2025</span>[AutoToM](/AutoToM/) is accepted by NeurIPS 2025 as a <span style="color: #C04000;">Spotlight Presentation</span>!</li>
  <li markdown="span"><span class="news-date">Jun 2025</span>Co-organized RSS 2025 Workshop on [Continual Robot Learning from Humans](https://continual-robot-learning-from-humans.github.io/).</li>
  <li markdown="span"><span class="news-date">Jun 2025</span>I was selected as a <span style="color: #C04000;">Notable Reviewer</span> for ICLR 2025.</li>
  <li markdown="span"><span class="news-date">Jan 2025</span>[MuMA-ToM](https://scai.cs.jhu.edu/projects/MuMA-ToM/) is accepted by AAAI 2025 as an <span style="color: #C04000;">Oral Presentation</span>!</li>
  <li markdown="span"><span class="news-date">Aug 2024</span>[MMToM-QA](/mmtom-qa) received <span style="color: #C04000;">Outstanding Paper Award</span> at ACL 2024! It was covered by [Futurity](https://www.futurity.org/artificial-intelligence-theory-of-mind-3253282/), [Synced](https://mp.weixin.qq.com/s/fRa138rmFsv8W8JOYcsAPA), and [JHU News](https://engineering.jhu.edu/news/ai-cant-read-your-mind-yet/).</li>
</ul>
</div>

<script>
/* Hide the bottom fade on each .news-fade once its list is scrolled to the end. */
(function () {
  function syncNewsFade() {
    var wraps = document.querySelectorAll('.news-fade');
    for (var i = 0; i < wraps.length; i++) {
      var list = wraps[i].querySelector('.news-list');
      if (!list) { continue; }
      var atBottom = list.scrollHeight - list.scrollTop - list.clientHeight <= 1;
      wraps[i].classList.toggle('is-at-bottom', atBottom);
    }
  }
  /* Live updates while scrolling: scroll doesn't bubble, so listen in the capture phase.
     document persists across the theme's push-state navigation, so this stays bound. */
  document.addEventListener('scroll', syncNewsFade, { capture: true, passive: true });
  window.addEventListener('resize', syncNewsFade, { passive: true });
  window.addEventListener('load', syncNewsFade);
  /* Re-sync after dynamic (push-state) page loads; harmless if the event never fires. */
  document.addEventListener('hy-push-state-load', syncNewsFade);
  syncNewsFade();
})();
</script>


## Recent Publications
<div class="pub-note">
  (* denotes equal contribution; † denotes project lead)<br>
  For a more complete list, please see my <a href="/publications/" style="color: #666666;">publication page</a> or <a href="https://scholar.google.com/citations?user=OZeqpLIAAAAJ&hl=en" style="color: #666666;">Google Scholar page</a>.
</div>

{% assign selected_pubs = site.data.publications | where: "selected", true %}
{% for pub in selected_pubs %}
  {% include publication-item.html pub=pub %}
{% endfor %}


My research journey began with [these undergrad projects](/projects/). I'm deeply grateful to the mentors who have guided me along the way and inspired me with their vision and passion.

## Selected Honors & Awards

<ul class="award-list">
  <li><span><span class="hl">Best Paper Award, ICML 2026 RLxF Workshop</span></span><span class="award-year">2026</span></li>
  <li><span><span class="hl">Amazon AI PhD Fellowship</span></span><span class="award-year">2025</span></li>
  <li><span>Notable Reviewer Award, ICLR 2025</span><span class="award-year">2025</span></li>
  <li><span><span class="hl">Outstanding Paper Award, ACL 2024</span></span><span class="award-year">2024</span></li>
  <li><span>Presidential Honors Scholar and Summa cum Laude, New York University</span><span class="award-year">2024</span></li>
  <li><span><span class="hl">Computer Science Prize for the Most Promising Student, New York University (1 person/year)</span></span><span class="award-year">2023</span></li>
  <li><span>Dean's Undergraduate Research Fund, New York University</span><span class="award-year">2023</span></li>
  <li><span><span class="hl">COMAP International Scholarship Award (Top 0.1%)</span></span><span class="award-year">2022</span></li>
  <li><span><span class="hl">MAA Award in Mathematical Contest in Modeling (Top 0.1%)</span></span><span class="award-year">2022</span></li>
  <li><span>Bronze Medal of Shing-Tung Yau Computer Science Award (Top 1%)</span><span class="award-year">2019</span></li>
  <li><span>Finalist of FIRST Robotics Competition World Championship (Top 0.2%)</span><span class="award-year">2019</span></li>
  <li><span>NFLS Outstanding Student Leader Award and Zhou Enlai Scholarship (Top 1%)</span><span class="award-year">2018</span></li>
  <li><span>First Prize of Chinese Mathematical Olympiad (Top 0.1%)</span><span class="award-year">2018</span></li>
  <li><span>Champion of International Regions Mathematics League</span><span class="award-year">2018</span></li>
</ul>


## Services

<ul class="service-list">
  <li markdown="span"><span class="service-role">Workshop Co-organizer:</span> [Continual Robot Learning from Humans (CRLH @ RSS 2025)](https://continual-robot-learning-from-humans.github.io/), [Learning from Humans (ReLearn @ CVPR 2026)](https://relearncvpr26.github.io/ReLearn/), and [Test-Time Continual Learning Agents (TTCL @ NeurIPS 2026)](https://ttcl-agents.github.io)</li>
  <li markdown="span"><span class="service-role">Conference Program Committee / Reviewer:</span> Machine Learning (ICLR - Notable Reviewer Award, NeurIPS, ICML, AAAI), Natural Language Processing (ARR, ACL, EMNLP, NAACL), Computer Vision (CVPR), Robotics (RSS)</li>
  <li markdown="span"><span class="service-role">Head Teaching Assistant:</span> [JHU EN.601 Machine Social Intelligence](https://www.tshu.io/teaching/MSI/sp26/) with Tianmin Shu</li>
</ul>