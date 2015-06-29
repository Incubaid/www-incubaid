!function ($) {
    $('#mainCarousel').carousel()
}(window.jQuery)


$(document).ready(function(){
	var str=location.href.toLowerCase();
	$('li.active').removeClass("active");
	$('aside .nav li a').filter(function() {return this.href.toLowerCase() == str; }).parents('li').addClass('active'); 

});