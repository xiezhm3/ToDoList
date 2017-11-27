(function () {
    "use strict";

    var tableBody = document.querySelector(".ws-table-body");
    // init the direction of the little block
    var to = "top";

    var init = function () {
        tableBody.innerHTML = "";
        for (var i = 1; i < 11; i++) {
            var tr = document.createElement("tr");
            for (var j = 1; j < 11; j++) {
                var td = document.createElement("td");
                td.id = "td" + i + j;
                td.innerHTML = "";
                tr.appendChild(td);
            }
            tableBody.appendChild(tr);
        }
    };

    var go = function () {
        var block = document.querySelector(".ws-little-block");
        var parentNode = block.parentNode.id;
        var col = 0;
        var row = 0;
        var rowCol = parentNode.substring(2);
        console.log(rowCol);
        //  TODO
        if (rowCol.length === 4) {
            col = 10;
            row = 10;
        } else if (rowCol.length === 3) {
            if (rowCol[0] === "1" && rowCol[1] !== "1") {
                row = 10;
                col = parseInt(rowCol.substring(2));
            } else {
                row = parseInt(rowCol[0]);
                col = 10;
            }
        } else {
            row = parseInt(rowCol[0]);
            col = parseInt(rowCol[1]);
        }
        if (to === "top") {
            row = row - 1;
        } else if (to === "bottom") {
            row = row + 1;
        } else if (to === "left") {
            col = col - 1;
        } else if (to === "right") {
            col = col + 1;
        }
        var parent = document.querySelector("#" + parentNode);
        parent.className = "";
        var newParent = document.querySelector("#td" + row + col);
        newParent.innerHTML = block.parentNode.innerHTML;
        block.parentNode.innerHTML = "";
        newParent.className = "ws-table-target";
    };

    var left = function () {

    };

    var right = function () {

    };

    var back = function () {

    };

    // add click event to start button
    var btn_start = document.querySelector(".ws-btn-start");
    btn_start.addEventListener("click", function () {
        //refresh the table
        init();
        var block = document.querySelector("#td55");
        block.className = "ws-table-target";
        var node = "<div class='ws-little-block'></div>";
        block.innerHTML = node;
    }, false);

    var btn_go = document.querySelector(".ws-btn-go");
    btn_go.addEventListener("click", function () {
        go();
    }, false);

    var btn_left = document.querySelector(".ws-btn-left");
    btn_left.addEventListener("click", function () {
        left();
    }, false);

    var btn_right = document.querySelector(".ws-btn-right");
    btn_right.addEventListener("click", function () {
        right();
    }, false);

    var btn_back = document.querySelector(".ws-btn-back");
    btn_back.addEventListener("click", function () {
        back();
    }, false);

    init();
})();