$(function () {
	$('#js-open').on('click', function () {
		$('#js-search input').fadeIn();
		$(this).fadeOut(10);
		$('#js-close').fadeIn(200);
	});
	$('#js-close').on('click', function () {
		$('#js-search input').fadeOut();
		$(this).fadeOut(10);
		$('#js-open').fadeIn(200);
	});
});



