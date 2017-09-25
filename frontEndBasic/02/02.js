$(function () {
	"use strict";

	$(document).ready(function () {
		$(".green").addClass("current");
		$("body").css("background-color", "#A3C5A8");
		$(".nav").css("background-color", "green");
	});

	$(".red").on("click", function (e) {
		removeCurrentClass();
		$(".red").addClass("current");
		$("body").css("background-color", "pink");
		$(".nav").css("background-color", "red");
	});

	$(".green").on("click", function (e) {
		removeCurrentClass();
		$(".green").addClass("current");
		$("body").css("background-color", "#A3C5A8");
		$(".nav").css("background-color", "green");
	});
	$(".black").on("click", function (e) {
		removeCurrentClass();
		$(".black").addClass("current");
		$("body").css("background-color", "gray");
		$(".nav").css("background-color", "black");
	});

	var removeCurrentClass = function () {
		$(".green").removeClass("current");
		$(".red").removeClass("current");
		$(".black").removeClass("current");
	}
});