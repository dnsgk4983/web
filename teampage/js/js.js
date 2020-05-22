/**스크롤이 설정한 높이 이상 내려갔을때 스타일추가하기**/
if (jQuery(window).width() > 0) {
    jQuery(window).on("scroll",function(ev){
        if(jQuery(window).scrollTop() > 800 ) { /**높이 픽셀 조정**/
            jQuery('.menu_box').fadeIn();  /**위의 높이에서 .fixed 클래스를 추가합니다. 스타일에서 자유롭게 수치 조절 가능합니다.**/
        }
        else{
			jQuery('.menu_box').fadeOut();
        }
        return false;
    });
	}
	
	/**마우스 부드럽게 해당위치로 이동**/
	$(function(){
	   $('a[href^=#]').click(function() {
		  var speed = 800;
		  var href= $(this).attr("href");
		  var target = $(href == "#" || href == "" ? 'html' : href);
		  var position = target.offset().top;
		  $('body,html').animate({scrollTop:position}, speed, 'swing');
		  return false;
	   });
    });
    $(function(){
        $('.menu_box').fadeIn(3000);
    })

    var sec2Num=1;

function abc(){
    sec2Num++;
    
    if(sec2Num>5) sec2Num=1;
    {
        document.getElementById("img").src="images/img"+sec2Num+".jpg";
    }
    return abc;
}
setInterval(abc(), 1000);
    