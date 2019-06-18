<template>
  <div class="amap-page-container">
    <el-amap
      ref="map"
      vid="amapDemo"
      :amap-manager="amapManager"
      :center="center"
      :zoom="zoom"
      :events="events"
      class="amap-demo"
    >
      <el-amap-marker
        v-for="(marker, index) in markers"
        :key="index"
        :position="marker.position"
        :events="marker.events"
        :content="marker.content"
        :visible="marker.visible"
        :draggable="marker.draggable"
        :vid="index"
      ></el-amap-marker>
      <el-amap-info-window
        v-if="window"
        :position="window.position"
        :visible="window.visible"
        :content="window.content"
      ></el-amap-info-window>
    </el-amap>
    <img src alt>
  </div>
</template>

<script>
import Vue from 'vue'
import VueAMap from 'vue-amap';
Vue.use(VueAMap);
VueAMap.initAMapApiLoader({
  key: '47c019a133686563ad5e1ebb71b9f7f2',
  plugin: ["AMap.Autocomplete","AMap.Bounds","AMap.PlaceSearch","AMap.Scale","AMap.OverView","AMap.ToolBar","AMap.MapType","AMap.PolyEditor","AMap.CircleEditor","AMap.Geocoder","AMap.convertFrom","AMap.Geolocation","Geocoder"],
  v: '1.4.4'
});
let amapManager = new VueAMap.AMapManager();
export default {
  name: "Map",
  props: {
    mapCenter: Array,
    menuId: Number,
    searchItem: String,
    scenicId:Number
  },
  data() {
    let that = this;
    return {
      // scenicId:null,
      amapManager,
      zoom: 14,
      center: [121.490624, 31.238191],
      markers: [],
      windows: [],
      window: "",
      events: {
        init: (o) => {
          // o.getCity(result => {
            // console.log(result,'City')
            // })
        },
        // 'moveend': (e) => {console.log(e,'moveend=>e')},
        click: e => {
          console.log(e, "click=>e");
        }
      }
      // plugin: ['ToolBar'],
    };
  },
  watch: {
    mapCenter(n, o) {
      this.center = n;
      console.log(n, "n");
      console.log(this.center, "center");
    },
    menuId: {
      handler(n, o) {

        this.menuId = n;
        
        this.findList();
        this.window.visible = false;
      },
      deep: true
    },
    searchItem: {
      handler(n, o) {
        this.findList();
      },
      deep: true
    },
  },
  mounted() {
    
    // let member = JSON.parse(window.localStorage.getItem("member"));
    // this.scenicId = member.lastTblScenicId;
    this.findList();
  },
  methods: {
    findList() {
     
      let that = this; 
      let markers = [];
      let windows = [];
      let list = [];
      that.tableName = "";
      that.$axios
        .get(
          "/ma/Home/menu2point?scenicId=" +
            that.scenicId +
            "&menuId=" +
            this.menuId +
            "&search=" +
            that.searchItem
        )
        .then(rs => {
          if (rs.data.code == 0) {
            let data = rs.data.data;
            console.log(data, "dataaaaaaaaaaaa");
            
            for (let i = 0; i < data.length; i++) {
                let url = '';
                let router = '';
                switch (data[i].cssClass){
                    case 'dingwei': { url = 'http://asset.zzumall.com/FpTpy4asUV74-iscePXT-_0QXvmy'; router = "#/detail"} break;
                    case "gouwu": { url = 'http://asset.zzumall.com/FrlAC6SvlYMxXsoawkyIJft1jmbw'; router = "#/store" }  break;
                    case "tingche": { url = 'http://asset.zzumall.com/ForXVEoJjsItUh7IMahgh-OWfi8a'; router = "#/store"}  break;
                    case "weishengjian": { url = 'http://asset.zzumall.com/Fj5fN-_3I3bNKqxfA1dWvQbcubFI';router = "#/toilet" }  break;
                    case "xiuxishi": { url = 'http://asset.zzumall.com/FiMFOqhthofGZb9GsS6v9wErw40o'; router = "#/store"}  break;
                    case "yinshi": { url = 'http://asset.zzumall.com/Fjjcz2mRVuTFK9CriFZJIfZa62ny'; router = "#/store"}  break;
                    case "youlejingdian": { url = 'http://asset.zzumall.com/FlY_kweYMccUkFDFlLgn-scCI_m8';router = "#/audio" }  break;
                }
                // audio?id=154&tableName=tbl_fun&tableId=111
              markers.push({
                id: data[i].pointId,
                position: [data[i].lng, data[i].lat],
                content:`<img class="marker" src="${url}"/>`,
                events: {
                  click(e) {
                    console.log(e, "e");
                    console.log(that.markers[i], "markerClick");
                    that.center = [data[i].lng, data[i].lat];
                    that.windows.forEach(window => {
                      window.visible = false;
                    });
                    that.window = that.windows[i];
                    that.$nextTick(() => {
                      that.window.visible = true;
                    });
                  }
                },
              });
              windows.push({
                position: [data[i].lng, data[i].lat + 0.001],
                content:`<div id="window">
                            <a href="${router}?id=${data[i].pointId}&tableName=${data[i].tableName}&tableId=${data[i].tableId}">
                            <img class="window-img" src="${data[i].assetUrl}">
                            <div class="window-name">
                               <div>${data[i].itemName}</div>
                               <div style="height:10px;"></div>
                               <a href='#'>查看详情</a>
                            </div>
                            </a>
                          </div>`,
                visible: false
              });
              //列表
              list.push({
                assetUrl:data[i].assetUrl,
                bannerUrl:data[i].bannerUrl,
                name : data[i].itemName,
                id : data[i].pointId,
                tableName :data[i].tableName,
                tableId :data[i].tableId,
                cssClass:data[i].cssClass
              });
            }
            that.markers = markers;
            that.windows = windows;
            that.$emit("sendList",list);
          }
        });
    },
  }
};
</script>

<style>
/* .amap-page-container{
    height:520px;
    width: 100%; 
} */
.marker{ 
    width: 50px;
    height: 50px;
}
#window {
  background: white;
  width: 150px;
  height: 80px;
  display: flex;
  align-items: center;
  /* text-align: center; */
}
.window-img {
  width: 60px;
  height: 60px;
  border-radius: 50%;
}
.window-name {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 50px;
  width: 90px;
  padding: 0px 10px;
}
.window-name div {
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  font-size: 15px;
  height: 20px;
  width: 80px;
}
.window-name a {
  /* display: inline-block; */
  font-size: 12px;
  text-decoration: none;
}
.amap-logo{
    display: none;
}
.amap-copyright{
    display: none;
}
</style>
