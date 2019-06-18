<template>
  <div id="home">
    <div class="search">
        <input type="text" v-model="search" maxlength="10" placeholder="请输入您要搜索的关键词" @keyup.enter="search">
    </div>
    <nav-list :list="menuDomains" @menuChange="menuChange"></nav-list>

    <!--景区地图-->
    <Map  id="map" :scenicId="scenicId" :mapCenter="mapCenter" :menuId="menuId" v-show="isMap" @sendList="getList" :searchItem="search"></Map>
    <!--景区列表-->
    <div v-show="!isMap">
      <div id="scenic" class="scroll-view" v-if="menuId==0">
      <ul>
        <li v-for="(item,i) of list" :key="i"><img :src="item.bannerUrl" alt="" @click="listHref(item)"></li>
      </ul>
    </div>
    <!--美食-->
    <div id="foods" class="scroll-view"  v-else-if="menuId!=0">
      <ul>
        <li v-for="(item,i) of list" :key="i"  @click="listHref(item)">
          <a>
            <img :src="item.assetUrl" alt="">
            <div class="text">
              <h2>{{ item.name }}</h2>
              <!-- <div class="amount">
                <div class="stars">{{ item.star }}</div>
                <div class="sales">月销{{ item.sales }}</div>
              </div>
              <div class="bottom">
                <div class="promotion"></div>
                <div class="tags">
                  <span v-for="(tag,j) of item.tags" :key="j">{{ tag }}</span>
                </div>
              </div> -->
            </div>
          </a>
        </li>
      </ul>
    </div>
    </div>
    <router-link class="user" :to="{path:'/user',query: {id: scenicId}}">
      <img v-if="avatarUrl" :src="avatarUrl" alt="">
      <img v-else src="../../assets/images/tubiao.png" alt="">
    </router-link>
    <div class="list-icon" v-if="isMap || isScenic" @click="toScenic"></div>
  </div>
</template>

<script>
    import index from './index.js';
    export default index;
</script>

<style lang="less" scoped>
  @import "index.less";
  .search{
    .rel(); .p(30); .pb();
    input{
      .bk(); .wh(100%,71); .bxs(); .pl(74); .brs(36); .fs(28); .c(#333); .bg('xiaosousuo',33,center); .bgc(#F1F1F1); .bgs(40);
    }
  }
</style>