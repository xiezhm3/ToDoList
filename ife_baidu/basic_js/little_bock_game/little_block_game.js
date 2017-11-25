(function () {
    "use strict";

    var tableBody = document.querySelector(".ws-table-body");

    var init = function () {
        tableBody.innerHTML = "";
        for(var i = 1; i < 11; i++) {
            var tr = document.createElement("tr");
            for (var j = 1; j < 11; j++) {
                var td = document.createElement("td");
                td.id = "td" + i + j;
                td.innerHTML = "";
                tr.appendChild(td);
            }
            tableBody.appendChild(tr);
        }
    }
    init();
})();