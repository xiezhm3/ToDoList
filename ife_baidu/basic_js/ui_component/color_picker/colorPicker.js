"use strict";

var Selector = function (type, defaultValue, min, max, precision, input, upBtn, downBtn) {
	this.type = type;
	this.val = defaultValue;
	this.min = min;
	this.max = max;
	this.precision = precision;
	this.input = input;
	this.upBtn = upBtn;
	this.downBtn = downBtn;
};

Selector.prototype.addEventListener = function () {
	var self = this;
};

Selector.prototype.setVal = function (newVal) {
	this.val = newVal;
	this.input.val = this.val;
};

Selector.prototype.isLegal = function (val) {
	if ((val / this.precision) % 1 === 0) { // integer
		if (val >= this.min && val <= this.max) {
			return true;
		}
	}
	return false;
};

//
var selector = (function () {
    var t = {
    	rgb: {},
	    hsl: {}
    };
    var rgbSelectorElements = document.querySelectorAll(".ws-color-rgb .ws-selector-wrapper");

    var hslSelectorElements = document.querySelectorAll(".ws-color-hsl .ws-selector-wrapper")

	rgbSelectorElements.forEach(function (selector) {

	});

    hslSelectorElements.forEach(function (selector) {

    });

    return t;
})();

var init = (function () {
	new ClipboardData("#ws-rgb-btn");
	new ClipboardData("#ws-hsl-btn");
	new ClipboardData("#ws-hsv-btn");
})();