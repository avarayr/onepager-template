/*jslint browser: true*/
/*global $, jQuery, alert, AnimateScroll */
(function () {
    'use strict';
    
    /** REFLECTED BUTTON'S ICONS **/
    $('.btn.btn-reflected').each(function () {
        var icon = $(this).find('i').clone();
        $(this).prepend(icon.addClass('icon-reflected'));
    });
    
    /* ANIMATE HEADER ON SCROLL */
    new AnimateScroll($('.hero--wrapper'));
    
    
    /* RESPONSIVE CLIP PATH */
    $('.curved-bottom').clipPath([[0, 0], [100, 0], [100, 98], [0, 74]], {
        isPercentage: true,
    });
    $('.curved-top').clipPath([[0, 0], [100, 20], [100, 100], [0, 100]], {
        isPercentage: true,
    });
}(jQuery));