/**************  格式化时间  hh:mm:ss  ***************/
export function formatTime(sec) {
  let minute = Math.floor(sec / 60);
  let hour = Math.floor(minute / 60) < 10 ? '0'+ Math.floor(minute / 60) : Math.floor(minute / 60);
  minute = minute % 60 < 10 ? '0'+ (minute % 60) : minute % 60;
  let second = sec % 60 < 10 ? '0'+ Math.floor((sec % 60)) : Math.floor(sec % 60);
  if(hour !== '00'){
    return hour +':'+ minute +':'+ second;
  }
  else{
    return minute +':'+ second;
  }
}