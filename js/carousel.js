   // new_arrival 슬라이드 // 
$(document).ready(function () {

    var owl = $('.new_arrival_contents');
    owl.owlCarousel({
        margin: 0,
        loop: true,
        autoplay: true,
        autoplayTimeout: 4000,
        dots: false,
        nav: true,
        navText: ["<div class='nav-btn prev-slide'></div>", "<div class='nav-btn next-slide'></div>"],
        responsive: {
            0:    { items: 1.5, center: true },
            480:  { items: 1.4, center: true },
            600:  { items: 1.6, center: true },
            768:  { items: 2,   center: true },
            1024: { items: 2,   center: true },
            1280: { items: 3,   center: true }
        }
    });


    // bestseller 슬라이드 //
    $('.bestseller_contents').owlCarousel ({
        margin: 27,
        loop: true,
        autoplay: true,
        autoplayTimeout: 4000,
        dots: true,
        nav: false,
        center: false,
        stagePadding: 0,
        responsive: {
                0:    { items: 1.5, center: true },
                480:  { items: 1.4, center: true },
                600:  { items: 1.6, center: true },
                768:  { items: 2,   center: true },
                1024: { items: 2,   center: true },
                1280: { items: 3.55,   center: false }
        }
    });

    //gift 슬라이드 //
        $('.gift_contents').owlCarousel ({
        margin: 5,
        items: 4,
        loop: true,
        autoplay: true,
        autoplayTimeout: 4000,
        dots: false,
        nav: true,
        navText: ["<div class='nav-btn prev-slide'></div>", "<div class='nav-btn next-slide'></div>"],
    });

    
    // brand 슬라이드
    $('.brand_contents').owlCarousel({
        margin: 25,
        loop: true,
        autoplay: true,
        autoplayTimeout: 4000,
        dots: false,
        nav: false,
        center: false,
        stagePadding: 0,
        items: 1,
        responsive: {
            0:    { items: 2 },
            768:  { items: 2 },
            1280: { items: 1.5 }
        }
    });

    // sub_news 슬라이드 //
    $('.news_contents').owlCarousel ({
        margin: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 4000,
        dots: false,
        nav: true,
        navText: ["<div class='nav-btn prev-slide'></div>", "<div class='nav-btn next-slide'></div>"],
        responsive: {
                0:    { items: 1.5, center: true },
                480:  { items: 1.4, center: true },
                600:  { items: 1.6, center: true },
                768:  { items: 2,   center: true },
                1024: { items: 2,   center: true },
                1280: { items: 4.2,   center: false }
        }
    });



});