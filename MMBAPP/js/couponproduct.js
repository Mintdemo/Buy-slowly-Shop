(function(){
    var couponid = $.getUrlParam("couponid");
    var productid = $.getUrlParam("productid");
    $.ajax({
        type:"get",
        url:"http://127.0.0.1:9090/api/getcouponproduct",
        dataType:"JSON",
        data:{
            couponid:  couponid
        },
        success:function(data){
            console.log(data);
            $("ul").html(template("tpl1",data));



            //设置遮罩层
            $(".coupon-list").find("li").click(function(){
                var div = $("<div class='modal'></div>");
                var height =$(window).height();
                // var height =$(window).height();
                console.log(height);
                $("body").css({
                    position:"relative",
                   height:height,
                    overflow:"hidden"
                });
                div.css({
                    backgroundColor:"rgba(0,0,0,0.6)",
                    position:"absolute",
                    top:$(document).scrollTop(),
                    left:0,
                    width:"100%",
                    height:height
                });
               function append(index){
                   var str =  data.result[index].couponProductImg;
                   div.append(str);
               }


               //添加轮播图的左右箭头
                var right = $("<span class='right'>&gt</span>");
                var left = $("<span class='left'>&lt</span>");
                right.css({
                    fontSize:"2rem",
                    color:"white",
                    position:"absolute",
                    top:"50%",
                    right:"1em",
                    transform:"translateY(-50%)",
                    zIndex:3
                });
                left.css({
                    fontSize:"2rem",
                    color:"white",
                    position:"absolute",
                    top:"50%",
                    left:"1em",
                    transform:"translateY(-50%)",
                    zIndex:3
                });
                div.append(left);
                div.append(right);

                //点击左右箭头，实现轮播图
                var index = $(this).index();
                $(document).on("click",".right",function(){
                    $(".modal img").remove();
                      index++;
                      if(index==data.result.length){
                          alert("已经是最后一张了");
                          // return false;
                          index=data.result.length-1;
                      }
                  append(index);
                });
                $(document).on("click",".left",function(){
                    $(".modal img").remove();
                    index--;
                    if(index==-1){
                        alert("已经是第一张了");
                        // return false;
                        index=0;
                    }
                append(index);
                });

                append(index);
                $("body").append(div);
                return false;
            });
        }
    });
})();