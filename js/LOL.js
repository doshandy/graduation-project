/**
 * Created by sunwei on 2016/4/22.
 */
//菜单栏的点击效果~~~~~~~~~~~~~~
$(".menu > li > a").on("click", function () {
    $(".menu > li > a").removeClass("current");
    $(this).addClass("current");
});




//无缝轮播图~~~~~~~~~~~~~~~~

function animate(obj,target){
    clearInterval(obj.timer);
    var speed = obj.offsetLeft < target? 15 : -15;
    obj.timer = setInterval(function () {
        var result = target - obj.offsetLeft;
        obj.style.left = obj.offsetLeft + speed + "px";
        if(Math.abs(result) <= 15){
            clearInterval(obj.timer);
            obj.style.left = target + "px";
        }
    },10)
}
//获取元素
var box = document.getElementById("banner");
var ul = document.getElementById("ul");
var ulLis = ul.children;

//动态创建底部缩略图
var ol = document.createElement("ol");
box.appendChild(ol);
for(var i=0; i<ulLis.length; i++){
    var li = document.createElement("li");
    li.innerHTML = "<img src='images/LOLb" + (i + 1) + ".jpg'/>";
    ol.appendChild(li);
}
ol.children[0].className = "current";

//为了无缝滚动而复制第一张图片至末尾
ul.appendChild(ulLis[0].cloneNode(true));

//开始轮播动画~~~~通过略缩图来控制轮播图片
var olLis = ol.children;
for(var j=0; j<olLis.length; j++){
    olLis[j].index = j;
    olLis[j].onmouseover = function () {
        for(var k=0; k<olLis.length; k++){
            olLis[k].className = "";
        }
        this.className = "current";
        ul.style.left = -this.index * ulLis[0].offsetWidth + "px";
        square = key = this.index;
    }
}

//添加定时器来使轮播图自行滚动
var timer = null;
var key = 0;
var square = 0;
timer = setInterval(autoplay,2000);
function autoplay () {
    key++;
    if(key > ulLis.length - 1){
        ul.style.left = 0;
        key = 1;
    }
    animate(ul,-key * ulLis[0].offsetWidth);
    square++;
    if(square > olLis.length - 1){
        square = 0;
    }
    for(var i=0; i<olLis.length; i++){
        olLis[i].className = "";
    }
    olLis[square].className = "current";
}

//最后，鼠标经过大盒子时候停止计时器
box.onmouseover = function () {
    clearInterval(timer);
}

box.onmouseout = function () {
    timer = setInterval(autoplay,2000);
}




//TAB栏切换菜单~~~~~~~~~~~~~~~
$(".index-tabs > li").on("mouseenter", function () {
    $(".index-tabs > li").removeClass("current");
    $(this).addClass("current");
    var tabi = $(this).index();
    $(".index-content > li").removeClass("current");
    $(".index-content > li").eq(tabi).addClass("current");
});

//TAB栏中子子项的各种效果


$(".part").on("mouseenter", function () {
     $(this).css("backgroundColor","#19213E");
});
$(".part").on("mouseleave", function () {
    $(this).css("backgroundColor","transparent");
});



$(".partpic > img").on("mouseenter", function () {
    $(this).css("borderColor","orange");
});
$(".partpic > img").on("mouseleave", function () {
    $(this).css("borderColor","transparent");
});


$(".partcon > h2 > a").on("mouseenter", function () {
    $(this).css("color","orange");
});
$(".partcon > h2 > a").on("mouseleave", function () {
    $(this).css("color","#c5edff");
});








