// JavaScript Document
$(document).ready(function() {
	var menu_open_flag = false;
	
	//Read moreをボタンにする
    $('.open_read').each(function(){
        $(this).before('<div class="open_button">Read more</div>');
    });
	
	//ウィンドウ幅によってSP・PCメニューを切り替える
	$(window).resize(toggleWindow);
	toggleWindow();
	
	//スクロールでメニュー固定
	$(window).scroll(fixedMenu);
	
	//スマホメニューアイコンクリックで下階層表示
	$('.sp-menu-icon').click(toggleSpMenu);
	$('.menu-onlineshop').click(toggleSpMenu);
	
	//リンクホバーで透過
	$('.menu-ul a li').hover(function() {
		$(this).fadeTo(170, 0.3);
	},function() {
		$(this).fadeTo(170, 1.0);
	});
	$('.fadelink').hover(function() {
		$(this).fadeTo(170, 0.3);
	},function() {
		$(this).fadeTo(170, 1.0);
	});
	
	//Read moreボタンクリックで非表示テキストを表示する
	$('.open_button').on('click', function() {
		$(this).hide();
		$(this).next('.open_read').animate({
			height: 'toggle',
			opacity: 'toggle'
		}, 1000);
	});

	//メニューリンククリックで任意の場所までスクロール
	$('.menu-ul > a[href^=#]').click(function() {
		var href= $(this).attr("href");
		var target = $(href === "#" || href === "" ? 'html' : href); //移動先を取得
		var position = target.offset().top;
		$('body,html').animate({scrollTop: position}, 400, 'swing');
		//スマホメニューの場合メニューを閉じる
		if ($('.sp-menu-icon').is(':hidden') === false) {
			toggleSpMenu();
		}
		return true;
	});

	
	
	//ウィンドウ幅によってSP・PCメニューを切り替える
	function toggleWindow() {
		var users_window = $(window).width();
		var sp_window = 768;
		if( users_window >= sp_window ){
			$('.menu-ul').show();
			fixedMenu();
		}
		else {
			$('.menu-ul').hide();
			$('#hide-menu').hide();
		}
	}
	
	//スマホメニューでない場合メニューを上部固定する
	function fixedMenu() {
		var nav = $('#hide-menu');
		var main_top = $('#main').offset().top;	
		//スマホメニューでない場合メニューをフェード固定する
		if ($('.sp-menu-icon').is(':hidden') === true) {
			if ($(window).scrollTop() > main_top) {
				nav.fadeIn(300);
			}
			else {
				nav.fadeOut(300);
			}
		}
	}
	
	//スマホメニューボタンクリックでメニューを開閉する
	function toggleSpMenu() {
		if( !menu_open_flag ){
			menu_open_flag = true;
			$('.menu-ul').fadeIn(300);
		}
		else {
			$('.menu-ul').fadeOut(300);
			menu_open_flag = false;
		}
		return true;
	}	
});