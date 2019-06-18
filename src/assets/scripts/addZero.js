/**************  个位数加零  ***************/
export default function addZero(key) {
  let cookie = document.cookie;
  let arr = cookie.split('; ');
  let keyValue = '';
  for(let i = 0,len = arr.length; i < len; i++){
    keyValue = arr[i].split('=');
    if(keyValue[0] === key){
      return decodeURIComponent(keyValue[1]);
    }
  }
}
