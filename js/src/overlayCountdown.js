
/**
 * show full screen overlay used for a countdown
 * @see this.checkBigCountDown()
 *
 * @method showOverlayWith
 * @static
 * @chainable
 * 
 * @return {BlazingBaton} Returns the `BlazingBaton` object so methods can be chained.
 */
BlazingBaton.prototype.showOverlayWith = function(content) {
    // nothing to do with disabled countDown
    if(this.opts.show.countDown === false) {
        return this;
    }
    var overlay = document.querySelector(this.domSelectors.bigOverlay);
    overlay.classList.add("active");
    overlay.innerHTML = content;
    return this;
};

/**
 * hide full screen overlay
 * @see this.checkBigCountDown()
 *
 * @method hideOverlay
 * @static
 * @chainable
 * 
 * @return {BlazingBaton} Returns the `BlazingBaton` object so methods can be chained.
 */
BlazingBaton.prototype.hideOverlay = function() {
    document.querySelector(this.domSelectors.bigOverlay).classList.remove("active");
    return this;
};

/**
 * check if we are at the end of bar 16
 * and display a huge countdown before we reach bar 1 again
 *
 * @method checkBigCountDown
 * @static
 * @chainable
 * 
 * @return {BlazingBaton} Returns the `BlazingBaton` object so methods can be chained.
 */
BlazingBaton.prototype.checkBigCountDown = function() {

    // nothing to do with disabled countDown
    if(this.opts.show.countDown === false) {
        return this;
    }
    switch(this.bar16Counter) {
        case 1:
        case (this.bar16MaxClockEvents/2):
            this.hideOverlay();
            return this;
        case (this.bar16MaxClockEvents/2 - 96):
        case (this.bar16MaxClockEvents - 96):
            this.showOverlayWith("3");
            return this;
        case (this.bar16MaxClockEvents/2 - 72):
        case (this.bar16MaxClockEvents - 72):
            this.showOverlayWith("2");
            return this;
        case (this.bar16MaxClockEvents/2 - 48):
        case (this.bar16MaxClockEvents - 48):
            this.showOverlayWith("1");
            return this;
        case (this.bar16MaxClockEvents/2 - 24):
        case (this.bar16MaxClockEvents - 24):
            this.showOverlayWith(this.opts.bar16changeAnnounce);
            return this;
    }
    return this;
};
