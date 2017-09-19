// $(function () {
// 	"use strict";
//
// 	$(".wider").on("click", function (e) {
// 		e.preventDefault();
// 		$(".container").css("width", "+=50px");
// 	});
//
// 	$(".taller").on("click", function (e) {
// 		e.preventDefault();
// 		$(".container").css("height", "+=50px");
// 	});
//
// 	$(".changeColor").on("click", function (e) {
// 		$(".container").css("background-color", getRandomColor());
// 	});
//
// 	$(".hide").on("click", function (e) {
// 		$(".container").hide();
// 	});
//
// 	$(".reset").on("click", function (e) {
// 		$(".container").css({
// 			"width": "100px",
// 			"height": "80px",
// 			"background-color": "darkred",
// 			"display": "block"
// 		});
// 	});
//
// 	var getRandomColor = function () {
// 		var hex = Math.floor(Math.random() * 16777216).toString(16); // make sure the hex value under ffffff
// 		while (hex.length < 6) {
// 			hex = "0" + hex;
// 		}
// 		return "#" + hex;
// 	}
//
// });

var getRandomColor = function () {
	var hex = Math.floor(Math.random() * 16777216).toString(16); // make sure the hex value under ffffff
	while (hex.length < 6) {
		hex = "0" + hex;
	}
	return "#" + hex;
}

var changeStyle = function (elem, attr, val) {
	elem.style[attr] = val;
};
/**
 * using primitive javascript
 * **/
window.onload = function () {
	var buttons = document.getElementsByClassName("attribute");
	var container = document.getElementById("container")
	var attributes = ["width", "height", "background-color", "display", "display"];
	var values = ["120px", "100px", getRandomColor(), "none", "block"];

	for (var i = 0; i < buttons.length; i++) {
		buttons[i].index = i;
		buttons[i].onclick = function () {
			// reset the css style when the index reaches to the end
			this.index == buttons.length - 1 && (container.style.cssText = "");
			changeStyle(container, attributes[this.index], values[this.index]);
		}
	}

};