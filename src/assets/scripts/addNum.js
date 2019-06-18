/**************  数字递增  ***************/
export default function addNum(obj,json,callback) {  //num: 最大数字  diff: 数字间隔  time:每次变化所需时间 ms  callback: 回调函数
  let i = 0;
  return auto = setInterval(function () {
    if (i < json.num) {
      i = i + json.diff;
      obj.innerHTML = i + '%';
    }
    else {
      i = json.num;
      obj.innerHTML = i + '%';
      clearInterval(auto);
      typeof callback == 'function' && callback();
    }
  }, json.time);
}

