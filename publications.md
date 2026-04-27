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

  /* Dark mode overrides */
  body.dark-mode .paper-title,
  body.dark-mode .authors b {
    color: #e0e0e0 !important;
  }
  body.dark-mode .pub-item .authors,
  body.dark-mode .pub-note {
    color: #aaa !important;
  }
  body.dark-mode .pub-item .venue {
    color: #bbb;
  }
  body.dark-mode .pub-details {
    border-left-color: #444;
  }

  @media screen and (prefers-color-scheme: dark) {
    body:not(.light-mode) .paper-title,
    body:not(.light-mode) .authors b {
      color: #e0e0e0 !important;
    }
    body:not(.light-mode) .pub-item .authors,
    body:not(.light-mode) .pub-note {
      color: #aaa !important;
    }
    body:not(.light-mode) .pub-item .venue {
      color: #bbb;
    }
    body:not(.light-mode) .pub-details {
      border-left-color: #444;
    }
  }
  </style>
</head>

<div class="pub-note">
  (* denotes equal contribution; † denotes project lead)<br>
</div>

{% for pub in site.data.publications %}
  {% include publication-item.html pub=pub %}
{% endfor %}