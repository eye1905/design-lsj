$(document).ready(function() {
	// when ready on load
	if ($(window).width() < 1000) {
		$(".nav-item1").css("margin-left", "0px");
		$(".page-slide").hide();
		$(".card-rounded").css("width", "22rem");
		$(".card-rounded").css("margin-left", "5px");
		$(".row-category").hide();
		$(".d-inline-flex").css("min-width", "100%");
		$("#row-content").css("margin-top", "-60%");
		$(".card-middle").css("min-height", "80%");
		$(".card-service").css("width", "80%");
		$(".card-service").css("margin-left", "10%");
		//$("#row-card-content").addClass("text-center");
	}
	else {
		$(".nav-item1").css("margin-left", "10px");
		$(".page-slide").show();
		$(".card-rounded").css("width", "17rem");
		$(".card-rounded").css("margin-left", "20px");
		$(".row-category").show();
		$(".d-inline-flex").css("min-width", "545px");
		$("#row-content").css("margin-top", "-40%");
		$(".card-service").css("width", "100%");
	}

	// when ready but inframe inspect
	$(window).resize(function() {
		if ($(window).width() < 1000) {
			$(".nav-item1").css("margin-left", "0px");
			$(".page-slide").hide();
			$(".card-rounded").css("width", "22rem");
			$(".card-rounded").css("margin-left", "5px");
			$(".row-category").hide();
			$(".d-inline-flex").css("min-width", "100%");
			$("#row-content").css("margin-top", "-60%");
			$(".card-middle").css("min-height", "80%");
			$(".card-service").css("width", "80%");
			$(".card-service").css("margin-left", "10%");
			//$("#row-card-content").addClass("text-center");
		}
		else {
			$(".nav-item1").css("margin-left", "10px");
			$(".page-slide").show();
			$(".card-rounded").css("width", "17rem");
			$(".card-rounded").css("margin-left", "20px");
			$(".row-category").show();
			$(".d-inline-flex").css("min-width", "545px");
			$("#row-content").css("margin-top", "-40%");
			$(".card-service").css("width", "100%");
		}
	});
});