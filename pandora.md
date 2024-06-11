---
title: Pandora
layout: compress
---

<style>
@charset "UTF-8";
/* the basic width */
/* screen width: >= 1650px */
/* other framework sizes */
/* screen width: < 850px */
/* syntax highlight */
/* fonts */
/*
* Mainly scss modules, only imported to `assets/css/main.scss`
*/
/* ---------- scss placeholder --------- */
#post-list .card .card-body .post-meta em {
  font-style: normal;
}

#post-list .card .card-body .card-text.content p, #post-list .card .card-body .card-title {
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

/* ---------- scss mixin --------- */
/*
  Style for Homepage
*/
#post-list {
  margin-top: 2rem;
}
#post-list .card-wrapper:hover {
  text-decoration: none;
}
#post-list .card-wrapper:not(:last-child) {
  margin-bottom: 1.25rem;
}
#post-list .card {
  border: 0;
  background: none;
}
#post-list .card .preview-img img, #post-list .card .preview-img {
  border-radius: 0.625rem 0.625rem 0 0;
}
#post-list .card .card-body {
  height: 100%;
  padding: 1rem;
}
#post-list .card .card-body .card-title {
  color: var(--heading-color) !important;
  font-size: 1.25rem;
}
#post-list .card .card-body .post-meta, #post-list .card .card-body .card-text.content {
  color: var(--text-muted-color) !important;
}
#post-list .card .card-body .card-text.content p {
  line-height: 1.5;
  margin: 0;
}
#post-list .card .card-body .post-meta i:not(:first-child) {
  margin-left: 1.5rem;
}
#post-list .card .card-body .post-meta em {
  color: inherit;
}
#post-list .card .card-body .post-meta > div:first-child {
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* #post-list */
.pagination {
  color: var(--text-color);
  font-family: Lato, sans-serif;
  justify-content: space-evenly;
  /* .page-item */
}
.pagination a:hover {
  text-decoration: none;
}
.pagination .page-item .page-link {
  color: var(--btn-patinator-text-color);
  padding: 0 0.6rem;
  display: -webkit-box;
  -webkit-box-pack: center;
  -webkit-box-align: center;
  border-radius: 0.5rem;
  border: 0;
  background-color: inherit;
}
.pagination .page-item.active .page-link {
  background-color: var(--btn-paginator-hover-color);
}
.pagination .page-item:not(.active) .page-link:hover {
  box-shadow: inset var(--btn-border-color) 0 0 0 1px;
}
.pagination .page-item.disabled {
  cursor: not-allowed;
}
.pagination .page-item.disabled .page-link {
  color: rgba(108, 117, 125, 0.57);
}

/* .pagination */
/* Tablet */
@media all and (min-width: 768px) {
  #post-list .card .preview-img, #post-list .card .preview-img img {
    border-radius: 0 0.625rem 0.625rem 0;
  }
  #post-list .card .card-body {
    padding: 1.75rem 1.75rem 1.25rem 1.75rem;
  }
  #post-list .card .card-body .card-text {
    display: inherit !important;
  }
  #post-list .card .card-body .post-meta i:not(:first-child) {
    margin-left: 1.75rem;
  }
}
/* Hide SideBar and TOC */
@media all and (max-width: 830px) {
  .pagination .page-item:not(:first-child):not(:last-child) {
    display: none;
  }
}
/* Sidebar is visible */
@media all and (min-width: 831px) {
  #post-list {
    margin-top: 2.5rem;
  }
  .pagination {
    font-size: 0.85rem;
    justify-content: center;
  }
  .pagination .page-item:not(:last-child) {
    margin-right: 0.7rem;
  }
  .pagination .page-index {
    display: none;
  }
  /* .pagination */
}
.project-body {
  padding: 1.25rem !important;
}

#post-list .card .project-icon, #post-list .card .project-icon img {
  flex: 0 0 auto;
  height: 72px;
  width: 72px;
  object-fit: contain;
  background-color: var(--card-bg);
  border-radius: 0;
  vertical-align: unset;
  margin: auto;
}

.preview-img {
  padding: 0;
}

.project-main {
  width: calc(40% - 36px);
  padding: 0;
  height: fit-content;
  max-height: 72px;
  margin: auto;
  overflow: hidden;
}

.project-main > p {
  margin-bottom: 0;
  line-height: 1.2;
}

.project-content {
  width: calc(60% - 36px);
  height: fit-content;
  max-height: 72px;
  margin: auto;
  overflow: hidden;
}

.card-desc {
  color: var(--heading-color) !important;
  margin-bottom: 0;
  font-size: 1rem;
  text-overflow: ellipsis;
  line-height: 1.2;
}

@media (max-width: 768px) {
  .project-main {
    width: calc(100% - 72px);
  }
  .project-content {
    width: 100%;
    margin: 12px 12px 0 12px;
  }
}
.full-container {
  min-height: 100%;
}

@media (max-width: 768px) {
  .md\:h-screen {
    height: 100vh;
  }
}
.w-full {
  width: 100%;
}

.relative {
  position: relative;
}

.flex-col {
  flex-direction: column;
}

.items-center {
  align-items: center;
}

.justify-center {
  justify-content: center;
}

.text-center {
  text-align: center;
}

.md\:flex {
  display: flex;
}

.max-width-1080 {
  max-width: 1080px;
}

:where(.child\:absolute) > :where(:not(.not-child)) {
  position: absolute;
}

.fit-content {
  width: fit-content;
}

.h-fit-content {
  height: fit-content;
}

.max-32-rem {
  max-width: 32rem;
}

.max-24-rem {
  max-width: 24rem;
}

.flex {
  display: flex;
}

.grid {
  display: grid;
}

.grid-cols-2 {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.grid-cols-3 {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.grid-cols-4 {
  grid-template-columns: repeat(4, minmax(0, 1fr));
}

.grid-cols-5 {
  grid-template-columns: repeat(5, minmax(0, 1fr));
}

.grid-cols-6 {
  grid-template-columns: repeat(6, minmax(0, 1fr));
}

.grid-auto-rows {
  grid-auto-rows: 1fr;
}

#post-list > .overview-card {
  border: var(--bs-card-border-width) solid var(--bs-card-border-color);
}

#post-list .card .overview-icon, #post-list .card .overview-icon img {
  flex: 0 0 auto;
  height: 29px;
  width: 29px;
  object-fit: contain;
  background-color: var(--card-bg);
  border-radius: 0;
  vertical-align: unset;
}

#home-title {
  background: none;
}

#home-title p {
  color: var(--heading-color);
}

#home-title p, .overview-card p {
  line-height: var(--bs-body-line-height);
}

.overview-title {
  width: fit-content;
}

.overview-body {
  padding: 1.75rem !important;
}

.overview-title-body {
  padding: 2.25rem !important;
  border-radius: 0.625rem;
  background-color: var(--card-bg);
}

.project-main {
  width: calc(40% - 36px);
  padding: 0;
  height: fit-content;
  max-height: 72px;
  margin: auto;
  overflow: hidden;
}

.project-main > p {
  margin-bottom: 0;
  line-height: 1.2;
}

.project-content {
  width: calc(60% - 36px);
  height: fit-content;
  max-height: 72px;
  margin: auto;
  overflow: hidden;
}

#post-list .card .card-body .overview-text.card-text.content {
  color: var(--heading-color) !important;
}

#post-list.grid .card-wrapper {
  margin-bottom: 1.25rem;
}

@media (max-width: 720px) {
  .grid-cols-2-w {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  .w-50-w {
    width: 50% !important;
  }
  .w-100-w {
    width: 100% !important;
  }
}
@media (max-width: 720px) {
  .grid-cols-1-w {
    grid-template-columns: repeat(1, minmax(0, 1fr));
    width: 100%;
  }
  .grid-cols-1-w.grid-auto-rows {
    grid-auto-rows: unset;
  }
  article.gap-4 {
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }
  #post-list.grid-cols-1-w.grid-auto-rows.gap-4 {
    gap: 0rem !important;
    margin-top: 1rem;
  }
  .grid-cols-1-w.grid-auto-rows .overview-card {
    max-width: unset;
  }
  .grid-cols-1-w.grid-auto-rows .overview-card.h-100 {
    height: fit-content !important;
  }
  .project-card.card {
    height: fit-content;
  }
  .project-card.card .project-content {
    max-height: unset;
  }
  .w-md-100 {
    width: 100% !important;
  }
}
#sidebar > header.profile-wrapper {
  padding-left: 1.25rem;
}

#sidebar > header.profile-wrapper p {
  margin-left: 1.25rem;
}

.w-300px {
  width: 300px;
}

.w-75px {
  width: 75px;
}

.h-100px {
  height: 100px;
}

.no-popup {
  pointer-events: none;
}

.logo {
  height: unset;
}
.logo img {
  aspect-ratio: 1/1;
  object-fit: contain;
}

a.nav-link {
  padding-top: 0.4rem;
  padding-bottom: 0.4rem;
  padding-left: 0.6rem;
  padding-right: 0.6rem;
  margin-left: 0.3rem;
  margin-right: 0.3rem;
  width: fit-content;
  display: flex;
  align-items: center;
  border-radius: 0.75rem;
  border: 1px solid;
  border-color: var(--sidebar-active-color);
  font-weight: 600;
}
a.nav-link.enabled:hover {
  background-color: var(--sidebar-hover-bg);
}
a.nav-link.active {
  background-color: var(--sidebar-active-color);
  color: var(--sidebar-bg);
}
a.nav-link i {
  font-size: 95%;
  opacity: 0.8;
  margin-right: 0.5rem;
}
a.nav-link span {
  font-size: 90%;
  letter-spacing: 0.2px;
}

.loader {
  border: 16px solid #f3f3f3; /* Light grey */
  border-top: 16px solid #3498db; /* Blue */
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.great-vibes {
  font-family: "Great Vibes", cursive;
}

.playball-regular {
  font-family: "Playball", cursive;
  font-weight: 400;
  font-style: normal;
}

main h1 > span {
  display: inline-block;
}

main h1 {
  font-size: 28pt;
  text-wrap: balance;
}

main h2 {
  font-size: 20pt;
}

.max-width-720 {
  max-width: 800px;
}

.multi-turn .figure-caption {
  font-size: 0.9rem !important;
  border-bottom: 2px solid black;
  color: black;
  line-height: 1;
  transition: color 0.5s ease-in-out;
  text-wrap: nowrap;
  text-overflow: clip;
  max-width: calc(100% - 12px);
  min-width: 40%;
  direction: rtl;
}
.multi-turn .figure-caption.no {
  border-bottom-color: transparent;
}

.figure-caption {
  font-size: 0.9rem !important;
  color: black;
  line-height: 1;
  text-wrap: balance;
}

.w-85 {
  width: 100%;
  max-width: 720px;
}

.left-20 {
  padding-left: 20%;
}

.ratio-8-5 {
  height: unset;
  aspect-ratio: auto 8/5;
}

.w-33 {
  width: 33.333333%;
}

.text-wrap-balance {
  text-wrap: balance;
}

.min-w-70-r {
  min-width: 75%;
  margin-right: 0 !important;
}
.min-w-70-r > * {
  margin-left: 0 !important;
}

.transition-color {
  transition: color 1s ease-in-out;
}

.align-items-end {
  align-items: end;
}

.progress-seg {
  margin: -2px -2px 1px -2px;
  height: 11px;
  border-top: 2px solid transparent;
  border-left: 2px solid transparent;
  border-right: 2px solid transparent;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  display: flex;
  transition: border-color 0.5s ease-in-out;
}
.progress-seg.r {
  border-top-color: black;
  border-right-color: black;
}
.progress-seg.l {
  border-top-color: black;
  border-left-color: black;
}
.progress-seg progress {
  height: 4px;
  width: 100%;
  margin: 3px 2px 0 2px;
  appearance: none;
}
.progress-seg progress::-webkit-progress-bar {
  background-color: lightgrey;
}
.progress-seg progress::-webkit-progress-value {
  background-color: orange;
  transition: width 0.1s ease;
}

.grid > * {
  min-width: 0;
}

.header {
  font-size: 1.1rem !important;
}

h1 .inline-logo {
  height: 48px;
  margin-top: -10px;
}

li:nth-child(1) {
  list-style-type: "♠";
  padding-inline-start: 1ch;
}

li:nth-child(2) {
  list-style-type: "♣";
  padding-inline-start: 1ch;
}
</style>

# <span> MMToM-QA: Multimodal Theory of Mind Question Answering</span>
{: .text-center }

<div style="text-align: center;">
    <img src="/assets/img/publications/MMToM.png" style="width: 800px;">
</div>

## Introduction

We propose Bayesian Inverse Planning Accelerated by Language Models (BIP-ALM), a novel method to engineer multimodal Theory of Mind.


## On-the-Fly Control with Natural Language

<!-- Pagination Container -->
<div class="pagination">
  <!-- Page Item -->
  <div class="page-item">
    <a href="#" class="page-link">Pandora accepts free-text actions as inputs *during* video generation to steer the video on the fly.</a>
  </div>
  <!-- Page Item -->
  <div class="page-item">
    <a href="#" class="page-link">2</a>
  </div>
</div>


<div style="text-align: center; margin: auto; width: 800px; font-family: Lato, sans-serif;">
<!-- <div align="center" style="width: 800px; font-family: Lato, sans-serif;"> -->
  We propose Bayesian Inverse Planning Accelerated by Language Models (BIP-ALM), a novel method to engineer multimodal Theory of Mind.
</div>



<center><h1>Bayesian Inverse Planning Accelerated by Language Models (BIP-ALM)</h1></center>
<table align="center" width="850px">
  <tbody><tr>
    <td style="text-align: justify">
      We propose Bayesian Inverse Planning Accelerated by Language Models (BIP-ALM), a novel method to engineer multimodal Theory of Mind. This method:
      <ul>
        <li>Extracts symbolic representations from video (via the Visual Perception Module) and text (using GPT-4);</li>
        <li>Aligns and fuses these representations to form a unified representation of the event and the physical scene;</li>
        <li>Conducts inverse inference about the agent's goal and belief using finetuned language models.</li>
      </ul>
    </td>
  </tr></tbody>
</table>