/**
 * Created by sunwei on 2016/4/20.
 */

//登陆框各种效果
//弹出

$("#login").on("click", function () {
   $(".mask").show();
});

//关闭
$(".close").on("click", function () {
    $(".mask").hide();
});
$(".login-btn").on("click", function () {
    $(".mask").hide();
});
//输入框
$("#uid").on("focus", function () {
    $(this).siblings().hide();
});
$("#uid").on("blur", function () {
    if($(this).val() === ""){
        $(this).siblings().show();
    }
});
$("#pwd").on("focus", function () {
    $(this).siblings().hide();
});
$("#pwd").on("blur", function () {
    if($(this).val() === ""){
        $(this).siblings().show();
    }
});
//按钮
$(".login-btn").on("mouseenter", function () {
    $(".login-btn").css("background-position-y","-71px");
});
$(".login-btn").on("mouseleave", function () {
    $(".login-btn").css("background-position-y","0px");
});
$(".login-btn").on("mousedown", function () {
    $(".login-btn").css("background-position-y","-142px");
});
$(".login-btn").on("mouseup", function () {
    $(".login-btn").css("background-position-y","0px");
});


//忘记密码
$("#forget").on("click", function () {
    alert("忘记密码···额，我也不知道该怎么办，再注册个吧O(∩_∩)O");
});

//返回顶部效果开始
//让backtop显示和隐藏
window.onscroll= function () {
    if(scroll().top>400){
        $(".backtop").slideDown(500);
    }else{
        $(".backtop").slideUp(500);
    }
}
//鼠标放盒子上的效果
$(".backtop").on("mouseenter", function () {
    $(".backtop").css("background-color","#fff");
});
$(".backtop").on("mouseleave", function () {
    $(".backtop").css("background-color","#e0e5e2");
});

//点击返回顶部
$(".backtop-bottom").on("click", function () {
    var target = 0;
    var leader = scroll().top;
    var timer = null;
    clearInterval(timer);
    timer = setInterval(function () {
        var step = (target-leader)/10;
        step = step>0?Math.ceil(step):Math.floor(step);
        leader = leader+step;
        window.scrollTo(0,leader);
        if(target==leader){
            clearInterval(timer)
        }
    },25)
});

//返回顶部效果结束


//顶部NAV

//topNan搜索框效果
$(".nav-right-left > input").on("focus", function () {
    $(this).css("background-color","white");
    $(this).siblings().hide();
});
$(".nav-right-left > input").on("blur", function () {
    $(this).css("background-color","#5C5F68");
    $(this).siblings().show();
});
$(".nav").on("mouseenter", function () {
    $(this).css("opacity",1);
})
$(".nav").on("mouseleave", function () {
    $(this).css("opacity",0.8);
})

//导航栏的子菜单效果

$(".flyBox").siblings().on("mouseenter", function () {
    $(".flyBox").stop().fadeTo(400,1);
});
$(".nav-list > li:eq(1)").on("mouseleave", function () {
    $(".flyBox").stop().fadeTo(400,0);
});





//footer二维码部分鼠标移入效果
$(".footer-link3").on("mouseenter", function () {
    $(this).children(".erweima-W").show();
});
$(".footer-link4").on("mouseenter", function () {
    $(this).children(".erweima-W").show();
});
$(".footer-link3").on("mouseleave", function () {
    $(this).children(".erweima-W").hide();
});
$(".footer-link4").on("mouseleave", function () {
    $(this).children(".erweima-W").hide();
});





//获取被卷去的数值
function scroll() {
    if (window.pageYOffset != null) {
        return {
            "top": window.pageYOffset,
            "left": window.pageXOffset
        };
    } else if (document.compatMode == "CSS1Compat") {
        //说明是标准模式 有DTD
        return {
            "top": document.documentElement.scrollTop,
            "left": document.documentElement.scrollLeft
        };
    } else {
        return {
            "top": document.body.scrollTop,
            "left": document.body.scrollLeft
        };
    }
}


