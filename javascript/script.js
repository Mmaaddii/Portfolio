

// Scroll To Top

	// Get Scroll Y Value

	window.addEventListener("scroll", function() {
		const scroller = document.querySelector('#scrollButton');
		if (window.scrollY > 800) {
			scroller.classList.remove("d-none");
		}else {
			scroller.classList.add("d-none");
		}
	});

	// Go Top Function

	function toTop() {
		window.scrollTo({
			top: 0, 
	  		behavior: 'smooth'
		});
	}


// Spinner Loader

window.addEventListener("load", function() {
	const loader = document.querySelector('#loader');
	console.log(loader);
	loader.classList.add("d-none");
});