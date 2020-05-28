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


var num=1;

function abc(){
    num++;
    
    if(num>4) num=1;
    {
        document.getElementById("sec2_img").src="images/section2_main_img"+num+".png";
    }
    return abc;
}
setInterval(abc(), 1000);

