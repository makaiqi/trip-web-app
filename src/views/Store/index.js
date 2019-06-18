export default {
  components:{
  },
  data () {
    return {
      query:{},
      list:[],
      name: '赵小姐的奶茶店',
      announcement: '欢迎光临本店',
      tel: '186-2158-4316',
      address: '南桥镇望园南路1588弄29号329室',
      time: '营业时间 8 : 30 - 23 : 40',
      rows: [
        {
          img: require('../../assets/images/1.png'),
          title: '美国奶油碧根果连罐重500g干果 坚果炒货孕妇零食包邮',
          price: 156
        },
        {
          img: require('../../assets/images/1.png'),
          title: '美国奶油碧根果连罐重500g干果 坚果炒货孕妇零食包邮',
          price: 156
        },
        {
          img: require('../../assets/images/1.png'),
          title: '美国奶油碧根果连罐重500g干果 坚果炒货孕妇零食包邮',
          price: 156
        }
      ]
    }
  },
  mounted() {
    this.query= this.$route.query;
    this.findList();
  },
  methods: {
    findList() {
      let url = "/ma/Home/queryPoint?tableName=" +  this.query.tableName + "&tableId=" + this.query.tableId +"&pointId=" +this.query.id;
      this.$axios.get(url).then(rs => {
        if (rs.data.code == 0) {
          console.log(rs.data.data)
          // if (rs.data.data.content) {
          //   rs.data.data.content = rs.data.data.content.replace(
          //     /<img/gi,
          //     '<img style="width:100%;height:auto;"'
          //   );
          //   rs.data.data.content = rs.data.data.content.replace(
          //     /<p/gi,
          //     '<p style="text-indent:2em;font-size:15px;"'
          //   );
          // }
          this.list = rs.data.data;
          this.list.itemName = rs.data.data.item.funName || rs.data.data.item.hotelName || rs.data.data.item.storeName || rs.data.data.item.restaurantName;
          this.list.tel = rs.data.data.item.tel;
          this.list.openTime = rs.data.data.item.openTime;
          this.list.tableName = rs.data.data.tableName
        }
      });
    },
    call(){
      window.location.href = 'tel://'+this.list.tel
    }
  }
}