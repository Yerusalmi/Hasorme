(function () {

    "use strict";

    

    var Core = {
        initialized: false,
        initialize: function () {
            if (this.initialized)
                return;
            this.initialized = true;
            this.build();
        },
        build: function () {
            // Loader
            this.loaderInit();
            // Init toggle menu
            this.initToggleMenu();
            // Fixed header
            this.fixedHeader();
            // Tooltips
            this.initTooltips();
            // Init carousel
            this.initOwlCarousel();
            //Scroll to
            this.initScrollTo();
            // Init fancybox
            this.initFancyBox();
            // Init fancybox video
            this.initFancyBoxVideo();
            // Init toggle menu
            this.initToggleMenu();
            // Wow init
            this.wowInit();
            //Init scrollreveral
            this.initSR();
            // Init counters
            this.waypointsStart();
            // Isotope init
            this.isotopeGallery();
            // Blog masonry
            this.initMasonry();
        },
        initMasonry: function () {
            $('.js-blog-list-container .blog-item .item-image img').load(function () {
                $('.js-blog-list-container').masonry({
                    itemSelector: '.blog-item',
                    isFitWidth: true
                });
            });
        },
        isotopeGallery: function () {
            var $container = $('#gallery-items');

            $(window).load(function () {
                $container.isotope({
//		    resizable: false, // disable normal resizing
                    transitionDuration: '0.65s',
                    masonry: {
                        columnWidth: $container.find('.gallery-item:not(.wide)')[0]
                    }
                });

                $(window).resize(function () {
                    $container.isotope('layout');
                });
            });

            // filter items on button click
            $('#filters').on('click', 'a', function (e) {
                $(e.target).toggleClass('active').siblings().removeClass("active");
                var filterValue = $(this).attr('data-filter');
                $container.isotope({filter: filterValue});
            });
        },
        waypointsStart: function () {
            var countersIteration = true;
            var skillsIteration = true;

            var scrollTop =  document.body.scrollTop;

            function skillsAnimate() {
                if ($('.skills').length && $('.skills').offset().top < (scrollTop + $(window).height()) && skillsIteration) {
                    $('.skills .skills-animated').each(function () {
                        var persent = $(this).data('percent');
                        $(this).find('.progress').animate({
                            display: 'none',
                            width: persent + '%'
                        }, 800);
                    });
                    skillsIteration = false;
                }
            }

            function countersAnimate() {
                if ($('.section-special-info').length && $('.section-special-info').offset().top < (scrollTop + $(window).height()) && countersIteration) {
                    $(".spincrement").spincrement({
                        duration: 3000
                    });
                    countersIteration = false;
                }
            }

            $(window).on('scroll', function () {
                countersAnimate();
            }).on('load', function () {
                countersAnimate();
            });
            $(window).on('scroll', function () {
                skillsAnimate();
            }).on('load', function () {
                skillsAnimate();
            });
        },
        initSR: function () {
            window.sr = ScrollReveal({
                reset: true
            });
            sr.reveal('.fadeInSR');
        },
        wowInit: function () {
            var scrollingAnimations = $('body').data("scrolling-animations");
            if (scrollingAnimations) {
                new WOW().init();
            }
        },
        initToggleMenu: function () {

            var trigger = $('.toggle-menu-button');
            var isClosed = true;

            function showMenu() {
                $('#nav').addClass('navbar-scrolling-fixing');
                $('#fixedMenu').delay(0).fadeIn(300);
                trigger.addClass('is-open');
                isClosed = false;
            }

            function hideMenu() {
                $('#fixedMenu').fadeOut(100);
                $('#nav').removeClass('navbar-scrolling-fixing');
                trigger.removeClass('is-open');
                isClosed = true;
            }

            trigger.on('click', function (e) {
                e.preventDefault();
                if (isClosed === true) {
                    showMenu();
                } else {
                    hideMenu();
                }
            });
        },
        initFancyBox: function () {
            $('.fancybox').fancybox();
        },
        initFancyBoxVideo: function () {
            $(".fancybox-video").on('click',function () {
                $.fancybox({
                    'padding': 0,
                    'autoScale': false,
                    'transitionIn': 'none',
                    'transitionOut': 'none',
                    'title': this.title,
                    'width': 680,
                    'height': 495,
                    'href': this.href.replace(new RegExp("watch\\?v=", "i"), 'v/'),
                    'type': 'swf',
                    'swf': {
                        'wmode': 'transparent',
                        'allowfullscreen': 'true'
                    }
                });

                return false;
            });
        },
        initScrollTo: function () {
            $('.scrollTo').on('click', function (e) {
                e.preventDefault();
                var href = $(this).attr('href');
                if (href !== '#') {
                    $('html, body').animate({
                        scrollTop: $(href).offset().top - 20
                    }, 'slow');
                } else {
                    $('html, body').animate({
                        scrollTop: 0
                    }, 'slow');
                }
            });
        },
        initTooltips: function () {
            $('[data-toggle="tooltip"]').tooltip();
        },
        loaderInit: function () {
            $(window).on('load', function () {
                var $preloader = $('#page-preloader'),
                    $spinner = $preloader.find('.spinner');
                $spinner.fadeOut();
                $preloader.delay(350).fadeOut(800);
            });
        },
        initOwlCarousel: function (options) {

            $(".enable-owl-carousel").each(function (i) {
                var $owl = $(this);
                var navigationData = $owl.data('navigation');
                var paginationData = $owl.data('pagination');
                var singleItemData = $owl.data('single-item');
                var autoPlayData = $owl.data('auto-play');
                var dataItems = $owl.data('items');
                var transitionStyleData = $owl.data('transition-style');
                var mainSliderData = $owl.data('main-text-animation');
                var afterInitDelay = $owl.data('after-init-delay');
                var stopOnHoverData = $owl.data('stop-on-hover');
                var items500 = $owl.data('items500');
                var items767 = $owl.data('items767');
                var items991 = $owl.data('items991');
                var items1199 = $owl.data('items1199');
                var dataNav = $owl.data('nav');
                var dataDots = $owl.data('dots');
                $owl.owlCarousel({
                    navigation: navigationData,
                    pagination: paginationData,
                    singleItem: singleItemData,
                    autoPlay: autoPlayData,
                    items: dataItems,
                    nav: dataNav,
                    dots: dataDots,
                    navText: ['', ''],
                    transitionStyle: transitionStyleData,
                    stopOnHover: stopOnHoverData,
                    navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
                    responsive: {
                        0: {
                            items: items500
                        },
                        500: {
                            items: items767
                        },
                        767: {
                            items: items991
                        },
                        991: {
                            items: items1199
                        }


                    },
                    afterInit: function (elem) {
                        if (mainSliderData) {
                            setTimeout(function () {
                                $('.main-slider_zoomIn').css('visibility', 'visible').removeClass('zoomIn').addClass('zoomIn');
                                $('.main-slider_fadeInLeft').css('visibility', 'visible').removeClass('fadeInLeft').addClass('fadeInLeft');
                                $('.main-slider_fadeInLeftBig').css('visibility', 'visible').removeClass('fadeInLeftBig').addClass('fadeInLeftBig');
                                $('.main-slider_fadeInRightBig').css('visibility', 'visible').removeClass('fadeInRightBig').addClass('fadeInRightBig');
                            }, afterInitDelay);
                        }
                    },
                    beforeMove: function (elem) {
                        if (mainSliderData) {
                            $('.main-slider_zoomIn').css('visibility', 'hidden').removeClass('zoomIn');
                            $('.main-slider_slideInUp').css('visibility', 'hidden').removeClass('slideInUp');
                            $('.main-slider_fadeInLeft').css('visibility', 'hidden').removeClass('fadeInLeft');
                            $('.main-slider_fadeInRight').css('visibility', 'hidden').removeClass('fadeInRight');
                            $('.main-slider_fadeInLeftBig').css('visibility', 'hidden').removeClass('fadeInLeftBig');
                            $('.main-slider_fadeInRightBig').css('visibility', 'hidden').removeClass('fadeInRightBig');
                        }
                    },
                    afterMove: sliderContentAnimate,
                    afterUpdate: sliderContentAnimate,
                });
            });
            function sliderContentAnimate(elem) {
                var $elem = elem;
                var afterMoveDelay = $elem.data('after-move-delay');
                var mainSliderData = $elem.data('main-text-animation');
                if (mainSliderData) {
                    setTimeout(function () {
                        $('.main-slider_zoomIn').css('visibility', 'visible').addClass('zoomIn');
                        $('.main-slider_slideInUp').css('visibility', 'visible').addClass('slideInUp');
                        $('.main-slider_fadeInLeft').css('visibility', 'visible').addClass('fadeInLeft');
                        $('.main-slider_fadeInRight').css('visibility', 'visible').addClass('fadeInRight');
                        $('.main-slider_fadeInLeftBig').css('visibility', 'visible').addClass('fadeInLeftBig');
                        $('.main-slider_fadeInRightBig').css('visibility', 'visible').addClass('fadeInRightBig');
                    }, afterMoveDelay);
                }
            }
        },
        fixedHeader: function (options) {
            if ($(window).width() > 767) {
                // Fixed Header
                var topOffset = $(window).scrollTop();
                if (topOffset > 0) {
                    $('body').addClass('fixed-header');
                }
                $(window).on('scroll', function () {
                    var fromTop = $(this).scrollTop();
                    if (fromTop > 0) {
                        $('body').addClass('fixed-header');
                        $('.scrolling-header .navbar').addClass('navbar-scrolling');
                    } else {
                        $('body').removeClass('fixed-header');
                        $('.scrolling-header .navbar').removeClass('navbar-scrolling');
                    }

                });
            }
        }
    };
    Core.initialize();
})();


		
		
		
		
		$('.ikininbiri').on({
    mouseenter: function() {
        $(this).siblings('.ikininikisi').addClass("saggiderseniyi");
    },
    mouseleave: function() {
        $(this).siblings('.ikininikisi').removeClass("saggiderseniyi");
    }
});




		$( "#iitem1" ).mouseover(function() {
  			$("body > section.service-features-section > div > div > div:nth-child(1) > div").addClass("active");
  			$("#iitem1 > div > div.item-heading > h5").addClass("fontlaribuyut");
		});
  		$( "#iitem1" ).mouseleave(function() {
  			$("body > section.service-features-section > div > div > div:nth-child(1) > div").removeClass("active");
  			$("#iitem1 > div > div.item-heading > h5").removeClass("fontlaribuyut");
		});
		
		
		$( "#iitem2" ).mouseover(function() {
  			$("body > section.service-features-section > div > div > div:nth-child(2) > div").addClass("active");
  			$("#iitem2 > div > div.item-heading > h5").addClass("fontlaribuyut");
		});
  		$( "#iitem2" ).mouseleave(function() {
  			$("body > section.service-features-section > div > div > div:nth-child(2) > div").removeClass("active");
  			$("#iitem2 > div > div.item-heading > h5").removeClass("fontlaribuyut");
		});
		
		
		$( "#iitem3" ).mouseover(function() {
  			$("body > section.service-features-section > div > div > div:nth-child(3) > div").addClass("active");
  			$("#iitem3 > div > div.item-heading > h5").addClass("fontlaribuyut");
		});
  		$( "#iitem3" ).mouseleave(function() {
  			$("body > section.service-features-section > div > div > div:nth-child(3) > div").removeClass("active");
  			$("#iitem3 > div > div.item-heading > h5").removeClass("fontlaribuyut");
		});
		
		
		
		$( "#home #iiitem1" ).mouseover(function() {
  			$("#home #iiitem1").addClass("active");
  			$("#home #iiitem1 > h5").addClass("fontlaribuyut");
		});
		
		$( "#home #iiitem1" ).mouseleave(function() {
  			$("#home #iiitem1 > div").removeClass("active");
  			$("#home #iiitem1 > h5").removeClass("fontlaribuyut");
		});
		
		
		$( "#iiitem1" ).mouseover(function() {
  			$("#iiitem1 > div").addClass("active");
  			$("#iiitem1 > div > div.item-heading > h5").addClass("fontlaribuyut");
		});
  		$( "#iiitem1" ).mouseleave(function() {
  			$("body#home > section.service-features-section > div > div > div:nth-child(1) > div").removeClass("active");
  			$("#iiitem1 > div > div.item-heading > h5").removeClass("fontlaribuyut");
		});		
		
		$( "#item2" ).mouseover(function() {
  			$("#item2 > div").addClass("active");
  			$("#item2 > div > div.item-heading > h5").addClass("fontlaribuyut");
		});
  		$( "#item2" ).mouseleave(function() {
  			$("body#home > section.service-features-section > div > div > div:nth-child(2) > div").removeClass("active");
  			$("#item2 > div > div.item-heading > h5").removeClass("fontlaribuyut");
		});
		
		
		$( "#item3" ).mouseover(function() {
  			$("body#home > section.service-features-section > div > div > div:nth-child(3) > div").addClass("active");
  			$("#item3 > div > div.item-heading > h5").addClass("fontlaribuyut");
		});
  		$( "#item3" ).mouseleave(function() {
  			$("body#home > section.service-features-section > div > div > div:nth-child(3) > div").removeClass("active");
  			$("#item3 > div > div.item-heading > h5").removeClass("fontlaribuyut");
		});
		
		
		$('#home > section.header-section.home-header > div.scroll-down').on('click',function () {

          $('body, html').animate({ scrollTop: 700 }, 800);

              });
         		
		
		
		
		
		
		