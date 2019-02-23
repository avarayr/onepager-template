/* 
    animateScroll.js
    Author: Michael Melikyan
*/

/*jslint browser: true*/
/*global $, jQuery, alert, window */

'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AnimateScroll = function () {
  function AnimateScroll(element) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

    _classCallCheck(this, AnimateScroll);

    this.options = {
      speed: 1
    };

    if (element == null) throw new Error('Provide the element -> new AnimationScroll(elements[, options])');
    this.element = element;
    if (options !== null) {
      this.options = options;
    }
    this.init();
  }

  AnimateScroll.prototype.init = function init() {
    window.addEventListener('scroll', this.scroll.bind(this));
  };

  AnimateScroll.prototype.scroll = function scroll() {
    var scrollTop = $(window).scrollTop(),
        elementScroll = this.options.speed * (scrollTop / 5),
        elementOpacity = 1 - this.options.speed * (scrollTop / 5) / 100;
    $(this.element).css('transform', 'translateY(-' + elementScroll + 'px)')
                    .css('opacity', elementOpacity);
  };

  return AnimateScroll;
}();