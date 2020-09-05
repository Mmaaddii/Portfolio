




var button = document.getElementById("scrollButton");




// Hide Show Scroll Top Button Function

window.onscroll = function() {

	// console.log(window.scrollY);

	if (window.scrollY > 800) {
		button.classList.remove("d-none");
	}else {
		button.classList.add("d-none");
	}

}

// Scroll To Top Function

function toTop() {


		// window.scroll({
		//   top: 0, 
		//   behavior: 'smooth'
		// });

		$(window).scrollTop(0);


}