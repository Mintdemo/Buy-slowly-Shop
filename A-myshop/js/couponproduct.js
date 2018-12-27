$(function() {
  var id = getSearch('id');
  console.log(id);
  var name = getSearch('name');
  $('.shop_header h1').text(name + '优惠券');

  $.ajax({
    type: 'get',
    url: 'http://127.0.0.1:9090/api/getcouponproduct',
    data: { couponid: id },
    dataType: 'json',
    success: function(info) {
      console.log(info);
      var arr = [];
      for (var i = 0; i < info.result.length; i++) {
        arr.push(info.result[i].couponProductImg);
      }
      console.log(arr);

      $('.product ul').html(template('tpl1', info));

      $('.product ul').on('click', 'a', function(e) {
        e.preventDefault();
        var top = $(window).scrollTop();
        var imgs = $(this)
          .find('.pic')
          .data('img');
        $('.onepic').html(imgs);
        $('.modal').css({
          top: top
        });
        $('.modal').show();
        $('body').css({ overflow: 'hidden' });
        // 点击下一页
        var a = arr.indexOf(imgs);
        $('.next').on('click', function() {
          a++;
          if (a <= 0 || a >= arr.length) {
            alert('没有更多图片');
            return;
          }
          $('.onepic').html(arr[a + 1]);
        });
        // 上一页
        $('.prev').on('click', function() {
          a--;
          if (a <= 0 || a >= arr.length) {
            alert('没有更多图片');
            return;
          }
          $('.onepic').html(arr[a - 1]);
        });
      });
    }
  });
});
