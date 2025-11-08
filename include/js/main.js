/*SCROLL PAGE TO TOP*/
$(document).ready(function() {
	$(".toTop").css("display", "none");

	$(window).scroll(function(){
		if($(window).scrollTop() > 0){$(".toTop").fadeIn("slow");} else {$(".toTop").fadeOut("slow");}
	});

	$(".toTop").click(function(event) {
		event.preventDefault();
		$("html, body").animate({scrollTop:0},"slow");
	});
});

var navHeight = $('#main_navbar').offset().top;
FixMegaNavbar(navHeight);
$(window).bind('scroll', function() {FixMegaNavbar(navHeight);});

function FixMegaNavbar(navHeight) {
	if (!$('#main_navbar').hasClass('navbar-fixed-bottom')) {
		if ($(window).scrollTop() > navHeight) {
			$('#main_navbar').addClass('navbar-fixed-top')
			$('#main_navbar').addClass('fixed-bg')
			
			
			if ($('#main_navbar').parent('div').hasClass('container')) $('#main_navbar').children('div').addClass('container').removeClass('container-fluid');
			
			else if ($('#main_navbar').parent('div').hasClass('container-fluid'))
			$('#main_navbar').children('div').addClass('container-fluid').removeClass('container');
		}
		else {
			$('#main_navbar').removeClass('navbar-fixed-top');
			$('#main_navbar').removeClass('fixed-bg')
			
			$('body').css({'margin-top': ''});
		}
	}
}

