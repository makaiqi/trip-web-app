<template>
  <transition enter-active-class="animated fadeIn">
    <router-view class="app"></router-view>
  </transition>
</template>

<script>
  import "./assets/scripts/adaption.js";
  import "./assets/scripts/compatibility.js"
import { encode } from 'punycode';

  export default {
    data() {
      return {
        scenicId:''
      };
    },

    beforeCreate() {
  
    
    },
    mounted() {
    
    },

    methods: {

      }
  };
</script>

<style lang="less">
  @import "./assets/less/default.less";
  @import "./assets/less/common.less";
</style>

<style>
  @import "./assets/css/animate.min.css";
</style>