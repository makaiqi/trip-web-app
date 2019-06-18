<template>
  <div class="search">
    <input type="text" maxlength="10" placeholder="请输入您要搜索的关键词" @keyup.enter="search">
  </div>
</template>

<script>
  export default {
    name: "search",
    methods: {
      search(){

      }
    }
  };
</script>

<style lang="less" scoped>
  @import "../assets/less/library.less";
  .search{
    .rel(); .p(30); .pb();
    input{
      .bk(); .wh(100%,71); .bxs(); .pl(74); .brs(36); .fs(28); .c(#333); .bg('xiaosousuo',33,center); .bgc(#F1F1F1); .bgs(40);
    }
  }
</style>
