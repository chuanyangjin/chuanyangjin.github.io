---
layout: archive
title: ""
permalink: /projects/research-projects
author_profile: true
---

# Research Projects

**Class Embeddings Enter Class-conditional Diffusions Models**
[[Report]](https://chuanyangjin.github.io/files/Class%20Embeddings%20Enter%20Class-conditional%20Diffusion%20Models.pdf)
[[Slides]](https://docs.google.com/presentation/d/e/2PACX-1vTvGMT2H66s4uIegT8PKpEBYM8601moDXhtDcQtAQXQdEvhVm93Urnn9DuqjzCS76JSOQI8niCH067A/pub?start=false&loop=true&delayms=3000)
[[Code]](https://github.com/chuanyangjin/DDPM-with-Class-Embeddings)

Abstract: 
Guided diffusion incorporates class information into the diffusion models to trade off mode coverage and sample fidelity. To perform the guidance without a classifier, classifier-free diffusion guidance is recently introduced where a conditional and an unconditional diffusion model are jointly trained. However, it remains unclear how to embed class-specific information into the conditional training process. Thus, we propose several potential class embedding patterns such as Uniform embedding, Pyramid embedding, and Bottleneck embedding under the framework of Class Embedding Networks (CEN), which explicitly generate learnable mappings from the class labels. During the reverse diffusion process, the generated mappings from CENs are concatenated with each layer of the noise estimator. The concatenation of class embeddings allows the noise estimator to be class conditional. In our experiment, we evaluated different embedding patterns and trade-offs between Pyramid embedding and Bottleneck embedding. In the end, we discuss about our attempt to use the noisy-label dataset to perform class-conditional diffusion.

