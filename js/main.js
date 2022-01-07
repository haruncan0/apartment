AOS.init();
$(window).scroll(function () {
    if ($(window).scrollTop() >= 300) {
        $('header').addClass('fixed-header');
        $('.body-header').addClass('fadeindown');
        $('.body-header').addClass('animated');
        $(".scroll-top").css("display", "block")
    } else {
        $(".scroll-top").css("display", "none")
        $('header').removeClass('fixed-header');
        $('.body-header').removeClass('fadeindown');
        $('.body-header').removeClass('animated');
    }
});

$(document).ready(function () {
    $(".search-btn").click(function (e) {
        $('.header-search').toggleClass('active');
        $(".header-menu-list").css("visibility", "hidden");
    });

    $(".btn-search").click(function (e) {
        $('.header-search').toggleClass('active');
        $(".btn-search").css("display", "none")
    });
    $(".icon-cancel").click(function (e) {
        $('.header-search').removeClass('active');
        $('.header-search-mobile').removeClass('active');
        $(".btn-search").removeAttr("style");
        $(".header-menu-list").removeAttr("style");
    });
    $(".mobile-menu-icon").click(function (e) {
        $('#go-yukari').css("display", "none");
        $('.mobile-menu').toggleClass('active');
        $('.black').toggleClass('active');
        $("body").css("overflow", "hidden");
    });
    $(".close").click(function (e) {
        $("#go-yukari").removeAttr("style");
        $('.mobile-menu').removeClass('active');
        $("body").removeAttr("style");
        $('.black').removeClass('active');
    });
    $(".black").click(function (e) {
        $("#go-yukari").removeAttr("style");
        $('.mobile-menu').removeClass('active');
        $('.black').removeClass('active');
        $("body").removeAttr("style");
    });

    $('.drop-box').on('click', function () {
        $('.main-menu').removeClass("active");
        $('.drop-box').removeClass("open");
        $(this).addClass('open');
        $(this).closest(".menu").find(".main-menu:first").addClass("active");
    });
    $('.drop-box-2').on('click', function () {
        $(this).addClass('open');
        $(this).closest(".menu").find(".main-menu:first").addClass("active");
    });

    $('.owl-one').owlCarousel({
        loop: true,
        autoplay: false,
        autoplayTimeout: 7000,
        margin: 0,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            767: {
                items: 1
            },
            1000: {
                items: 1
            },
            1240: {
                items: 1
            }

        }
    })
    $('.owl-powerful').owlCarousel({
        center: true,
        autoplay: false,
        autoplayTimeout: 6000,
        loop: true,
        margin: 10,
        nav: false,
        dots: true,
        stagePadding: 170,
        responsive: {
            0: {
                items: 1,
                stagePadding: 0,
            },
            600: {
                items: 3,
                stagePadding: 50,
            },
            800: {
                items: 3,
                stagePadding: 120,
            },
            1000: {
                items: 3
            }

        }
    })
    $('.owl-service').owlCarousel({
        loop: true,
        margin: 30,
        autoplay: false,
        autoplayTimeout: 6000,
        dots: true,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1024: {
                items: 2
            }

        }
    })
    $('.owl-test').owlCarousel({
        loop: true,
        margin: 30,
        autoplay: false,
        autoplayTimeout: 6000,
        dots: false,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 2
            }

        }
    })
    $('.owl-apartment-details').owlCarousel({
        loop: true,
        margin: 0,
        autoplay: false,
        autoplayTimeout: 6000,
        dots: true,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },

            1000: {
                items: 1
            }
        }
    })


    $('.preloader').fadeOut('slow', function () {
        $(this).remove();
    });
});

if ($('.paroller').length) {
    $('.paroller').paroller({
        factor: -0.1, // multiplier for scrolling speed and offset, +- values for direction control  
        factorLg: -0.1, // multiplier for scrolling speed and offset if window width is less than 1200px, +- values for direction control  
        type: 'foreground', // background, foreground  
        direction: 'vertical' // vertical, horizontal  
    });
}

if ($('.paroller-2').length) {
    $('.paroller-2').paroller({
        factor: 0.05, // multiplier for scrolling speed and offset, +- values for direction control  
        factorLg: 0.05, // multiplier for scrolling speed and offset if window width is less than 1200px, +- values for direction control  
        type: 'foreground', // background, foreground  
        direction: 'horizontal' // vertical, horizontal  
    });
}
var btn = $('#go-yukari');
btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: 0
    }, '300');
});


wow = new WOW({
    boxClass: 'wow',
    animateClass: 'animated',
    offset: 0,
    mobile: true,
    live: true
})
wow.init();


var url = window.location.pathname;

if (url == '/apartment/index.php' || url == '/apartment/') {
    $('.nav-home').addClass('available');
    $('#logo').attr("src", "image/resources/logo.png");
};
if (url == '/apartment/about.php') {
    $('.about').addClass('available');
};
if (url == '/apartment/services.php' || url == '/apartment/gallery.php' || url == '/apartment/building.php' || url == '/apartment/faq.php' || url == '/apartment/team.php' || url == '/apartment/new-grid.php' || url == '/apartment/new-details.php' || url == '/apartment/error.php') {
    $('.nav-pages').addClass('available');
};
if (url == '/apartment/apartman-3.php' || url == '/apartment/apartment-details.php') {
    $('.nav-apart').addClass('available');
};
if (url == '/apartment/contact.php') {
    $('.contact').addClass('available');
};
if (url == '/apartment/index.php' || url == '/apartment/') {
    $('header').removeClass('header-2');
};


function mytitle() {
    var focustitle = document.title;
    var onblurtitle = "Beni Burada Unuttun :(";
    window.onblur = function () {
        document.title = onblurtitle;
    };
    window.onfocus = function () {
        document.title = focustitle;
    };
}
mytitle();