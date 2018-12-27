;(function(){

    $.ajax({
        type:"get",
        url:"http://127.0.0.1:9090/api/getsitenav",
        dataType:"JSON",
        success:function(data){
            console.log(data);
            $(".link").html(template("tpl1",data));
        }
    });
})();