$(function() {
  // 返回顶部
  $('.gotop').click(function(e) {
    e.preventDefault();
    $('html, body').animate(
      {
        scrollTop: 0
      },
      1000
    );
  });
});
function getSearch(k) {
  // 拿到的是地址栏编码过的字符串
  var str = location.search;
  // 解码成中文
  str = decodeURI(str); // "?key=匡威&age=18&desc=很好"
  // 去掉问号
  // str.slice(start, end);
  // 包括 start, 不包括 end, 如果 end 不写, 表示从 start 截取到最后
  str = str.slice(1); // "key=匡威&age=18&desc=很好"
  // split 将字符串分割成数组
  var arr = str.split('&'); // ["key=匡威", "age=18", "desc=很好"]
  var obj = {};
  // 遍历数组, 获取键和值
  arr.forEach(function(v, i) {
    // v 每一项 "age=18"
    var key = v.split('=')[0]; // age
    var value = v.split('=')[1]; // 18
    obj[key] = value;
  });
  return obj[k];
}
