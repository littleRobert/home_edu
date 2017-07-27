(function($){
	$.fn.initShape = function(){
		var _this = $(this);
		var width, height;
		width = $(".palyer-con>img").css("width");
		height = $(".palyer-con>img").css("height");
		_this.css({"height":height,"width":width});
		$(window).resize(function(){
			width = $(".palyer-con>img").css("width");
			height = $(".palyer-con>img").css("height");
			_this.css({"height":height,"width":width});
		});
	}
	$.fn.clickGrade = function(){
		var _this = $(this)
		var fa = $(this).children("a");
		$(fa).click(function(){
			$(_this).children(".arrow").css("display","none");
			$(_this).children("").each(function(){
				$(fa).removeClass("selected");
			})
			$(fa).addClass("selected").css("color","white");
			$(_this).children(".arrow").css("display","block");
		});
	}
})(jQuery)

