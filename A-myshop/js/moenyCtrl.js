$(function() {
  render();
  function render(page) {
    $.ajax({
      type: 'get',
      url: 'http://127.0.0.1:9090/api/getmoneyctrl',
      data: {
        pageid: page
      },
      dataType: 'json',
      success: function(info) {
        console.log(info);
        $('.product ul').html(template('tpl1', info));
      }
    });
  }
  // 渲染复选框
  $.ajax({
    type: 'get',
    url: 'http://127.0.0.1:9090/api/getmoneyctrl',
    data: {
      pageid: 1
    },
    dataType: 'json',
    success: function(data) {
      console.log(data);
      var allpage = Math.ceil(data.totalCount / data.pagesize);
      data.allpage = allpage;
      $('.page').html(template('tpl2', data));
      $(document).on('click', '.prev', function(e) {
        e.preventDefault();
        console.log(11);

        var str = $('select option:selected')
          .text()
          .replace('/', '');

        var num;
        if (str.length >= 4) {
          var num = str.slice(0, 2);
        } else {
          var num = str.slice(0, 1);
        }
        console.log(num);

        if (num <= 1) {
          return;
        }
        num--;
        render(num);
        $('select option:selected').text(num + '/' + allpage);
      });
      // 下一页
      $(document).on('click', '.next', function(e) {
        e.preventDefault();
        var str = $('select option:selected')
          .text()
          .replace('/', '');
        console.log(str);

        var num;
        if (str.length >= 4) {
          var num = str.slice(0, 2);
        } else {
          var num = str.slice(0, 1);
        }
        console.log(num);

        if (num >= allpage) {
          return;
        }
        num++;
        render(num);
        $('select option:selected').text(num + '/' + allpage);
      });
      // 切换页面
      $(document).on('change', 'select', function() {
        var str = $('select option:selected')
          .text()
          .replace('/', '');
        console.log(str);

        var num;
        if (str.length >= 4) {
          var num = str.slice(0, 2);
        } else {
          var num = str.slice(0, 1);
        }
        render(num);
        $('select option:selected').text(num + '/' + allpage);
      });
    }
  });
});
