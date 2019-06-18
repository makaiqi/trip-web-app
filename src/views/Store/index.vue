<template>
  <div id="store">
    <div class="top">
      <div class="box">
        <img class="icon" :src="list.assetUrl" alt="">
        <h2>{{ list.itemName }}</h2>
        <p>公告 : {{ announcement }}</p>
      </div>
    </div>
    <div class="group">
      <div class="tel cell is-link" @click="call">
        <label>{{ list.tel }}</label>
      </div>
      <div class="address cell is-link">
        <label>{{ list.address }}</label>
      </div>
      <div class="time cell">
        <label>{{ list.openTime }}</label>
      </div>
    </div>
    <div class="scroll-view">
      <div class="list group">
        <h3>店铺热卖</h3>
        <div class="content">
          <div class="item" v-for="(item,i) of rows" :key="i">
            <img :src="item.img" alt="">
            <div class="text">
              <h4 class="title">{{ item.title }}</h4>
              <div class="bottom">
                <div class="price">￥{{ item.price }}</div>
                <a class="buy" href="#/product">立即购买</a>
              </div>
            </div>
          </div>
        </div>
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