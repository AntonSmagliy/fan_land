$(document).ready(function() {
    $('#webTicker').webTicker({
        height: 'auto',
        startEmpty: false,
        hoverpause: false,
        speed: 250
    });
    $('.slider').slick({
    centerMode: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    });
})
