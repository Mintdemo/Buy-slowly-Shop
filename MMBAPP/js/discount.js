
;(function(){
    var productid = $.getUrlParam("productid");
    $.ajax({
        type:"get",
        url:"http://127.0.0.1:9090/api/getdiscountproduct",
        dataType:"JSON",
        data:{
            productid:productid
        },
        success:function(data){
            console.log(data);
            $(".container").html(template("tpl1",data));
        }
    });
})();