<template>
  <div id="store">
    <div class="top">
      <div class="box">
        <div class="image" :class="{ paused: audio.isPaused }" @click="play">
          <img :src="list.assetUrl" alt="">
          <audio 
                  id="Audio"
                  ref="audio"
                 :src="list.voiceUrl" 
                 controls="controls"  
                 >
          </audio>
        </div>
        <div class="right">
          <h2>{{ list.title }}</h2>
          <div class="progress">
            <div class="start">{{ audio.curTime }}</div>
            <div class="bar" @click="bouncePlay">
              <div class="cur" :style="{ width: audio.barWidth }"></div>
            </div>
            <div class="end">{{ audio.totalTime }}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="group">
      <div class="address cell is-link">
        <label>{{ list.address }}</label>
      </div>
    </div>
    <div class="scroll-view">
      <h3>景点介绍</h3>
      <div class="content">
        <div class="text" :class="{ cur: isSpread }" v-html="list.content"></div>
        <div class="spread" v-if="!isSpread" @click="spread"></div>
      </div>
    </div>
  </div>
</template>

<script>
    import index from './index.js';
    export default index;
</script>

<style lang="less" scoped>
  @import "index.less";
</style>