import Vue from 'vue'
import App from './App.vue'
// import Vuetify from 'vuetify'
import axios from 'axios'
import router from './router'
import store from './store'

// import 'vuetify/dist/vuetify.min.css'
// Vue.use(Vuetify)

// import VueAMap from 'vue-amap';
// Vue.use(VueAMap);
// console.log(new VueAMap.AMapManager())
// VueAMap.initAMapApiLoader({
//   key: '47c019a133686563ad5e1ebb71b9f7f2',
//   plugin: ["AMap.Autocomplete","AMap.Bounds","AMap.PlaceSearch","AMap.Scale","AMap.OverView","AMap.ToolBar","AMap.MapType","AMap.PolyEditor","AMap.CircleEditor","AMap.Geocoder","AMap.convertFrom","AMap.Geolocation","Geocoder"],
//   v: '1.4.4'
// });

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)

// const baseUrl = process.env.NODE_ENV === 'development' ? 'http://test-deal.zzumall.com/api/' : 'https://admin2.zzumall.com/api/'
const baseUrl = 'http://test-deal.zzumall.com/api'

// const baseUrl = process.env.NODE_ENV === 'development' ? 'http://192.168.12.123:8081/api/' : ''
// baseURL: 'http://192.168.12.123:8081/api/', // 朱勇
let  aa = 11
axios.defaults.timeout = 30000
axios.defaults.baseURL = baseUrl
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
Vue.prototype.$axios = axios
Vue.prototype.$url = baseUrl
Vue.prototype.$member = aa
Vue.prototype.$memberChange =function(id){
  Vue.prototype.$member = id
} 
axios.defaults.withCredentials = true
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')






