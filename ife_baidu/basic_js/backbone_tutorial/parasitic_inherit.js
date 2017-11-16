(function(){
	"use strict";
	// the thinking of parasitic inherit.
	function SuperType(name) {
		this.name = name;
		this.colors = ["red", "blue", "green"];
	}

	SuperType.prototype.sayName = function () {
		console.log(this.name);
	}

	function SubType(name, age) {
		SuperType.call(this, name);

		this.age = age;
	}

	function object(o){
		function F(){}
		F.prototype = o;
		return new F();
	}

	function inheritPrototype(subType, superType) {
		var prototype  = object(superType.prototype);
		prototype.constructor = subType;
		subType.prototype = prototype;
	}

	inheritPrototype(SubType, SuperType);

	SubType.prototype.sayAge = function () {
		console.log(this.age);
	}

})();