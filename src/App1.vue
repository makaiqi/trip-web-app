<template>
  <div id="app">
    <NavList :menuDomains="menuDomains"/>
    <div style="width:100%;height:100%;">
      <Map :mapCenter="mapCenter"></Map>
    </div>
    
  </div>
</template>

<script>
import NavList from './components/NavList.vue'
import Map from './components/Map.vue'
export default {
  name: 'app',
  components: { NavList, Map},
  data(){
    return{
      menuDomains:[],
      mapCenter:[],
    }
  }, 
  mounted(){
    this.findScenic();
  },
  methods:{
    findScenic() {
        this.$axios.get("ma/Home/homeData?scenicId="+13).then(rs => {
          console.log(rs.data.data,'rs.data.data.menuDomains')
          this.menuDomains = rs.data.data.menuDomains;
          this.mapCenter = [rs.data.data.centerLng,rs.data.data.centerLat];
          // this.adInstDomainList = rs.data.data.adInstDomainList;
          // this.avatarUrl = rs.data.data.avatarUrl;
        });
      },
  }

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: auto;
}
</style>
