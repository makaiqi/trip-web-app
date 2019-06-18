<template>
  <div class="nav">
    <ul>
      <li v-for="item of list" :key="item.id" :class="{ cur: item.id === index }" @click="change(item)">{{ item.menuName }}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "nav-list",
    props: {
      list: Array
    },
    data(){
      return {
        index: 0
      }
    },
    mounted(){
      console.log(this.list,'list')
    },
    methods: {
      change(item){
        this.index = item.id;
        this.$emit('menuChange',item.id);
      }
    }
  };
</script>

<style lang="less" scoped>
  @import "../assets/less/library.less";
  .nav{
    ul{
      .flex(); .bb(1,#DFDFDF); .h(90);
    }
  }
  li{
    .rel(); flex: 1; .tc(); .lh(90*@r); .bxs(); .fs(32); .c(#666); .transition();
    &.cur{
      .c(#333); .fw();
      &::after{
        .ct(); .centerB(); .wh(54,8); .brs(7); background: linear-gradient(to right,#65D4FF,#348DFF);
      }
    }
  }
</style>
