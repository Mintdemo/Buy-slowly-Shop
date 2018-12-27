
;(function(){
    var productid = $.getUrlParam("productid");
    $.ajax({
        type:"get",
        url:"http://127.0.0.1:9090/api/getmoneyctrlproduct",
        dataType:"JSON",
        data:{
            productid:productid
        },
        success:function(data){
          console.log(data);
          $(".container").html(template("tpl1",data));

          //添加评论
            var context = "";
            $(".comment").on("input","textarea",function(){
                context = $(this).val();
            });
            $(".comment").on("blur","textarea",function(){
                localStorage.setItem("productid",productid);
                localStorage.setItem("context"+localStorage.getItem("i")*1,context);
                localStorage.setItem("i",(localStorage.getItem("i")*1)+1);
            });

             if(localStorage.getItem("productid")==productid){
                 for(var j = 0;j<localStorage.getItem("i");j++){
                     comment(localStorage.getItem("context"+j));
                 }
             }


            $(".comment").on("click",".tjdp",function(){
                 comment(context);
                return false;
             });

        }
    });
    function comment(context){
        // for(var j =0;j<=localStorage.getItem("i");j++){
            var str = '<li class="ui-border-b">'+
                '<div class="userimg">'+
                '<img src="http://home.manmanbuy.com/upface/face/1474348687_162.jpg">'+
                '</div>'+
                '<div class="con">'+
                '<div class="name clearfix">'+
                '<div class="username">'+
                "Yan1994"+
                '</div>'+
                '<div class="time">'+
                // ""+new Date().format("yyyy-MM-dd hh:mm:ss")+""+
                ""+(new Date()).toLocaleString()+""+
                '</div>'+
                '</div>'+
                '<div class="content">'+
                ""+ context+""+
                '</div>'+
                '</div>'+
                '</li>'
            $(".list>ul").append(str);
        }


    // }
})();