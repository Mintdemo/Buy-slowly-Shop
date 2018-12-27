$(function() {
  $.ajax({
    type: 'get',
    url: 'http://127.0.0.1:9090/api/getbrandtitle',
    dataType: 'json',
    success: function(res) {
      console.log(res);
      $('.nav ul').html(template('tpl1', res));
    }
  });
});
