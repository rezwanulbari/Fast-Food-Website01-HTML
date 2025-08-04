/*-----------------------------------------------------------------------------------
    Template Name: Qichen - Restaurant HTML Template
    Template URI: site.com
    Description: Qichen is a creative & unique Restaurant HTML Template . This template is exclusive to Restaurants, Fast Food, Bakery, Cafe, Food Shop, Tea/Coffee Shop, Seafood Restaurant, Catering, and Food Business Websites.
    Author: WebTend 
    Author URI: https://webtend.net/
    Version: 1.0

    Note: This is Main Js file
-----------------------------------------------------------------------------------
    Js INDEX
    ===================
    ## Main Menu
    ## Document Ready
    ## Preloader
    ## Sticky
    ## Back to top
    ## Counter
    ## Magnific-popup js
    ## Nice select
    ## Slick Slider
    ## Isotope JS
    ## Nice number js
    ## Price Ranger js
-----------------------------------------------------------------------------------*/

(function($) {
    'use strict';

    //===== Main Menu
    function mainMenu() {
        // Variables
        var var_window = $(window),
            navContainer = $('.header-navigation'),
            navbarToggler = $('.navbar-toggler'),
            navMenu = $('.nav-menu'),
            navMenuLi = $('.nav-menu ul li ul li'),
            closeIcon = $('.navbar-close');
        // navbar toggler
        navbarToggler.on('click', function() {
            navbarToggler.toggleClass('active');
            navMenu.toggleClass('menu-on');
        });
        // close icon
        closeIcon.on('click', function() {
            navMenu.removeClass('menu-on');
            navbarToggler.removeClass('active');
        });
        // adds toggle button to li items that have children
        navMenu.find("li a").each(function() {
            if ($(this).children('.dd-trigger').length < 1) {
                if ($(this).next().length > 0) {
                    $(this).append('<span class="dd-trigger"><i class="far fa-angle-down"></i></span>')
                }
            }
        });
        // expands the dropdown menu on each click
        navMenu.find(".dd-trigger").on('click', function(e) {
            e.preventDefault();
            $(this).parent().parent().siblings().children('ul.sub-menu').slideUp();
            $(this).parent().next('ul.sub-menu').stop(!0, !0).slideToggle(350);
            $(this).toggleClass('sub-menu-open')
        });
        // check browser width in real-time
        function breakpointCheck() {
            var windoWidth = window.innerWidth;
            if (windoWidth <= 1199) {
                navContainer.addClass('breakpoint-on');
            } else {
                navContainer.removeClass('breakpoint-on');
            }
        }
        breakpointCheck();
        var_window.on('resize', function() {
            breakpointCheck();
        });
    };

    // Document Ready
    $(document).ready(function() {
        mainMenu();
    });


    
    // Nav Overlay On
    $(".navbar-toggler, .navbar-close,.nav-overlay").on('click', function (e) {
        $(".nav-overlay").toggleClass("active");
    });
    $(".nav-overlay").on('click', function (e) {
        $(".navbar-toggler").removeClass("active");
        $(".nav-menu").removeClass("menu-on");
    });


    //===== Preloader
    
    $(window).on('load', function(event) {
        $('.preloader').delay(500).fadeOut('500');
    })
    
    //===== Sticky

    $(window).on('scroll', function(event) {
        var scroll = $(window).scrollTop();
        if (scroll < 100) {
            $(".header-navigation").removeClass("sticky");
        } else {
            $(".header-navigation").addClass("sticky");
        }
    });

    //===== Back to top
    $(window).on('scroll', function(event) {
        if ($(this).scrollTop() > 600) {
            $('.back-to-top').fadeIn(200)
        } else {
            $('.back-to-top').fadeOut(200)
        }
    });
    $('.back-to-top').on('click', function(event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: 0,
        }, 1500);
    });
    
    //===== Counter js
    
    if ($('.count').length){
        $('.count').counterUp({
            delay: 100,
            time: 4000
        });
    }

    //===== Magnific-popup js
    
    if ($('.video-popup').length){
        $('.video-popup').magnificPopup({
            type: 'iframe',
            removalDelay: 300,
            mainClass: 'mfp-fade'
        });
    }

    if ($('.img-popup').length){
        $(".img-popup").magnificPopup({
            type: "image",
             gallery: { 
              enabled: true 
            }
        });
    }
    
    //===== Nice select js
    if ($('select').length){
        $('select').niceSelect();
    }
    
    //===== Slick slider js
    $('.hero-slider-one').on('init', function(e, slick) {
        var $firstAnimatingElements = $('div.single-slider:first-child').find('[data-animation]');
        doAnimations($firstAnimatingElements);    
    });
    $('.hero-slider-one').on('beforeChange', function(e, slick, currentSlide, nextSlide) {
        var $animatingElements = $('div.single-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
        doAnimations($animatingElements);    
    });
    function doAnimations(elements) {
        var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        elements.each(function() {
            var $this = $(this);
            var $animationDelay = $this.data('delay');
            var $animationType = 'animated ' + $this.data('animation');
            $this.css({ 
                'animation-delay': $animationDelay,
                '-webkit-animation-delay': $animationDelay
            });
            $this.addClass($animationType).one(animationEndEvents, function() {
                $this.removeClass($animationType);
            });
        });
    }
    if ($('.hero-slider-one').length) {
        var sliderArrows = $('.hero-arrows');
        $('.hero-slider-one').slick({
            dots: false,
            arrows: true,
            infinite: true,
            speed: 800,
            fade: true,
            appendArrows: sliderArrows,
            autoplay: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: '<div class="prev"><i class="far fa-arrow-left"></i></div>',
            nextArrow: '<div class="next"><i class="far fa-arrow-right"></i></div>',
            responsive: [
                {
                    breakpoint: 767,
                    settings: {
                        arrows: false
                    }
                }
            ]
        });
    }
    if ($('.menu-slider-one').length) {
        $('.menu-slider-one').slick({
            dots: true,
            arrows: false,
            infinite: true,
            speed: 800,
            autoplay: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            prevArrow: '<div class="prev"><i class="far fa-angle-left"></i></div>',
            nextArrow: '<div class="next"><i class="far fa-angle-right"></i></div>',
            responsive: [
                {
                    breakpoint: 1400,
                    settings: {
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow:2
                    }
                },
                {
                    breakpoint: 575,
                    settings: {
                        slidesToShow:1
                    }
                }
            ]
        });
    }
    if ($('.gallery-slider-one').length) {
        $('.gallery-slider-one').slick({
            dots: true,
            arrows: false,
            infinite: true,
            speed: 800,
            autoplay: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            prevArrow: '<div class="prev"><i class="far fa-angle-left"></i></div>',
            nextArrow: '<div class="next"><i class="far fa-angle-right"></i></div>',
            responsive: [
                {
                    breakpoint: 1400,
                    settings: {
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });
    }
    if ($('.testimonial-slider-one').length) {
        var sliderDots = $('.testimonial-dots');
        $('.testimonial-slider-one').slick({
            dots: true,
            arrows: false,
            infinite: true,
            speed: 800,
            appendDots: sliderDots,
            autoplay: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: '<div class="prev"><i class="far fa-angle-left"></i></div>',
            nextArrow: '<div class="next"><i class="far fa-angle-right"></i></div>'
        });
    }
    if ($('.testimonial-slider-two').length) {
        $('.testimonial-slider-two').slick({
            dots: true,
            arrows: false,
            infinite: true,
            speed: 800,
            autoplay: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: '<div class="prev"><i class="far fa-angle-left"></i></div>',
            nextArrow: '<div class="next"><i class="far fa-angle-right"></i></div>'
        });
    }
    if ($('.testimonial-slider-three').length) {
        var sliderArrows = $('.testimonial-arrows');
        $('.testimonial-slider-three').slick({
            dots: false,
            arrows: true,
            infinite: true,
            speed: 800,
            appendArrows: sliderArrows,
            autoplay: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            prevArrow: '<div class="prev"><i class="far fa-arrow-left"></i></div>',
            nextArrow: '<div class="next"><i class="far fa-arrow-right"></i></div>',
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });
    }
    if ($('.partner-slider-one').length) {
        $('.partner-slider-one').slick({
            dots: false,
            arrows: false,
            infinite: true,
            speed: 800,
            autoplay: true,
            slidesToShow: 6,
            slidesToScroll: 1,
            prevArrow: '<div class="prev"><i class="far fa-angle-left"></i></div>',
            nextArrow: '<div class="next"><i class="far fa-angle-right"></i></div>',
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        arrows: false,
                        slidesToShow: 4
                    }
                },
                {
                    breakpoint: 991,
                    settings: {
                        arrows: false,
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        arrows: false,
                        slidesToShow: 1
                    }
                }
            ]
        });
    }
    if ($('.product-big-slider').length) {
        $('.product-big-slider').slick({
            dots: false,
            arrows: false,
            speed: 800,
            autoplay: true,
            fade: true,
            asNavFor: '.product-thumb-slider',
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: '<div class="prev"><i class="far fa-angle-left"></i></div>',
            nextArrow: '<div class="next"><i class="far fa-angle-right"></i></div>'
        });
    }
    if ($('.product-thumb-slider').length) {
        $('.product-thumb-slider').slick({
            dots: false,
            arrows: false,
            speed: 800,
            autoplay: true,
            asNavFor: '.product-big-slider',
            focusOnSelect: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            prevArrow: '<div class="prev"><i class="far fa-angle-left"></i></div>',
            nextArrow: '<div class="next"><i class="far fa-angle-right"></i></div>'
        });
    }
    if ($('.recent-product-slider').length) {
        $('.recent-product-slider').slick({
            dots: false,
            arrows: false,
            infinite: true,
            speed: 800,
            autoplay: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            prevArrow: '<div class="prev"><i class="far fa-arrow-left"></i></div>',
            nextArrow: '<div class="next"><i class="far fa-arrow-right"></i></div>',
            responsive: [
                {
                    breakpoint: 1400,
                    settings: {
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 575,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });
    }
    

    //====== Isotope js

    if ($('#gallery-filter').length) {
        $('#gallery-filter').imagesLoaded( function() {
            // items on button click
            $('.filter-btn').on('click', 'li', function () {
                var filterValue = $(this).attr('data-filter');
                $grid.isotope({
                    filter: filterValue
                });
            });
            // menu active class
            $('.filter-btn li').on('click', function (e) {
                $(this).siblings('.active').removeClass('active');
                $(this).addClass('active');
                e.preventDefault();
            });
            var $grid = $('.gallery-row').isotope({
                itemSelector: '.gallery-column',
                layoutMode: 'fitRows'
            });
        });
    }
    

    //===== Nice number js

    
    if ($('input[type="number').length) {
        $('input[type="number"]').niceNumber({
            buttonDecrement:'<i class="far fa-minus"></i>',
            buttonIncrement:'<i class="far fa-plus"></i>'
        });
    }


    //======= Price ranger
    
    if ($('#slider-range').length) {
        $( "#slider-range" ).slider({
            range: true,
            min: 0,
            max: 1000,
            values: [ 25, 750 ],
            slide: function( event, ui ) {
              $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
            }
        });
        $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
            " - $" + $( "#slider-range" ).slider( "values", 1 ) );
    }
    
    $( function() {
        $( "#datepicker" ).datepicker();
      } );

    //===== Wow js
    
    new WOW().init();

})(window.jQuery);