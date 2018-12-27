$(function() {
  $.ajax({
    type: 'get',
    url: 'http://127.0.0.1:9090/api/getcoupon',
    dataType: 'json',
    success: function(info) {
      console.log(info);
      $('.nav ul').html(template('tpl1', info));
    }
  });
});
