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
		$(".card-middle").css("height", "80%");
	}
	else {
		$(".nav-item1").css("margin-left", "10px");
		$(".page-slide").show();
		$(".card-rounded").css("width", "17rem");
		$(".card-rounded").css("margin-left", "20px");
		$(".row-category").show();
		$(".d-inline-flex").css("min-width", "545px");
		$("#row-content").css("margin-top", "-40%");
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
			$(".card-middle").css("height", "80%");
		}
		else {
			$(".nav-item1").css("margin-left", "10px");
			$(".page-slide").show();
			$(".card-rounded").css("width", "17rem");
			$(".card-rounded").css("margin-left", "20px");
			$(".row-category").show();
			$(".d-inline-flex").css("min-width", "545px");
			$("#row-content").css("margin-top", "-40%");
		}
	});

	jQuery.fn.carousel.Constructor.TRANSITION_DURATION = 1000  // 2 seconds
});