$(function() {
  var id = getSearch('id');

  // 面包屑渲染
  bread(id);
  // 面包屑
  function bread(id) {
    $.ajax({
      type: 'get',
      url: 'http://127.0.0.1:9090/api/getcategorybyid',
      data: {
        categoryid: id
      },
      dataType: 'json',
      success: function(info) {
        $('.bar').html(template('tpl1', info));
      }
    });
  }
  render(1);
  updata(1);
  // updata(1);
  // 产品 + 底部seleted 渲染
  function render(page) {
    $.ajax({
      type: 'get',
      url: 'http://127.0.0.1:9090/api/getproductlist',
      data: {
        categoryid: id,
        pageid: page
      },
      dataType: 'json',
      success: function(data) {
        console.log(data);
        // 渲染底部selected
        $('.pro').html(template('tpl2', data));
      }
    });
  }
  // 渲染修改后的seleted
  function updata(page) {
    $.ajax({
      type: 'get',
      url: 'http://127.0.0.1:9090/api/getproductlist',
      data: {
        categoryid: id,
        pageid: page
      },
      dataType: 'json',
      success: function(data) {
        console.log(data);
        // 渲染底部selected
        $('.pro').html(template('tpl2', data));
        var allpage = Math.ceil(data.totalCount / data.pagesize);
        data.allpage = allpage;
        $('.page').html(template('tpl3', data));
        $(document).on('click', '.prev', function(e) {
          e.preventDefault();
          var num = $('select option:selected')
            .text()
            .slice(0, 1);
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
          var num = $('select option:selected')
            .text()
            .slice(0, 1);
          console.log(num);

          if (num >= allpage) {
            return;
          }
          num++;
          render(num);
          $('select option:selected').text(num + '/' + allpage);
        });
        // 切换页
        $(document).on('change', 'select', function() {
          var num = $('select option:selected')
            .text()
            .slice(0, 1);
          render(num);
          $('select option:selected').text(num + '/' + allpage);
        });
      }
    });
  }
});
