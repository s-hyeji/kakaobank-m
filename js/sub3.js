$(function (){
    $('.all > li > a').click(function(){
        $(this).toggleClass('active');
        $(this).next().toggle();
        return false;
    });

    $('.sub_qna li a').click(function(){
        $(this).toggleClass('active');
        $(this).next().slideToggle();
        return false;
    });

    $('#sword').on('keyup', function(){
        var val = $(this).val();
        if(val !== ""){
        $('.sub_qna li a').filter(function(){
            $('.sub_qna').show();
            $(this).toggle($(this).text().indexOf(val) > -1)
        })}else{
            $('.sub_qna').hide();
        }
    });
});
