---
layout: default
title: Publications
description: >
  Publications by Chuanyang Jin.
permalink: /publication/
redirect_from:
  - /publications/
image: /assets/img/me-800.jpg
---

{% assign all_pubs = site.data.publications %}
{% assign selected_pubs = site.data.publications | where: "selected", true %}

<section class="page-hero">
<div class="page">
<div class="sec-head page-hero-head"><h1>Publications</h1><a class="sec-more" href="{{ site.contact.scholar }}" target="_blank" rel="noopener">Google Scholar</a></div>
</div>
</section>

<section class="journal">
<div class="page">
<div class="pub-toolbar">
<p class="pub-legend">(* denotes equal contribution; † denotes project lead)</p>
<div class="seg" role="group" aria-label="Show publications">
<button type="button" data-view="selected" aria-pressed="true" aria-controls="pub-list">Selected <span class="seg-n">{{ selected_pubs.size }}</span></button>
<button type="button" data-view="all" aria-pressed="false" aria-controls="pub-list">All <span class="seg-n">{{ all_pubs.size }}</span></button>
</div>
</div>
<p class="sr-only" id="pub-status" aria-live="polite"></p>
<div class="pubs" id="pub-list" data-view="all">
{% for pub in all_pubs %}
  {% include publication-item.html pub=pub heading=2 %}
{% endfor %}
</div>
</div>
</section>
