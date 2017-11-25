// nav

$(window).on('scroll', function () {
            if ($(window).scrollTop() > 600) {
                $('.navbar-fixed-top').addClass('menu-bg');
            } else {
                $('.navbar-fixed-top').removeClass('menu-bg');
            }
        });

// hero
$('#hero').vegas({
	delay:3500,
	shuffle:true,
	
	timer: false,
	slides:[
	{src:'assets/img/1.jpg'},
	{src:'assets/img/2.jpg'},
	{src:'assets/img/3.jpg'},
	{src:'assets/img/4.jpg'}
	],
	transition: 'blur',
	transitionDuration:1500
});

// gallery

$(document).ready(function(){

    $(".gallery-nav a.button").click(function(event){
    	event.preventDefault();
        var value = $(this).attr('data-filter');
        
        if(value == "all")
        {
            //$('.filter').removeClass('hidden');
            $('.item').show('1000');
        }
        else
        {
//            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
//            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
            $(".item").not('.'+value).hide('3000');
            $('.item').filter('.'+value).show('3000');
            
        }
    });

});