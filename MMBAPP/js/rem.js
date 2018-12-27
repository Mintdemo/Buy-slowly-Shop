    //
    // var oHtml = document.documentElement;
    // var screenWidth = oHtml.offsetWidth;
    // var width = 320;
    // var fontSize = 20;
    // var bili = width/fontSize;
    // getSize();
    // window.onresize = getSize;
    // function getSize(){
    //     screenWidth = oHtml.offsetWidth;
    //     if(screenWidth<320){
    //               oHtml.style.fontSize = 320/bili+"px";
    //     }
    //     else if(screenWidth>640){
    //              oHtml.style.fontSize = 640/bili +"px";
    //     }
    //     else{
    //            oHtml.style.fontSize = screenWidth/bili +"px";
    //     }
    // }


    // 千万不要多此一举加上一个入口函数,并且这个JS建议放到最前面
    // 获取html这个标签
    var oHtml = document.documentElement;
    // 获取屏幕的宽度
    var screenWidth = oHtml.offsetWidth;
    // 设计图的宽度
    var uiWidth = 320;
    // 设计图对应的fontsize字体大小
    var font = 20;
    // 得到的比例
    var bili = uiWidth/font;

    window.onresize = getSize;
    // 上来先初始化一下
    getSize();

    function getSize(){
        screenWidth = oHtml.offsetWidth;
        if(screenWidth <= 320){
            oHtml.style.fontSize = 320/bili + 'px';
        }else if(screenWidth<= 780&&screenWidth>320){
            oHtml.style.fontSize = screenWidth/bili + 'px';
        }else{
            oHtml.style.fontSize = 780/bili + 'px';
        }
    }
