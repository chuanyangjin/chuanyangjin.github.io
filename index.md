---
layout: default
title: Chuanyang Jin
permalink: /
redirect_from:
  - /home/
image: /assets/img/me-800.jpg
sitemap: true
---

<!-- Local run:
cd chuanyangjin.github.io
bundle install
bundle exec jekyll serve 
http://localhost:4000 -->

<section class="journal hero">
<div class="page">
<div class="hero-grid">
<div class="hero-main">
<h1 class="hero-name">Chuanyang Jin</h1>
<div class="hero-bio" markdown="1">

Hello! I am a PhD student in Computer Science at [Johns Hopkins University](https://www.jhu.edu/), advised by [Tianmin Shu](https://www.tshu.io/). I'm also working closely with [Jason Weston](https://www.thespermwhale.com/jaseweston/). I'm honored to be named an [Amazon AI PhD Fellow](https://www.amazon.science/news/amazon-launches-68-million-ai-phd-fellowship-program).

I have spent time at [Meta FAIR](https://ai.meta.com/research/) (2025, 2026) and [MIT](https://www.mit.edu/) (2023). I received my undergraduate degrees in Honors Computer Science and Mathematics from [NYU Courant](https://cims.nyu.edu/dynamic/) (2020-2024), recognized as the [most promising student](/assets/awards/most_promising_student.pdf). My works have received the [ACL Outstanding Paper Award](https://arxiv.org/abs/2401.08743), [Best Paper Award at an ICML workshop](https://arxiv.org/abs/2605.20087), and multiple spotlights/orals at top venues. I have organized workshops at [RSS 2025](https://continual-robot-learning-from-humans.github.io/), [CVPR 2026](https://relearncvpr26.github.io/ReLearn/), and [NeurIPS 2026](https://ttcl-agents.github.io).
<!-- My first-author works -->
<!-- I was a research intern at [MIT](https://www.mit.edu/) (2023), advised by [Josh Tenenbaum](https://cocosci.mit.edu/josh-tenenbaum/). -->

My research focuses on continual learning agents with advanced social intelligence. I work on:

</div>
<div class="focus">
<details class="focus-row">
<summary><span class="focus-num" aria-hidden="true">1</span><span class="focus-title">Reasoning about Human Interaction</span><svg class="chev" viewBox="0 0 16 16" aria-hidden="true"><path d="M4 6l4 4 4-4" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>
<!-- Developing AI that can continuously perceive, reason about, and respond to human behavior and cognition. -->{% comment %}
Parked subtitle. If restored, do not leave it as loose text inside <summary>: the summary is a 3-column grid
(number, title, chevron), so loose text lands in the 32px number column, one word per line. Give it its own
element in the title column (grid-column: 2) or move it below </summary>.
{% endcomment %}
</summary>
<ul class="focus-body">
<li>I lead <a href="/mmtom-qa">MMToM-QA</a> (ACL'24 Outstanding Paper) and <a href="/AutoToM/">AutoToM</a> (NeurIPS'25 Spotlight), which push the frontier of machine Theory of Mind (ToM) by teaching AI systems to understand people's minds from their behavior.</li>
<li>We advance machine Theory of Mind by <a href="/mmtom-qa">grounding it in cognitive theories</a> and <a href="/mmtom-qa">multi-modal</a> / <a href="https://scai.cs.jhu.edu/projects/MuMA-ToM/">multi-agent</a> / <a href="https://arxiv.org/abs/2506.23046">multi-perspective</a> data, <a href="https://scai.cs.jhu.edu/MindZero/">learning it self-supervised from human actions</a>, and <a href="/AutoToM/">scaling mental inference to long-horizon, complex scenarios</a>.</li>
</ul>
</details>
<details class="focus-row">
<summary><span class="focus-num" aria-hidden="true">2</span><span class="focus-title">Learning from Human Interaction</span><svg class="chev" viewBox="0 0 16 16" aria-hidden="true"><path d="M4 6l4 4 4-4" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>
<!-- Developing AI that can continuously learn from real-world human interactions. -->{% comment %}
Parked subtitle. If restored, do not leave it as loose text inside <summary> (it would land in the 32px number
column); give it its own element in the title column (grid-column: 2) or move it below </summary>.
{% endcomment %}
</summary>
<ul class="focus-body">
<li> We advocate for an <a href="https://arxiv.org/abs/2509.25137">era of real-world human interaction</a>, where models learn from natural human interaction for continual improvement and personalized alignment. </li>
<li> We introduce <a href="https://arxiv.org/abs/2509.25137">RL from Human Interaction (RLHI)</a> for learning from in-the-wild user conversations, <a href="https://thoughttrace-project.github.io">ThoughtTrace</a> for learning from users' unspoken thoughts, and <a href="https://facebookresearch.github.io/RAM/blogs/autointeract/">AutoInteract</a> for training agents to interact with humans. </li>
</ul>
</details>
<details class="focus-row">
<summary><span class="focus-num" aria-hidden="true">3</span><span class="focus-title">Self-Improvement and Co-Improvement with Humans</span><svg class="chev" viewBox="0 0 16 16" aria-hidden="true"><path d="M4 6l4 4 4-4" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>
</summary>
<ul class="focus-body">
<li> We study self-improving agents: <a href="https://arxiv.org/abs/2510.24684">SPICE</a> improves reasoning through grounded self-play, and <a href="https://qiushisun.github.io/OS-Genesis-Home">OS-Genesis</a> synthesizes its own training data through environment interaction. </li>
<li> I'm working on autoresearch agents and on co-improving these agents with humans. More coming soon &amp; open to collaboration! </li>
</ul>
</details>
</div>
{% comment %}
Parked paragraphs below. If restored, move them out of this raw-HTML .hero-main div into a markdown="1"
container styled like the bio and added to the in-text link selector in site.css (`:where(.hero-bio, ...) a`);
here kramdown would print the [text](url) links literally and merge the two paragraphs. At <= 860px that
container also needs grid-column: 1 / -1 (a second .hero-bio would collide with grid-area: bio).
{% endcomment %}
<!-- I love mentoring undergraduates-several of my mentees have been recognized with top research honors. Please fill out [this application](https://docs.google.com/forms/d/e/1FAIpQLSe2ETXOX-d8-BCV4Y9aqDnMMOlu3JlNPPgek_XkzPY2xBXT7Q/viewform) form and/or send me an email if you're interested in working with me!

Besides academics, I enjoy playing Go, piano, badminton, swimming, and [so much more](/misc). -->

</div>
{% include hero-aside.html %}
</div>
</div>
</section>

{% include photo-strip.html %}

<section class="journal">
<div class="page">
<div class="sec-head"><h2 class="sec-title" id="news">News</h2></div>
<ul class="log news-list" data-collapse="5">
  <li markdown="span"><span class="news-date">Dec 2026</span>Co-organizing the NeurIPS 2026 Workshop on [Test-Time Continual Learning Agents](https://ttcl-agents.github.io).</li>
  <li markdown="span"><span class="news-date">Jul 2026</span>[ThoughtTrace](https://thoughttrace-project.github.io/) received the <span class="award">Best Paper Award</span> at the [ICML 2026 RLxF Workshop](https://sites.google.com/view/rlxf-icml2026)! Gave an [invited talk](/assets/slides/Talk_at_UW_2026-08.pdf) at UW.</li>
  <li markdown="span"><span class="news-date">Jun 2026</span>Co-organized CVPR 2026 Workshop on [Can AI Still Learn from Humans](https://relearncvpr26.github.io/ReLearn/).</li>
  <li markdown="span"><span class="news-date">Oct 2025</span>Invited talks on ["Reinforcement Learning from Human Interaction"](https://arxiv.org/abs/2509.25137) at Meta TBD Lab, Google Research, WashU, Northwestern and UW.</li>
  <li markdown="span"><span class="news-date">Oct 2025</span>Excited to be awarded the <a href="https://ai2ai.engineering.jhu.edu/amazon-ai-phd-fellows/" class="award">Amazon AI PhD Fellowship</a>!</li>
  <li markdown="span"><span class="news-date">Sep 2025</span>[AutoToM](/AutoToM/) is accepted by NeurIPS 2025 as a <span class="award">Spotlight Presentation</span>!</li>
  <li markdown="span"><span class="news-date">Jun 2025</span>Co-organized RSS 2025 Workshop on [Continual Robot Learning from Humans](https://continual-robot-learning-from-humans.github.io/).</li>
  <li markdown="span"><span class="news-date">Jun 2025</span>I was selected as a <span class="award">Notable Reviewer</span> for ICLR 2025.</li>
  <li markdown="span"><span class="news-date">Jan 2025</span>[MuMA-ToM](https://scai.cs.jhu.edu/projects/MuMA-ToM/) is accepted by AAAI 2025 as an <span class="award">Oral Presentation</span>!</li>
  <li markdown="span"><span class="news-date">Aug 2024</span>[MMToM-QA](/mmtom-qa) received <span class="award">Outstanding Paper Award</span> at ACL 2024! It was covered by [Futurity](https://www.futurity.org/artificial-intelligence-theory-of-mind-3253282/), [Synced](https://mp.weixin.qq.com/s/fRa138rmFsv8W8JOYcsAPA), and [JHU News](https://engineering.jhu.edu/news/ai-cant-read-your-mind-yet/).</li>
</ul>
</div>
</section>

<section class="journal">
<div class="page">
<div class="sec-head"><h2 class="sec-title" id="selected-publications">Selected Publications</h2><a class="sec-more" href="/publication/#all">All publications</a></div>
<p class="pub-note">(* denotes equal contribution; † denotes project lead)</p>
{% assign selected_pubs = site.data.publications | where: "selected", true %}
<div class="pubs">
{% for pub in selected_pubs %}
  {% include publication-item.html pub=pub %}
{% endfor %}
</div>
</div>
</section>

<section class="journal">
<div class="page">
<div class="sec-head"><h2 class="sec-title" id="awards-honors">Awards &amp; Honors</h2></div>
<ul class="log award-list">
  <li><span><span class="award">Best Paper Award, ICML 2026 RLxF Workshop</span></span> <span class="award-year">2026</span></li>
  <li><span><span class="award">Amazon AI PhD Fellowship</span></span> <span class="award-year">2025</span></li>
  <li><span>Notable Reviewer Award, ICLR 2025</span> <span class="award-year">2025</span></li>
  <li><span><span class="award">Outstanding Paper Award, ACL 2024</span></span> <span class="award-year">2024</span></li>
  <li><span>Presidential Honors Scholar and Summa cum Laude, New York University</span> <span class="award-year">2024</span></li>
  <li><span><span class="award">Computer Science Prize for the Most Promising Student, New York University (1 person/year)</span></span> <span class="award-year">2023</span></li>
  <li><span>Dean's Undergraduate Research Fund, New York University</span> <span class="award-year">2023</span></li>
  <li><span><span class="award">COMAP International Scholarship Award (Top 0.1%)</span></span> <span class="award-year">2022</span></li>
  <li><span><span class="award">MAA Award in Mathematical Contest in Modeling (Top 0.1%)</span></span> <span class="award-year">2022</span></li>
  <li><span>Bronze Medal of Shing-Tung Yau Computer Science Award (Top 1%)</span> <span class="award-year">2019</span></li>
  <li><span>Finalist of FIRST Robotics Competition World Championship (Top 0.2%)</span> <span class="award-year">2019</span></li>
  <li><span>NFLS Outstanding Student Leader Award and Zhou Enlai Scholarship (Top 1%)</span> <span class="award-year">2018</span></li>
  <li><span>First Prize of Chinese Mathematical Olympiad (Top 0.1%)</span> <span class="award-year">2018</span></li>
  <li><span>Champion of International Regions Mathematics League</span> <span class="award-year">2018</span></li>
</ul>
</div>
</section>
