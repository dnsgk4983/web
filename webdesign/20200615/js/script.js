$(function(){
    $('.mainmenu').mouseover(function(){
        $('.nav-bg').stop().slideDown();
        $('.submenu_box').stop().slideDown();
        $('.submenu_box').css('display','flex');
    });
    $('.nav').mouseleave(function(){
        $('.nav-bg').slideUp();
        $('.submenu_box').slideUp();
    });
    setInterval(function(){
        $('.slide-wrap').delay("2500");
        $('.slide-wrap').animate({marginLeft:"-1200px"},500);
        $('.slide-wrap').delay("2500");
        $('.slide-wrap').animate({marginLeft:"-2400px"},500);
        $('.slide-wrap').delay("2500");
        $('.slide-wrap').animate({marginLeft:"0"},500);
    });
    $('.btn').click(function(){
        $('.popup').fadeIn();
    });
    $('.close').click(function(){
        $('.popup').fadeOut();
    });
});