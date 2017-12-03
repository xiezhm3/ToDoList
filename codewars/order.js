(function () {
    "use strict";

    function order(words) {
        // sort the word according to the number of the word.
        //  [inout] "is2 Thi1s T4est 3a"
        //  [output] "Thi1s is2 3a T4est"

        if (words === "") {
            return "";
        }
        if (words.length === 1) {
            return words;
        }

        function getNum(word) {
            var num = "";
            word.split("").forEach(function (t) {
                if (parseInt(t)) {
                    num += t;
                }
            });
            return parseInt(num);
        }

        var wordList = words.split(" ").sort(function (a, b) {
            return getNum(a) > getNum(b) ? 1 : -1;
        });

        return wordList.join(" ");
    }

    console.log(order("is2 Thi1s T4est 3a"));

    // best practice in codewars of this Kata
    var bestPractice = function (words) {

        return words.split(" ").sort(function (a, b) {
            return a.match(/\d/) - b.match(/\d/); // here is really clever that I never thought.
        }).join(" ");
    };

})();