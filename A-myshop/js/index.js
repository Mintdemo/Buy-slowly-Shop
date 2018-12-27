$(function() {
  var ul = $('.nav ul');
  $.ajax({
    type: 'get',
    url: 'http://127.0.0.1:9090/api/getindexmenu',
    dataType: 'json',
    success: function(data) {
      ul.html(template('tpl1', data));
      // 遍历li 给后四个添加属性hidden
      var $li = ul.find('li');
      for (var i = 0; i <= 12; i++) {
        if (i >= 8) {
          $li.eq(i).addClass('hidden');
        }
      }
      //注册点击事件
      var $a = $('[href="#"]');
      $a.on('click', function(e) {
        e.preventDefault();
        for (var i = 0; i <= 12; i++) {
          if (i >= 8) {
            $li.eq(i).toggleClass('hidden');
          }
        }
      });
    }
  });
  $.ajax({
    type: 'get',
    url: 'http://127.0.0.1:9090/api/getmoneyctrl',
    dataType: 'json',
    success: function(info) {
      console.log(info);
      var $item = $('.item');
      $item.html(template('tpl2', info));
    }
  });
});
