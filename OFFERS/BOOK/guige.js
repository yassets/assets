require(['jquery'], function ($){
    $('.u-format.count_atrr').each(function(){
        var obj = $(this).find('.tab');
            //obj.eq(0).addClass('tab-sel');
        var id = obj.attr('data-id');
        $(this).attr('data-select', id);
        $(this).find('.tt span').html($(this).find('.tab').eq(0).attr('data-name'));
    });
    // 选择事件
    $('.u-format.count_atrr').on('click', '.tab', function(){
        var self = $(this);
        var id = self.attr('data-id');
        self.addClass('tab-sel').siblings().removeClass('tab-sel');
        self.parents('.u-format.count_atrr').attr('data-select', id);
        self.parents('.u-format').find('.tt span').html(self.attr('data-name'));
        var src = self.attr('data-img');
        if( src ){ $('#attrimg').attr('src', src); }
    });
});
    setCombPrototypeInit(1);
    $("#comb .tab").eq(0).addClass('tab-sel').find('input').attr("checked", 'true');
    $('#comb').attr('data-price', $("#comb .tab-sel").attr('data-price'));
    $('[currentprice]').html($("#comb .tab-sel").attr('data-price'));
    // 选择产品
    $("#comb .tab").click(function(event) {
        event.preventDefault();
        /* Act on the event */
        $(this).addClass('tab-sel').siblings().removeClass('tab-sel');
        $(this).find('input').attr("checked", 'true');
        $(this).siblings().find('input').attr("checked", false);
        $('#comb').attr('data-price', $(this).attr('data-price'));
        $('[currentprice]').html($(this).attr('data-price'));

        var index = $(this).attr('data-loopIndex');
        setCombPrototypeInit(index);    
    });
// 根据套餐初始化
function setCombPrototypeInit(sectionIndex){
    $('section[data-loopindex]').hide();
    var section = $('section[data-loopindex]').eq(sectionIndex-1).show();
    section.find('li.protoLayer').each(function(){
        var first = $(this).find('.tab').removeClass('tab-sel').eq(0).addClass('tab-sel');
        var id = first.attr('data-id');
        // $(this).attr('data-select', id);
    });
}


function addnumber(){
    $('#num').val(parseInt($('#num').val())+1);
    $('.textWrap .num').html($('#num').val()); 
}

function minnumber(){
    if($('#num').val() > 1){
        $('#num').val(parseInt($('#num').val())-1);
        $('.textWrap .num').html($('#num').val());
    }
}
// 提交表单
function postcheckGuige() {
    var url = "/checkout.php?";

    // 数量
    var count = parseInt($('input#num').val()) || 1;
    url = url + "count="+count;

    // 产品ID
    var comb_id = $("#comb .tab-sel").find('input').val();
    url = url + "&combo_id="+comb_id;
    
    /* Act on the event */
    var prototype = [];
    var loop = $('#comb .tab-sel').attr('data-loopindex');
    var attr = $('section[data-loopIndex="'+ loop +'"] ').find('.u-format.count_atrr');
    if( attr.length > 0 ){
        attr.each(function(){
            var groupId = $(this).attr('data-group');
            var prototypeId = $(this).attr('data-select');
            if( parseInt(prototypeId)>0 ){
                prototype.push(groupId+"-"+prototypeId);
            }
        });
        if( prototype.length == 0 ){
            alert('请选择属性');
            return false;
        }
        url = url + "&proto="+prototype.join('|');
    }
    // 跳转
    window.location.href = url;
    return false;
}
function cur_chosen(){
    var chosen = '';
    var loop = parseInt($(".tab-sel").eq(0).attr('data-loopindex'))-1;
    var tab = $('section[data-loopindex]').eq(loop);
        for(var i =0; i < tab.length; i++){
            var attr_num = tab.eq(i).find('.tab-sel');
            if(attr_num.length){
                for (var j =0; j < attr_num.length-1; j++){
                    chosen += '<span>'+ attr_num.eq(j).html()+'</span>,'
                }
                chosen += '<span>'+ attr_num.eq(j).html()+'</span>;'
            }
        }
    $('.choose span').html(chosen);
    
}
if ($('.attr').is(':visible')) {
   cur_chosen();
}
$('.buy_now').on('click', function(event) {
    var w_top = parseInt($(window).scrollTop(),10);
    var w_height = parseInt(window.screen.height,10);
    // var d_top = parseInt($('.option_detail').offset().top,10);
    //console.log(w_top+"+++"+top +"---"+w_heiht);
    if($(this).hasClass('ok')){
        // if(w_top >= 150){
            postcheckGuige();
        // }
    }else{
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
    } 
});
// $('.buy_now').on('click',function(){
//     postcheckGuige();
// })
$('.close').on('click', function(event) {
    $('.dt-paramselect').animate({bottom:-$('.dt-paramselect').height()},500);
    //$('.dt-paramselect').css('bottom',0);
       $('.shade').delay(400).hide(0);
})