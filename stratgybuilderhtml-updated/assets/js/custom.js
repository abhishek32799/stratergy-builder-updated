
$(document).ready(function () {
    $('.responsive').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });//silder ends here

    $("#toggle-modal-add").click(function () {
        $(".add-modal-wrap").fadeIn();
    });
    $(".close-con").click(function () {
        $("#add-security-modal").fadeOut();
    });
    $("#add-sec-sub").click(function () {
        $("#add-security-modal").fadeOut();
    });

    $("#tb-click").click(function () {
        $(".ticker-modal-wrap").fadeIn();
    });
    $(".closex").click(function () {
        $(".ticker-modal-wrap").fadeOut();
    });


});