/* 
    PhoneScroller.js 
    Author: Michael Melikyan
*/

/*jslint browser: true*/
/*global $, jQuery, alert*/
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PhoneScroller = (function () {
    function PhoneScroller(scroller, sections) {
        _classCallCheck(this, PhoneScroller);
        this.scroller = scroller;
        this.scrollSections = sections;
        window.addEventListener('scroll', this.scroll.bind(this));
    }

    PhoneScroller.prototype.scroll = function scroll() {
        var _this = this;

        var scrollTop = $(window).scrollTop(),
            section = null;
        if (this.scrollSections.length === 0) {
            throw new Error("No sections provided!");
        }
        this.scrollSections.forEach(function (element, index) {
            if (scrollTop >= element.positionReal && _this.scrollSections[index + 1] != null && scrollTop < _this.scrollSections[index + 1].positionReal) {
                section = element;
            }
        });
      
        if (section === null) {
            section = this.scrollSections[this.scrollSections.length - 1];
        }
        this.scroller.css('background-position-y', -section.positionPhone);
    };

    return PhoneScroller;
})();