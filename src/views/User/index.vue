<template>
  <div id="user">
    <div class="top">
      <div class="head-img">
        <img :src="rows.avatarUrl" alt="">
      </div>
      <h2>{{rows.scenicName}}欢迎您</h2>
      <div class="links">
        <a class="order"><span>我的订单</span></a>
        <router-link class="info" to="/info"><span>我的资料</span></router-link>
      </div>
      <div class="circle"></div>
    </div>
    <div class="scroll-view list">
      <h3>景区热点</h3>
      <ul>
        <li v-for="(item,i) of rows.adInstDomainList" :key="i" @click="detail(item.id)">
          <a>
            <img :src="item.assetUrl" alt="">
            <h4>{{ item.title }}</h4>
            <span class="more">了解更多></span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import index from './index.js';
  export default index;
</script>

<style lang="less" scoped>
  @import "index.less";
  .head-img img{
    border-radius: 50%;
  }
</style>