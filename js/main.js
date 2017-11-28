// nav

// $(window).on('scroll', function () {
//             if ($(window).scrollTop() > 600) {
//                 $('.navbar-fixed-top').addClass('menu-bg');
//             } else {
//                 $('.navbar-fixed-top').removeClass('menu-bg');
//             }
// });



// navigation

jQuery('body').bind('click', function(e) {
    if(jQuery(e.target).closest('.navbar').length == 0) {
        // click happened outside of .navbar, so hide
        var opened = jQuery('.navbar-collapse').hasClass('collapse in');
        if ( opened === true ) {
            jQuery('.navbar-collapse').collapse('hide');
        }
    }
});

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

// gallery filter

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

// parallax
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


// scroll reveal

// window.sr = ScrollReveal();

// sr.reveal(' #o_meni .container, .gallery ,  #retouch .container',{ 
//     duration: 1000,
//     origin:'top',
//     distance: '20px',
//     viewFactor: 0.1,
//     reset:true
//      });
// sr.reveal('#testimonials .container',{ 
//     duration: 1000,
//     origin:'right',
//     distance: '200px',
//     viewFactor: 0.2,
//     reset:true
//      });


// sr.reveal('#blog div.col-sm-6:first-child',{ 
//     duration: 1000,
//     origin:'left',
//     distance: '200px',
//     viewFactor: 0.1,
//     reset:true
//      })
// sr.reveal('#blog div.col-sm-6:nth-child(2)',{ 
//     duration: 1000,
//     origin:'right',
//     delay:300,
//     distance: '200px',
//     viewFactor: 0.1,
//     reset:true
//      });
// sr.reveal('#shop .container',{ 
//     duration: 1000,
//     origin:'left',
//     distance: '200px',
//     viewFactor: 0.2,
//     reset:true
//      });

// sr.reveal('#contact .container',{ 
//     duration: 1000,
//     origin:'bottom',
//     distance: '200px',
//     viewFactor: 0.2,
//     reset:true
//      });

  
