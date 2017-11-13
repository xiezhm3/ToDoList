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

	    itemTemplate: _.template($("#item-template").html()),

        events: {
            "click .toggle": "toggleDone",
            "dblclick .view": "edit",
            "click a.destroy": "clear",
            "keypress .edit": "updateOnEnter",
            "blur .edit": "close"
        },

        initialize: function () {
            _.bindAll(this, "render", "toggleDone", "edit", "clear", "updateOnEnter", "close");

            this.listenTo(this.model, "change", this.render);
            this.listenTo(this.model, "destroy", this.remove);
        },

        render: function () {
            this.$el.html(this.itemTemplate(this.model.toJSON())); // use the template
            this.$el.toggleClass("done", this.model.get("done")); // add 'done' class which has 'toggle' attribute
            this.input = this.$(".edit");
            return this;
        },
        
        toggleDone: function () {
            this.model.toggle();
        },
        
        edit: function () {
            this.$el.addClass(".editing");
            this.input.focus();
        },

	    updateOnEnter: function (e) {
            if (e.keyCode === 13) {
                this.close();
            }
	    },

        close: function () {
            var value = this.input.value;
            if(value) {
                this.model.save({title: value});
                this.$el.removeClass(".editing");
            }
        },

        clear: function () {
            this.model.destroy();
        }

    });

    var AppView = Backbone.View.extend({

        el: $(".todoapp"),

        statsTemplate: _.template($(".stats-template").html()),

        events: {
            "keypress input.new-todo": "keyPressEnter",
            "click .clear-completed": "clearCompleted",
            "click #toggle-all": "toggleAllComplete"
        },

        initialize: function () {
            _.bindAll(this, "keyPressEnter", "clearCompleted", "toggleAllComplete");
            
            this.input = this.$(".new-todo");
            this.allCheckbox = this.$("#toggle-all");
            
            this.listenTo(this.model, "add", this.addOne);
            this.listenTo(this.model, "reset", this.addAll);
            this.listenTo(this.model, "all", this.render);

            this.footer = $("footer");
            this.main = $(".main");

            Todos.fetch(); // TODO
        },

        render: function () {
            var done = Todos.done().length;
            var remaining = Todos.remaining().length;

            if (Todos.length) {
                this.main.show();
                this.footer.show();
                this.footer.html(this.statsTemplate({done: done, remaining: remaining}));
            } else {
                this.main.hide();
                this.footer.hide();
            }

	        this.allCheckbox.checked = !this.remaining;
        },
        
        keyPressEnter: function (e) {
            var value = this.input.val();
            if(e.keyCode === 13 && this.value) {
                Todos.create({title: value});
                this.input.val("");
            }
        },
        
        clearCompleted: function () {
            _.invoke(Todos.done(), "destroy");
            return false; // prevent the default handler for tag a
        },

	    toggleAllComplete: function () {
            var done = this.allCheckbox.checked;
            Todos.each(function (todo) {
                todo.save({"done": done});
            })
        },
        
	    addOne: function (todo) {
            var view = new TodoView({
                model: todo
            });
            this.$(".todo-list").append(view.render().el);
	    },
        
        addAll: function () {
            Todos.each(this.addOne, this);
        }
    });

    var App = new AppView;

});