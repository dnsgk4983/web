$(function(){
    $(".menu").mouseover(function(){
        $(".subNav").stop().slideDown();
        $(".subNav").css("display","flex");
    });
    $(".menu").mouseleave(function(){
        $(this).children(".subNav").stop().slideUp();
    });
});