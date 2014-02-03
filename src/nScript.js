/*
	nScript
*/
(function($){
	var _ua = navigator.userAgent.toUpperCase();
	$.extend($.browser,{
		// @ Mobile WebDevice
		// @ * Common
		isMobile : (_ua.indexOf("MOBILE") > -1)
		// @ * Mobile	| Android
		// @ * * Samsung | Galaxy
		// @ * * GalaxyS4 Ally
		,isGals4 : (_ua.indexOf("SHV-E300") > -1 && _ua.indexOf("SHV-E330"))
		// @ * * GalaxyS4 LTE
		,isGals4-lg : (_ua.indexOf("SHV-E300L") > -1)
		,isGals4-kt : (_ua.indexOf("SHV-E300K") > -1)
		,isGals4-sk : (_ua.indexOf("SHV-E300S") > -1)
		// @ * * GalaxyS4 LTE A
		,isGals4a-lg : (_ua.indexOf("SHV-E330L") > -1)
		,isGals4a-kt : (_ua.indexOf("SHV-E330K") > -1)
		,isGals4a-sk : (_ua.indexOf("SHV-E330S") > -1)
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
		,isIE8: (_ua.indexOf('MSIE 9')==-1&&__ua.indexOf('MSIE 8')>-1)
		,isIE7: (_ua.indexOf('MSIE 9')==-1&&__ua.indexOf('MSIE 8')==-1&&__ua.indexOf('MSIE 7')>-1)
		// @ * Apple Safari
		,isSF: (_ua.indexOf('SAFARI')>-1&&__ua.indexOf('CHROME')==-1)
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

	$.fn.nswap = function(){
		return this.each(function(){
			var img = $(this).children('img')
				,oimg = img.attr('src');

			// @ _off 일때만 swap
			var offimg = $(this).children('img[src*="_off."]');
			offimg.hover(function(){
				$(this).attr('src',oimg.replace('_off.','_on.'));
			},function(){
				$(this).attr('src',oimg.replace('_on.','_off.'));
			});

		});
	};

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
})(jQuery);