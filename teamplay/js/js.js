$(function(){
    $(".menu_btn").click(function(){
        $(".menu_btn").css("display","none");
        $(".close_btn").css("display","flex");
        $(".cont").fadeIn();
        $(".cont").css("position","fixed");
    });
    $(".close_btn").click(function(){
        $(".close_btn").css("display","none");
        $(".menu_btn").css("display","flex");
        $(".cont").fadeOut();
    });
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
});

AutoSlide()

var num=1;
function AutoSlide(){
        num++;
        
        if(num>3) num=1;
        {
            document.getElementsByClassName("slideImg").src="images/section2_main_img"+num+".png";
        }
        return abc;
    }
    setInterval(abc(), 1000);
