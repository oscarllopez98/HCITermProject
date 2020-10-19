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


//Function that changes milestone content
function toContent(changeTo){
	//Hide all milestone content on page load
	$(".components").on("click", "*", function(){
		$('#wrapper').find('.content:visible').each(function(){
			$(this).hide();
		});

		//If switching back to project description
		if (changeTo == -1){
			$("#project_description").show();
		}
		//Else, switch to appropriate milestone
		else {
			$("#milestone" + changeTo + "-content").show();

			if (changeTo == 2){
				$("#pill-video").click();
			}

		}
	});
}
