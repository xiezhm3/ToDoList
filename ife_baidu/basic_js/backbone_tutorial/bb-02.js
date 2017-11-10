(function ($) {
	"use strict";
	// This example illustrates the binding of DOM events to View methods.
	var ListView = Backbone.View.extend({

		el: $("body"),

		events: {
			"click button#add": "addItem"
		},

		initialize: function () {
			_.bindAll(this, "render", "addItem");

			this.counter = 0;

			this.render();
		},

		render: function () {
			$(this.el).append("<button id='add'>Add List Item</button>");
			$(this.el).append("<ul></ul>");
		},

		addItem: function () {
			this.counter++;

			$("ul", this.el).append("<li>hello world " + this.counter + "</li>");
		}
	});
	var listView = new ListView();

})(jQuery);