$(function(){
    $(".menu_btn").click(function(){
        $(".menu_btn").css("display","none");
        $(".close_btn").css("display","flex");
        $(".cont").fadeIn();
        $(".cont").css("position","fixed");
    });
    // 햄버거버튼 클릭 시 메뉴 고정 / 버튼 변경
    $(".close_btn").click(function(){
        $(".close_btn").css("display","none");
        $(".menu_btn").css("display","flex");
        $(".cont").fadeOut();
    });
    // 닫기버튼 클릭 시 메뉴 사라지기 / 버튼 변경
    $(".cont_nav1").click(function(){
        $(".close_btn").css("display","none");
        $(".menu_btn").css("display","flex");
        $(".cont").fadeOut();
    });
    $(".cont_nav2").click(function(){
        $(".close_btn").css("display","none");
        $(".menu_btn").css("display","flex");
        $(".cont").fadeOut();
    });
    $(".cont_nav3").click(function(){
        $(".close_btn").css("display","none");
        $(".menu_btn").css("display","flex");
        $(".cont").fadeOut();
    });
    $(".cont_nav4").click(function(){
        $(".close_btn").css("display","none");
        $(".menu_btn").css("display","flex");
        $(".cont").fadeOut();
    });
    $(".cont_nav5").click(function(){
        $(".close_btn").css("display","none");
        $(".menu_btn").css("display","flex");
        $(".cont").fadeOut();
    });
    // 메뉴 -> 섹션 선택 이동 시 버튼 변경 / 메뉴 사라지기
});
$(function(){
    $(".img1").show();
    $(".img2").hide();
    // section2 초기화값

    $(".sec4-hidden").click(function(){
        $(".sec4-hidden").fadeOut();
        $(".sec4-h-1").fadeOut();
        $(".sec4-h-2").fadeOut();
        $(".sec4-h-3").fadeOut();
        $(".sec4-h-4").fadeOut();
        $(".sec4-h-5").fadeOut();
        $(".sec4-h-6").fadeOut();
        $(".sec4-h-7").fadeOut();
        $(".sec4-h-8").fadeOut();
        $(".sec4-h-9").fadeOut();
        $(".sec4-h-10").fadeOut();
        $(".close_btn").fadeOut();
        $(".menu_btn").fadeIn();
    });
    // 팝업창 아무 부위나 클릭 시 닫히게 해주는 function

    $(".sec4-1").click(function(){
        $(".menu_btn").css("display","none");
        $(".sec4-hidden").fadeIn();
        $(".sec4-h-1").fadeIn();
    });
    $(".sec4-closebtn").click(function(){
       $(".sec4-hidden").fadeOut(); 
       $(".sec4-h-1").fadeOut();
       $(".menu_btn").fadeIn();
    });
    $(".sec4-h-1").click(function(){
        $(".sec4-hidden").fadeOut();
        $(".menu_btn").fadeIn();
    });

// sec4-1 fade In/Out
    $(".sec4-2").click(function(){
        $(".menu_btn").css("display","none");
        $(".sec4-hidden").fadeIn();
        $(".sec4-h-2").fadeIn();
    });
    $(".sec4-closebtn").click(function(){
       $(".sec4-hidden").fadeOut();
       $(".sec4-h-2").fadeOut(); 
       $(".menu_btn").fadeIn();
    });
// sec4-2 fade In/Out

    $(".sec4-3").click(function(){
        $(".menu_btn").css("display","none");
        $(".sec4-hidden").fadeIn();
        $(".sec4-h-3").fadeIn();
    });
    $(".sec4-closebtn").click(function(){
       $(".sec4-hidden").fadeOut();
       $(".sec4-h-3").fadeOut(); 
       $(".menu_btn").fadeIn();
    });
// sec4-3 fade In/Out

    $(".sec4-4").click(function(){
        $(".menu_btn").css("display","none");
        $(".sec4-hidden").fadeIn();
        $(".sec4-h-4").fadeIn();
    });
    $(".sec4-closebtn").click(function(){
       $(".sec4-hidden").fadeOut();
       $(".sec4-h-4").fadeOut(); 
       $(".menu_btn").fadeIn();
    });
// sec4-4 fade In/Out

    $(".sec4-5").click(function(){
        $(".menu_btn").css("display","none");
        $(".sec4-hidden").fadeIn();
        $(".sec4-h-5").fadeIn();
    });
    $(".sec4-closebtn").click(function(){
       $(".sec4-hidden").fadeOut(); 
       $(".sec4-h-5").fadeOut();
       $(".menu_btn").fadeIn();
    });
// sec4-5 fade In/Out

    $(".sec4-6").click(function(){
        $(".menu_btn").css("display","none");
        $(".sec4-hidden").fadeIn();
        $(".sec4-h-6").fadeIn();
    });
    $(".sec4-closebtn").click(function(){
       $(".sec4-hidden").fadeOut(); 
       $(".sec4-h-6").fadeOut();
       $(".menu_btn").fadeIn();
    });
// sec4-6 fade In/Out

    $(".sec4-7").click(function(){
        $(".menu_btn").css("display","none");
        $(".sec4-hidden").fadeIn();
        $(".sec4-h-7").fadeIn();
    });
    $(".sec4-closebtn").click(function(){
       $(".sec4-hidden").fadeOut(); 
       $(".sec4-h-7").fadeOut();
       $(".menu_btn").fadeIn();
    });
// sec4-7 fade In/Out

    $(".sec4-8").click(function(){
        $(".menu_btn").css("display","none");
        $(".sec4-hidden").fadeIn();
        $(".sec4-h-8").fadeIn();
    });
    $(".sec4-closebtn").click(function(){
       $(".sec4-hidden").fadeOut();
       $(".sec4-h-8").fadeOut(); 
       $(".menu_btn").fadeIn();
    });
// sec4-8 fade In/Out

    $(".sec4-9").click(function(){
        $(".menu_btn").css("display","none");
        $(".sec4-hidden").fadeIn();
        $(".sec4-h-9").fadeIn();
    });
    $(".sec4-closebtn").click(function(){
       $(".sec4-hidden").fadeOut(); 
       $(".sec4-h-9").fadeOut();
       $(".menu_btn").fadeIn();
    });
// sec4-9 fade In/Out

    $(".sec4-10").click(function(){
        $(".menu_btn").css("display","none");
        $(".sec4-hidden").fadeIn();
        $(".sec4-h-10").fadeIn();
    });
    $(".sec4-closebtn").click(function(){
        $(".sec4-hidden").fadeOut(); 
        $(".sec4-h-10").fadeOut();
        $(".menu_btn").fadeIn();
    });
// sec4-10 fade In/Out    

    setInterval(function(){
        $('.img2').fadeToggle(1000);
        $('.img1').fadeToggle(1000);
    }, 5000);
    // section2 fadeToggle
});

    