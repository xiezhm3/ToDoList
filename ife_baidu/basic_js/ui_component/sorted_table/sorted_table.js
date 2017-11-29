(function () {
	"use strict";
	var table = document.querySelector(".ws-table");

	var addLine = document.querySelector(".ws-btn-add");
	var removeLine = document.querySelector(".ws-btn-remove");

    var sortableTds = document.querySelectorAll(".ws-sortable");
    var editableTds = document.querySelectorAll(".ws-editable");

    var data = [];
    var row = 3; // init the row number

    var sort = function () {

    };

	var init = function () {
		for(var i = 0; i < row + 1; i++) {
			data[i] = [];
		}
		// var editableTds = document.querySelectorAll(".ws-editable");
		if(editableTds) {
            editableTds.forEach(function (t) {
		       t.contentEditable = true;
            });
        }
        // var sortableTds = document.querySelectorAll(".ws-sortable");
		if(sortableTds) {
		    sortableTds.forEach(function (t) {
		        var isSortDesc = true;
		        t.addEventListener("click", function () {
		            sort(isSortDesc);

                }, false);
            });
        }
	};

	init();

    var templateOfTr = "<td class='ws-editable'></td><td class='ws-editable'></td><td class='ws-editable'></td><td class='ws-editable'></td><td class='ws-editable'></td>";

    addLine.addEventListener("click", function () {
	    var newTr = document.createElement("tr");
	    newTr.innerHTML = templateOfTr;
	    table.appendChild(newTr);

	    var newEditableRow = newTr.querySelectorAll(".ws-editable");
	    if(newEditableRow) {
	    	newEditableRow.forEach(function (t) {
	    		t.contentEditable = true;
		    });
	    }
    }, false);

    removeLine.addEventListener("click", function () {
    	var trs = document.querySelectorAll("tr").length;
	    if(trs > 1) {
		    table.deleteRow(trs - 1);
	    }
    }, false);
})();