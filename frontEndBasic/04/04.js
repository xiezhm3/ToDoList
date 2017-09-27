window.onload = function () {
    new AutoPlay("box")
};

var AutoPlay = function (id) {
    this.initialize(id);
}

var getElementsByTagName = function (tagName, parentNode) {
	return (parentNode || document).getElementsByTagName(tagName);
}

AutoPlay.prototype = {
    initialize: function (id) {
        var self = this;
        this.autoTimer = null;
        this.container = document.getElementById(id);
        this.Ul = getElementsByTagName("ul", this.container)[0];
        this.nimg = getElementsByTagName("img", this.container);
        console.log(this.nimg[0].offsetHeight);
        this.createBtn();
        this.btn = getElementsByTagName("li", this.nul);
        this.pIndex = 0;
        // this.toggle(); // this will not work for it always running at moveAds function.
        this.timer = null;
        this.autoTimer = setInterval(function () {
            self.next();
        }, 3000);
        this.container.onmouseover = function () {
            clearInterval(self.autoTimer);
        };
        this.container.onmouseout = function () {
            self.autoTimer = setInterval(function () {
                self.next();
            }, 3000);
        };
        for (var i = 0; i < this.btn.length; i++) {
            this.btn[i].index = i;
            this.btn[i].onmouseover = function () {
                self.pIndex = this.index;
                self.toggle();
            };
        }
    },
	/**
	 * create a list of number(button) that represent the number of picture
	 * **/
    createBtn: function () {
        this.nul = document.createElement("ul");
        this.nul.className = "count";
        this.nFrag = document.createDocumentFragment();
        for (var i = 0; i < this.nimg.length; i++) {
            var nli = document.createElement("li");
            nli.innerHTML = i + 1;
            this.nFrag.appendChild(nli);
        }
        this.nul.appendChild(this.nFrag);
        this.container.appendChild(this.nul);
    },
	/**
	 * get the current button and slide up the current picture.
	 * **/
    toggle: function () {
        for (var i = 0; i < this.btn.length; i++) {
            this.btn[i].className = "";
        }
        this.btn[this.pIndex].className = "current";
        var distance = this.pIndex * this.nimg[0].offsetHeight;
        this.moveAds(-distance);
    },
	/**
	 * turn to the next button and change the picture
	 * **/
    next: function () {
        this.pIndex++;
        this.pIndex == this.btn.length && (this.pIndex = 0);
        this.toggle();
    },
	/**
	 * slide the picture up smoothly
	 * **/
    moveAds: function (distance) {
        var self = this;
        clearInterval(self.timer);
        self.timer = setInterval(function () {
        	console.log("distance: " + distance);
	        console.log(self.Ul.offsetHeight);
            var tempDistance = (distance - self.Ul.offsetTop) / 5;
            console.log("temp: " + tempDistance);
            tempDistance = tempDistance > 0 ? Math.ceil(tempDistance) : Math.floor(tempDistance);
            self.Ul.offsetTop == distance ? (clearInterval(self.timer)) :
                (self.Ul.style.top = self.Ul.offsetTop + tempDistance + "px" );
            console.log(self.Ul.offsetHeight);
        }, 30);
    }
};