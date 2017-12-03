(function () {
    "use strict";

    function solution(str) {
        if (str.length % 2 !== 0) {
            str += "_";
        }
        var list = str.split("");
        var result = [];
        var j = 0;
        for (var i = 0; i < list.length; i++) {
            result[j] = list[i] + list[i + 1];
            i++;
            j++;
        }
        return result;
    }

    document.write(solution("asd"));

    var bestPractice = function (str) {
        return (str.length % 2 !== 0 ? str + "_" : str).match(/../g); // I have tried to use regExp, but did not think in this way. COOL!
    };

    var otherPractice = function (str) {
        return (str + "_").match(/../g); // I think this is the best solution which is clean and clever.
    }

    document.write("</br>" + bestPractice("asd"));

    document.write("</br>" + otherPractice("asd"));
})();