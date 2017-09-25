$(function () {
	"use strict";
	
	$(".submit").on("click", function (e) {
		alert($(".text-1").val());
		alert($(".text-2").val());
	});

	$(".changeColorButton").on("click", function (e) {
		e.preventDefault();
        $(".div").css("background-color", "red");
	});

    $(".container").mouseover(function () {
	    $(".container").css({
		    "background-color": "gold",
		    "cursor": "crosshair"
	    });

    });

	$(".container").mouseout(function () {
		$(".container").css("background-color", "black")
	});

	$(".tipFrame").mouseover(function (e) {
		e.preventDefault();
		$(".hint").css({
			"display": "block",
			"background-color": "gold",
			"border": "1px solid red"
		});
	});

	$(".tipFrame").mouseout(function (e) {
		e.preventDefault();
		$(".hint").css({
			"display": "none"
		});
	});

	$(".sumBtn").on("click", function (e) {
		e.preventDefault();
		var numberString = $(".sumUpNumber").val();
		var ns = numberString.split(",");
		var sum = sumUpNumbers(ns);
		alert(sum)
	});

	
	var sumUpNumbers = function (number) {
		var sum = 0;
		for (var num in number) {
			sum += parseInt(number[num]);
		}
		return sum;
	}
});