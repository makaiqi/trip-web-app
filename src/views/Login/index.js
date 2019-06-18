export default {
  components:{
  },
  data () {
    return {
      
    }
  },
  watch: {
    
  },
  mounted() {
    let item = this.UrlSearch();
    let url = window.location.href;
    let that = this;
    if (item.code) {
      this.$axios.get(`/ma/Login/getOpenIdByCode?scenicId=${item.scenicId?item.scenicId:''}&code=${item.code}`).then(rs => {
        if (rs.data.code == 0) {
          that.$router.push({
            path: "/home",
            query: {
              scenicId:  rs.data.data.lastTblScenicId
            }
          })
        }
      });
    } else {
      window.location.href = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxa19a890f6dc44885&redirect_uri=${encodeURIComponent(url)}&response_type=code&scope=snsapi_userinfo&state=123#wechat_redirect`
    }
  },
  methods: {
    UrlSearch() {
      var str = window.location.href; //取得整个地址栏
      var num = str.indexOf("?")
      str = str.substr(num + 1); //取得所有参数   stringvar.substr(start [, length ]
      var arr = str.split("&"); //各个参数放到数组里
      let item = {}
      for (var i = 0; i < arr.length; i++) {
        num = arr[i].indexOf("=");
        if (num > 0) {
          item[arr[i].substring(0, num)] = arr[i].substr(num + 1);
        }
      }
      return item;
    },
  }
}