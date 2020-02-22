$(document).ready(function () {

    //Slider

    $(".carousel__inner").slick({
        adaptiveHeight: true,
        speed: 800,
        prevArrow: "<button type=\"button\" class=\"slick-prev\"><img src='../images/left-arrow.png'></button>",
        nextArrow: "<button type=\"button\" class=\"slick-next\"><img src='../images/right-arrow.png'></button>",
        responsive: [{
            breakpoint: 992,
            settings: {
                dots: true,
                arrows: false
            }
        }]
    });

    //Catalog


    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function () {
        $(this)
            .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
            .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });



    function tooggleSlide(item) {
        $(item).each(function (i) {
            $(this).on("click", function (e) {
                e.preventDefault();
                $(".catalog-item__content").eq(i).toggleClass("catalog-item__content_active");
                $(".catalog-item__list").eq(i).toggleClass("catalog-item__list_active");
            })
        });
    }
    tooggleSlide(".catalog-item__link");
    tooggleSlide(".catalog-item__back");

//    Modal



    $("[data-modal=consultation]").on("click", function () {
        $('.overlay, #consultation').fadeIn();
    });

    $(".modal__close").on("click", function () {
        $(".overlay, #consultation, #order, #thanks").fadeOut();
    });


    $(".button_mini").each(function (i) {
        $(this).on("click", function () {
            $("#order .modal__descr").text($(".catalog-item__subtitle").eq(i).text());
            $(".overlay, #order").fadeIn();
        })
    });

//    Form

    function valideForms(form) {
        $(form).validate({
            rules: {
                name: "required",
                phone: "required",
                email: {
                    required: true,
                    email: true
                }
            },
            messages: {
                name: "Пожалуйста, введите свое имя",
                phone: "Пожалуйста, введите номер телефона",
                email: {
                    required: "Пожалуйста, введите свою почту",
                    email: "Неправильно введен адресс почты"
                }
            }

        });
    }

    valideForms("#consultation-form");
    valideForms("#consultation form");
    valideForms("#order form");

    $("input[name=phone]").mask('+7(999)-999-99-99');

});