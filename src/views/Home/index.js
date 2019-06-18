import Search from '../../components/Search';
import NavList from '../../components/NavList';
import Map from '../../components/Map.vue'
export default {
  components: {
    Search,
    NavList,
    Map
  },
  data() {
    return {
      isMap: true,
      isScenic: false,
      isFoods: false,
      menuDomains: [],
      mapCenter: [],
      scenicId: null,
      avatarUrl: '',
      search: '',
      list: [],
      foods: [
        // {
        //   href: '',
        //   img: require('../../assets/images/1.png'),
        //   name: '小玉餐厅（太阳宫店)',
        //   star: 4.6,
        //   sales: 48,
        //   isPromotion: true,
        //   tags: [
        //     '咸蛋黄肉松套'
        //   ]
        // },

      ],
      menuId: 0
    }
  },
  watch: {
    'search'(n, o) {
      if (n) {
        this.search = n;
      }
    },
    // "scenicId"(n, o) {
    //   this.scenicId = n;
    //   if (this.scenicId ||o) {
    //     this.findScenic();
    //   }
    // }
  },
  created() {
    this.scenicId = this.$route.query.scenicId
  },
  mounted() {
    // this.scenicId = this.$route.query.scenicId

    this.findScenic();
  },
  methods: {
    toScenic() {
      this.isMap = !this.isMap;
      this.isScenic = !this.isScenic;
    },
    findScenic() {

      this.$axios.get("ma/Home/homeData?scenicId=" + this.scenicId).then(rs => {
        this.menuDomains = rs.data.data.menuDomains;
        this.mapCenter = [rs.data.data.centerLng, rs.data.data.centerLat];
        // this.adInstDomainList = rs.data.data.adInstDomainList;
        this.avatarUrl = rs.data.data.avatarUrl;
      });
    },
    // 导航切换
    menuChange(item) {
      this.menuId = item;

      switch (item) {
        case 0: {
          this.isMap = true;
          this.isScenic = false;
        }
        break;
      case 1: {
        this.isMap = false;
        this.isScenic = false;
        this.isFoods = true;
      }
      break;
      }
    },
    getList(list) {
      this.list = list;
    },
    listHref(item) {
      // "dingwei","定位"
      // "gouwu",  "购物"
      // "tingche","停车"
      // "weishengjian", "卫生间"
      // "xiuxishi",  "休息室"
      // "yinshi",  "饮食"
      // "youlejingdian","游乐景点"
      let url = '*';
      switch (item.cssClass) {
        case "dingwei": {
          url = '/detail';
        }
        break;
      case "gouwu": {
        url = '/store'
      }
      break;
      case "tingche": {
        url = '/store'
      }
      break;
      case "weishengjian": {
        url = '/toilet'
      }
      break;
      case "xiuxishi": {
        url = '/store'
      }
      break;
      case "yinshi": {
        url = '/store'
      }
      break;
      case "youlejingdian": {
        url = '/audio'
      }
      break;
      }
      this.$router.push({
        path: url,
        query: {
          id: item.id,
          tableName: item.tableName,
          tableId: item.tableId
        }
      })
    }
  }
}