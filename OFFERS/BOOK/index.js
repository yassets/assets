require(['jquery', 'swiper','widget','gallery'],function($, Swiper){
    var mySwiper1 = new window.Swiper('.swiper-container', {
        autoplay: 3000,
        loop: false,
        autoHeight:true,
        spaceBetween:10
    });
})
// 显示属性层
var screenWidth = $(window).width();
$('#page-order').css('left',screenWidth);
$('#val-sel').on('click',function(){
		$(document).scrollTop(0);
        $('#page-order').show();
        if(parseInt(screenWidth)>640){
            var order_left = (parseInt(screenWidth)-640)/2+'px';
            $('#page-order').animate({left:order_left},500);
        }else{
            $('#page-order').animate({left:0},500);
        }
        $('#page-index').delay(400).hide(0);
        $('.buy_now').addClass('ok');
})
//隐藏属性层
$('.back').on('click',function(){
    $('#page-order').animate({left:screenWidth},500);
    $('#page-order').hide(400);
    $('#page-index').css('display','block');
})
//进度条
function percent(){
    var sales = parseInt($('.progress').attr('data-value'));
    var stock = parseInt($('.progress span').attr('data-value'));
    var cent =(sales/(sales+stock)*100).toFixed(0)+'%';
    $('.progress span').css('width',cent);
}
percent();
