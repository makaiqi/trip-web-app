
import {adap, randomIntRange} from "../../utils";

const years = [];
// const admissionOpt = [
//   {
//     type: 'image',
//     url: require('../../assets/images/admission.png'),
//     width: adap(634),
//     height: adap(894)
//   },
//   {
//     type: 'text',
//     text: '2019年普通高校招生考试',
//     fontSize: adap(32),
//     x: adap(634 / 2),
//     y: adap(67),
//     color: '#333',
//     textAlign: 'center'
//   },
//   {
//     type: 'text',
//     text: '准  考  证',
//     fontSize: adap(48),
//     fontWeight: 'bold',
//     x: adap(634 / 2),
//     y: adap(124),
//     color: '#333',
//     textAlign: 'center'
//   },
//   {  // 照片阴影
//     type: 'image',
//     url: require('../../assets/images/picture_shadow.png'),
//     x: adap(66),
//     y: adap(190),
//     width: adap(227),
//     height: adap(284)
//   },
//   {  // 印章
//     type: 'image',
//     url: require('../../assets/images/press.png'),
//     x: adap(181),
//     y: adap(378),
//     width: adap(140),
//     height: adap(139)
//   },
//   {
//     type: 'text',
//     text: '准考证号：',
//     fontSize: adap(28),
//     x: adap(321),
//     y: adap(236),
//     color: '#636363'
//   },
//   {
//     type: 'text',
//     text: '我的高考日期距离',
//     fontSize: adap(28),
//     x: adap(321),
//     y: adap(303),
//     color: '#636363'
//   },
//   {
//     type: 'text',
//     text: '今天 0 天',
//     fontSize: adap(28),
//     x: adap(321),
//     y: adap(340),
//     color: '#636363'
//   },
//   {  // 条形码
//     type: 'image',
//     url: require('../../assets/images/bar_code.png'),
//     x: adap(321),
//     y: adap(412),
//     width: adap(222),
//     height: adap(31)
//   },
//   {
//     type: 'text',
//     text: '致2019考生：',
//     fontSize: adap(28),
//     x: adap(76),
//     y: adap(520),
//     color: '#636363'
//   },
//   {  // 二维码
//     type: 'image',
//     url: require('../../assets/images/qr_code.png'),
//     x: adap(162),
//     y: adap(681),
//     width: adap(97),
//     height: adap(97)
//   },
//   {  // 指纹
//     type: 'image',
//     url: require('../../assets/images/fingerprint.png'),
//     x: adap(388),
//     y: adap(686),
//     width: adap(89),
//     height: adap(87)
//   },
//   {
//     type: 'text',
//     text: '扫描二维码参与活动',
//     fontSize: adap(22),
//     x: adap(111),
//     y: adap(796),
//     color: 'rgba(51, 51, 51, .4)'
//   },
//   {
//     type: 'text',
//     text: '长按图片保存',
//     fontSize: adap(22),
//     x: adap(367),
//     y: adap(796),
//     color: 'rgba(51, 51, 51, .4)'
//   },
// ];
let number = '';
let wishTexts = [
  {
    width: 882,
    height: 70
  },
  {
    width: 664,
    height: 80
  },
  {
    width: 664,
    height: 80
  },
  {
    width: 950,
    height: 80
  },
  {
    width: 880,
    height: 80
  },
  {
    width: 592,
    height: 80
  },
  {
    width: 592,
    height: 80
  },
  {
    width: 664,
    height: 80
  },
  {
    width: 952,
    height: 80
  },
  {
    width: 808,
    height: 80
  }
];

wishTexts = wishTexts.map((item,i) => ({
  url: require(`../../assets/images/wish_${ i + 1 }.png`),
  width: adap(item.width) / 2,
  height: adap(item.height) / 2
}));

for(let y = 1950; y <= 2019; y++){
  years.push(y);
}

for(let i = 0; i < 6; i++){
  number += randomIntRange(0,10);
}

export { years, number, wishTexts };
