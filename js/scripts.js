var main = function() {

// var	pauseSlide = false;
// var timer = setInterval(slideInterval, 0);
	changeBorderColor();

		// Menu functions

	$('#burgerMenu-button').click(function(e) {
		$('.menu').toggleClass('menuOpen');
		e.preventDefault();
	});

	$('#productstoggle').click(function(e) {

		if ($('#products-dropdownMenu').is(':hidden')) {
			rotateArrow();
		} else {
			returnRotateArrow();
		}
		
		$('#contact-dropdownMenu').slideUp(400);
		$('#products-dropdownMenu').slideToggle(400);
		e.preventDefault();
	});

	$('#contacttoggle').click(function(e) {
		$('#products-dropdownMenu').slideUp(400);
    	returnRotateArrow();
		$('#contact-dropdownMenu').slideToggle(400);
		e.preventDefault();
	});

	$(document).mouseup(function (e) {
	    var container = $('.header');

	    if (!container.is(e.target) // if the target of the click isn't the container...
	        && container.has(e.target).length === 0) // ... nor a descendant of the container
	    {
	    	returnRotateArrow();
			$('.menu').removeClass('menuOpen');
	        $('.dropdown-menu').slideUp(400);
	    }
	});

	function rotateArrow() {
		$('#arrowDown').animate( { 
			borderSpacing: 180 
		}, {
		    step: function(now) {
		      $(this).css('-webkit-transform','rotate('+now+'deg)'); 
		      $(this).css('-moz-transform','rotate('+now+'deg)');
		      $(this).css('transform','rotate('+now+'deg)');
		   },
		    duration:'slow'
		});
	}

	function returnRotateArrow() {
		$('#arrowDown').animate( { 
			borderSpacing: 360
		}, {
		    step: function(now) {
		      $(this).css('-webkit-transform','rotate('+now+'deg)'); 
		      $(this).css('-moz-transform','rotate('+now+'deg)');
		      $(this).css('transform','rotate('+now+'deg)');
		   },
		    duration:'slow'
		});
	}

	// $('#contactButton').click(function(e) {
	// 	var toShowContentID = $('.contactWrapper');

	// 	switchMainContent(toShowContentID);
	// 	changeBorderColor();

	// 	e.preventDefault();
	// });

	$('#aboutButton').click(function(e) {
		var toShowContentID = $('.aboutWrapper');

		switchMainContent(toShowContentID);
		changeBorderColor();

		e.preventDefault();
	});

	function switchMainContent(toShowContentID) {
		var currentMainContent = $('.currentContent');

		if (currentMainContent.hasClass('currentContent')
			&& toShowContentID.hasClass('currentContent')) {
			return;
		}

		// $('.moreInfo').hide();

		// pauseSlide = true;

		currentMainContent.fadeOut(600).removeClass('currentContent');
		toShowContentID.fadeIn(600).addClass('currentContent');

		scrollPageToTop();
		returnMenuToNormal();
	}

	function returnMenuToNormal() {		
		setTimeout(function() {
			returnRotateArrow();
			$('.menu').removeClass('menuOpen');
	    	$('.dropdown-menu').slideUp(400);
		}, 600);
	}

		// Menu functions

		// Dropdown menu options

	function switchToProduct(slideID, moreInfoID, imageID) {
		var currentSlide = $('.active-slide');
		var currentImage = $('.active-image');

		if (currentSlide.hasClass('active-slide') 
			&& slideID.hasClass('active-slide')
			&& moreInfoID.is(':visible')) {
			return;
		}

		// $('.slide-nav').hide();
		// $('#readMore-button').hide();
		// moreInfoID.show();

		// pauseSlide = true;

		if (moreInfoID.is(':hidden')) {
			currentSlide.fadeOut(600).removeClass('active-slide');
			slideID.fadeIn(600).addClass('active-slide');

			currentImage.fadeOut(600).removeClass('active-image');
			imageID.fadeIn(200).addClass('active-image');
		}

   		returnMenuToNormal();
   		scrollPageToTop();
	}

	// $('#readMore-button').click(function(e) {
	// 	var slideID = $('.active-slide');
	// 	var moreInfoID = $('.moreInfo', '.active-slide');
	// 	var imageID = $('.active-image');

	// 	switchToProduct(slideID, moreInfoID, imageID);
	// 	e.preventDefault();
	// });

	$('#4get-button').click(function(e) {
		ProductsInfo4get();
		e.preventDefault();
	});

	$('.4get-FindMoreProducts').on('click','img', function(e) {
		ProductsInfo4get();
		e.preventDefault();
	});

	function ProductsInfo4get() {
		var slideID = $('#4get-slide');
		var moreInfoID = $('#4get-moreInfo');
		var imageID = $('#4get-image');
		var toShowContentID = $('.sliderWrapper');

		switchMainContent(toShowContentID);
		switchToProduct(slideID, moreInfoID, imageID);
   		changeBorderColor();		
	}

	$('#CanWePlay-button').click(function(e) {
		ProductsInfoCWP();
		e.preventDefault();
	});

	$('.cwp-FindMoreProducts').on('click','img', function(e) {
		ProductsInfoCWP();
		e.preventDefault();
	});

	function ProductsInfoCWP() {
		var slideID = $('#CanWePlay-slide');
		var moreInfoID = $('#CanWePlay-moreInfo');
		var imageID = $('#CanWePlay-image');
		var toShowContentID = $('.sliderWrapper');

		switchMainContent(toShowContentID);
		switchToProduct(slideID, moreInfoID, imageID);
   		changeBorderColor();
	}

	// $('#Ra2-button').click(function(e) {
	// 	var slideID = $('#Ra2-slide');
	// 	var moreInfoID = $('#Ra2-moreInfo');
	// 	var imageID = $('#Ra2-image');
	// 	var toShowContentID = $('.sliderWrapper');

	// 	switchMainContent(toShowContentID);
	// 	switchToProduct(slideID, moreInfoID, imageID);

	// 	e.preventDefault();
	// });

	function changeBorderColor (moreInfoID) {
		var dropMenu = $('#products-dropdownMenu');
		var menu = $('.menu');

		dropMenu.removeClass('menuBorder-4get');
		dropMenu.removeClass('menuBorder-CanWePlay');
		dropMenu.removeClass('menuBorder-Ra2');
		dropMenu.removeClass('menuBorder-about');
		// dropMenu.removeClass('menuBorder-contact');
		menu.removeClass('menuBorder-4get-sm');
		menu.removeClass('menuBorder-CanWePlay-sm');
		menu.removeClass('menuBorder-Ra2-sm');
		menu.removeClass('menuBorder-about-sm');
		// menu.removeClass('menuBorder-contact-sm');

		$('#4get-button').removeClass('active-4get');
		$('#CanWePlay-button').removeClass('active-CanWePlay');
		$('#Ra2-button').removeClass('active-Ra2');
		// $('#contactButton').removeClass('active-contact');
		$('#aboutButton').removeClass('active-about');	

		// if ($('.contactWrapper').hasClass('currentContent')) {

		// 	if ($(window).width() < 820) {
		// 		menu.addClass('menuBorder-contact-sm');
		// 		$('#contactButton').addClass('active-contact');
		// 	} else {
		// 		dropMenu.addClass('menuBorder-contact');
		// 	}

		// 	return;
		// }

		if ($('.aboutWrapper').hasClass('currentContent')) {
		
			if ($(window).width() < 820) {
				menu.addClass('menuBorder-about-sm');
				$('#aboutButton').addClass('active-about');
			} else {
				dropMenu.addClass('menuBorder-about');
			}
		
			return;
		}			

		if ($('#4get-slide').hasClass('active-slide')) {
			if ($(window).width() < 820) {
				menu.addClass('menuBorder-4get-sm');
			} else {
				dropMenu.addClass('menuBorder-4get');
			}
			
			// if (moreInfoID == null) { return; }
			// if (moreInfoID.is(':visible')) {
				$('#4get-button').addClass('active-4get');
			// }
		}

		if ($('#CanWePlay-slide').hasClass('active-slide')) {
			if ($(window).width() < 820) {
				menu.addClass('menuBorder-CanWePlay-sm');
			} else {
				dropMenu.addClass('menuBorder-CanWePlay');
			}

			// if (moreInfoID == null) { return; }
			// if (moreInfoID.is(':visible')) {
				$('#CanWePlay-button').addClass('active-CanWePlay');
			// }
		}

		if ($('#Ra2-slide').hasClass('active-slide')) {
			if ($(window).width() < 820) {
				menu.addClass('menuBorder-Ra2-sm');
			} else {
				dropMenu.addClass('menuBorder-Ra2');
			}

			// if (moreInfoID == null) { return; }
			// if (moreInfoID.is(':visible')) {
				$('#Ra2-button').addClass('active-Ra2');
			// }
		}
	}

		// Dropdown menu options

		// Slider functions

	function startSlide(nextSlide, nextImage) {
		// if (pauseSlide) {
		// 	return;
		// }

		var currentSlide = $('.active-slide');
		// var currentDot = $('.active-dot');
		var	currentImage = $('.active-image');

		if (nextSlide.length === 0) {
			nextSlide = $('.slide').first();
			// nextDot = $('.dot').first();
			nextImage = $('.imageSlide').first();
		}

		if (nextSlide.hasClass('comingsoon')) {
			nextSlide = $('.slide').first();
			// nextDot = $('.dot').first();
			nextImage = $('.imageSlide').first();
		}


		currentSlide.fadeOut(600).removeClass('active-slide');
		nextSlide.fadeIn(600).addClass('active-slide');

		currentImage.fadeOut(600).removeClass('active-image');
		nextImage.fadeIn(200).addClass('active-image');

		// currentDot.removeClass('active-dot');
		// nextDot.addClass('active-dot');

		changeBorderColor();
	}

	// function slideInterval () {
	// 	var nextSlide = $('.active-slide').next();
	// 	var nextDot = $('.active-dot').next();
	// 	var nextImage = $('.active-image').next();

	// 	resetTimer();

	// 	startSlide(nextSlide, nextDot, nextImage);
	// }

	// function resetTimer () {		
	// 	clearInterval(timer);
	// 	timer = setInterval(slideInterval, 5000);
	// }
	

	$('.next-slide').click(function(e) {
		var nextSlide = $('.active-slide').next();
		// var nextDot = $('.active-dot').next();
		var nextImage = $('.active-image').next();

		startSlide(nextSlide, nextImage);
		e.preventDefault();
	});

	$('.prev-slide').click(function(e) {
		var nextSlide = $('.active-slide').prev();
		// var nextDot = $('.active-dot').prev();
		var nextImage = $('.active-image').prev();

		if (nextSlide.length === 0) {
			nextSlide = $('.slide').eq(-2);
			// nextDot = $('.dot').last();
			nextImage = $('.imageSlide').eq(-2);
		}

		startSlide(nextSlide, nextImage);
		e.preventDefault();
	});

		// Slider functions

		// 

	$('.scrollToTop').click(function(e) {
		scrollPageToTop();
		e.preventDefault();
	});

	function scrollPageToTop () {
		$('html, body').animate({scrollTop : 0}, 600);
		return false;
	}

	// function sticky_relocate() {
	//     var window_top = $(window).scrollTop();
	//     var div_top = $('#sticky-anchor').offset().top;
	//     if (window_top > div_top) {
	//         $('#sticky').addClass('stick');
	//     } else {
	//         $('#sticky').removeClass('stick');
	//     }
	// }

	// $(function() {
	//     $(window).scroll(sticky_relocate);
	//     sticky_relocate();
	// });

}

$(document).ready(main);
