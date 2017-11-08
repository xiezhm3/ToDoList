(function () {
	"use strict";
	var container = document.getElementsByClassName("container")[0];

	var childHtml = document.createDocumentFragment();

	var textArea = document.createElement("textarea");
	textArea.setAttribute("placeholder", "input text...");
	textArea.setAttribute("rows", "5");
	textArea.setAttribute("cols", "50");
	textArea.setAttribute("class", "textArea");
	childHtml.appendChild(textArea);

	var addBtn = document.createElement("input");
	addBtn.setAttribute("class", "addStr");
	addBtn.setAttribute("type", "button");
	addBtn.value = "add";
	childHtml.appendChild(addBtn);

	var searchBtn = document.createElement("input");
	searchBtn.setAttribute("class", "search");
	searchBtn.setAttribute("type", "button");
	searchBtn.value = "search";
	childHtml.appendChild(searchBtn);

	var searchText = document.createElement("input");
	searchText.type = "text";
	searchText.setAttribute("class", "searchText");
	searchText.setAttribute("placeholder", "input the string you want to search...");
	childHtml.appendChild(searchText);

	container.appendChild(childHtml);

	var display = document.getElementsByClassName("display")[0];

	var data = [];

	addBtn.addEventListener("click", function () {
		var inputStr = textArea.value;

		var inputList = inputStr.replace(/[^0-9a-zA-Z]/g || [/\s+/g], " ");
		var words = inputList.split(" ");

		var spanFrag = document.createDocumentFragment();

		words.forEach(function (t) {
			if (t === "") {
				return;
			}
			var spanEle = document.createElement("div");
			spanEle.innerText = t;
			spanFrag.appendChild(spanEle);
			data.push(t);
		});

		textArea.value = "";
		display.appendChild(spanFrag);

	}, false);

	searchBtn.addEventListener("click", function () {

		var searchStr = searchText.value;

		if (searchStr && searchStr.length > 0) {
			display.innerHTML = data.map(function (t) {
				t = t.replace(new RegExp(searchStr, "g"), "<span class='found'>" + searchStr +"</span>");

				return "<div>" + t + "</div>";
			}).join(" ");

		}
	}, false);


	function addLoadEvent(func) {
		var oldonload = window.onload();
		if(typeof window.onload != "function"){
			window.onload = func;
		} else {
			window.onload = function(){
			    oldonload();
			    func();
			};
		}
	}

	function insertAfter(newELement, targetElement){
		var parent = targetElement.parentNode;
		if (parent.lastChild == targetElement) {
			parent.appendChild(newELement);
		} else {
			parent.insertBefore(newELement, targetElement.nextSibling);
		}
	}

})();