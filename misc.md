---
title: Misc
description: >
---

<style>
a::after, a.external::after {
  display: none !important;
}

/* --- Misc: emoji column + hairline rows --- */
.misc-list {
  list-style: none;
  margin-left: 0;
  padding-left: 0;
}
.misc-list li {
  position: relative;
  margin: 0;
  padding: 10px 0 10px 38px;
  border-bottom: 1px solid #eeeeee;
  line-height: 1.6;
}
.misc-list li:last-child {
  border-bottom: none;
}
.misc-icon {
  position: absolute;
  left: 0;
  top: 10px;
}

/* Dark mode */
body.dark-mode .misc-list li {
  border-bottom-color: #333;
}
@media screen and (prefers-color-scheme: dark) {
  body:not(.light-mode) .misc-list li {
    border-bottom-color: #333;
  }
}
</style>

<ul class="misc-list">
  <li markdown="span"><span class="misc-icon">📍</span>I am from [Nanjing](https://en.wikipedia.org/wiki/Nanjing), a historic, vibrant, and scenic city. I've also lived in Shanghai, New York, Boston, Seattle, and Baltimore.</li>
  <li markdown="span"><span class="misc-icon">🦅</span>My personality type is [INFJ](https://www.16personalities.com/infj-personality) according to the Myers-Briggs, and I'm a [Ravenclaw](https://www.wizardingworld.com/collections/ravenclaw).</li>
  <li markdown="span"><span class="misc-icon">✍️</span>I occasionally share research and fun content on Zhihu & Xiaohongshu, where I've gathered 30K followers and 20M views.</li>
  <li markdown="span"><span class="misc-icon">🎬</span>I've watched over 1,000 movies! Click to sample one of my <a href="#" onclick="event.preventDefault(); const movies = ['https://en.wikipedia.org/wiki/Witness_for_the_Prosecution_(1957_film)', 'https://en.wikipedia.org/wiki/The_Last_Emperor', 'https://en.wikipedia.org/wiki/Memento_(film)', 'https://en.wikipedia.org/wiki/Mulholland_Drive_(film)','https://en.wikipedia.org/wiki/Lord_of_War', 'https://en.wikipedia.org/wiki/City_of_God_(2002_film)', 'https://en.wikipedia.org/wiki/The_Dark_Knight', 'https://en.wikipedia.org/wiki/Inception', 'https://en.wikipedia.org/wiki/Let_the_Bullets_Fly', 'https://en.wikipedia.org/wiki/The_Invisible_Guest', 'https://en.wikipedia.org/wiki/Coco_(2017_film)', 'https://en.wikipedia.org/wiki/Dying_to_Survive', 'https://en.wikipedia.org/wiki/The_Wandering_Earth']; window.open(movies[Math.floor(Math.random() * movies.length)], '_blank');">favorite movies</a>.</li>
  <li markdown="span"><span class="misc-icon">🎹</span>I'm a level 10 pianist and enjoy playing pieces like [Moonlight Sonata](https://www.youtube.com/watch?v=4591dCHe_sE), [Flower Dance](https://www.youtube.com/watch?v=rA_2B7Yj4QE), and [Croatian Rhapsody](https://www.youtube.com/watch?v=ga2y-nkGbRY).</li>
  <li markdown="span"><span class="misc-icon">🚀</span>Check out some fun websites I created: [Hogwarts](https://www.hogwartsishere.com/courses/by-level/), [United Earth Government](https://uegov.world/), and [Chuanyang University](https://www.linkedin.com/company/chuan-yang-university).</li>
  <li markdown="span"><span class="misc-icon">🏸</span>I enjoy all kinds of sports, especially badminton, swimming, and rock climbing these days.</li>
  <li markdown="span"><span class="misc-icon">🎲</span>Recently, I've gotten into playing Werewolf and board games with friends.</li>
  <li markdown="span"><span class="misc-icon">⚫</span>I'm a 3-dan Go player adapting to the AI era. I'm also (slowly) picking up photography. And I love cats!</li>
</ul>

<!-- These days, I enjoy working on research problems that could have an impact a decade from now, contributing positively towards friendly, capable machine intelligence.  -->
<!-- These days, I think a lot about how to navigate my research to have a counterfactual impact, contributing positively towards friendly, capable machine intelligence.  -->

<!-- I occasionally share [research](http://xhslink.com/a/Wukk5CMK8jI9), popularize [memes](https://www.zhihu.com/question/430297692/answer/1715042961?utm_psn=1892904443743273437), and post [random things](https://www.zhihu.com/question/349726516/answer/2753741967?utm_psn=1892904282782663711) on Zhihu and Xiaohongshu, where I've gathered 30k followers and 18 million views. -->
<!-- I am an avid reader of scientific fiction and history, as well as a dedicated writer read by more than 18,000,000 times on online platforms such as Zhihu, Xiaohongshu, and WeChat OA. -->

<!-- 
1. 控方证人 Witness for the Prosecution (1957)  – 9.6 (No.19), 8.4 (No.64)
2. 末代皇帝 The Last Emperor (1987)             – 9.3 (No.25), 7.7
3. 记忆碎片 Memento (2000)                      – 8.7 (No.188), 8.4 (No.57)
4. 穆赫兰道 Mulholland Dr. (2001)               - 8.4, 7.9
5. 战争之王 Lord of War (2005)                  - 8.7 (No.243), 7.6
6. 上帝之城 City of God (2002)                  – 9.0 (No.184), 8.6 (No.25)
7. 蝙蝠侠：黑暗骑士 The Dark Knight (2008)        – 9.2 (No.31), 9.0 (No.3)
8. 盗梦空间 Inception (2010)                    - 9.4 (No.9), 8.8 (No.14)
9. 让子弹飞 Let the Bullets Fly (2010)          – 9.0 (No.35), 7.3
10. 看不见的客人 The Invisible Guest (2016)      – 8.8 (No.75), 8.0
11. 寻梦环游记 Coco (2017)                      – 9.1 (No.20), 8.4 (No.72)
12. 我不是药神 Dying to Survive (2018)          - 9.0 (No.33), 7.8
13. 流浪地球 The Wandering Earth (2019)         – 7.9, 5.9

n. 教父 The Godfather (1972)                   - 9.3 (No.24), 9.2 (No.2)
n. 泰坦尼克号 Titanic (1997)                    - 9.5 (No.3), 8.0
n. 恐怖游轮 Triangle (2009)                     - 8.5 (No.193), 6.9
n. 爱乐之城 La La Land (2016)                   - 8.4 (No.207), 8.0
n. 信条 Tenet (2020)                           - 7.6, 7.3
-->