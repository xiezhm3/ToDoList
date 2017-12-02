(function () {
    "use strict";

    //In this kata you are required to, given a string, replace every letter with its position in the alphabet.
    //If anything in the text isn't a letter, ignore it and don't return it.
    //  a being 1, b being 2, etc.
    var mySolution = function (text) {

            var getPosition = function (letter) {
                switch (letter.toLowerCase()) {
                    case "a":
                        return 1;
                    case "b":
                        return 2;
                    case "c":
                        return 3;
                    case "d":
                        return 4;
                    case "e":
                        return 5;
                    case "f":
                        return 6;
                    case "g":
                        return 7;
                    case "h":
                        return 8;
                    case "i":
                        return 9;
                    case "j":
                        return 10;
                    case "k":
                        return 11;
                    case "l":
                        return 12;
                    case "m":
                        return 13;
                    case "n":
                        return 14;
                    case "o":
                        return 15;
                    case "p":
                        return 16;
                    case "q":
                        return 17;
                    case "r":
                        return 18;
                    case "s":
                        return 19;
                    case "t":
                        return 20;
                    case "u":
                        return 21;
                    case "v":
                        return 22;
                    case "w":
                        return 23;
                    case "x":
                        return 24;
                    case "y":
                        return 25;
                    case "z":
                        return 26;
                    default:
                        return;
                }
            };

            var notAlphabet = function (i) {
                var reg = /[a-zA-Z]+/;
                return reg.test(i);
            };

            var getLettersPosition = function (word) {
                return word.split("").filter(notAlphabet).map(getPosition).join(" ");
            };

            return text.trim().split(" ").filter(notAlphabet).map(getLettersPosition).join(" ");

    };

    // best practice
    function bestPractice(text){
        var result = "";
        for(var i = 0; i < text.length; i++) {
            var code = text.toUpperCase().charCodeAt(i);
            if (code > 64 && code < 91) {
                result += (code - 64) + " ";
            }
        }
        return result.slice(0, result.length - 1);
    }

})();