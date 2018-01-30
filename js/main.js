$(document).ready(function() {

	// Adaptive menu
	$('.menu-btn').on('click', function () {
		if ($(this).parents('.menu_wrap').is('.opened-menu') !== true) {
			$('.menu_wrap').addClass('opened-menu');
			$('#main-menu').addClass('opened');

		}
		else if ($(this).parents('.menu_wrap').is('.opened-menu') === true) {
			$('.menu_wrap').removeClass('opened-menu');
			$('#main-menu').removeClass('opened');
		}
	});

	// Formstyler
	$('input[type="radio"], input[type="checkbox"], select').styler();

	// Range two sliders
		function collision($div1, $div2) {
			var x1 = $div1.offset().left;
			var w1 = 40;
			var r1 = x1 + w1;
			var x2 = $div2.offset().left;
			var w2 = 40;
			var r2 = x2 + w2;

			if (r1 < x2 || x1 > r2) return false;
			return true;
		}
	/*slider call*/
	$('#slider').slider({
		range: true,
		min: 0,
		max: 6000,
		values: [ 1500, 5000 ],
		slide: function(event, ui) {
			$('.ui-slider-handle:eq(0) .price-range-min').html('' + ui.values[ 0 ]);
			$('.ui-slider-handle:eq(1) .price-range-max').html('' + ui.values[ 1 ]);
			$('.price-range-both').html('<i>' + ui.values[ 0 ] + ' - </i>' + ui.values[ 1 ] );
	
			if ( ui.values[0] == ui.values[1] ) {
				$('.price-range-both i').css('display', 'none');
			} else {
				$('.price-range-both i').css('display', 'inline');
			}

			if (collision($('.price-range-min'), $('.price-range-max')) == true) {
				$('.price-range-min, .price-range-max').css('opacity', '1');	
				$('.price-range-both').css('display', 'none');		
			} else {
				$('.price-range-min, .price-range-max').css('opacity', '1');	
				$('.price-range-both').css('display', 'none');		
			}

		}		
	});

	$('.ui-slider-range').append('<span class="price-range-both value"><i>' + $('#slider').slider('values', 0 ) + ' - </i>' + $('#slider').slider('values', 1 ) + '</span>');

	$('.ui-slider-handle:eq(0)').append('<span class="price-range-min value">' + $('#slider').slider('values', 0 ) + '</span>');

	$('.ui-slider-handle:eq(1)').append('<span class="price-range-max value">' + $('#slider').slider('values', 1 ) + '</span>');

	// Product block carousel
	$('.owl-carousel.main-carousel').owlCarousel({
		items: 1,
		loop: true,
		autoplay: true,
		autoplayTimeout: 3000,
		autoplaySpeed: 700,
		nav: true,
		navText: [,],
		dots: false
	});

}); 