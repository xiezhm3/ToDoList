;(function () {
    "use strict";

    var sumStringsAsNumbers = function (a, b) {

        var alen = a.length;
        var blen = b.length;
        var aList = a.split("");
        var bList = b.split("");

        var result = [];

        var flag = false;
        if (alen > blen) {
            flag = true;
        }
        if (flag) {
            for (var i = 0; i < (alen - blen); i++) {
                bList.unshift("0");
            }
        } else {
            for (i = 0; i < (blen - alen); i++) {
                aList.unshift("0");
            }
        }

        var k = 0;

        for (var j = aList.length - 1; j >= 0; j--) {
            var sum = parseInt(aList[j]) + parseInt(bList[j]) + k;
            // console.log(sum);
            result.unshift((sum % 10) + "");
            if (sum >= 10) {
                k = 1;
            } else {
                k = 0;
            }

            if (j === 0 && k >= 1) {
                result.unshift(k + "");
            }
            // console.log(result);
        }
        for (var f = 0; f < result.length; f++) {
            if (result[f] !== "0") {
                break;
            }
        }
        for (var g = 0; g < f; g++) {
            result.shift();
        }
        return result.join("");
    };

    // document.write(sumStringsAsNumbers('712569312664357328695151392', '712569312664357328695151392') + "</br>");

    // document.write(sumStringsAsNumbers("8797", "45") + "</br>");
    document.write(sumStringsAsNumbers("00123", "23") + "</br>")


    String.prototype.reverse = function () {
        return this.split("").reverse().join("");
    };

    // more cleaner than what I code.
    var bestPractice = function (a, b) {
        var index = 0;
        var carry = 0;
        var sum = [];

        a = a.reverse();
        b = b.reverse();

        while (index < a.length || index < a.length || carry != 0) {
            var aDigit = index < a.length ? a[index] : 0;
            var bDigit = index < b.length ? b[index] : 0;
            var digitSum = aDigit + bDigit + carry;
            sum.push((digitSum % 10).toString());
            carry = Math.floor(digitSum / 10);
            index++;
        }
        sum.reverse();
        while(sum[0] === "0") {
            sum.shift();
        }
        return sum.join("");
    };

})
();