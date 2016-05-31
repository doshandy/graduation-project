/**
 * Created by sunwei on 2016/4/22.
 */

$(".regLnav > a:eq(0)").on("click", function () {
    $(".regLnav > a").removeClass("cur");
    $(this).addClass("cur");
    $(".userN").attr({
        "placeholder":"请输入手机号",
        "type":"tel"});
    $(".codeVal").attr("placeholder","输入短信验证码");
});

$(".regLnav > a:eq(1)").on("click", function () {
    $(".regLnav > a").removeClass("cur");
    $(this).addClass("cur");
    $(".userN").attr({
        "placeholder":"请输入邮箱",
        "type":"email"});
    $(".codeVal").attr("placeholder","输入邮箱验证码");
});
















