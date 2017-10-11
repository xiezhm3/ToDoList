$(function () {
	var x = 1;
	console.log(x++ + ++x + x);
	for(var i = 0; i < 10; i ++) {
		setTimeout(function () {
			console.log(i);
		}, 10);
	}
	var Person = {
		brain: true
	};
	var person = Object.create(Person);

	delete person.brain;

	console.log(person.brain);


	var singleton = function() {
		var privateVariable = 20;
		function privateFunction() {
			return false;
		};
		return {
		    publicProperty: true,
		    publicMethod: function(){
		        privateVariable++;
		        return privateFunction();
		    }
		};
	}();

	singleton.publicMethod(); // use the public method to control the private variables or methods


});