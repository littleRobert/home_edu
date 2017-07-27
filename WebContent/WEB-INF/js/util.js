$(document).ready(function() {
	//年级选择
	$(".grade a").click(function(){
		$(".grades .arrow").css("display","none");
		$(".grades a").each(function(){
			$(this).removeClass("selected");
		})
		$(this).addClass("selected").css("color","white");
		$(this).parent().children(".arrow").css("display","block");
	});
	
})
