$(document).ready(function () {

    $('.oe_website_sale').each(function () {
        $('.image_zoom').zoom();
        $('#ex2').zoom({ on:'grab' });
        $('#ex3').zoom({ on:'click' });
        $('#ex4').zoom({ on:'toggle' });
    });

});
