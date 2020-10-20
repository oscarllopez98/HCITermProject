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

			//Need to custom click video so it appears for Milestone2
			if (changeTo == 2){
				$("#pill-video").click();
			}

		}
	});
}

function openIRB(personNum){

	switch (personNum) {
		//Open Oscar's cert
		case 1:
			window.open("images/certificateOscar_PDF.pdf","_blank");
			break;
		//Open Bryan's cert
		case 2:
			window.open("images/bryan_smith_certificate_PDF.pdf","_blank");
			break;
		//Open Holly's cert
		case 3:
			break;
		//Open Dakota's cert
		case 4:
			break;
		case 5:
			break;
		//Open Cass's cert
		default:
			break;

	}

}
