$(window).on('resize', function () {
    if (window.innerWidth > 1280) {
        $('.navbar').css({display: "block"});
    } else {
        $('.navbar').css({display: "none"});
    }
});

$('.icon').on('click', function () {
    $('.navbar').slideToggle(500);
});