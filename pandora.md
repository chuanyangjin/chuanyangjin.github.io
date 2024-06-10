---
title: Pandora
layout: compress
---

<style>
.text-center {
    text-align: center;
}

#post-list {
  margin-top: 2rem;

  .card-wrapper {
    &:hover {
      text-decoration: none;
    }

    &:not(:last-child) {
      margin-bottom: 1.25rem;
    }
  }

  .card {
    border: 0;
    background: none;

    %img-radius {
      border-radius: $base-radius $base-radius 0 0;
    }

    .preview-img {
      @extend %img-radius;

      img {
        @extend %img-radius;
      }
    }

    .card-body {
      height: 100%;
      padding: 1rem;

      .card-title {
        @extend %text-clip;

        color: var(--heading-color) !important;
        font-size: 1.25rem;
      }

      %muted {
        color: var(--text-muted-color) !important;
      }

      .card-text.content {
        @extend %muted;

        p {
          @extend %text-clip;

          line-height: 1.5;
          margin: 0;
        }
      }

      .post-meta {
        @extend %muted;

        i {
          &:not(:first-child) {
            margin-left: 1.5rem;
          }
        }

        em {
          @extend %normal-font-style;

          color: inherit;
        }

        > div:first-child {
          display: block;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
    }
  }
}
</style>

# <span> MMToM-QA: Multimodal Theory of Mind Question Answering</span>
{: .text-center }

<div style="text-align: center;">
    <img src="/assets/img/publications/MMToM.png" style="width: 800px;">
</div>

## Introduction
We propose Bayesian Inverse Planning Accelerated by Language Models (BIP-ALM), a novel method to engineer multimodal Theory of Mind. This method: -->



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