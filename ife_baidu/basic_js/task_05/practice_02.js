(function () {
    var num = document.getElementById("input-num");
    num.focus();
    var displayArea = document.getElementsByClassName("display-area")[0];
    var leftIn = document.getElementById("left-in");
    leftIn.addEventListener("click", function () {
        var numList = document.getElementsByClassName("col-1");
        if (numList.length >= 60) {
            alert("Total Number Cannot Over 60.");
            num.value = "";
            return;
        }
        if (num.value >= 10 && num.value <= 100) {
            var fragment = document.createDocumentFragment();
            var block = document.createElement("div");
            block.className = "col-1";
            block.style.height = num.value + "px";
            fragment.append(block);

            displayArea.insertBefore(fragment, displayArea.firstChild);

            num.value = "";
            num.focus();
        } else {
            alert("Pls enter the number between 10 and 100.");
            num.value = "";
            num.focus();
        }
    }, false);

    var rightIn = document.getElementById("right-in");
    rightIn.addEventListener("click", function () {
        if (num.value >= 10 && num.value <= 100) {
            var fragment = document.createDocumentFragment();
            var block = document.createElement("div");
            block.className = "col-1";
            block.style.height = num.value + "px";
            fragment.append(block);

            displayArea.appendChild(fragment);

            num.value = "";
            num.focus();
        } else {
            alert("Pls enter the number between 10 and 100.");
            num.value = "";
            num.focus();
        }
    }, false);

    var leftOut = document.getElementById("left-out");
    leftOut.addEventListener("click", function () {
        if (displayArea.children[0]) {
            displayArea.removeChild(displayArea.children[0]);
        }
    }, false);

    var rightOut = document.getElementById("right-out");
    rightOut.addEventListener("click", function () {
        var numList = document.getElementsByClassName("col-1");
        if (numList.length) {
            displayArea.removeChild(numList[numList.length - 1]);
        }
    }, false);

    displayArea.addEventListener("click", function (e) {
        displayArea.removeChild(e.target);
    }, false);

    var snapshots = [];

    var partition = function (data, lo, hi) {
        var i = lo, j = hi;
        var v = parseInt(data[lo]);
        while (i < j) {
            while (v >= parseInt(data[i])) {
                ++i;
                if (i == hi) {
                    break;
                }
            }
            while (v <= parseInt(data[j])) {
                --j;
                while (j == lo) {
                    break;
                }
            }
            if (i > j) {
                break;
            }
            var temp = data[j];
            data[j]= data[i];
            data[i] = temp;
            snapshots.push(data);
        }
        data[lo] = data[j];
        data[j] = v;
        snapshots.push(data);

        return j;
    }

    var quickSort = function (data, lo, hi) {
        if(lo < hi) {
            var p = partition(data, lo, hi);
            quickSort(data, lo, p-1);
            quickSort(data, p+1, hi);
        }
        return data;
    }

    var sortQueue = function (dataList) {
        if(dataList.length >= 1) {
            var data = [];
            for(var i = 0; i< dataList.length; i++) {
                data.push(parseInt(dataList[i].style.height));
            }
            quickSort(data, 0, data.length - 1);
        }
    };

    var sortBtn = document.getElementsByClassName("sort-btn")[0];
    sortBtn.addEventListener("click", function () {
        var numList = document.getElementsByClassName("col-1");
        sortQueue(numList);
    }, false);
})();