/**
 * Created by sunwei on 2016/4/23.
 */
//底部切割轮播图特效

//翻转轮播特效
var current = 0;
$('.prev').on('click', function () {
    current++;
    $('.view li').each(function (key) {
        $(this).css({
            'transform': 'rotateX(' + current * 90 + 'deg)',
            'transition-delay': key * 0.25 + 's'
        });
    });
});
$('.next').on('click', function () {
    current--;
    $('.view li').each(function (key) {
        $(this).css({
            'transform': 'rotateX(' + current * 90 + 'deg)',
            'transition-delay': key * 0.25 + 's'
        });
    });
});


//箭头特效

$(".view").on("mouseenter", function () {
    $(".arrBox").stop().fadeTo(400,1);
});
$(".view").on("mouseleave", function () {
    $(".arrBox").stop().fadeTo(400,0);
});
