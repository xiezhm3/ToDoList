(function ($) {
	"use strict";

    //This example illustrates the declaration and instantiation of a minimalist View.
	var ListView = Backbone.View.extend({

		el: $("body"),

		initialize: function () {
			_.bindAll(this, "render");
			this.render();
		},
		render: function () {
			$(this.el).append("<ul><li>Hello World</li></li></ul>");
		}
	});

	var listView = new ListView();

})(jQuery);