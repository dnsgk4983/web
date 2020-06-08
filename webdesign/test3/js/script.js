$(function(){
    $(".navi>li").mouseover(function(){
        // $(".submenu").slideUp();
        $(this).children().slideDown();
    });
    $(".submenu").mouseleave(function(){
        $(".submenu").slideUp();
    });
    // var time=0;
    // setInterval(function(){
        
        
    //     if(time==0){
    //         $("#img1").hide();
    //         $("#img2").hide();
    //         $("#img3").hide();
    //         $("#img2").fadeIn().show();
    //         time++;
    //     } else if(time==1){
    //         $("#img1").hide();
    //         $("#img2").hide();
    //         $("#img3").hide();
    //         $("#img3").fadeIn().show();
    //         time++;
    //     } else if(time==2){
    //         $("#img1").hide();
    //         $("#img2").hide();
    //         $("#img3").hide();
    //         $("#img1").fadeIn().show();
    //         time=0;
            
    //     }
    // },3000);
    start();
    var imgs = $(".slider-wrap>img").length-1;
    var now = 0;
    function start(){
        $(".slider-wrap>img").eq(0).siblings().fadeOut('slow');
        setInterval(function(){
            slide();
        }, 3000);
    }
    function slide(){
        now = now == imgs ? 0 : now += 1;
        $('.slider-wrap>img').eq(now - 1).fadeOut('slow');
        $('.slider-wrap>img').eq(now).fadeIn('slow');
    }

    $(".tab2").click(function(){
        $(".con1").css("display","none");
        $(".con2").css("display","block");
        $(".tab2").css("backgroundColor","darkcyan");
        $(".tab1").css("backgroundColor","inherit");
    });
    $(".tab1").click(function(){
        $(".con1").css("display","block");
        $(".con2").css("display","none");
        $(".tab2").css("backgroundColor","inherit");
        $(".tab1").css("backgroundColor","darkcyan");
    });
    $("#btn").click(function(){
        $(".popup").css("display","flex");
    });
    $(".close").click(function(){
        $(".popup").css("display","none");
    });
});
