(function($) {

	"use strict";

	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	$('#sidebarCollapse').on('click', function () {
      $('#sidebar').toggleClass('active');
  });

})(jQuery);


//Click to change content
function fadeChange(changeTo){
	$(".components").on("click", "*", function(){
		$('#wrapper').find('.content:visible').each(function(){
	  	///$(this).fadeOut("fast");
			$(this).hide();
		});

		if (changeTo == -1){
			//$("#project_description").delay(700).fadeIn("slow");
			$("#project_description").show();
		}
		else {
			//$("#milestone" + changeTo + "-content").delay(700).fadeIn("slow");
			$("#milestone" + changeTo + "-content").show();
		}
	});
}