$(function(){
    $(".menu").mouseover(function(){
        $(".subNav").stop().slideDown();
        $(".subNav").css("display","flex");
    })
    $(".menu").mouseleave(function(){
        $(this).children(".subNav").stop().slideUp();
    });
    setInterval(function(){
        $(".slide-wrap").delay("2500");
        $(".slide-wrap").animate({marginTop: "-300"},"500");
        $(".slide-wrap").delay("2500");
        $(".slide-wrap").animate({maiginTop: "-600"},"500");
        $(".slide-wrap").delay("2500");
        $(".slide-wrap").animate({marginTop: "0"},"500");
    });
    $("#btn1").click(function(){
        $(".tab1-conts1").css("display","flex");
        
        $(".tab-conts2").css("display","none");
    });
    $("#btn2").click(function(){
        $(".tab1-conts2").css("display","flex");
        $(".tab1-conts1").css("display","none");
    });
});
