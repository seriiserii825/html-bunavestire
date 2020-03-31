$(function () {
	let searchInput = function(){
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
	};
	searchInput();

	let menu = function(){
		$('#js-toggle-menu').on('click', function () {
			$('#js-main-menu').slideToggle();
		});
	};
	menu();

	$(window).on('scroll', function () {
		let windowScrollTop = $(this).scrollTop();
		$('#js-intro').css("transform", "translateY("+ windowScrollTop / 2 +"px)");
	});

	let imagePopup = function(){
		$('#js-posts').magnificPopup({
			delegate: '.posts__link', // the selector for gallery item
			type: 'image',
			gallery: {
				enabled:true
			}
		});
	};
	imagePopup();

	let widgetGallery = function(){
		$('#js-widget-gallery').magnificPopup({
			delegate: 'a', // the selector for gallery item
			type: 'image',
			gallery: {
				enabled:true
			}
		});
	}
	widgetGallery();

	let toTop = function () {
		$('#js-to-top').on('click', function () {
			$('html, body').animate({
				scrollTop: 0
			}, 1000);
		});
	};
	toTop();

});



