$(function() {
  var id = getSearch('productId');
  console.log(id);

  $.ajax({
    type: 'get',
    url: 'http://127.0.0.1:9090/api/getdiscountproduct',
    data: { productid: id },
    dataType: 'json',
    success: function(info) {
      console.log(info);
      console.log(template('tpl1', info));
      $('.article').html(template('tpl1', info));
      $('.comment').html(template('tpl2', info));
    }
  });
});
