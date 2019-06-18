import Tab from '../../components/Tab'

export default {
  components: {
    Tab
  },
  data() {
    return {
      id: -1,
      swiperOption: {
        loop: true,
        autoplay: true,
        speed: 600,
        pagination: {
          el: '.swiper-pagination'
        }
      },
      images: [
        require('../../assets/images/1.png'),
        require('../../assets/images/1.png'),
      ],
      productName: '【进口白咖啡】经典口味，口感醇厚 金爸爸经典十条',
      amount: 488,
      price: 126,
      originalPrice: 200,
      people: 8391,
      cartSum: 10
    };
  },
  computed: {
  },
  methods: {
  }
};