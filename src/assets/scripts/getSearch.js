/************** 获取页面url参数值   ***************/
export default function getSearch(key){
  if(location.search){
    let searchArr = location.search.split('?')[1].split('&');
    let searchObj = {};
    searchArr.forEach(function(item,i){
      let keyVal = item.split('=');
      searchObj[keyVal[0]] = keyVal[1];
    });
    return searchObj[key] || '';
  }
  return '';
}
