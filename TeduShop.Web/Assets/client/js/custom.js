(function ($) {
    "use strict";
    $('.nav-tabs li a').click(function (e) {
         $('.slider__product').slick('refresh');
    });
    $('.owl-carousel').owlCarousel(
        {
            loop: true,
            margin: 10,
            responsiveClass: true,
            autoplay: true,
            responsive: {
                0: {
                    items: 1,
                    nav: true
                },
                600: {
                    items: 3,
                    nav: false
                },
                1000: {
                    items: 2,
                    nav: true,
                    loop: false
                }
            },
            navigation: false,
            autoPlay: true,
        }
    );

    if ($('.scroll-top').length) {
        var scrollTrigger = 100, // px
            backToTop = function () {
                var scrollTop = $(window).scrollTop();
                if (scrollTop > scrollTrigger) {
                    $('.scroll-top').addClass('show');

                } else {
                    $('.scroll-top').removeClass('show');
                }
            };
        backToTop();
        $(window).on('scroll', function () {
            backToTop();

        });
        $('.scroll-top').on('click', function (e) {
            e.preventDefault();
            $('html,body').animate({
                scrollTop: 0
            }, 700);
        });
    }
    $(window).load(function () {


        $("#menu").mmenu();

        $('.slider').nivoSlider({
            effect: 'random',
            animSpeed: 500,
            pauseTime: 8000,
            controlNav: true,
            controlNavThumbs: false,
            pauseOnHover: true,
        });
        $('.slider').on('swipeleft', function (e) {
            $('a.nivo-nextNav').trigger('click');
            e.stopPropagation();
            return false;
        });
        $('.slider').on('swiperight', function (e) {
            $('a.nivo-prevNav').trigger('click');
            e.stopPropagation();
            return false;
        });

        $(".login").click(function (e) {
            e.stopPropagation();
            $("#login").modal("show");
            $("#login").appendTo("body");
            $('#register').modal("hide");
        });

        $(".register").click(function (e) {
            e.stopPropagation();
            $("#register").modal("show");
            $("#register").appendTo("body");
            $('#login').modal("hide");
        });
    });
    $(".menu-category .catalog__item").after().click(function () {
        $(this).toggleClass("active");
    });

    $('#tab0 .slider__product').slick({
        dots: false,
        arrows: false,
        infinite: false,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 1,
        lazyLoad: 'progressive',
        // autoplay:true,
        // autoplaySpeed : 2500,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            }, {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }, {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
    $('#tab1 .slider__product').slick({
        dots: false,
        arrows: false,
        infinite: false,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 1,
        lazyLoad: 'progressive',
        // autoplay:true,
        // autoplaySpeed : 2500,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            }, {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }, {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
    $('#tab2 .slider__product').slick({
        dots: false,
        arrows: false,
        infinite: false,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 1,
        lazyLoad: 'progressive',
        // autoplay:true,
        // autoplaySpeed : 2500,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            }, {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }, {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
    $('#tab3 .slider__product').slick({
        dots: false,
        arrows: false,
        infinite: false,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 1,
        lazyLoad: 'progressive',
        // autoplay:true,
        autoplaySpeed: 2500,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            }, {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }, {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
    $('.slider__product_2').slick({
        dots: false,
        arrows: false,
        infinite: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        lazyLoad: 'ondemand',
        autoplay: true,
        autoplaySpeed: 2500,
        // infinite : true,
        responsive: [{
            breakpoint: 991,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
    $('.slider__product_3').slick({
        dots: false,
        arrows: false,
        infinite: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        lazyLoad: 'ondemand',
        autoplay: true,
        autoplaySpeed: 2500,
        // infinite : true,
        responsive: [{
            breakpoint: 991,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
    $('.slider__brand').slick({
        dots: false,
        arrows: false,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        lazyLoad: 'ondemand',
        autoplay: true,
        autoplaySpeed: 2500,
        responsive: [{
            breakpoint: 991,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
    $('.slider-partner').slick({
        dots: false,
        arrows: false,
        infinite: true,
        speed: 300,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 6,
        slidesToScroll: 6,
        lazyLoad: 'ondemand',
        responsive: [{
            breakpoint: 991,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
                infinite: true,
                dots: true
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }, {
            breakpoint: 320,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
    $('.slider__product__sameple').slick({
        dots: false,
        arrows: false,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        lazyLoad: 'ondemand',
        responsive: [{
            breakpoint: 991,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        ]
    });
    $('.nav-slider__product__sp .nav.prev').click(function () {
        $('.slider__product__sameple').slick('slickPrev');
    });

    $('.nav-slider__product__sp .nav.next').click(function () {
        $('.slider__product__sameple').slick('slickNext');
    });

    $('#tab0 .nav-slider__product .nav.prev').click(function () {
        $('#tab0 .slider__product').slick('slickPrev');
    });

    $('#tab0 .nav-slider__product .nav.next').click(function () {
        $('#tab0 .slider__product').slick('slickNext');
    });
    $('#tab1 .nav-slider__product .nav.prev').click(function () {
        $('#tab1 .slider__product').slick('slickPrev');
    });

    $('#tab1 .nav-slider__product .nav.next').click(function () {
        $('#tab1 .slider__product').slick('slickNext');
    });

    $('#tab2 .nav-slider__product .nav.prev').click(function () {
        $('#tab2 .slider__product').slick('slickPrev');
    });

    $('#tab2 .nav-slider__product .nav.next').click(function () {
        $('#tab2 .slider__product').slick('slickNext');
    });

    $('.nav-slider__product_2 .nav.prev').click(function () {
        $('.slider__product_2').slick('slickPrev');
    });

    $('.nav-slider__product_2 .nav.next').click(function () {
        $('.slider__product_2').slick('slickNext');
    });
    $('.nav-slider__product_3 .nav.prev').click(function () {
        $('.slider__brand').slick('slickPrev');
    });

    $('.nav-slider__product_3 .nav.next').click(function () {
        $('.slider__brand').slick('slickNext');
    });
    $(".nav-toggle").click(function () {
        if ($(".menu-category").hasClass("show-menu")) {
            $(".menu-category").removeClass("show-menu");
            $(".common-overlay").removeClass("show");
        } else {
            $(".menu-category").addClass("show-menu");
            $(".common-overlay").addClass("show");


        }
    });
    $(".common-overlay").click(function () {
        if ($(".common-overlay").hasClass("show")) {
            $(".menu-category").removeClass("show-menu");
            $(".common-overlay").removeClass("show");
        } else {
            $(".menu-category").addClass("show-menu");
            $(".common-overlay").addClass("show");


        }
    });
    $(".menu-category .catalog__item").after().click(function () {
        $(this).toggleClass("active");
    });
    $('.product__view__image--thumb').slick({
        slidesToShow : 1,
        slidesToScroll : 2,
        verticalSwiping : true,
        speed : 300,
        autoplay : true,
        autoplaySpeed : 2000,
        vertical : true,
        arrows : true
    });
    $('.modal').on('shown.bs.modal', function (e) {
        $('.product__view__image--list,.product__view__image--thumb').resize();
    });
    if ($("#slider__price,#lower-price,#upper-price").length) {
        var slider__price = document.getElementById('slider__price');

        noUiSlider.create(slider__price, {
            connect: true,
            behaviour: 'tap',
            start: [500, 4000],
            range: {
                'min': [0],
                '10%': [500, 500],
                '50%': [4000, 1000],
                'max': [10000]
            }
        });
        var nodes = [
            document.getElementById('lower-price'), // 0
            document.getElementById('upper-price')  // 1
        ];
        slider__price.noUiSlider.on('update', function (values, handle, unencoded, isTap, positions) {
            nodes[handle].innerHTML = values[handle];
        });
    }
    if ($("#elevate__zoom,#image-additional-carousel").length) {
        if ($("body").width() > 200) {
            var zoomCollection = '#elevate__zoom';
            $(zoomCollection).elevateZoom({
                lensShape: "round",
                lensSize: 50,
                easing: true,
                scrollZoom: true,
                gallery: 'image-additional-carousel',
                cursor: 'pointer',
                galleryActiveClass: "active"
            });
        }

    }
    if ($(".fancybox").length) {
        $('.fancybox').fancybox();
    }
    $(".modal__close").click(function () {
        $(".zoomContainer").remove();
    });
    $(document).ready(function () {
        $('[data-toggle="tooltip"],[data-toggle="modal"]').tooltip();
    });
    // if($(".fancybox").length){
    //     $('.fancybox').fancybox();
    // }
    //js for sub menu
    $(".menu-category li").has("ul").addClass("has-sub__menu");
    $(".menu-category .has-sub__menu").hover(function () {
            $(this).addClass("active");
        },
        function () {
            $(this).removeClass("active");
        });
    //
    //PHẦN VALIDATE

    $("#reset").validate({
        rules: {
            password: {required: !0},
            repassword: {required: !0, equalTo: "#password"},
        },
        messages: {
            password: {required: "Mật khẩu không được để trống"},
            repassword: {
                required: "Mật khẩu không được để trống",
                equalTo: "Mật khẩu không giống nhau"
            }
        }
    });

    $("#login-form").validate({
        rules: {
            'login_username': {required: !0},
            'login_password': {required: !0}
        },
        messages: {
            "login_username": {required: "Bạn vui lòng nhập Email hoặc Số điện thoại."},
            "login_password": {required: "Bạn vui lòng nhập mật khẩu"}
        }
    });

    $("#contact").validate({
        rules: {
            fullname: {required: !0},
            email: {
                required: !0,
                regex: /^([a-zA-Z0-9_.\-+])+\@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/
            },
            phone: {digits: !0, maxlength: 13, minlength: 8, required: !0},
            content: {required: !0}
        },
        messages: {
            fullname: {required: "Bạn vui lòng nhập họ tên."},
            email: {
                required: "Bạn không được để trống trường này.",
                email: "Email chưa đúng định dạng."
            },
            phone: {
                required: "Bạn không được để trống trường này.",
                digits: "Số điện thoại phải là số.",
                minlength: "Số điện thoại tối thiểu phải có 8 số.",
                maxlength: "Số điện thoại chỉ được 8 đến 14 số."
            },
            content: {required: "Bạn vui lòng nhập nội dung tin nhắn."}
        }
    });

    $.validator.addMethod("regex", function (value, element, regexpr) {
        return regexpr.test(value)
    }, "Email chưa đúng định dạng");

    // Tab đăng ký ngay ()
    $("#register-form").validate({
        rules: {
            'register[password]': {minlength: 6, required: !0},
            'register[password_again]': {equalTo: '#register_password'},
            'register[email]': {
                required: !0,
                regex: /^([a-zA-Z0-9_.\-+])+\@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/
            },
            'register[fullname]': {required: !0},
            'register[phone]': {required: !0},
            'register_has': {required: !0},
        },
        messages: {
            'register[password]': {
                required: "Bạn không được để trống trường này.",
                minlength: "Mật khẩu tối thiểu phải có 6 ký tự."
            },
            'register[password_again]': {equalTo: "Nhập lại mật khẩu không đúng.",},
            'register[email]': {
                required: "Bạn không được để trống trường này.",
                email: "Email chưa đúng định dạng."
            },
            'register[fullname]': {required: "Bạn không được để trống trường này."},
            'register[phone]': {required: "Bạn không được để trống trường này."},
            'register_has': {required: "Bạn chưa đồng ý với điều khoản của website."}
        }
    });

    $("#register-form select").change(function () {
        if ($(this).valid()) {
            $(this).closest('.form-group .error').removeClass('error')
        } else {
            $(this).closest('.form-group').find('.form-control').addClass('error');
            $('.birthday-picker label.error').appendTo('.birthday-picker')
        }
    });

    $("#register-form .register_has").change(function (e) {
        if (!$("#register-form .register_has").valid()) {
            $("#register-form .register_has").parent().find('label.error').remove();
            $("#register-form .register_has").parent().addClass('error')
        } else {
            $("#register-form .register_has").parent().removeClass('error')
        }
    })

    $("#register-form").submit(function (e) {
        $(this).find('select').each(function () {
            if ($(this).valid()) {
                $(this).closest('.form-group .error').removeClass('error')
            } else {
                $(this).closest('.form-group').find('.form-control').addClass('error');
                $('.birthday-picker label.error').appendTo('.birthday-picker')
            }
        })
        if (!$("#register-form .register_has").valid()) {
            $("#register-form .register_has").parent().addClass('error')
        } else {
            $("#register-form .register_has").parent().removeClass('error')
        }
        if (!$("#register-form").valid()) {
            $("#register-form .register_has").parent().find('label.error').remove()
        }
    })

    // Trang quên mật khẩu
    $("#forgotpass").validate({
        rules: {email: {required: !0, email: !0},},
        messages: {
            email: {
                required: "Bạn vui lòng nhập email.",
                email: "Email chưa đúng định dạng."
            },
        }
    });

    //Trang auth/register *Trang chính* ()
    $("#form-register").validate({
        rules: {
            'pageRegister[password]': {minlength: 6, required: !0},
            'pageRegister[password_again]': {equalTo: '#pageRegister_password'},
            'pageRegister[phone]': {required: !0, minlengt: 8, maxlengt: 14},
            'pageRegister[email]': {
                required: !0,
                regex: /^([a-zA-Z0-9_.\-+])+\@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/
            },
            'pageRegister[fullname]': {required: !0},
            'pageRegister_has': {required: !0},
        },
        messages: {
            'pageRegister[password]': {
                required: "Bạn không được để trống trường này.",
                minlength: "Mật khẩu tối thiểu phải có 6 ký tự."
            },
            'pageRegister[password_again]': {equalTo: "Nhập lại mật khẩu không đúng.",},
            'pageRegister[phone]': {
                required: "Bạn không được để trống trường này.",
                minlengt: "Số điện thoại từ 8 đến 14 số",
                maxlengt: "Số điện thoại từ 8 đến 14 số"
            },
            'pageRegister[email]': {
                required: "Bạn không được để trống trường này.",
                email: "Email chưa đúng định dạng."
            },
            'pageRegister[fullname]': {required: "Bạn không được để trống trường này."},
            'pageRegister_has': {required: "Bạn chưa đồng ý điều khoản của chúng tôi."}
        }
    });

    $("#form-register select").change(function () {
        if ($(this).valid()) {
            $(this).closest('.form-group .error').removeClass('error')
        } else {
            $(this).closest('.form-group').find('.form-control').addClass('error');
            $('.pageBirthday-picker label.error').appendTo('.pageBirthday-picker')
        }

    });

    $("#form-register .pageRegister_has").change(function (e) {
        if (!$("#form-register .pageRegister_has").valid()) {
            $("#form-register .pageRegister_has").parent().find('label.error').remove();
            $("#form-register .pageRegister_has").parent().addClass('error')
        } else {
            $("#form-register .pageRegister_has").parent().removeClass('error')
        }
    })

    $("#form-register").submit(function () {
        $(this).find('select').each(function () {
            if ($(this).valid()) {
                $(this).closest('.form-group .error').removeClass('error')
            } else {
                $(this).closest('.form-group').find('.form-control').addClass('error');
                $('.pageBirthday-picker label.error').appendTo('.pageBirthday-picker')
            }
        })
        if (!$("#form-register .pageRegister_has").valid()) {
            $("#form-register .pageRegister_has").parent().addClass('error')
        } else {
            $("#form-register .pageRegister_has").parent().removeClass('error')
        }
        if (!$("#form-register").valid()) {
            $("#form-register .pageRegister_has").parent().find('label.error').remove()
        }
    })
    // js menu
    $(".menu-category li").has("ul").addClass("-sub");
})(jQuery);