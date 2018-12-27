;(function(){
  var category = $.getUrlParam("category");//电视
  var categoryid = $.getUrlParam("categoryid");//0



  $(".fenlei").attr("href","productlist.html?categoryid="+categoryid+"&category="+category+"");
  $(".fenlei").html(category);



})();


;(function(){
    var categoryid = $.getUrlParam("categoryid");

    var productid = $.getUrlParam("productid");//
    $.ajax({
        url:"http://127.0.0.1:9090/api/getproduct",
        type:"get",
        dataType:"JSON",
        data:{
            productid:productid
        },
        success:function(data){
            console.log(data);
            $(".bijia-api").html(template("tpl1",data));

//添加

                $(".des > p").html(data.result[0].productName);
                var arr =  data.result[0].productName.split(" ");
                arr = arr[0];
                $(".type").html(arr);


            // $(".des > p").html(data.result[0].productName);
            $(".product-bijia .img").html(data.result[0].productImg);

        }
    });
})();


;(function(){
    var categoryid = $.getUrlParam("categoryid");

    var productid = $.getUrlParam("productid");//
    $.ajax({
        url:"http://127.0.0.1:9090/api/getproductcom",
        type:"get",
        dataType:"JSON",
        data:{
            productid:productid
        },
        success:function(data){
            console.log(data);
  $(".product-list").html(template("tpl2",data));
        }
    });
})();