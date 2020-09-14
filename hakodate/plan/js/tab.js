// JavaScript Document

		/*
		クリックしたときに点線が出るのを防ぐ（IE用）
		*/
		$(function(){
					$("ul.tabNavi li a").focus(function(){
						$(this).blur();
					});
		})

		/*
		タブボタンの on off と タブの中身の切り替え　
		*/
		$(function(){
				   		//初期設定
						$("a.selected img").attr("src",$("a.selected img").attr("src").replace(/^(.+)(\.[a-z]+)$/,"$1_on$2"));
					    $("#tabContainer div:not("+$("ul.tabNavi li a.selected").attr("href")+")").hide();
						//クリックされた時の処理
						$("ul.tabNavi li a").click(function(){
							var name1=$("ul.tabNavi li a.selected").attr("href");//今のul.tabNavi li a.selectedのhrefの値を保存しておく
							$("a.selected img").attr("src",$("a.selected img").attr("src").replace(/^(.+)_on(\.[a-z]+)$/,"$1$2"));
							$("ul.tabNavi li a").removeClass("selected");
							$(this).addClass("selected");
							$("img",this).attr("src",$("img",this).attr("src").replace(/^(.+)_on(\.[a-z]+)$/,"$1$2"));/*クリックした画像はmouseoverで_onが付いているので、そのままだと_on_onになってしまい画像のパスがおかしくなるので今ついている_onをとってから_onを付けなおす*/
							$("img",this).attr("src",$("img",this).attr("src").replace(/^(.+)(\.[a-z]+)$/,"$1_on$2"));
							$(name1).fadeOut(500,function(){//保持しておいたhrefの値のdivがフェードアウトしたら､クリックされたボタンのhrefの値のdivをフェードインする
									var name2=$("ul.tabNavi li a.selected").attr("href");//クリックされたul.tabNavi li a.selectedのhrefの値を保持
									$(name2).fadeIn(500);
						});
						return false;
					})
		})
		
		/*
		マウスオーバーの処理
		*/
		$(function(){
				   $("ul.tabNavi a").mouseover(function(){/*セレクタがついているかの条件判定はマウスオーバーとマウスアウトのそれぞれに設定する。マウスオーバーだけだとクリックしたあとマウスアウトするときに_onが外されてoff画像になってしまう為*/
						var className = $(this).attr('class');
						if(className!='selected'){
							$("img",this).attr("src",$("img",this).attr("src").replace(/^(.+)(\.[a-z]+)$/, "$1_on$2"))									
						}
						}).mouseout(function(){
						var className2 = $(this).attr('class');
						if(className2!='selected'){
								$("img",this).attr("src",$("img",this).attr("src").replace(/^(.+)_on(\.[a-z]+)$/,"$1$2"))
						}
					})
		})