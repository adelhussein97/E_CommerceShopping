// When the user scrolls the page, execute myFunction
window.onscroll = function () {
	myFunction();
};

// Get the navbar
var navbar = document.getElementsByClassName("navbar")[0];

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position.
// Remove "sticky" when you leave the scroll position
function myFunction() {
	if (window.pageYOffset >= sticky) {
		navbar.classList.add("sticky");
	} else {
		navbar.classList.remove("sticky");
	}
}
// start slider
const sliderContainer = document.getElementById("slider-container");
const slider = document.getElementById("slider");

let count = 0;
let counter = 0;
let step = 0;

function StartSlider() {
	count = slider.childElementCount;
	step = sliderContainer.clientWidth;
	slider.style.width = `${100 * count}%`;
}
StartSlider();

function next() {
	if (counter < count - 1) counter++;
	move();
}

function prev() {
	if (counter > 0) counter--;
	move();
}
function move() {
	slider.style.transform = `translateX(${-step * counter}px)`;
	step = 942;
}

// end slider
