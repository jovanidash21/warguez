$(document).ready(function()
{

	var windowHeight = $(window).height();
	var htmlHeight = $(document).height();
	if (windowHeight == htmlHeight)
	{
		$(".footer_bar").addClass("footer_bar_absolute");
	}
	else
	{
		$(".footer_bar").removeClass("footer_bar_absolute");
	}	

	$("#trigger").click(function()
	{
		$(".menu_bar_nottrigger").slideToggle(400, function()
		{
			$(this).toggleClass("menu_bar_nottrigger_expanded").css("display", "");
		});
	});

	$(".unmask").on('click', function(){
  
  	if($(this).prev('input').attr('type') == 'password')
  	{
		changeType($(this).prev('input'), 'text');
		$(this).css({"backgroundColor" : "#cb061a"});
  	}
  	else
  	{	
    	changeType($(this).prev('input'), 'password');
    	$(this).css({"backgroundColor" : "#0f9377"});
  	}
  
  	return false;
	});
	
	$("#confirmpassword").keyup(function(){
		if ($(this).val() == $("#password").val())
		{
			$("#verify_confirmpassword").addClass("hidden");
		}
		else
		{
			$("#verify_confirmpassword").removeClass("hidden");
		}
	});

	var headerHeight = $(".menu_bar").offset().top;
	$(".menu_bar").wrap('<div class="menu_bar_placeholder"></div>');
	$(".menu_bar_placeholder").height($(".menu_bar").outerHeight());
	$(window).scroll(function()
	{
		var scrollHeight = $(window).scrollTop();
		if (scrollHeight >= headerHeight)
		{
			$(".menu_bar").addClass("menu_bar_fixed");
		}
		else
		{
			$(".menu_bar").removeClass("menu_bar_fixed");
		}
	});

});