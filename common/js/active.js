$(function() {
	//現在のURLを配列で取得	  	
	var now = location.href.split('/');
	//親のディレクトリ取得
	var dir = now.slice(now.length-2,now.length-1);
	var reg = new RegExp('(id=¥"'+dir+'¥"|id='+dir+')');
	$('#accordion').each(function(){
		var txt = $(this).html();
		$(this).html(
			txt.replace(reg,'$1 class=¥"active¥"')
		);
	});
});