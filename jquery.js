
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

/*MENU RESPONSIVE MOVIL*/

$(document).ready(main);
var contador = 1;

function main(){
	$(".navbar-header").click(function(){
		if (contador ==1){
			$(".navbar-collapse").animate({
				left:"0"
			});
			contador = 0;
		} else{
			contador = 1;
			$("navbar-collapse").animate({
				left: "-100%"
			});
		}

	})
}
