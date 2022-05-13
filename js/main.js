$(function () {
    "use strict";

    $(window).on("scroll", function () {
        var navBar = $(".navbar");
        $(window).scrollTop() >= navBar.height() ? navBar.addClass('scrolled') : navBar.removeClass('scrolled');
    });

    // Adding Class Selected To Li

    $(".tab-swich li").on("click", function () {
        $(this).addClass('selected').siblings().removeClass('selected');

        $('.tabs-list .tabs-content > div').hide();
        $('.' + $(this).data('select')).fadeIn(800);
    });
});