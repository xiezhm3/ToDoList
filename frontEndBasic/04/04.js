window.onload = function () {
	new AutoPlay("box")
};

var AutoPlay = function (id) {
	this.initialize(id);
}

AutoPlay.prototype = {
	initialize: function (id) {
		this.autoTimer = null;
		this.createBtn();
		this.container = document.getElementById("box");
		this.img = getElementsByTagName("img", this.container);
	},
	createBtn: function () {
		this.nul = document.createElement("ul");
		this.nFrag = document.createDocumentFragment();
		for (var i = 0; i < this.img.length; i++) {
			var nli = document.createElement("li");
			nli.innerHTML = i + 1;
			this.nFrag.appendChild(nli);
		}
		this.nul.appendChild(this.nFrag);
		this.container.appendChild(this.nul);
	}
};

var getElementsByTagName = function (tagName, parentNode) {
	return (parentNode ||document).getElementsByTagName(tagName);
}
// $(function () {
// 	$("#box").on("click", function () {
// 		alert("you");
// 	});
// });