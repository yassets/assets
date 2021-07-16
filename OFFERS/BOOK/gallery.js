define(['jquery'], function($){
	
	var domstr = '<section id="zoom-layer"> <div class="zoom-boxer"> <div class="zoom-bd"> <img src="public/image/videoPlay.jpg" id="zoom-img" class="zoom-img"> </div> </div> </section>';
	var css = '<style type="text/css"> #zoom-layer {display: none; position: fixed; left: 0px; top: 0px; bottom: 0px; right: 0px; background-color: rgba(0,0,0,0.7); z-index: 99999; max-width: 640px; height: 100%; margin: 0 auto; } #zoom-layer .zoom-boxer {display: table; width: 100%; max-width: 100%; height: 100%; } #zoom-layer .zoom-boxer .zoom-bd {width: 100%; overflow: hidden; display: table-cell; text-align: center; vertical-align: middle; } #zoom-layer .zoom-boxer .zoom-bd img {max-width: 95%; } </style>';
	$("body").append(css).append(domstr);
	var zoom = $('#zoom-layer');
	$(function(){
		$(document).on('click', '[data-zoom-img]', function(event) {
			/* Act on the event */
			var src = $(this).attr('src');
			if( src!="" ){
				zoom.find('.zoom-img').attr('src', src);
				zoom.fadeIn();
			}
		});
		zoom.click(function(event) {
			$(this).fadeOut();
		});
	});

	return {}

});