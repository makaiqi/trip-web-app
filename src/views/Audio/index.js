import { formatTime } from '../../utils/index';

export default {
  components:{
  },
  data () {
    return {
      audio: {
        isPaused: true,
        barWidth: '0%',
        curTime: '00:00',
        totalTime: '00:00'
      },
      list:[],
      isSpread: false
    }
  },
  watch: {
    'audio.curTime'(){
      this.audio.barWidth = `${ this.oAudio.currentTime * 100 / this.oAudio.duration }%`;
    }
  },
  mounted() {
    this.findList();

    // 音频
    this.oAudio = this.$refs.audio;
    this.oAudio.addEventListener('canplay', () => {
      this.audio.totalTime = formatTime(this.oAudio.duration);
    });
    this.oAudio.addEventListener('timeupdate', () => {
      this.audio.curTime = formatTime(this.oAudio.currentTime);
    });
    this.oAudio.addEventListener('ended', () => {
      this.audio.isPaused = true;
    });
  },
  methods: {

    findList() {
      let url = "/ma/Home/queryPoint?tableName=" +  this.$route.query.tableName + "&tableId=" + this.$route.query.tableId +"&pointId=" +this.$route.query.id;
      this.$axios.get(url).then(rs => {
        if (rs.data.code == 0) {
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
        }
      });
    },
    play(){  // 播放与暂停
      if(this.audio.isPaused){
        this.oAudio.play();
      } else {
        this.oAudio.pause();
      }
      this.audio.isPaused = !this.audio.isPaused;
    },
    bouncePlay(e){  // 跳跃播放
      this.oAudio.currentTime = this.oAudio.duration * e.offsetX / e.currentTarget.offsetWidth;
      this.audio.curTime = formatTime(this.oAudio.currentTime);
    },
    spread(){  // 展开文字
      this.isSpread = true;
    }
  }
}