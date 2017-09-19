$(function () {
	"use strict";

	$(".wider").on("click", function (e) {
		e.preventDefault();
		$(".container").css("width", "+=50px");
	});

	$(".taller").on("click", function (e) {
		e.preventDefault();
		$(".container").css("height", "+=50px");
	});

	$(".changeColor").on("click", function (e) {
		$(".container").css("background-color", getRandomColor());
	});

	$(".hide").on("click", function (e) {
		$(".container").hide();
	});

	$(".reset").on("click", function (e) {
		$(".container").css({
			"width": "100px",
			"height": "80px",
			"background-color": "darkred",
			"display": "block"
		});
	});

	var getRandomColor = function () {
		var hex = Math.floor(Math.random() * 16777216).toString(16); // make sure the hex value under ffffff
		while (hex.length < 6) {
			hex = "0" + hex;
		}
		return "#" + hex;
	}
});