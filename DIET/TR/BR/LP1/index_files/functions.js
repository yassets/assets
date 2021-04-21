
// Show Offer Mobile
var e = $("#showoffer");
$(window).scroll(function() {
	if($(window).scrollTop() < e.offset().top) $(".ofertaflut").css("opacity", 0);
	else $(".ofertaflut").css("opacity", 1);
});