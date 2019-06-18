<template>
  <div id="user">
    <div class="top">
      <div class="box">
        <img class="icon" src="../../assets/images/cesuo.png" alt="">
        <h2>洗手间</h2>
      </div>
    </div>
    <div class="group">
      <div class="address cell is-link">
        <label>{{ address }}</label>
      </div>
      <div class="tips">为了给游客提供更舒适的体验，景区在多处设有公共设施供用户使用</div>
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