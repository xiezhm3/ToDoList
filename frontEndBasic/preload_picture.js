(function ($) {
	"use strict";
	/**
	 * 图片预加载说白了就是将所有所需的图片提前请求加载到本地，这样后面在需要用到时就直接从缓存取图片 。
	 * 图片预加载的原理很简单：new Image()，然后使用onload方法回调预加载完成事件，当浏览器把图片下载到本地后，
	 * 之后同样的src就直接使用缓存。
	 * **/

	var Preload = function (imgs, option) {
		this.imgs = (typeof imgs === "string" ? [imgs] : imgs);
		this.opts = $.extend({}, true, Preload.DEFAULTS, option);

		if (this.opts.order === "unorder") {
			this._orderedLoad();
		} else {
			this._unorderedLoad();
		}
	};

	Preload.DEFAULTS = {
		order: "unorder", // default unorder loading
		each: null, // 接收一个方法，每一张图片加载完成后调用该函数
		all: null // 接收一个方法，所有图片加载完成后调用该函数
	};

	Preload.prototype._orderedLoad = function () {
		var imgs = this.imgs;
		var opts = this.opts;
		var count = 0;
		var len = imgs.length;

		function load() {
			var imgObj = new Image();
			imgObj.src = imgs[count];

			$(imgObj).on("load error", function () {
				if (count >= len) {
					opts.all && opts.all(); // loaded completely
				} else {
					opts.each && opts.each(count);
					load();
					count++;
				}
			});
		}
	};

	Preload.prototype._unorderedLoad = function () {
		var imgs = this.imgs;
		var opts = this.opts;
		var count = 0;
		var len = imgs.length;

		imgs.forEach(function (t) {
			var imgObj = new Image();
			imgObj.src = t;
			$(imgObj).on("load error", function () {
				opts.each && opts.each(count);
				if (count >= len) {
					opts.all && opts.all();
				}
				count++;
			});
		})
	};
// 挂载到jQuery对象上
	$.extend({
		preload: function (imgs, opts) {
			new Preload(imgs, opts);
		}
	});

	var imgs = [
		"http://op2clp53n.bkt.clouddn.com/20161104122758_cap-hpi.jpg",
		"http://op2clp53n.bkt.clouddn.com/500414621%20%281%29.jpg",
		"http://op2clp53n.bkt.clouddn.com/cover_bg.png",
		"http://img.aotu.io/mamboer/post-aotu.jpg",
		"http://misc.aotu.io/o2/img/books/books-cover.jpg",
		"http://img.aotu.io/Yettyzyt/cover.png",
		"http://img.aotu.io/wengeek/responsive-image.png",
		"https://gw.alicdn.com/tfs/TB1_6wnRXXXXXbwXFXXXXXXXXXX-900-500.jpg",
		"http://op2clp53n.bkt.clouddn.com/_138.jpg",
		"http://op2clp53n.bkt.clouddn.com/0_ocs_fin_cov_1.jpg",
		"http://op2clp53n.bkt.clouddn.com/2voyage.jpg",
		"http://op2clp53n.bkt.clouddn.com/boa_illustrations_master_fb_1200x628-12.jpg",
		"http://op2clp53n.bkt.clouddn.com/building_science_bulletin_cover_2__1x.jpg",
		"http://op2clp53n.bkt.clouddn.com/building-science-bulletin-cover_1x.jpg",
		"http://op2clp53n.bkt.clouddn.com/chemistry4_1x.png",
		"http://op2clp53n.bkt.clouddn.com/first_colony_dribbble_copy.jpg"
	];

	$.preload(imgs, {
		order: "ordered",
		each: function (count) {
			console.log("Now Loading Num. " + count + " Picture.");
		},
		all: function () {
			console.log("Loading Completely.");
		}
	});

})(jQuery);