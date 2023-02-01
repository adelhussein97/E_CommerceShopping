var imgee = document.getElementById("image");

var imgproductNameee = document.getElementById("prname");

imgproductNameee.textContent = localStorage.getItem("prdName");

imgee.src = localStorage.getItem("prdImage");

console.log(localStorage.getItem("cart"));

var pr = document.getElementById("price");

var total = document.getElementById("total");

pr.textContent = localStorage.getItem("price");

document
	.getElementById("mines")
	.addEventListener("click", function decrease(ev) {
		var txt = document.getElementById("numOfProduct");

		if (txt.textContent <= 0) {
			// ev.preventDefault();
			return false;
		}

		txt.textContent -= 1;

		total.textContent =
			parseFloat(total.textContent) - parseFloat(pr.textContent);

		// txt.innerHTML = num
	});

total.textContent = pr.textContent;

document
	.getElementById("plus")
	.addEventListener("click", function increase(ev) {
		var txt = document.getElementById("numOfProduct");
		// var num = parseInt(txt.textContent)

		if (txt.textContent == 10) {
			// ev.preventDefault();
			return false;
		}

		txt.textContent++;

		total.textContent =
			parseFloat(total.textContent) + parseFloat(pr.textContent);
	});

var deleteProduct = (document.getElementById("delete").onclick = function () {
	var fProduct = document.getElementById("firstProduct");
	fProduct.remove();
});
