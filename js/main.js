// nav

// $(window).on('scroll', function () {
//             if ($(window).scrollTop() > 600) {
//                 $('.navbar-fixed-top').addClass('menu-bg');
//             } else {
//                 $('.navbar-fixed-top').removeClass('menu-bg');
//             }
// });

// hero
$('#hero').vegas({
	delay:2500,
	shuffle:true,
	
	timer: true,
	slides:[
	{src:'assets/img/1.jpg'},
	{src:'assets/img/2.jpg'},
	{src:'assets/img/3.jpg'},
	{src:'assets/img/4.jpg'}
	],
	transition: 'blur2',
	transitionDuration:1000
});

// gallery



$(document).ready(function(){

	

    $(".gallery-nav a.button").click(function(event){
    	event.preventDefault();
        var value = $(this).attr('data-filter');
        
        if(value == "all")
        {
            //$('.filter').removeClass('hidden');
            $('.item').show('2000');
        }
        else
        {
//            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
//            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
            $(".item").not('.'+value).hide('3000').addClass('.none');
            $('.item').filter('.'+value).show('3000').addClass('.flex');
            
        }
    });


$('#gallery').parallax({imageSrc: 'assets/img/gallery-background.jpg'});
$('#retouch').parallax({imageSrc: 'assets/img/retouch-background.jpg'});
$('#shop').parallax({imageSrc: 'assets/img/shop-background2.jpg'});


	var $container = $(".masonry-container");
	$container.imagesLoaded(function () {
		$container.masonry({
			columnWidth: ".item",
			itemSelector: ".item"
		});
		
	});

	//testimonials
  $('#quote-carousel').carousel({
    pause: true, interval: 7000,
  });

});





  
