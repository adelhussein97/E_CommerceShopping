let vid = document.getElementById("vid");
vid.style.cssText = `
display:block; 
margin-left: 135px;   
padding: 22px;
border-radius: 5px;
font-size: 20px;
cursor:pointer;`;

let click = document.getElementById("click");
click.style.cssText = ` 
display:block; 
margin-left: 180px;   
padding: 22px;
background-color:gray;
color:white;
border-radius: 5px;
font-size: 20px;
cursor:pointer`;

vid.onclick = function () {
	if (vid.paused) {
		vid.play();
	} else {
		vid.pause();
	}
};

click.onclick = function () {
	open("form.html");
};
