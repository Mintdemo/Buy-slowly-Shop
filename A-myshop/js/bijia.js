$(function() {
  // 面包屑+产品
  var id = getSearch('productId');
  $.ajax({
    type: 'get',
    url: 'http://127.0.0.1:9090/api/getproduct',
    data: {
      productid: id
    },
    dataType: 'json',
    success: function(info) {
      // console.log(info);
      $('.bar1').html(template('tpl1', info));
      $('.prodesc').html(template('tpl2', info));
    }
  });

  // 评论渲染
  $.ajax({
    type: 'get',
    url: 'http://127.0.0.1:9090/api/getproductcom',
    data: {
      productid: id
    },
    dataType: 'json',
    success: function(info) {
      console.log(info);
      $('.comment').append(template('tpl3', info));
      var cl = info.result.length;

      $('.type').text('评论' + cl);
    }
  });
});
