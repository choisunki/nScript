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
		// @ * Apple Safari
		// @ * Google Chrome
	});
})(jQuery);