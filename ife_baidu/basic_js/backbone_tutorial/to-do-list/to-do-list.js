$(function () {
    "use strict";
    //item model
    var Todo = Backbone.Model.extend({
        defaults: {
            title: "empty",
            order: null,
            done: false
        }
    });

    var TodoList = Backbone.Collection.extend({

        model: Todo

    });

    var todos = new TodoList();

    var TodoView = Backbone.View.extend({

        tagName: "li",

        events: {
            "click ": ""
        },

        initialize: function () {
            _.bindAll(this, "render");
        },

        render: function () {

        }

    });

    var AppView = Backbone.View.extend({

        el: $(".todoapp"),

        events: {
            // "": ""
        },

        initialize: function () {
            this.el.focus();
        }
    });

    var app = new AppView();

});