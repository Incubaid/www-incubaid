
    // carousel demo

!function ($) {

    $('#myCarousel').carousel()
    
}(window.jQuery)

/*Fady*/
$(document).ready(function(){
	var str=location.href.toLowerCase();
		$('li.active').removeClass("active");
	$('.nav li a').filter(function() {return this.href.toLowerCase() == str; }).parents('li').addClass('active');
		 
})


/*Mohamed*/
/*
href = window.location.href;
parts = href.split("/");
currentPage = decodeURI(parts[parts.length -1]);
menuitemsel = "li:has(a[href*='"+ currentPage +"']), li:has(a[href*='" + encodeURI(currentPage) + "'])";
$("li a.active").removeClass("active");
$(menuitemsel).addClass("active");
*/
