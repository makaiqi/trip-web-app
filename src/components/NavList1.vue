<template>
  <div>
    <v-tabs v-model="active"  slider-color="yellow">
      <v-tab v-for="n in menuDomains" :key="n.id" ripple>{{n.menuName}} </v-tab>
    </v-tabs>
    <!-- <div class="text-xs-center mt-3">
     
    </div> -->
  </div>
</template>

<script>
export default {
    name: 'NavList',
    props: {
     menuDomains: Array
    },
    data () {
      return {
        active: null,
      }
    },
    mounted(){
     
    },
    methods: {
      next () {
        let url = "/ma/Home/adInstInfo?instId=10";
        this.$axios.get(url).then(rs => {
          // console.log(rs,'2222');
          // console.log(this.$url);
      });
      },
     
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#container{
  width: 100%;
  height: 100%;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

