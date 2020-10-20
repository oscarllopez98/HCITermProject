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

//Function for opening a specified user's IRB Training Certification
function openIRB(personNum){
	switch (personNum) {
		//Open Oscar's cert
		case 1:
			window.open("images/IRB/certificateOscar_PDF.pdf","_blank");
			break;
		//Open Bryan's cert
		case 2:
			window.open("images/IRB/bryan_smith_certificate_PDF.pdf","_blank");
			break;
		//Open Holly's cert
		case 3:
			window.open("images/IRB/certificate-_Holly_Northen_PDF.pdf","_blank");
			break;
		//Open Dakota's cert
		case 4:
			window.open("images/IRB/certificateDakota_PDF.pdf","_blank");
			break;
		//Open Cass's cert
		case 5:
			window.open("images/IRB/certificateClayton_PDF.pdf","_blank");
			break;
		// TODO: Add some error function
		default:
			console.log("Could not open IRB Certification!");
			break;
	}
}
