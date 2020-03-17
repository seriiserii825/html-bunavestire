$(function () {
	$('#js-open').on('click', function () {
		$('#js-search input').show();
		$(this).hide(10);
		$('#js-close').show(20);
		$('#js-search').css('width', '90%');
	});
	$('#js-close').on('click', function () {
		$('#js-search input').hide();
		$(this).hide(10);
		setTimeout(function () {
			$('#js-search input').hide();
		},1);
		$('#js-open').show(20);
		$('#js-search').css('width', '10%');
	});
	$('#js-toggle-menu').on('click', function () {
		$('#js-main-menu').slideToggle();
	});
});



