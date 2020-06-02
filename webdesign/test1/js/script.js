$(function(){
    $(".menu").mouseover(function(){
        $(".subNav").stop().slideDown();
        $(".subNav").css("display","flex");
    })
    $(".menu").mouseleave(function(){
        $(this).children(".subNav").stop().slideUp();
    });
    setInterval(function(){
        $(".slider-wrap").delay("2500");
        $(".slider-wrap").animate({marginTop: "-300px"},"500");
        $(".slider-wrap").delay("2500");
        $(".slider-wrap").animate({marginTop: "-600px"},"500");
        $(".slider-wrap").delay("2500");
        $(".slider-wrap").animate({marginTop: "0"},"500");
    });
    $("#btn1").click(function(){
        $(".tab1-conts1").css("display","flex");
        $("#btn1").css("background","none");
        $("#btn1").css("borderBottom","none");
        $("#btn2").css("background","rgba(255,255,255,0.5)");
        $(".tab1-conts2").css("display","none");
    });
    $("#btn2").click(function(){
        $(".tab1-conts2").css("display","flex");
        $("#btn2").css("background","none");
        $("#btn2").css("borderBottom","none");
        $("#btn1").css("background","rgba(255,255,255,0.5)");
        $(".tab1-conts1").css("display","none");
    });
    $("#open").click(function(){
        $(".popup").fadeIn();
    });
    $(".close").click(function(){
        $(".popup").fadeOut();
    });
});
