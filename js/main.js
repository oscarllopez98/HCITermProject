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

/*
function m3_navbar(linkNum){

	$("#m3-content-0").css('opacity','0');
	$("#m3-content-1").css('opacity','0');
	$("#m3-content-2").css('opacity','0');
	$("#m3-content-3").css('opacity','0');
	$("#m3-content-4").css('opacity','0');

	switch(linkNum) {

		case 0:
			console.log("m3_0");
			$("#m3-content-0").css('opacity','1');
			break;
		case 1:
			console.log("m3_1");
			$("#m3-content-1").css('opacity','1');
			break;
		case 2:
			console.log("m3_2");
			$("#m3-content-2").css('opacity','1');
			break;
		case 3:
			console.log("m3_3");
			$("#m3-content-3").css('opacity','1');
			break;
		case 4:
			console.log("m3_4");
			$("#m3-content-4").css('opacity','1');
			break;
		default:
			console.log("m3_default");
			break;
	}
}
*/
