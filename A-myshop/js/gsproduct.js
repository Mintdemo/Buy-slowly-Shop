$(function() {
  $.ajax({
    type: 'get',
    url: 'http://127.0.0.1:9090/api/getgsshop',
    dataType: 'json',
    success: function(info) {
      console.log(info);
      $('.nav ul li.par:first-of-type').html(template('tpl1', info));
    }
  });
  $.ajax({
    type: 'get',
    url: 'http://127.0.0.1:9090/api/getgsshoparea',
    dataType: 'json',
    success: function(info) {
      console.log(info);
      $('.nav ul li.par:nth-of-type(2)').html(template('tpl2', info));
    }
  });

  var sid = 0;
  var aid = 0;
  render();
  function render() {
    $.ajax({
      type: 'get',
      url: 'http://127.0.0.1:9090/api/getgsproduct',
      data: {
        shopid: sid,
        areaid: aid
      },
      dataType: 'json',
      success: function(info) {
        console.log(info);
        $('.product ul').html(template('tpl3', info));
        // 点击标题显示菜单功能
        $(document).on('click', '.bt', function(e) {
          e.preventDefault();
          $('.source').hide();
          $(this)
            .next()
            .show();
        });
        // 给 第一个ul底下的li注册点击事件 点击的时候获取到id 重新渲染
        $('ul.test1').on('click', 'li', function() {
          $('ul.test1')
            .find('li')
            .removeClass('current');
          $(this).addClass('current');
          sid = $(this).data('id');
          $('ul.test1').hide();
          var tit = $(this).text();
          $(this)
            .parent()
            .prev()
            .text(tit);
          render(sid, aid);
        });
        $('ul.test2').on('click', 'li', function() {
          $('ul.test2')
            .find('li')
            .removeClass('current');
          $(this).addClass('current');
          aid = $(this).data('id');
          $('ul.test2').hide();
          var tit = $(this)
            .text()
            .slice(0, 2);
          $(this)
            .parent()
            .prev()
            .text(tit);
          render(sid, aid);
        });
      }
    });
  }
});
