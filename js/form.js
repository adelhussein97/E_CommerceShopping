// start form
let click_sign = document.getElementById("in");
let click_Register = document.getElementById("up");

let sign_in = document.getElementById("one");
let sign_up = document.getElementById("two");

click_sign.onclick = function () {
	click_sign.style.borderBottom = "5px solid gray";
	click_Register.style.borderBottom = "none";
	sign_up.style.transform = `translateX(0%)`;
	sign_in.style.transform = `translateX(100%)`;
};

click_Register.onclick = function () {
	click_sign.style.borderBottom = "none";
	click_Register.style.borderBottom = "5px solid gray";
	sign_in.style.transform = `translateX(0%)`;
	sign_up.style.transform = `translateX(-100%)`;
};
//data manipolation

//data manipolation
