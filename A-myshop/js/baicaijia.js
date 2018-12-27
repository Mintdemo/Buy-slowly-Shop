$(function() {
  // 初始化iscroll

  $.ajax({
    type: 'get',
    url: 'http://127.0.0.1:9090/api/getbaicaijiatitle',
    dataType: 'json',
    success: function(info) {
      console.log(info);
      $('.nav ul').html(template('tpl1', info));
      // 获取ul 给ul动态的设置宽度
      var $lis = $('.nav ul li');
      var width = 0;
      for (var i = 0; i < $lis.length; i++) {
        width += $lis.eq(i).outerWidth();
      }
      $('.nav ul').width(width + 20);
      // 给a设置点击事件
      $(document).on('click', '.nav li', function(e) {
        e.preventDefault();
        // 添加类
        $(this)
          .addClass('current')
          .siblings()
          .removeClass('current');
        // 2.修改 值 调用render 重新渲染产品页面
        var id = $(this).data('id');
        render(id);
      });
      new IScroll('#wrapper', {
        scrollY: false,
        scrollX: true
      });
    }
  });
  // 产品渲染
  render();
  function render(page = 0) {
    $.ajax({
      type: 'get',
      url: 'http://127.0.0.1:9090/api/getbaicaijiaproduct',
      data: {
        titleid: page
      },
      dataType: 'json',
      success: function(info) {
        console.log(info);
        $('.product ul').html(template('tpl2', info));
      }
    });
  }
});
