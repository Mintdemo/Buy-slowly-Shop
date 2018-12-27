
;(function(){
    var width = 0;
     $.ajax({
         type:"get",
         url:"http://127.0.0.1:9090/api/getbaicaijiatitle",
         dataType:"JSON",
         success:function(data){
             console.log(data);
             $(".title ul").html(template("tpl1",data));
             for(var i = 0;i<data.result.length;i++){
                    width+= $(".title li").eq(i).width()
             }
             //获取ul的宽度
             var maxMove = 60;
             var maxL = $(".title").width()-width-maxMove;
             console.log(maxL);
             $(".title").find("ul").css({
                 width:width
             });
             //设置ul的宽度

             var startX = 0 ;
             var centerX = 0;

             $(".title ul").on("touchstart",function(e){
                 console.log(e);
                 startX= e.originalEvent.changedTouches[0].clientX;

             });
             $(".title ul").on("touchmove",function(e){
                 $(this).css({
                     transition:"none"
                 });
                 var  dx= e.originalEvent.changedTouches[0].clientX - startX;
                 var tempX =centerX+dx;
                 if(tempX>=maxMove){
                     tempX = maxMove
                 }
                 else if(tempX<=maxL){
                     tempX =maxL;
                 }
                 $(this).css({
                     transform:"translateX("+tempX+"px)"
                 });
             });
             $(".title ul").on("touchend",function(e){
                 var dx = e.originalEvent.changedTouches[0].clientX - startX;
                 centerX+=dx;
                 if(centerX>=0){
                     centerX=0;
                     $(this).css({
                         transform:"translateX(0px)",
                         transition:"transform .5s"
                     });
                 }
                else if(centerX<=maxL){
                       centerX = maxL+maxMove;
                     $(this).css({
                         transform:"translateX("+centerX+"px)",
                         transition:"transform .5s"
                     });
                 }
             });
             // $(".title").find("a").eq(0).addClass("active");

             // $(".title").find("a").click(function(){
             //         $(this).addClass("active").siblings().removeClass("active");
             // });

         }
     });
})();


;(function(){
    // var titleid = $.getUrlParam("titleid");
    var titleid;
    if(!titleid){
        titleid = 0;
        fn(titleid);
    }
    $(".title").on("click","li",function() {
        titleid = $(this).data("href");
        console.log(titleid);
        $(this).find("a").addClass("active").end().siblings().find("a").removeClass("active");
        fn(titleid);
    });
    function fn(titleid){
        $.ajax({
            type: "get",
            url: "http://127.0.0.1:9090/api/getbaicaijiaproduct",
            dataType: "JSON",
            data: {
                titleid: titleid
            },
            success: function (data) {
                console.log(data);
                $(".list").find("ul").html(template("tpl2", data));
                if(titleid==0){
                    $(".title li").find("a").eq(titleid).addClass("active").end().siblings().find("a").removeClass("active");
                }
            }
        });
    }
})();




