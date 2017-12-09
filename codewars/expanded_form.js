(function () {
    "use strict";

    var expandedForm = function (num) {
        var str = num.toString();
        var len = str.length;
        var numList = [];

        for (var i in str) {
            var multiply = "";
            for (var j = 0; j < len - 1; j++) {
                multiply += "0";
            }
            if (str[i] != 0) {
                numList.push(str[i] + multiply);
            }
            len = len - 1;
        }
        return numList.join(" + ");

    };

    document.write(expandedForm(107) + "</br>");
    document.write(expandedForm(92344) + "</br>");
    document.write(expandedForm(125234) + "</br>");
    document.write(expandedForm(23041135) + "</br>");

    var expandedForm02 = function (num) {
        var numSplit = num.toString().split(".");
        var numList = [];
        for (var i = 0; i < numSplit.length; i++) {

            if (numSplit[i] === "0") {
                continue;
            }

            if (i === 0) {
                var intStr = numSplit[0];

                var lenInt = intStr.length;
                for (var k in intStr) {
                    var multiply = "";
                    for (var j = 0; j < lenInt - 1; j++) {
                        multiply += "0";
                    }
                    if (intStr[k] !== "0") {
                        numList.push(intStr[k] + multiply);
                    }
                    lenInt = lenInt - 1;
                }

            } else {
                var decimal = numSplit[i];
                var lenDecimal = decimal.length;
                var fm = 1;
                for (var l = 0; l < lenDecimal; l++) {
                    fm *= 10;
                    if (decimal[l] !== "0") {
                        numList.push(decimal[l] + "/" + fm);
                    }
                }
            }
        }
        return numList.join(" + ");
    };

    document.write(expandedForm02(0.04));
})();