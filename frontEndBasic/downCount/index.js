window.onload = function () {
    var inputElems = document.getElementsByTagName("input");
    var operationBtn = document.getElementsByClassName("operation")[0];
    operationBtn.addEventListener("click", function (e) {
        var target = e.target;

        if (target.className === "stopBtn") {
            clearInterval(this.autoTimer);
            target.className = "startBtn";
            target.value = "start";
            return;
        }

        if (target.className === "startBtn") {
            target.value = "stop";
            target.className = "stopBtn";
            var min = null;
            var sec = null;
            this.autoTimer = setInterval(function () {
                min = inputElems[0].value;
                sec = inputElems[1].value;
                if (sec > 0) {
                    inputElems[0].value = min;
                    inputElems[1].value = parseInt(sec) - 1;
                } else if (min > 0 && sec == 0) {
                    inputElems[0].value = parseInt(min) - 1;
                    inputElems[1].value = "60";
                } else {
                    inputElems[0].value = 0;
                    inputElems[1].value = 0;
                }

            }, 1000);
        }

    }, false);
    var reset = document.getElementsByClassName("resetBtn")[0];
    reset.onclick = function () {
        var inputElems = document.getElementsByTagName("input");
        if (inputElems[2].className === "startBtn") {
            inputElems[0].value = "1";
            inputElems[1].value = "40";
        }
    };
};