var nbox = {};
nbox.resEngine =  {
	init	: function() {

		$(window).resize(function(){
			resEngine.addPrefix('html','njean')
		});
		resEngine.addPrefix('html','njean');
	}
	,wx		: $(window).width()
	,device : ''
	,prefix : function( str ){
		if(!str) str = 'resEngine'
		else str = str;
		return str;
	}
	,calc	: function(){
		var wx = $(window).width();
		var deviceClass;
		if(wx < 641)					resEngine.device = 'MBSize';
		else if(wx > 640 && wx < 1025)	resEngine.device = 'PDSize';
		else if(wx > 1024)				resEngine.device = 'WBSize';
		deviceClass = resEngine.device;
		return deviceClass;
	}
	,addPrefix : function(target, sizeName){
		var className = this.prefix( sizeName );
		var sizeString = this.calc();
		$('html').altClass(className+'*', className + sizeString);
	}
};

var resEngine;
if(!typeof resEngine === "Object") resEngine = {};
resEngine = nbox.resEngine;