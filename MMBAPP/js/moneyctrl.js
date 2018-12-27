// ;(function(){
//     var ul = $(".product").find("ul");
//     $.ajax({
//         url:"http://127.0.0.1:9090/api/getmoneyctrl",
//         type:"get",
//         dataType:"JSON",
//         success:function(data){
//             console.log(data);
//             ul.html(template("tpl1",data));
//         }
//
//     });
// })();
//分页实现
var page = 1;
// var index = $(this).find("a").data("index");
// var ul= $(".product-list").find("ul");
var ul1 = $(".product").find("ul");
var flag =true;
var flags = true;
var num ;
function getData(page){
    // var txtid = $.getUrlParam("categoryid");
    $.ajax({
        type: "get",
        url: "http://127.0.0.1:9090/api/getmoneyctrl",
        dataType:"JSON",
        data:{
          pageid:page-1
        },
        success: function (data) {
            console.log(data);
            ul1.html(template("tpl1", data));
            if(flag) {
                var selectPage = $("#selectPage");
                var count = data.totalCount;
                var size = data.pagesize;
                num = Math.ceil(count / size);
                // if(page>=num){
                //     page =num-1 ;
                // }
                data.num = num;
                data.page = page;
                console.log(data);
                // if(flags){
                selectPage.html(template("tpl2", data));
                // }

            }
            // for(var i =0;i<num;i++){
            //      str+="<option>" +
            //          "<span>"+(i+1)+"</span>"+"/ "+"<span>"+num+"</span>"+
            //          " </option>";
            // }
            n = num;
            // selectPage.html(str);
        }
    });
}
getData(page);
function optionSet(){
    $("#selectPage").html("");
    for(var i = 1;i<=num;i++){
        $("#selectPage").append("<option>"+
            i+" /"+num+""+
            "</option>");
    }
    $("#selectPage").find("option").eq(page-1).attr("selected",true);
    for(var i = 0;i<num;i++){
        $("#selectPage").find("option").eq(i).attr("index",i);
    }
}
$(".prev").click(function() {
    flag = false;
    page--;
    if(page<=0){
        page = num;
    }
    $("#selectPage").html("");
    optionSet();
    getData(page);
});
$(".next").click(function() {
    flag = false;
    page++;
    if(page>num){
        page = 1;
    }
    getData(page);
    optionSet();

});


$(document).on("change", "select", function(){
    var  index = $(this).find("option:selected").data("index")||($(this).find("option:selected").attr("index")*1+1);
    flag = false;
    // if(index==num){
    //       page = num;
    // }
    getData(index);
    page = index;

});