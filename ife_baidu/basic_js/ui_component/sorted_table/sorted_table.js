(function () {
	"use strict";
	var table = document.querySelector(".ws-table");

	var addLine = document.querySelector(".ws-btn-add");
	var removeLine = document.querySelector(".ws-btn-remove");

	var sortableTds = document.querySelectorAll(".ws-sortable");
	// var editableTds = document.querySelectorAll(".ws-editable");

	var data = [];
	var row = 3; // init the row number

	var isActive = true;

	var sort = function (col, isSortDesc) {
		if (row <= 1) {
			return;
		}
		var temp;
		if (isSortDesc) {
			for (var i = 1; i < row; i++) {
				for (var j = i + 1; j < row + 1; j++) {
					if (data[j][col] > data[i][col]) {
						temp = data[j];
						data[j] = data[i];
						data[i] = temp;
					}
				}
			}
		} else {
			for (var i = 1; i < row; i++) {
				for (var j = i + 1; j < row + 1; j++) {
					if (data[j][col] < data[i][col]) {
						temp = data[j];
						data[j] = data[i];
						data[i] = temp;
					}
				}
			}
		}
	};

	var updateTable = function () {
		var trs = document.querySelectorAll("tr");
		for (var i = 1; i < trs.length; i++) {
			var tds = trs[i].querySelectorAll("td");
			for (var j = 0; j < tds.length; j++) {
				tds[j].innerHTML = data[i][j];
			}
		}
	};

	var setEditable = function () {
		var trs = document.querySelectorAll("tr");
		for (var i = 1; i < trs.length; i++) {
			var tds = trs[i].querySelectorAll("td");
			for (var j = 0; j < tds.length; j++) {
				tds[j].contentEditable = true;

				tds[j].addEventListener("blur", function () {
					// var isActive = true;
					tds.forEach(function (t) {
						if (t.innerHTML === "") {
							isActive = false;
							return;
						} else {
							isActive = true;
						}
					});
					if (isActive) {
						addLine.disabled = false;
					}
				}, false);

				data[i][j] = tds[j].innerHTML;
			}
		}
	};

	var setData = function () {
		for (var i = 0; i < row + 1; i++) {
			data[i] = [];
		}
	};

	// init
	(function () {
		setData();
		setEditable();
		var isSortDesc = true;
		if (sortableTds) {
			var i = 0;
			sortableTds.forEach(function (t) {
				i = i + 1;
				t.addEventListener("click", function () {
					setEditable();
					sort(i, isSortDesc);
					updateTable();
					isSortDesc = !isSortDesc;
				}, false);
			});
		}
	})();

	var templateOfTr = "<td class='ws-editable'></td><td class='ws-editable'></td><td class='ws-editable'></td><td class='ws-editable'></td><td class='ws-editable'></td>";

	addLine.addEventListener("click", function () {
		var flag = false;
		var trs = document.querySelectorAll("tr");
		for (var i = 1; i < trs.length; i++) {
			var tds = trs[i].querySelectorAll("td");
			for (var j = 0; j < tds.length; j++) {
				if (tds[j].innerHTML === "") {
					addLine.disabled = true;
					flag = true;
					break;
				}
			}
			if (flag) {
				break;
			}
		}
		if (flag) {
			return;
		}

		addLine.disabled = false;

		var newTr = document.createElement("tr");
		newTr.innerHTML = templateOfTr;
		table.appendChild(newTr);
		row++;
		setData();
		setEditable();

	}, false);

	removeLine.addEventListener("click", function () {
		var trs = document.querySelectorAll("tr").length;
		if (trs > 1) {
			table.deleteRow(trs - 1);
			row--;
			setData();
			setEditable();
		}
		addLine.disabled = false;
	}, false);
})();