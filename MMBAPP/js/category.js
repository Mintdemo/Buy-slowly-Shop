;(function(){
    var ul = $(".category").find("ul").eq(0);
    $.ajax({
        url:"http://127.0.0.1:9090/api/getcategorytitle",
        type:"get",
        dataType:"JSON",
        success:function(data){
            console.log(data);
            ul.html(template("tpl1",data));
            // console.log(ul.find("a").data("titleid"));
        }
    });
})();

//点击切换箭头方向和下拉隐藏商品信息
;(function(){
// var flag =true;
    $(document).on("click", ".cate", function(){
        var a = $(this).find("a");
         if(a.data("flag")) {
             if(a.data("index")== a.data("titleid")){
                 a.data("index","你好");
                 $.ajax({
                     url: "http://127.0.0.1:9090/api/getcategory?titleid=" + a.data("titleid") + "",
                     type: "get",
                     dataType: "JSON",
                     success: function (data) {
                         console.log(data);
                         a.parents(".cate").find(".category-goods").html(template("tpl2", data));
                         // a.removeClass("down").addClass("up");
                         // flag = false;
                     }
                 });
             }
             a.removeClass("down").addClass("up");
             a.parents(".cate").find(".category-goods").show();
            a.data("flag",false);
         }
                     else{
                         a.removeClass("up").addClass("down");
                         a.parents(".cate").find(".category-goods").hide();
             a.data("flag",true);
                     }
    });
})();


