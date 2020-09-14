$(function(){
	$page = jQuery.url.attr('file');
	if(!$page) {
		$page = 'index.html';
	}
	$('#menu li img').each(function () {
		var $href  = $(this).parent('a').attr('href');
		var onMenu = $(this).attr('src').replace('_of.', '_on.');
		var ofMenu = $(this).attr('src').replace('_on.', '_of.');
		if (($href == $page) || ($href == '')) {
			$(this).attr('src', onMenu);
		} else {
			$(this).attr('src', ofMenu);
		}
	});
});