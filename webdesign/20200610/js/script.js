$(function(){
    setInterval(function(){
        $(".slider-wrap").delay("3000");
        $(".slider-wrap").animate({marginLeft: "-1198"},"0");
        $(".slider-wrap").delay("3000");
        $(".slider-wrap").animate({marginLeft: "-2396"},"0");
        $(".slider-wrap").delay("3000");
        $(".slider-wrap").animate({marginLeft: "0"},"0");
    });
    $(".nav").mouseover(function(){
        $(".nav-bg").stop().slideDown();
        $(".subbox").stop().slideDown();
        $(".subbox").css("display","flex");
    });
    $(".nav").mouseleave(function(){
        $(".nav-bg").slideUp();
        $(".subbox").slideUp();
    });
    $("#btn").click(function(){
        $('.popup').fadeIn();
    });
    $(".close").click(function(){
        $(".popup").fadeOut();
    });
});