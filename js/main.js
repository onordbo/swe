$(document).ready(function() {
	console.log("DOM ready!")
	//Animate viewport on click
	$('discover').click(function() {
		console.log("clicked discover")
		$('html, body').animate({
			scrollTop: $('#first').offset().top // Set destination target
		}, 600); // Set the animation duration
	});
});

// Prototype alert
var framerDisclaimer = function () {
	swal({
	  title: "Ahoy!",
	  text: "This prototype is best viewed in it's might and glory on an iPhone 6 with <a href='https://itunes.apple.com/us/app/frameless-full-screen-web/id933580264?mt=8' target='_blank'>Frameless</a> or a desktop web browser.",
	  html: true,
	  showCancelButton: true,
	  confirmButtonText: "Show me the stuff." });
}

/*
// Do stuff on mobile
$(window).resize(function(){
	if ($(window).width() <= 1024){	
		// Do stuff
	}
});

*/

console.log('%cHey there! I can see you found my code. If you like designers who code, we should talk! Email me on hello@oyvind.co or check out some more of my code on my GitHub account – http://github.com/onordbo ', 'color: blue; font-size: 22px; font-family: sans-serif;');