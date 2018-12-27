;(function(){

    $.ajax({
        type:"get",
        url:"http://127.0.0.1:9090/api/getbrandtitle",
        dataType:"JSON",
        success:function(data){
            console.log(data);
            $(".category-title").html(template("tpl1",data));
        }
    });
})();