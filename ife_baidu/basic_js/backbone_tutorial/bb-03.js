(function ($) {
	"use strict";
	// This example illustrates how to use a Collection of Models to store data, and how to tie changes in those to a View.
	var Item = Backbone.Model.extend({
		defaults: {
			part1: "Hello",
			part2: "World"
		}
	});

	var List = Backbone.Collection.extend({
		model: Item
	});

	var ListView = Backbone.View.extend({

		el: $("body"),

		events: {
			"click button#add": "addItem"
		},

		initialize: function () {
			_.bindAll(this, "render");

			this.collection = new List();
			this.collection.bind("add", this.appendItem); // collection bind event

			this.counter = 0;
			this.render();
		},

		render: function () {
			$(this.el).append("<button id='add'>Add</button>");
			$(this.el).append("<ul></ul>");
			var self = this;
			_(this.collection.models).each(function (item) {
				self.appendItem(item);
			}, this);
		},

		appendItem: function (item) {
			$("ul", this.el).append("<li>" + item.get("part1") + " " + item.get("part2") + "</li>");
		},

		addItem: function () {
			this.counter++;
			var item = new Item();
			item.set({
				part2: item.get("part2") + " - " + this.counter
			});
			this.collection.add(item); // add item to collection; view is updated via event 'add'
		}
	});
	var listView = new ListView();
})(jQuery);