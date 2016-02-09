var w = $('.galimg').width();
$('.galimg').height(w);


$('.galimg img').each(function () {
	
	var imgw = $(this).width();
	var imgh = $(this).height();


	if ( imgh > imgw ) {
		$(this).addClass('portrait');
		var x = $(this).height() - w;
		$(this).css('bottom', x/2 );
	}
	else {
		$(this).addClass('landscape');
		var x = $(this).width() - w;
		$(this).css('right', x/2 );
	};


});









