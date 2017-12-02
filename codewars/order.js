(function(){
    "use strict";

    function order(words){
        // ...
        if(words === "") {
            return "";
        }

        if(words.length == 1) {
            return words;
        }
        function getNum(word){
            var num = "";
            for(var i = 0; i < word.length; i++) {
                if(parseInt(word[i])) {
                    num += word[i];
                }
            }
            console.log(num);
            return parseInt(num);
        };

        var wordList = words.split(" ");
        console.log(wordList);
        var quickSort = function (wordList) {
            var pivotIndex = Math.floor(wordList.length / 2);
            var pivotEle = getNum(wordList.splice(pivotIndex, 1)[0]);
            var left = [];
            var right = [];
            for(var i = 0; i < wordList.length; i++) {
                if(getNum(wordList[i] < pivotEle)) {
                    left.push(wordList[i]);
                } else {
                    right.push(wordList[i]);
                }
            }
            return quickSort(left).concat([pivotEle], quickSort(right));
        };

        return quickSort(wordList);
        //
        // var numList = [];
        // var index = 0;
        // wordList.forEach(function (w) {
        //     numList[index] = getNum(w);
        //     index++;
        // });
        //
        //
        //
        // var len = wordList.length;
        // for(var i = 0; i < len; i++) {
        //     for(var j = i+1; j < len-1; j++) {
        //         console.log(wordList[i] + " *** " + wordList[j]);
        //         if(getNum(wordList[j] > getNum(wordList[j+1]))) {
        //             var temp = wordList[j];
        //             wordList[i] = wordList[j+1];
        //             wordList[j+1] = temp;
        //         }
        //     }
        // }
        // return wordList.join(" ");
    }
    console.log(order("is2 Thi1s T4est 3a"));

})();