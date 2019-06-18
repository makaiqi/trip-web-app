<template>
  <article class="tab">
    <nav class="tab-nav">
      <ul>
        <li v-for="(item,i) of nav" :key="i" :class="{ cur: i === curIndex }" @click="tabSwitch(i)">{{ item }}</li>
      </ul>
    </nav>
    <article class="tab-content">
      <section v-for="(item,i) of nav" :key="i" class="content-item" :class="{ cur: i === curIndex }">
        <slot :name="'item' + (i+1)"></slot>
      </section>
    </article>
  </article>
</template>

<script>
  export default {
    name: "Tab",

    props: {
      nav: {
        type: Array,
        required: true,
        validator(arr){
          return arr.length > 1;
        }
      }
    },

    data(){
      return {
        curIndex: 0
      }
    },

    methods: {
      tabSwitch(i){   // Tab切换
        this.curIndex = i;
      }
    }
  }
</script>

<style lang="less" scoped>
  @import "../assets/less/library.less";
  .tab-nav{
    .bb(1,#DFDFDF);
    ul{
      display: flex;
      li{
        .rel(); flex: 1; .c(#666666); .fs(30); .tc(); .lh(86*@r);
        &.cur{
          .c(#58B1FF);
          &::before{
            .ct(); .centerB();
            width:57*@r;
            height:4*@r;
            background:linear-gradient(90deg,rgba(101,212,255,1) 0%,rgba(52,141,255,1) 100%);
            border-radius:5*@r;
          }
        }
      }
    }
  }

  .content-item{
    .none();
    &.cur{
      .bk();
    }
  }
</style>