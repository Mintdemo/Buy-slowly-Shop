$(function() {
  var $wp = $('.wp');
  $.ajax({
    type: 'get',
    url: 'http://127.0.0.1:9090/api/getcategorytitle',
    dataType: 'json',
    success: function(data) {
      console.log(data);
      $wp.prepend(template('tpl1', data));
    }
  });

  // 功能二 点击发送ajax请求
  $(document).on('click', '.title_wp .cate', function(e) {
    e.preventDefault();
    // 点击切换 title 的类 + 伪类 -45deg
    $(this)
      .toggleClass('title1')
      .toggleClass('title');
    if ($(this).hasClass('title1')) {
      var id = $(this).data('id');
      var that = this;
      $.ajax({
        type: 'get',
        url: 'http://127.0.0.1:9090/api/getcategory',
        data: {
          titleid: id
        },
        dataType: 'json',
        success: function(data) {
          console.log(data);
          var htmlStr = template('tpl2', data);
          console.log(htmlStr);
          console.log($(that).next());

          $(that)
            .next()
            .append(htmlStr);
        }
      });
    }
    if ($(this).hasClass('title')) {
      $(this)
        .next()
        .html('');
    }
  });
});
