;(function(){
var brandtitleid = $.getUrlParam("brandtitleid");
//分类请求
    $.ajax({
        type:"get",
        url:"http://127.0.0.1:9090/api/getbrand",
        dataType:"JSON",
        data:{
            brandtitleid:brandtitleid
        },
        success:function(data){
            console.log(data);
            $(".type").html(template("tpl1",data));
        }
    });
})();
;(function(){
    var brandtitleid = $.getUrlParam("brandtitleid");
//销量请求
    $.ajax({
        type:"get",
        url:"http://127.0.0.1:9090/api/getbrandproductlist",
        dataType:"JSON",
        data:{
            brandtitleid:brandtitleid,
              pagesize:4
},
        success:function(data){
            console.log(data);
            $(".sale").html(template("tpl2",data));
            if(data.result[0]!=undefined){
                var name ="<p>"+data.result[0].productName+"</p>";
                var img =data.result[0].productImg;
                var str = img+""+name;
                // $(".firstImg").html(str);
                //最新评论1
                $.ajax({
                    type:"get",
                    url:"http://127.0.0.1:9090/api/getproductcom",
                    dataType:"JSON",
                    data:{
                        productid:data.result[0].productId
                    },
                    success:function(data){
                        data.str = str;
                        console.log(data,1);
                        $(".comment").html(template("tpl3",data));
                    }
                });
            }

        }
    });
})();


