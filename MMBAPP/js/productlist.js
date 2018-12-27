
//分页实现
var page = 1;
      // var index = $(this).find("a").data("index");
var ul = $(".product-list").find("ul");
var flag =true;
// var flags = true;
var num ;
    function getData(page){
        var txtid = $.getUrlParam("categoryid");
            $.ajax({
                type: "get",
                url: "http://127.0.0.1:9090/api/getproductlist",
                data: {
                    categoryid: txtid,    //产品id号
                    pageid: page      //产品的当前页数
                },
                success: function (data) {

                        var txt = $.getUrlParam("category");
                        $(".show-infor-list .type").html(txt);
                        console.log(data);
                        data.category = txt;
                        ul.html(template("tpl1", data));

                    if(flag) {
                        var selectPage = $("#selectPage");
                        var count = data.totalCount;
                        var size = data.pagesize;
                        num = Math.ceil(count / size);
                        data.num = num;
                        data.page = page;
                        console.log(data);
                            selectPage.html(template("tpl2", data));

                    }
                    n = num;
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
