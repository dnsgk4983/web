$(function(){
    $(".top-nav").mouseover(function(){
        $('.nav-bg').stop().slideDown();
        
        $('.subbox').stop().slideDown();
        $('.subbox').css("display","flex");
    });
    $(".top-nav").mouseleave(function(){
        $('.nav-bg').stop().slideUp();
        $('.subbox').stop().slideUp();
    });
    start();
    var imgs = $(".slider-wrap>img").length-1;
    var now = 0;
    function start(){
        $(".slider-wrap>img").eq(0).siblings().fadeOut('slow');
        setInterval(function(){
            slide();
        }, 3000)
    }
    function slide(){
        now = now == imgs ? 0 : now +=  1;
        $(".slider-wrap>img").eq(now - 1).fadeOut('slow');
        $(".slider-wrap>img").eq(now).fadeIn('slow');
    }
    $(".btn").click(function(){
        $('.popup').fadeIn();
    });
    $('.close').click(function(){
        $('.popup').fadeOut();
    });
});