;(function(){
    var shopid =0;
    var areaid =0;
    function tpl1(){
        $.ajax({
            type:"get",
            url:"http://127.0.0.1:9090/api/getgsshop",
            dataType:"JSON",
            success:function(data){
                // console.log(data);
                $(".shop ul").html(template("tpl1",data));
                // shopid =data.result[$(this).index()].shopId;
                // console.log(shopid,44444);
            }
        });
    }
   tpl1();

// })();




// ;(function(){

    function tpl2(){
        $.ajax({
            type:"get",
            url:"http://127.0.0.1:9090/api/getgsshoparea",
            dataType:"JSON",
            success:function(data){
                // console.log(data);
                $(".area ul").html(template("tpl2",data));
                // tpl3();
            }
        });
    }
    tpl2();
// })();



// ;(function(){
function tpl3(shopid,areaid){
    // if(!shopid&&!areaid){
    //     shopid=0;
    //     areaid =0;
    // }
    $.ajax({
        type:"get",
        url:"http://127.0.0.1:9090/api/getgsproduct",
        dataType:"JSON",
        data:{
            shopid:shopid,
            areaid:areaid
        },
        success:function(data){
            // console.log(data);
            $(".product ul").html(template("tpl3",data));
        }
    });
}
tpl3(shopid,areaid);



//
    var flag1 = true;
    var name1 = "京东";
   $(".list li").eq(0).click(function(){

           if(flag1) {
               $(".shop").show();
               flag1 =false;
           }
else{
               flag1 =true;
               $(".shop").hide();
           }
   });
    $(".shop").on("click", "li", function () {
        var thisLi = $(this);
        $.ajax({
            type: "get",
            url: "http://127.0.0.1:9090/api/getgsshop",
            dataType: "JSON",
            success: function (data) {
                console.log(data.result[thisLi.index()]);
                shopid = data.result[thisLi.index()].shopId;
                console.log(shopid, 44444);
                // that.html(thisLi.html());
                name1 = thisLi.html();
                $(".list li").eq(0).html(name1);
                flag1 = true;
                $(".shop").hide();
                tpl3(shopid, areaid);
                thisLi.addClass("active").siblings().removeClass("active");
            }
        });
    });


    var flag2 = true;
    var name2 = "华北";
    $(".list li").eq(1).click(function(){
        if (flag2) {
            $(".area").show();

            flag2 = false;
        }
        else{
            flag2 =true;
            $(".area").hide();
        }
    });

    $(".area").on("click", "li", function () {
        var thisLi = $(this);
        $.ajax({
            type: "get",
            url: "http://127.0.0.1:9090/api/getgsshoparea",
            dataType: "JSON",
            success: function (data) {
                areaid = data.result[thisLi.index()].areaId;
                name2 = thisLi.html().substring(0, 2);
                $(".list li").eq(1).html(name2);
                // that.html(thisLi.html().substring(0, 2));
                $(".area").hide();
                flag2 = true;
                tpl3(shopid, areaid);
                thisLi.addClass("active").siblings().removeClass("active");
            }
        });
    });

    var flag3 = true;
    $(".list li").eq(2).click(function(){
        if (flag3){
            $(".price").show();
            $(".price").find("li").addClass("active");
            flag3 = false;
        }
        else{
            $(".price").hide();
            flag3 = true;
        }
    });




})();
















