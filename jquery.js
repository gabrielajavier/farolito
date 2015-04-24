
/*MENU*/

$(window).scroll(function(){
	var prueba = $(this).scrollTop();
	if (prueba > 550) {
		$(".navbar").addClass("scroll");
		$(".farolito-icon").addClass("scroll");
		$(".icon-movil").addClass("scroll");
	}
		else if (prueba < 550) {
		$(".navbar").removeClass("scroll");
		$(".farolito-icon").removeClass("scroll");
		$(".icon-movil").removeClass("scroll");
	 }
});



/*CIRCULO METODOLOGIA*/

$(document).ready(function() {
	$(".circulo-exterior").hover(function(){
		$(".text-circle").toggleClass("hidden");
		$(".text-circle-hover").toggleClass("hidden");

	});
});

