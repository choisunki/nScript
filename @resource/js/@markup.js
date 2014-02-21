var markup = {
	init:function(){
		this.gnb();
	},
	gnb:function(){
		var $stage = $('#gnbStage');
		var $cur = $('body').attr('class');
		$stage.load('./@gnb.html #gnb',function(){
			$('#gnb .'+$cur).addClass('active');
		});
	}
};

$(document).ready(function(){
	markup.init();
});