(function ($) {
	"use strict";

	var Item = Backbone.Model.extend({

		defaults: {
			part1: "Hello",
			part2: "World"
		}
	});

	var ItemView = Backbone.View.extend({

		tagName: "li",

		initialize: function () {
			_.bindAll(this, "render");
		},

		render: function () {
			$(this.el).html("<span>" + this.model.get("part1") + " " + this.model.get("part2") + "</span>");
			return this;
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

			_.bindAll(this, "render", "addItem", "appendItem");

			this.collection = new List();
			this.collection.bind("add", this.appendItem);

			this.counter = 0;
			this.render();
		},

		render: function () {
			$(this.el).append("<button id='add'>ADD</button>");
			$(this.el).append("<ul></ul>");

			var self = this;
			_(this.collection.models).each(function (item) {
				self.appendItem(item);
			}, this);
		},

		appendItem: function (item) {

			var itemView = new ItemView({
				model:item
			});
			$("ul", this.el).append(itemView.render().el);
		},

		addItem: function () {
			this.counter++;
			var item = new Item();
			item.set({
				part2: item.get("part2") + " " + this.counter
			});
			this.collection.add(item);
		}
	});

	var listView = new ListView();

})(jQuery);