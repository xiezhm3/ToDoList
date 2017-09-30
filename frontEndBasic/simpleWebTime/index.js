window.onload = function () {

    var autoTimer = setInterval(function () {

        var hourElement = document.getElementsByClassName("hour")[0];
        var minuteElement = document.getElementsByClassName("minute")[0];
        var secondElement = document.getElementsByClassName("second")[0];
        var date = new Date();
        var hour = date.getHours();
        var minutes = date.getMinutes();
        var seconds = date.getSeconds();
        hourElement.setAttribute("value", hour);
        minuteElement.setAttribute("value", minutes);
        secondElement.setAttribute("value", seconds);
    }, 30);
//        var plusOneBtn = document.getElementsByClassName("btn")[0];
//        plusOneBtn.onclick = function () {
//            var newValue = parseInt(plusOneBtn.getAttribute("value")) + 1;
//            if (newValue < 10) {
//                newValue = "0" + newValue; // when the number less then 10, show the 01 format
//            }
//            plusOneBtn.setAttribute("value", newValue);
//        };
    // use event listener
    var plusOne = document.getElementsByClassName("plusOne")[0];

    plusOne.addEventListener("click", function (e) {
        var newVal = parseInt(e.target.getAttribute("value")) + 1;
        if (newVal < 10) {
            newVal = "0" + newVal;
        }
        e.target.setAttribute("value", newVal.toString());
    }, false);

    var result = document.getElementsByClassName("result")[0];
    var compareBtnElem = document.getElementsByClassName("compareBtn")[0];
    var input1 = document.getElementsByClassName("n1")[0];
    var input2 = document.getElementsByClassName("n2")[0];
    [input1, input2].forEach(function (i) {
        i.onkeyup = function () {
            this.value = this.value.replace(/[^\d]/, ""); // force to enter Number
        };
    });
    compareBtnElem.addEventListener("click", function () {
        if (input1.value === "" || input2.value === "") {
            alert("input number please.");
            result.innerHTML = "";
            return;
        }
        var o = Math.max(parseInt(input1.value), parseInt(input2.value));
        result.innerHTML = "<h2>Result: " + o + "</h2>";
    }, false);
};