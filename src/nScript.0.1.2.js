/* nScript Javascript Box v0.1.2 | on jQuery(version 1.8.1) | Choi Sunki <iru@nate.com> */

;(function($){
	var _ua = navigator.userAgent.toUpperCase();
	$.extend($.browser,{
		// @ Mobile WebDevice
		// @ * Common
		isMobile : (_ua.indexOf("MOBILE") > -1)
		// @ * Mobile	| Android
		// @ * * Samsung | Galaxy
		// @ * * GalaxyS4 Ally
		,isGals4 : (_ua.indexOf("SHV-E300") > -1 && _ua.indexOf("SHV-E330") > -1)
		// @ * * GalaxyS4 LTE
		,isGals4lg : (_ua.indexOf("SHV-E300L") > -1)
		,isGals4kt : (_ua.indexOf("SHV-E300K") > -1)
		,isGals4sk : (_ua.indexOf("SHV-E300S") > -1)
		// @ * * GalaxyS4 LTE A
		,isGals4alg : (_ua.indexOf("SHV-E330L") > -1)
		,isGals4akt : (_ua.indexOf("SHV-E330K") > -1)
		,isGals4ask : (_ua.indexOf("SHV-E330S") > -1)
		// @ * Mobile	| Apple
		,isIphone : (_ua.indexOf("IPHONE") > -1)
		// @ * Pad&Tab	| Android
		,isNexus : (_ua.indexOf("NEXUS") > -1)
		,isGalaxyTab : (_ua.indexOf("SHW-M180") > -1)
		,isGalaxyTab10 : (_ua.indexOf("SHW-M380W") > -1)
		// @ * Pad&Tab	| Apple

		// @ PC WebBrowser
		// @ * MS Explorer
		,isIE: ($.browser.msie)?true:false
		,isIE10: (_ua.indexOf('MSIE 10')>-1)
		,isIE9: (_ua.indexOf('MSIE 9')>-1)
		,isIE8: (_ua.indexOf('MSIE 9')==-1&&_ua.indexOf('MSIE 8')>-1)
		,isIE7: (_ua.indexOf('MSIE 9')==-1&&_ua.indexOf('MSIE 8')==-1&&_ua.indexOf('MSIE 7')>-1)
		// @ * Apple Safari
		,isSF: (_ua.indexOf('SAFARI')>-1&&_ua.indexOf('CHROME')==-1)
		// @ * Google Chrome
		,isCR: (_ua.indexOf('CHROME')>-1)
		// @ * Opera
		,isOP: (_ua.indexOf('OPERA')>-1)
		// @ * Mozilla FireFox
		,isFF: (_ua.indexOf('FIREFOX')>-1)
	});

	// @ 140107 Choi Sunki
	// @ background Show/Hide
	// @ $(obj).nholder();
	$.fn.nholder = function(options){
		return this.each(function(){
			$(this).bind({
				'focusin':function(){
					$(this).addClass('clearHolder')
				},
				'focusout':function(){
					var len = $(this).val().length;
					len > 0 ? $(this).addClass('clearHolder') : $(this).removeClass('clearHolder');
				}
			})
		});
	};

	// @ 140107 Choi Sunki
	// @ Swap Image
	// @ $(obj).nswap();
	// @ 14026 | KeyBoard event add | CSK
	$.fn.nswap = function(opts){
		var defaults = {
			onClass		: '_on'
			,offClass	: '_off'
		};

		var options = $.extend(defaults, opts);

		return this.each(function(){
			var img = $(this).children('img')
				,oimg = img.attr('src');
			
			var $pause = options.pauseFunc == true ? 0:1;

			// @ _off 일때만 swap
			var offimg = $(this).children('img[src*="' + options.offClass + '."]');
	
			offimg.bind('mouseenter mouseleave',function(e){
				// Mouse Event
				if(e.type === 'mouseenter') {
					$(this).attr('src',oimg.replace('' + options.offClass + '.','' + options.onClass + '.'));
				} else if(e.type === 'mouseleave') {
					$(this).attr('src',oimg.replace('' + options.onClass + '.','' + options.offClass + '.'));
				}
			}).parent().bind('focusin focusout',function(e){
				// KeyBoard Event
				if(e.type === 'focusin') {
					$(this).children().attr('src',oimg.replace('' + options.offClass + '.','' + options.onClass + '.'));
				} else if(e.type === 'focusout') {
					$(this).children().attr('src',oimg.replace('' + options.onClass + '.','' + options.offClass + '.'));
				}
			})
			.end();
		});
	};

	// @ 140107 Choi Sunki
	// @ Toggle Event
	// @ $(obj).ntoggle();
	$.fn.ntoggle = function(){
		return this.each(function(){
			if(!$(this).hasClass('ntgwrap')) $(this).addClass('ntgwrap');

			var __wrap = $(this);
			var __trigger	= __wrap.find('.explab');
			var __expander	= __wrap.find('.expand');

			if(!__expander.is(':hidden')) __expander.hide();

			__trigger.bind('click',function(e){
				e.preventDefault();

				if(!$(this).hasClass('on')) {
					__wrap.addClass('on');
					__trigger.addClass('on');
					__expander.addClass('on');
					if(__expander.is(':hidden')) __expander.show();
				} else {
					__wrap.removeClass('on');
					__trigger.removeClass('on');
					__expander.removeClass('on');
					if(!__expander.is(':hidden')) __expander.hide();
				}
			})
		});
	};

	// @ 14026 Choi Sunki
	// @ tabUIO Event
	// @ $(obj).tabUIO();
	$.fn.tabUIO = function(opts){
		var defaults = {
			tabs		: '.tabs a'
			,pans		: '.pans'
			,actClass	: 'active'
		};

		var options = $.extend(defaults, opts);

		return this.each(function(){
			var _wrap	= $(this)
				,_tabs	= _wrap.find(options.tabs)
				,_pans	= _wrap.find(options.pans);

			_tabs.on('click',function(e){
				e.preventDefault();
				var idx = $(this).parent().index();
				_tabs.parent().removeClass(options.actClass).eq(idx).addClass(options.actClass);
				_pans.removeClass(options.actClass).eq(idx).addClass(options.actClass);
			})
		});
	};
})(jQuery);