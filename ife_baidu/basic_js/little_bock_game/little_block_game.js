(function () {
    "use strict";

    var tableBody = document.querySelector(".ws-table-body");
    // init the direction of the little block
    var to = "";

    var init = function () {
        to = "top";
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
        console.log(to);
        var block = document.querySelector(".ws-little-block");
        var parentId = block.parentNode.id;
        var col = 0;
        var row = 0;
        var rowCol = parentId.substring(2);
        console.log(rowCol);
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
            if(row === 0) {
                row = 10;
            }

        } else if (to === "bottom") {
            row = row + 1;
            if (row === 11) {
                row = 1;
            }
        } else if (to === "left") {
            col = col - 1;
            if (col === 0) {
                col = 10;
            }
        } else if (to === "right") {
            col = col + 1;
            if (col === 11) {
                col = 1;
            }
        }
        var parent = document.querySelector("#" + parentId);
        parent.className = "";
        var newParent = document.querySelector("#td" + row + col);
        newParent.innerHTML = block.parentNode.innerHTML;
        block.parentNode.innerHTML = "";
        newParent.className = "ws-table-target";
    };

    var left = function () {
        var block = document.querySelector(".ws-little-block");
        if(to === "top") {
            to = "left";
            block.style.width = "10px";
            block.style.height = "40px";
        } else if(to === "bottom") {
            to = "right";
            block.style.width = "10px";
            block.style.height = "40px";
            block.style.marginLeft = "30px";
            block.style.marginTop = "-20px";
        } else if(to === "left") {
            to = "bottom";
            block.style.width = "40px";
            block.style.height = "10px";
            block.style.marginTop = "10px"
        } else {
            to = "top";
            block.style.width = "40px";
            block.style.height = "10px";
            block.style.marginTop = "-20px";
            block.style.marginLeft = "0";
        }
    };

    var right = function () {
        var block = document.querySelector(".ws-little-block");
        if(to === "top") {
            to = "right";
            block.style.width = "10px";
            block.style.height = "40px";
            block.style.marginLeft = "30px";
            block.style.marginTop = "-20px";
        } else if(to === "bottom") {
            to = "left";
            block.style.width = "10px";
            block.style.height = "40px";
            block.style.marginTop = "-20px"
        } else if(to === "left") {
            to = "top";
            block.style.width = "40px";
            block.style.height = "10px";
            block.style.marginTop = "-20px";
            block.style.marginLeft = "0";
        } else {
            to = "bottom";
            block.style.width = "40px";
            block.style.height = "10px";
            block.style.marginTop = "10px"
            block.style.marginLeft = "0";
        }
    };

    var back = function () {
        var block = document.querySelector(".ws-little-block");
        if(to === "top") {
            to = "bottom";
            block.style.width = "40px";
            block.style.height = "10px";
            block.style.marginTop = "10px"
            block.style.marginLeft = "0";
        } else if(to === "bottom") {
            to = "top";
            block.style.width = "40px";
            block.style.height = "10px";
            block.style.marginTop = "-20px";
            block.style.marginLeft = "0";
        } else if(to === "left") {
            to = "right";
            block.style.width = "10px";
            block.style.height = "40px";
            block.style.marginLeft = "30px";
            block.style.marginTop = "-20px";
        } else if(to === "right"){
            to = "left";
            block.style.width = "10px";
            block.style.height = "40px";
            block.style.marginTop = "-20px"
            block.style.marginLeft = "0";
        }
    };

    // add click event to start button
    var btn_start = document.querySelector(".ws-btn-start");
    btn_start.addEventListener("click", function () {
        //refresh the table
        init();
        var block = document.querySelector("#td55");
        block.className = "ws-table-target";
        var little_node = "<div class='ws-little-block'></div>";
        block.innerHTML = little_node;
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