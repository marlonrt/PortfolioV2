$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 5000,
        smartSpeed: 1500,
        autoplayHoverPause: true
    });

    $(".owl-carousel").on("translated.owl.carousel", function (event) {
        var carousel = $(event.target);
        carousel.trigger("stop.owl.autoplay");
        setTimeout(function () {
            carousel.trigger("play.owl.autoplay", [5000]);
        }, 5000);
    });
});
