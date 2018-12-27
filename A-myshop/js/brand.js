$(function() {
  var id = getSearch('brandtitleid');
  var tit = getSearch('title').split('十')[0];
  console.log(tit);
  $('h2')[0].innerText = tit + '哪个牌子好';
  $('h2')[1].innerText = tit + '产品销量排行';
  $('h2')[0].innerText = tit + '新评论';
  var htmls = {};
  $.ajax({
    type: 'get',
    url: 'http://127.0.0.1:9090/api/getbrand',
    data: {
      brandtitleid: id
    },
    dataType: 'json',
    success: function(info) {
      console.log(info);
      $('.nav ul').html(template('tpl1', info));
    }
  });
  $.ajax({
    type: 'get',
    url: 'http://127.0.0.1:9090/api/getbrandproductlist',
    data: {
      brandtitleid: id,
      pagesize: 4
    },
    dataType: 'json',
    success: function(info) {
      console.log(info);
      template('tpl2', info);
      htmls = info.result[0];
      $('.product ul').html(template('tpl2', info));
    }
  });
  $.ajax({
    type: 'get',
    url: 'http://127.0.0.1:9090/api/getproductcom',
    data: {
      productid: 1
    },
    dataType: 'json',
    success: function(info) {
      info.htmls = htmls;
      console.log(info);
      $('.comment ul').html(template('tpl3', info));
    }
  });
  $('h2').on('click', function() {
    $(this)
      .next()
      .toggleClass('current');
  });
});
