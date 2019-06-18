<template>
  <div id="product">

    <div class="scroll-view">

      <swiper class="images" :options="swiperOption" ref="mySwiper">
        <!-- slides -->
        <swiper-slide v-for="(item,i) of images" :key="i">
          <img :src="item" class="slide-image" />
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>

      <div class="top">
        <h2>{{ productName }}</h2>
        <div class="amount">已售{{ amount }}件</div>
        <div class="numbers">
          <div class="left">
            <div class="price">￥ {{ price }}</div>
            <div class="original-price">价格：￥{{ originalPrice }}</div>
          </div>
          <div class="right">{{ people }}人已买</div>
        </div>
      </div>

      <div class="content">
        <tab :nav="['图文详情','商品参数','购买须知']">
          <div class="detail section" slot="item1">
            <img src="../../assets/images/1.png" alt="">
          </div>
          <div class="parameter section" slot="item2">
            <img src="../../assets/images/2.png" alt="">
          </div>
          <div class="know section" slot="item3">
            <h2>价格</h2>
            <p>正品零售价正品零售价正品零售价正品零售价正品零售价正 品零售价正品零售价正品零售价正品零售价正品零售价正品 零售价正品零售价</p>
            <h2>价格</h2>
            <p>正品零售价正品零售价正品零售价正品零售价正品零售价正 品零售价正品零售价正品零售价正品零售价正品零售价正品 零售价正品零售价</p>
          </div>
        </tab>
      </div>

    </div>

    <footer class="footer">
      <a href="javascript:;" class="into-cart">加入购物车</a>
      <a href="javascript:;" class="buy">立即购买</a>
    </footer>

    <div class="btns">
      <div class="cart-btn btn"><i>+{{ cartSum }}</i></div>
      <div class="share-btn btn"></div>
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