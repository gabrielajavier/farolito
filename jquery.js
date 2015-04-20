$(".circulo-exterior").hover(function(){
	$(this).toggleClass("text-circle-hover");
})


$(window).scroll(function(){
	var prueba = $(this).scrollTop();
	if (prueba > $(".menu").height()) {
		$(".menu").addClass("menu-fixed");
		
	}
		else if (prueba < 714) {
		$(".menu").removeClass("menu-fixed");
	}
});