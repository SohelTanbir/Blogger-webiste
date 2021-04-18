$(document).ready(function(){
	const responsive={
		0:{
			items:1
		},
		320:{
			items:1
		},
		576:{
			items:2
		},
		992:{
			items:3
		}
	}
	$('#menu-icon').click(function(){
		$('#mobile-menu').toggle(1000);
	});
	/*owl-carousel for blog*/
	$('.owl-carousel').owlCarousel({
		loop:true,
		autoplay:false,
		autoplayTimeout:3000,
		dots:false,
		nav:true,
		navText:[$('.owl-navigation .owl-nav-prev'),$('.owl-navigation .owl-nav-next')],
		responsive:responsive
	});

	/*scroll to */
	$('.move-up span').click(function(){
		$('html,body').animate({
			scrollTop:0
		},3000);
	});
	AOS.init();
});