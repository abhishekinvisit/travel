// all custom JS here //
$(document).ready(function(){
	$(".rightMenu li a").click(function(){
		$(".rightMenu li a").removeClass("active");
		$(this).addClass("active");
		
	});
	
	
$(".show_dropdown").hide();
$(".clickbtnmobile").click(function(){
		$(this).next().slideToggle();
		$(this).toggleClass("bi-chevron-down")
	});

	// popup js 

$(".clickenquiry").click(function(){
	$("#enquirypopup").show();
	$("body").addClass("open-model");
});

$(".close__popup").click(function(){
	$("#enquirypopup").hide();
	$("body").removeClass("open-model");
	$(".pageoverlay").hide();
});





$("#inset-autocomplete-input").click(function(){
	$(".innerBlock").addClass("autocomplete_open");
	
});

$(".close.ui-link, .call_banner .close").click(function(){
	$(".call_banner").hide();
	
});


	$(".whatsapp_icon").click(function(){
		$(".call_dropdown").slideToggle();
		$(".pageoverlay").slideToggle();
	});
		
		
		$(document).on('click touch', function(event) {
        if (!$(event.target).parents().addBack().is('.whatsapp_icon')) {
            $('.call_dropdown').hide();
        }
    });
		 $('.call_dropdown').on('click touch', function(event) {
        event.stopPropagation();
    });
		
	

// head

 var stickyFix = function () {
	 //Menu
            // var headrSticky = $('#headerCntr'),
                // scroll = $(window).scrollTop();
            // if (scroll > 87) {
                // headrSticky.addClass('fixed');
            // } else {
                // headrSticky.removeClass('fixed');
            // }
			
			//offer
			 var headrSticky = $('#openPopupBtn'),
                scroll = $(window).scrollTop();
            if (scroll > 87) {
                headrSticky.addClass('fixed');
            } else {
                headrSticky.removeClass('fixed');
            }
			//offer end
        }

        $(window).scroll(function () {
            stickyFix();
        });
		
		//
		 $('.mobileMenu').click(function(){
			$(this).toggleClass('active')
			$('.mobileMenuBox').toggleClass('openMenu')
			$('.pageoverlay').show();
			$('body').addClass('open-model')
		});
		$('.mobileMenuClose, .pageoverlay').click(function(){
			$('.mobileMenu').removeClass('active');
			$('.mobileMenuBox').removeClass('openMenu')
			$('body').removeClass('open-model')
			$('.pageoverlay').hide();
		});
		//
		
		// scroll sticky
				 $(window).scroll(function () {
        var headertop = $("#stickyTop").offset().top;
        if ($(window).scrollTop() > headertop) {
            $('.sticky').css('position', 'fixed');
            $('.sticky').css('top', '84px');
			 $('.sticky').css('width', '285px');
        }

        else if ($(window).scrollTop() <= headertop) {
            $('.sticky').css('position', '');
            $('.sticky').css('top', '');
			 $('.sticky').css('width', '');
        }
        if ($('.sticky').offset().top + $(".sticky").height() > $("#sticky_footer").offset().top) {
            $('.sticky').css('top', -($(".sticky").offset().top + $(".sticky").height() - $("#sticky_footer").offset().top));
        }

        //if ($('.load-more').height() + $('.load-more').offset().top > $('.sticky').height() + $('.sticky').offset().top) {
        //    $('.sticky').css({ position: 'fixed', top: $('.sticky').offset().top });
        //}
        //else {
        //    $('.sticky').css({ position: 'absolute', top: defaultSticky });
        //}
      
    });
	// scroll sticky end
	
	
//.sliderwithinfo
	$('.centerslider').slick({
	 // centerMode: false,
	 // centerPadding: '0px',
		infinite: true,
	  slidesToShow: 5,
	  slidesToScroll: 1,
	 responsive: [
        {
           breakpoint: 1100,
           settings: "unslick"
        }
     ]
	});
//slider info end	

//.sliderwithinfo use results
	$('.centersliderresults').slick({
	  centerMode: false,
		infinite: true,
	  centerPadding: '0px',
	  slidesToShow: 4,
	  slidesToScroll: 1,
	 responsive: [
        {
           breakpoint: 1100,
           settings: "unslick"
        }
     ]
	});
	

//Next slider 
$('.onlynextbtnslider').slick({
	dots: false,
	infinite: true,
	arrows: true,
	speed: 300,
	slidesToShow: 5,
	slidesToScroll: 1,
	 responsive: [
        {
           breakpoint: 1100,
           settings: "unslick"
        }
     ]
	 
});

	//slider2
$('.threeimageslider').slick({
  dots: false,
  infinite: true,
  arrows: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
   responsive: [
        {
           breakpoint: 1100,
           settings: "unslick"
        }
     ]

});


$('.addSlider').slick({
  infinite: true,
   dots: true,
   arrows: false,
    autoplay: true,
  slidesToShow: 1,
  slidesToScroll: 1
});

//


//testimonial slider
	$('.testimonialSlider').slick({
  dots: true,
  infinite: true,
  arrows: false,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  vertical:true,
   autoplay: true,
  verticalSwiping:true,
  
});


//testimonial slider
	$('.testimonialSliderMob').slick({
	dots: true,
	infinite: true,
	arrows: false,
	speed: 300,
	centerMode: true,
	autoplay: true,
	centerPadding: '50px',
	slidesToShow: 1,
	slidesToScroll: 1,
});


//Document ready end
});


$(window).scroll()

       

