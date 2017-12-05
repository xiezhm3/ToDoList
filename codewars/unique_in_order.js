(function () {
	"use strict";

	var uniqueInOrder = function (iterable) {
		//your code here - remember iterable can be a string or an array
		if (!iterable) {
			return new Array();
		}
		if (iterable.length === 1) {
			return iterable.split("");
		}
		var result = [];
		var list;
		if (typeof iterable === "string") {
			list = iterable.split("");
		} else {
			list = iterable;
		}
		var unique = list[0];
		result.push(unique);
		list.forEach(function (t) {
			if (t !== unique) {
				unique = t;
				result.push(unique);
			}
		});
		return result;
	};
	document.write("my solution: " + "</br>");
	document.write(uniqueInOrder('AAAABBBCCDAABBB') + "</br>");
	document.write(uniqueInOrder([1, 2, 3]) + "</br>");

	// using for loop which comes from the best practice of kata
	var bestPractice = function (iterable) {
		var result = [];
		var last;

		for (var i = 0; i < iterable.length; i++) {
			if (last !== iterable[i]) {
				result.push(last = iterable[i]);
			}
		}
		return result;
	};
	document.write("best practice: " + "</br>");
	document.write(bestPractice('AAAABBBCCDAABBB') + "</br>");
	document.write(bestPractice([1, 2, 3]) + "</br>");

	// the following solution is clever
	var cleanSolution = function (iterable) {
		return [].filter.call(iterable, (function (a, i) {
			return iterable[i - 1] !== a;
		}));
	};
	document.write("clever practice: " + "</br>");
	document.write(cleanSolution([1, 2, 3]) + "</br>");
})();