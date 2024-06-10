---
title: Pandora
description: >
---
# ![Pandora Logo](/assets/img/pandora-logo.png){: .inline-logo } <span><span class="playball-regular">Pandora</span>: Towards</span> <span>General World Model</span><br><span>with Natural Language Actions</span> <span>and Video States</span>
{: .text-center }
{% include navigator.html %}

We introduce <span class="playball-regular">Pandora</span>, a step towards a General World Model (GWM) that: 
 * Simulates world states by generating videos across any domains
 * Allows any-time control with actions expressed in natural language
{: .mb-4 }

{% include embed/youtube.html id="nSKqr1Fl91g" %}

## On-the-Fly Control with Natural Language

**<span class="playball-regular">Pandora</span>** accepts free-text actions as inputs *during* video generation to steer the video on the fly.
This differs crucially from previous text-to-video models which only allow text prompts at the beginning of the video.
The **on-the-fly control** fulfills the promise of the world model to support **interactive content generation** and enhance **robust reasoning and planning**.

<div class="grid grid-cols-1 w-85 m-auto">
  {% include embed/video-multi-caption.html video=1 rounds=3 caption='The red car moves along the path||Explosion happens||The red car continues to move' %}
  {% include embed/video-multi-caption.html video=211 rounds=3 caption='Move the towel||Put the apple into the pot||Take the apple out of the pot' %}
  {% include embed/video-multi-caption.html video=2 rounds=3 caption='The woman is talking||She waves her hands||She turns her head to the man' %}
  {% include embed/video-multi-caption.html video=7 rounds=3 caption='Sunrise||The light becomes a car and comes in from the side||The car keeps moving forward' %}
  {% include embed/video-multi-caption.html video=5 rounds=3 caption='Turn left. A living room with sofa||Move forward for 2 meters||Look down' %}
  {% include embed/video-multi-caption.html video=3 rounds=3 caption='The car turns left||Add a car in the front||Change weather to hard rain sunset' %}
</div>

## Predicting Alternative Futures as You Like

World models simulate alternative futures of the world. **<span class="playball-regular">Pandora</span>** allows you to control the future. Here we show some **counterfactual** futures -- different videos generated from the same initial state but different actions.

<div class="grid grid-cols-1 w-100 m-auto">
  <div class="w-full flex flex-row mb-1 align-items-end justify-content-end flex-wrap row-gap-2 header">
    <p class="figure-caption text-center w-50-w w-33">Initial state</p>
    <p class="figure-caption text-center w-50-w w-33">Future 1</p>
    <p class="figure-caption text-center w-50-w w-33">Future 2</p>
  </div>
  {% include embed/video-multi-caption.html video=6 rounds=3 caption='Put the red apple in the drawer||Close the drawer||Pick up the green cucumber'
                                            video2=8 rounds=3 caption2='Put the red apple in the drawer||Take the apple out of drawer||Close the drawer'
                                            sync='6,8' %}
  {% include embed/video-multi-caption.html video=10 rounds=3 caption='A person comes in from the back||A car comes in from the back||Change the weather to sunset'
                                            video2=9 rounds=3 caption2='A car comes in from the back||A person comes in||The person continues moving'
                                            sync='10,9' %}
  {% include embed/video-multi-caption.html video=111 rounds=3 caption='Jump left||Move left||Move right'
                                            video2=112 rounds=3 caption2='Jump right||Move right||Jump left'
                                            sync='111,112' %}
  {% include embed/video-branch-caption.html video1='/assets/world-model/gallery/magma-erupts-from-the-crater.mp4' caption1='Magma erupts from the crater'
                                             video2='/assets/world-model/gallery/the-sky-gets-dark.mp4' caption2='The sky gets dark' %}
  {% include embed/video-branch-caption.html video1='/assets/world-model/gallery/turn-left-white-van.mp4' caption1='Turn left. There is a white van'
                                             video2='/assets/world-model/gallery/turn-right-red-car.mp4' caption2='Turn right. There is a red car' %}
  {% include embed/video-branch-caption.html video1='/assets/world-model/gallery/the-man-waves-his-hand.mp4' caption1='The man waves his hand'
                                             video2='/assets/world-model/gallery/two-men-walks-towards-the-microphone.mp4' caption2='Two men walks towards the microphone' %}
  {% include embed/video-branch-caption.html video1='/assets/world-model/gallery/use-a-spoon-to-scoop-some-broccoli.mp4' caption1='Use spoon to scoop some broccoli'
                                             video2='/assets/world-model/gallery/use-spoon-to-stir-the-rice.mp4' caption2='Use spoon to stir the rice' %}
</div>

## Simulating Worlds across Any Domains

**<span class="playball-regular">Pandora</span>** is capable of generating videos across **a wide range of general domains**, such as indoor/outdoor, natural/urban, human/robot, 2D/3D, and other scenarios.
You may find more videos in the [<span class="playball-regular">Pandora</span>'s Box](/gallery.html) gallery. 

<div class="grid grid-cols-1-w grid-cols-2 mt-4 mb-4">
  {% include embed/video-caption.html video='/assets/world-model/gallery/pour-milk-into-glass.mp4' caption='Pouring milk into the glass cup from a milk bottle'%}
  {% include embed/video-caption.html video='/assets/world-model/gallery/flame-ignite-wood.mp4' caption='Flame ignites woods emitting some smoke'%}
  {% include embed/video-caption.html video='/assets/world-model/gallery/wind-flow-leaves.mp4' caption='Wind blows the leaves'%}
  {% include embed/video-caption.html video='/assets/world-model/gallery/let-the-cars-go.mp4' caption='Let the traffic go'%}
  {% include embed/video-caption.html video='/assets/world-model/gallery/the-man-drops-the-bag.mp4' caption='The man drops the bag' %}
  {% include embed/video-caption.html video='/assets/world-model/gallery/fold-the-towel.mp4' caption='Fold the towel'%}
  {% include embed/video-caption.html video='/assets/world-model/gallery/jump-right.mp4' caption='Jump right'%}
  {% include embed/video-caption.html video='/assets/world-model/gallery/look-around.mp4' caption='Look around'%}
  {% include embed/video-caption.html video='/assets/world-model/gallery/set-fire-on-the-river.mp4' caption='Set fire on the river' %}
  {% include embed/video-caption.html video='/assets/world-model/gallery/fireworks-bloom-in-the-night-sky.mp4' caption='Fireworks bloom in the night sky' %}
</div>

## Learning Actions in One Domain and Using in Another 

Instruction tuning with high-quality data allows the model to learn effective action control and transfer to different **unseen domains**.
E.g., **<span class="playball-regular">Pandora</span>** saw the only 2D game *Coinrun* during training, but can seamlessly apply the learned actions to other 2D games.

Source Domain
{: .header .figure-caption .mb-3 .text-center .m-auto }
<div class="grid grid-cols-1 w-100-w w-50 m-auto mb-4">
  {% include embed/video-multi-caption.html video=100 rounds=3 caption='Move right||Jump||Move left' sync='100,102,103' %}
</div>
Target Domain
{: .header .figure-caption .mb-3 .text-center .m-auto }
<div class="grid grid-cols-1-w grid-cols-2 mb-4">
  {% include embed/video-multi-caption.html video=102 rounds=3 caption='Move right||Jump||Move left' sync='100,102,103' %}
  {% include embed/video-multi-caption.html video=103 rounds=3 caption='Move right||Jump||Move left' sync='100,102,103' %}
</div>
Source Domain
{: .header .figure-caption .mb-3 .text-center .m-auto }
<div class="grid grid-cols-1 w-100-w w-50 m-auto mb-4">
  {% include embed/video-multi-caption.html video=300 rounds=3 caption='Look down for 15 degrees||Turn right for 30 degrees||Look up' sync='300,301,302' %}
</div>
Target Domain
{: .header .figure-caption .mb-3 .text-center .m-auto }
<div class="grid grid-cols-1-w grid-cols-2 mb-4">
  {% include embed/video-multi-caption.html video=301 rounds=3 caption='Look down for 15 degrees||Turn right for 30 degrees||Look up' sync='300,301,302' %}
  {% include embed/video-multi-caption.html video=302 rounds=3 caption='Look down for 15 degrees||Turn right for 30 degrees||Look up' sync='300,301,302' %}
</div>

## Autoregressive Model Yields Longer Videos

Existing diffusion video models typically produce videos of a fixed length.
By integrating the video model with the  **<span class="playball-regular">Pandora</span>** autoregressive backbone, longer videos with potentially unlimited duration can be generated.
We show **8-second** videos generated by <span class="playball-regular">Pandora</span>, even though our training videos are up to 5 seconds.

<div class="grid grid-cols-1-w grid-cols-2 mt-4 mb-4">
  {% include embed/video-caption.html video='/assets/world-model/gallery/the-car-move-forward.mp4' caption='The car moves forward'%}
  {% include embed/video-caption.html video='/assets/world-model/gallery/the-man-is-flying.mp4' caption='The man is flying'%}
  {% include embed/video-caption.html video='/assets/world-model/gallery/walk-into-the-theatre.mp4' caption='Walk into the theatre'%}
  {% include embed/video-caption.html video='/assets/world-model/gallery/the-car-moves-forward.mp4' caption='The car moves forward'%}
  {% include embed/video-caption.html video='/assets/world-model/gallery/let-the-train-move.mp4' caption='Let the train move'%}
  {% include embed/video-caption.html video='/assets/world-model/gallery/the-plane-is-flying.mp4' caption='The plane is flying'%}
</div>

## Limitation

<span class="playball-regular">Pandora</span> as a prelimiary step towards GWM is still limited. It can fail in generating consistent videos, simulating complex scenarios, understanding commonsense and physical laws, and following instructions/actions.

<div class="grid grid-cols-1-w grid-cols-2 mt-4 mb-4">
  {% include embed/video-caption.html video='/assets/world-model/gallery/pick-up-the-wallet.mp4' caption='Pick up the wallet'%}
  {% include embed/video-caption.html video='/assets/world-model/gallery/take-out-the-nozzle.mp4' caption='Take out the nozzle'%}
  {% include embed/video-caption.html video='/assets/world-model/gallery/the-man-is-dancing.mp4' caption='The man is dancing'%}
  {% include embed/video-caption.html video='/assets/world-model/gallery/the-train-door-is-open.mp4' caption='The train door is open'%}
</div>

## Note

We processed the videos on this website with [FLAVR](https://tarun005.github.io/FLAVR/){: target='_blank'} for frame interpolation to make them smoother. No other post-processing used.
{: .mb-1 }

If you have concern about the copyright of any image/video on this website, please contact us.

## <span class="playball-regular">Pandora</span> Team

Jiannan Xiang, Guangyi Liu, Yi Gu (equal contribution)
{: .text-center .mb-0 }
Qiyue Gao, Yuting Ning, Yuheng Zha, Zeyu Feng, Tianhua Tao, Shibo Hao, Yemin Shi, Zhengzhong Liu
{: .text-center .mb-0 }
Eric P. Xing, Zhiting Hu
{: .text-center }

<div class="fit-content grid grid-cols-3 column-gap-3 m-auto justify-center items-center mb-4">
    <img src="/assets/img/logo-title.png" alt="Maitrix.org" class="no-popup logo w-75px"/>
    <img src="/assets/img/ucsd-logo.png" alt="UCSD" class="no-popup logo w-75px"/>
    <img src="/assets/img/mbzuai-logo.png" alt="MBZUAI" class="no-popup logo w-75px"/>
    <p class="m-auto">Maitrix.org</p>
    <p class="m-auto">UCSD</p>
    <p class="m-auto">MBZUAI</p>
</div>

```bibtex
@article{xiang2024pandora,
  title={Pandora: Towards General World Model with Natural Language Actions and Video States},
  author={Jiannan Xiang and Guangyi Liu and Yi Gu and Qiyue Gao and Yuting Ning and Yuheng Zha and Zeyu Feng and Tianhua Tao and Shibo Hao and Yemin Shi and Zhengzhong Liu and Eric P. Xing and Zhiting Hu},
  year={2024}
}
```
{: .nolineno }
