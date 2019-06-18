export default {
  components:{
  },
  data () {
    return {
      address: '',
      query:{},
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
          this.address = rs.data.data.address;
        }
      });
    },
  },

  created () {
  }
}