 
(function ($) {
	"use strict";

// js scroll menu

$(window).scroll(function () {
	if ($(window).width() > 767) {
		if ($(this).scrollTop() > 60) {
			$('.TopMenu').addClass('nav-fixed animated fadeInDown');
		} else {
			$('.TopMenu').removeClass('nav-fixed animated fadeInDown');
		}
	}
});

$(function() {
	$('input[name="date"]').daterangepicker(
	{
		singleDatePicker: true,
		showDropdowns: true,
		locale: {
			format: 'DD-MM-YYYY'
		},
	}, 
	function(start, end, label) {
		var years = moment().diff(start, 'years');
	});
});

 // upload avatar
 $('input[type="file"]').each(function(){
  // Refs
  var $file = $(this),
  $label = $file.next('label'),
  $labelText = $label.find('span'),
  labelDefault = $labelText.text();

  // When a new file is selected
  $file.on('change', function(event){
  	var fileName = $file.val().split( '\\' ).pop(),
  	tmppath = URL.createObjectURL(event.target.files[0]);
    //Check successfully selection
    if( fileName ){
    	$label
    	.addClass('file-ok')
    	.css('background-image', 'url(' + tmppath + ')');
    	$labelText.text(fileName);
    }else{
    	$label.removeClass('file-ok');
    	$labelText.text(labelDefault);
    }
});

// End loop of file input elements
}); 
/*----------------------------
form-review
------------------------------ */  
$('.review-btn button').click(function(){
	$('.form-review').toggle();
}) 
$('.groupAction button').click(function(){
	$('.form-action').toggle();
}) 

// show-hide text
$('#js-show-more').click(function() {
	if ($('.entry-content').hasClass('expand')) {
		$('.entry-content').removeClass("expand");
		document.getElementById('js-show-more').innerHTML = " Show more";
	} else {
		$('.entry-content').addClass("expand");
		document.getElementById('js-show-more').innerHTML = " Hide";
	}
});


var swiper = new Swiper('.slide-nmg', {
	slidesPerView: 2, 
	spaceBetween: 20, 
	autoplay: {
		delay: 5000,
	}, 
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	breakpoints: {

		1280: {
			slidesPerView: 2, 
		},
		1024: {
			slidesPerView: 1, 
		},
		768: {
			slidesPerView: 1, 
		},
		640: {
			slidesPerView: 1, 
		},
		320: {
			slidesPerView: 1,
			spaceBetween: 0,
		}
	}
});



var swiper = new Swiper('.home-slide', {
	slidesPerView: 1, 
	spaceBetween: 22, 
	autoplay: {
		delay: 3000,
	}, 
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

});






var swiper = new Swiper('.chude-hot-slide', {
	direction: 'vertical', 
	slidesPerView: 1,
	autoplay: {
		delay: 3000,
	},
	autoHeight: true,
});










var swiper = new Swiper('.slide-project', {
	slidesPerView: 3, 
	spaceBetween: 22, 
	autoplay: {
		delay: 5000,
	}, 
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	breakpoints: {

		1280: {
			slidesPerView: 3,
			spaceBetween:22,
		},
		1024: {
			slidesPerView: 2,
			spaceBetween:22,
		},
		768: {
			slidesPerView: 2,
			spaceBetween: 22,
		},
		640: {
			slidesPerView: 1,
			spaceBetween: 22,
		},
		320: {
			slidesPerView: 1,
			spaceBetween: 22,
		}
	}
});

var swiper = new Swiper('.slide-ads', {
	direction: 'vertical', 
	autoHeight: true,
	slidesPerView: 'auto',
	loop: true,
	autoplay: {
		delay: 5000,
		disableOnInteraction: false
	}
});

var swiper = new Swiper('.slide-tdduan', {
	  autoHeight: true, //enable auto height
	  loop: true,
	  observer:true,
	  observeParents:true, 
	  navigation: {
	  	nextEl: '.swiper-button-next',
	  	prevEl: '.swiper-button-prev',
	  },
	});

// js sticky  
(function() {
	var reset_scroll;

	$(function() {
		return $("[data-sticky_column]").stick_in_parent({
			parent: "[data-sticky_parent]"
		});
	});

	reset_scroll = function() {
		var scroller;
		scroller = $("body,html");
		scroller.stop(true);
		if ($(window).scrollTop() !== 0) {
			scroller.animate({
				scrollTop: 0
			}, "fast");
		}
		return scroller;
	};

	window.scroll_it = function() {
		var max;
		max = $(document).height() - $(window).height();
		return reset_scroll().animate({
			scrollTop: max
		}, max * 3).delay(100).animate({
			scrollTop: 0
		}, max * 3);
	};

	window.scroll_it_wobble = function() {
		var max, third;
		max = $(document).height() - $(window).height();
		third = Math.floor(max / 3);
		return reset_scroll().animate({
			scrollTop: third * 2
		}, max * 3).delay(100).animate({
			scrollTop: third
		}, max * 3).delay(100).animate({
			scrollTop: max
		}, max * 3).delay(100).animate({
			scrollTop: 0
		}, max * 3);
	};

	$(window).on("resize", (function(_this) {
		return function(e) {
			return $(document.body).trigger("sticky_kit:recalc");
		};
	})(this));

}).call(this);


// show-hide text
$('#js-show-more').click(function() {
	if ($('.post-product').hasClass('expand')) {
		$('.post-product').removeClass("expand");
		document.getElementById('js-show-more').innerHTML = " Xem Thêm";
	} else {
		$('.post-product').addClass("expand");
		document.getElementById('js-show-more').innerHTML = " Thu Gọn";
	}
});


/*--------------------------
 tooltip active jquery
 ---------------------------- */
 
/*--------------------------
 scrollUp
 ---------------------------- */	
 

// js scroll Top 
jQuery(document).ready(function() {
	var offset = 200;
	var duration = 500;
	jQuery(window).scroll(function() {
		if (jQuery(this).scrollTop() > offset) {
			jQuery('.scrollup').fadeIn(duration);
		} else {
			jQuery('.scrollup').fadeOut(duration);
		}
	});
	
	jQuery('.scrollup').click(function(event) {
		event.preventDefault();
		jQuery('html, body').animate({scrollTop: 0}, duration);
		return false;
	})
});	


    /*-------------------------
    checkout one click toggle function
    --------------------------*/
    var checked = $( '.sin-payment input:checked' )
    if(checked){
    	$(checked).siblings( '.payment_box' ).slideDown(900);
    };
    $( '.sin-payment input' ).on('change', function() {
    	$( '.payment_box' ).slideUp(900);
    	$(this).siblings( '.payment_box' ).slideToggle(900);
    });

 // js Tool tip 
 $(function () {
 	$('[data-toggle="tooltip"]').tooltip()
 })
 $('[data-toggle="popover"]').popover({
 	html: true,
 	trigger: 'hover',
 	content: function () { return '<img src="' + $(this).data('img') + '" />'; }
 });

    // show-hide text
    $('#js-show-more').click(function() {
    	if ($('.height-s').hasClass('expand')) {
    		$('.height-s').removeClass("expand");
    		document.getElementById('js-show-more').innerHTML = "Tìm nâng cao";
    	} else {
    		$('.height-s').addClass("expand");
    		document.getElementById('js-show-more').innerHTML = "Bỏ tìm nâng cao";
    	}
    });

	// show-hide text
	$('#js-sell-home').click(function() {
		if ($('.sell-home').hasClass('expand')) { 
		} else {
			$('.sell-home').addClass("expand");
			document.getElementById('js-sell-home').innerHTML = "";
		}
	});
	
	$("#touch-mg").click(function () {
		$("#content-mg").slideToggle(300);
	})
	
})(jQuery); 




// js tooltip bảng giao dịch
$(document).ready(function(){
	$('[data-toggle="tooltip"]').tooltip();   
});


// js mục lục
$(document).ready(function(){
	$(".news-desc-at").autoToc();
});
