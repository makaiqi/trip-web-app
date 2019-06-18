<template>
  <div id="detail">
    <div class="scroll-view">
      <img class="top-img" :src="rows.assetUrl" alt="">
      <h2><span>{{ rows.title }}</span></h2>
      <div class="content" v-html="rows.content"></div>
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