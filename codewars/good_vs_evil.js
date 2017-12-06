(function () {
	"use strict";
	var goodVsEvil = function (good, evil) {
		var goodList = good.split(" ");
		var evilList = evil.split(" ");

		var worthOfGoodList = [1, 2, 3, 3, 4, 10];
		var worthOfEvilList = [1, 2, 2, 2, 3, 5, 10];

		var goodWorth = 0;
		var evilWorth = 0;

		for (var i = 0; i < goodList.length; i++) {
			goodWorth += goodList[i] * worthOfGoodList[i];
		}
		for (var j = 0; j < evilList.length; j++) {
			evilWorth += evilList[j] * worthOfEvilList[j];
		}
		var result = goodWorth - evilWorth;
		if (result < 0) {
			return "Battle Result: Evil eradicates all trace of Good";
		} else if (result > 0) {
			return "Battle Result: Good triumphs over Evil";
		} else if (result === 0) {
			return "Battle Result: No victor on this battle field";
		}
	};
	document.write(goodVsEvil('1 0 0 0 0 0', '0 0 0 0 0 0 0') + "<br>");
	document.write(goodVsEvil('0 0 0 0 0 10', '0 1 1 1 1 0 0') + "<br>");

	// using reduce
	var bestPractice = function (good, evil) {
		var getWorth = function (side, worth) {
			return side.split(" ").reduce(function (result, value, index) {
				return result + (worth[index] * value);
			}, 0);
		};

		var result = getWorth(good, [1, 2, 3, 3, 4, 10]) - getWorth(evil, [1, 2, 2, 2, 3, 5, 10]);

		return result > 0 ? "Battle Result: Good triumphs over Evil" :
			result < 0 ? "Battle Result: Evil eradicates all trace of Good" :
				"Battle Result: No victor on this battle field";
	};
	document.write(bestPractice('0 0 0 0 0 10', '0 1 1 1 1 0 0') + "<br>");
})();