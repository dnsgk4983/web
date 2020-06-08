$(function(){
    setInterval(function(){
        $(".slider-wrap").delay("2500");
        $(".slider-wrap").animate({marginLeft: "-1200px"}, "500");
        $(".slider-wrap").delay("2500");
        $(".slider-wrap").animate({marginLeft: "-2400px"}, "500");
        $(".slider-wrap").delay("2500");
        $(".slider-wrap").animate({marginLeft: "-000px"}, "500");
    });
    $(".menu>a").mouseover(function(){
        $(".submenu-box").stop().slideDown();
        $(".navi-bg").stop().slideDown();
    });
    $(".menu").mouseleave(function(){
        $(".submenu-box").stop().slideUp();
        $(".navi-bg").stop().slideUp();
    });
    $("#btn").click(function(){
        $(".popup").fadeIn();
    });
    $(".close").click(function(){
        $(".popup").fadeOut();
    });
});