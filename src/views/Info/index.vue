<template>
  <div id="info">
    <div class="group">
      <div class="head-img cell">
        <label>头像</label>
        <img :src="headImg" alt="">
      </div>
      <div class="username cell">
        <label>用户名</label>
        <div class="text">{{ username }}</div>
      </div>
      <div class="tel cell">
        <label>手机号</label>
        <div class="text">{{ tel }}</div>
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