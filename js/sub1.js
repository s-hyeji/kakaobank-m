$(function(){
    var cSlide = 0;

    $('.btn_prev').click(function(){
        cSlide <= 0 ? (cSlide = 0) : cSlide--;
        // cSlide--;        
        $('.slide ul').animate({left:-( cSlide * 100)+ "%"});
    });

    $('.btn_next').click(function(){
        cSlide >= 3 ? (cSlide = 3 ) : cSlide++;
        // cSlide++;
        $('.slide ul').animate({left:-( cSlide * 100)+ "%"});
    });
})