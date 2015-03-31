	//callback
	$(initModal);
	// ad interactive modal content according image clicked
	function initModal(){
		$("#project1").on("show.bs.modal", function (event) {
	  	var image = $(event.relatedTarget); // Button that triggered the modal
		var modal = $(this);
		var modaImg = modal.find('.img-responsive') ;
		modaImg.attr("src" , image.attr("src"));
		modaImg.attr("alt" , image.attr("alt"));
	});
	}