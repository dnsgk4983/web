$(document).ready(function(){

});
    $("#btn-nav").click(function(){
        $(".hidden-menu").slideDown();
        $("#btn-nav").css("display","none");
        $("#close-btn").css("display","flex");
        
        
    });
    $("#close-btn").click(function(){
        $(".hidden-menu").slideUp();
        $("#btn-nav").css("display","inline-block");
        $("#close-btn").css("display","none");
    });


    // menu 클래스 바로 하위에 있는 a 태그를 클릭했을때
