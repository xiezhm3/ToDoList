$(function () {
    "use strict";
    //item model
    var Todo = Backbone.Model.extend({
        defaults: function () {
            return {
                title: "empty todo",
                order: Todos.nextOrder(),
                done: false
            };
        },
        // toggle the "done" attr of the item
        toggle: function () {
            this.save({done: !this.get("done")});
        }
    });

    var TodoList = Backbone.Collection.extend({

        model: Todo,

        localStorage: new Backbone.LocalStorage("todos-backbone"),

        done: function () {
            return this.where({done: true});
        },

        remaining: function () {
            return this.where({done: false});
        },

        nextOrder: function () {
            if (!this.length) {
                return 1;
            } else {
                return this.last().get("order").length + 1;
            }
        },
        // Items are sorted by their original insertion order
        comparator: "order"

    });

    var Todos = new TodoList();

    var TodoView = Backbone.View.extend({

        tagName: "li",

        template:_.template($(".item-template").html()),

        events: {
            "click .toggle": "toggleDone",
            "dbclick .view": "edit"
        },

        initialize: function () {
            _.bindAll(this, "render");
        },

        render: function () {

        },
        
        toggleDone: function () {
            
        },
        
        edit: function () {
            
        }

    });

    var AppView = Backbone.View.extend({

        el: $(".todoapp"),

        events: {
            "": ""
        },

        initialize: function () {
            this.el.focus();
        }
    });

    var app = new AppView();

});