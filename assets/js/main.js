$( document ).ready(function() {

	var $grid = $('.items').isotope({
	// options
	});
	// filter items on button click
	$('#items-btm').on( 'click', 'button', function() {
		$('#items-btm button').removeClass('active');
		$(this).addClass('active');	

		var filterValue = $(this).attr('data-filter');
		$grid.isotope({ filter: filterValue });
	});
	// owl-carousel
              var owl = $('.owl-carousel');

              owl.owlCarousel({
                loop: true,
                items: 1,
                nav: false,
                navigation: true,
                autoplay:true,
                autoplayTimeout:2000,
                autoplayHoverPause:true,
                animateOut: 'slideOutDown',
                animateIn: 'flipInX',
              })
              owl.on('translate.owl.carousel',function(){

              	$('.testimonial .person h3').removeClass('animated fadeInDown').css("opacity","0.2");
              	$('.testimonial .person p').removeClass('animated fadeInDown').css("opacity","0.2");
              	$('.testimonial .comment p').removeClass('animated fadeInUp').css("opacity","0.2");
              });
              owl.on('translated.owl.carousel',function(){

              	$('.testimonial .person h3').addClass('animated fadeInDown').css("opacity","1");
              	$('.testimonial .person p').addClass('animated fadeInDown').css("opacity","1");
              	$('.testimonial .comment p').addClass('animated fadeInUp').css("opacity","1");
              });
    // wow js          
    new WOW().init();
    //counterup..
    $('.counter').counterUp({
         delay: 10,
         time: 9000
    });

    $(".title h2").append("<p class='hr-40'></p>");

    // UI Top
    $().UItoTop({ easingType: 'easeOutQuart' });

    		// var phrases = [
    		// 'I’M Rakib Hossain',
    		// 'I’M Rakib Hossain',
    		// 'I’M Rakib Hossain',
    		// ];
    		// var len = phrases.length;
    		// var index = 0;
    		
    		// var ctrl = bubbleText({
    		// element: $('#bubble'),
    		// newText: phrases[index++],
    		// letterSpeed: 7,
    		// repeat: Infinity,
    		// timeBetweenRepeat: 3000,
    		// callback: function() {
    		// this.newText = phrases[index++ % len];
    		// },
    		// });
    		
});