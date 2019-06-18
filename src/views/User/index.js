export default {
  components:{
  },
  data () {
    return {
      rows:[],
      list: [
        {
          href: '#',
          img: require('../../assets/images/1.png'),
          name: '梅花洲重阳节活动预热'
        },
        {
          href: '#',
          img: require('../../assets/images/1.png'),
          name: '梅花洲重阳节活动预热'
        },
        {
          href: '#',
          img: require('../../assets/images/1.png'),
          name: '梅花洲重阳节活动预热'
        }
      ]
    }
  },
  created () {
  },
  mounted() {
    this.findList(this.$route.query.id)
  },
  methods: {
    findList(Id) {
      let url = "/ma/Home/scenicCenter?scenicId=" + Id ;
      this.$axios.get(url).then(rs => {
        if (rs.data.code == 0) {
          this.rows = rs.data.data;
          console.log(this.rows)
        }
      });
    },
    //   /user',query: {id: scenicId}
    detail(id){
      console.log(id)
      this.$router.push({
        path: "/detail",
        query: {
          id:id,
        }
      })
  }  
  },

  
}