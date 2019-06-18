export default {
  components:{
  },
  data () {
    return {
      topImg: require('../../assets/images/1.png'),
      title: '一个人去旅游',
      content: '',
      rows:[]
    }
  }, 
  mounted() {
    this.findList(this.$route.query.id);
  },
  methods: {
    findList(id) {
      let url = "/ma/Home/adInstInfo?instId=" + id ;
      this.$axios.get(url).then(rs => {
        if (rs.data.code == 0) {
          rs.data.data.content = rs.data.data.content.replace( /<img/gi, '<img style="width:100%;height:auto;"');
          rs.data.data.content = rs.data.data.content.replace( /<p/gi, '<p style="text-indent:2em;"');
          this.rows = rs.data.data;
          console.log(this.rows,'2222');
        }
      });  
    }
  },
  
}