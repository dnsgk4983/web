$(function(){
  $('.menu a').hover(function(){
    $('.submenu_box').stop().slideToggle();
    $('.navi_box_bg').stop().slideToggle();
  });
  // 네비게이션 토글
  setInterval(function(){
    $(".slider-wrap").delay("2500");
    $(".slider-wrap").animate({marginLeft: "-1198px"},"500");
    $(".slider-wrap").delay("2500");
    $(".slider-wrap").animate({marginLeft: "-2398px"},"500");
    $(".slider-wrap").delay("2500");
    $(".slider-wrap").animate({marginLeft: "0"},"500");
  });
  $("#click").click(function(){
    $(".popup").fadeIn();
    $(".popup").css("display","block");
  });
  $(".close").click(function(){
    $(".popup").fadeOut();
  });
  // 메뉴 슬라이드
});
