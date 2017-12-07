(function(){
	"use strict";

    var songDecoder = function (song) {
	  return song.replace(/(WUB)+/g, " ").trim();
    };
    console.log(songDecoder("AWUBBWUBC"));
    console.log(songDecoder("AWUBWUBWUBBWUBWUBWUBC"));
    console.log(songDecoder("WUBAWUBBWUBCWUB"));

    var clearSolution = function (song) {
	    return song.split("WUB").filter(Boolean).join(""); // using Boolean to filter the false(empty or 0) item. Clever.
    }
})();