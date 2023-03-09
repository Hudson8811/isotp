import $, { event, type } from "jquery";

$(document).ready(function (){
    if($('header')) {
        $('.header__burger').on('click', () => {
            $('body').toggleClass('no-scroll');
            $('.header').toggleClass('active');
            $('.header__burger').toggleClass('active');
            $('.header__wrap').toggleClass('active');
        });

        if($(window).width() <= '999') {
            $('.header__search').addClass('active');
        }
        
        window.addEventListener('resize', function() {
            if($(window).width() <= '999') {
                $('.header__search').addClass('active');
            } else {
                $('.header__search').removeClass('active');
            }

            if($(window).width() >= '999' && $('.header').hasClass('active')) {
                $('body').removeClass('no-scroll');
                $('.header').removeClass('active');
                $('.header__burger').removeClass('active');
                $('.header__wrap').removeClass('active');
            }
        });

        const elGeo = $('.header__geo');
        
        if($(window).innerWidth() <= 999) {
            console.log($(window).innerWidth());
            $('.header__search').after(elGeo);
        } else {
            $('.header__nav').before(elGeo);
        }

        $(window).on('resize', () => {
            const elGeo = $('.header__geo');
            
            if($(window).innerWidth() <= 999) {
                console.log($(window).innerWidth());
                $('.header__search').after(elGeo);
            } else {
                $('.header__nav').before(elGeo);
            }
        });

        $('button.header__menu-item').on('click', function() {
            $(this).toggleClass('open');
        });

        $('.header__search').on('click', function() {
            if(!$(this).hasClass('active')) {
                $(this).addClass('active');
            }
        });
    }
    if($('.js-text-btn')) {
        $('.js-text-btn').on('click', (event) => {
            const textDots = $(event.target).parent('.reviews__item-text').find('.js-text-dots');

            if($(event.target).text() === 'Показать весь текст') {
                textDots.css('display', 'none');
                const textMore = $(event.target).next('.js-text-more');
                textMore.css('display', 'inline');
                $(event.target).before(textMore);
                $(event.target).text('Скрыть');
            } else {
                textDots.css('display', 'inline');
                const textMore = $(event.target).prev('.js-text-more');
                textMore.css('display', 'none');
                $(event.target).after(textMore);
                $(event.target).text('Показать весь текст');
            }
        });
    }

    if($('#js-form-submit')) {
        
        $('#js-form-submit').on('click', (e) => {
            const form = e.target.closest('form');
            const formFill = form.closest('#js-form-fill');
            const formSend = $(formFill).next('#js-form-send');
            
            $(formFill).css('display', 'none');
            $(formSend).css('display', 'flex');
        });
        $('#js-form-back').on('click', (e) => {
            const formSend = e.target.closest('#js-form-send');
            const formFill = $(formSend).prev('#js-form-fill');
            
            $(formFill).css('display', 'block');
            $(formSend).css('display', 'none');
        });
    }

    if($('.popup')) {
        $('.js-popup-order-open').on('click', () => {
            $('body').toggleClass('no-scroll');
            $('.popup').toggleClass('active');
            $('.popup-order').toggleClass('active');
        });
        $('.popup__close').on('click', () => {
            $('body').toggleClass('no-scroll');
            $('.popup').toggleClass('active');
            $('.popup-order').toggleClass('active');
        });

        $('#js-popup-order-submit').on('click', (e) => {
            const form = e.target.closest('form');
            const formFill = form.closest('#js-popup-order-fill');
            console.log(formFill);
            const formSend = $(formFill).next('#js-popup-order-send');
            
            $(formFill).css('display', 'none');
            $(formSend).css('display', 'flex');
        });
        $('#js-popup-order-back').on('click', (e) => {
            const formSend = e.target.closest('#js-popup-order-send');
            const formFill = $(formSend).prev('#js-popup-order-fill');
            
            $(formFill).css('display', 'block');
            $(formSend).css('display', 'none');
        });
    }
    
    AOS.init();
});
if (document.querySelector('.banner')) {
    const swiperBanner = new Swiper('.banner', {
        direction: 'horizontal',
        loop: false,
        dots: true,
        slidesPerView: 1,
        spaceBetween: 20,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            320: {
              spaceBetween: 16,
            },
            699: {
              spaceBetween: 40,
            },
            999: {
                spaceBetween: 130,
            }
        }
    });
}
if (document.querySelector('.reviews__list')) {
    const swiperReviews = new Swiper('.reviews__list', {
        direction: 'horizontal',
        loop: false,
        slidesPerView: 1.1,
        spaceBetween: 12,
        slidesOffsetAfter: 16,
        navigation: {
            nextEl: '.reviews__arrow-next',
            prevEl: '.reviews__arrow-prev',
        },
        breakpoints: {
            320: {
                spaceBetween: 12,
                slidesOffsetAfter: 16,
                slidesPerView: 1.1,
            },
            699: {
                spaceBetween: 16,
                slidesOffsetAfter: 40,
                slidesPerView: 2.113,
            },
            999: {
                spaceBetween: 24,
                slidesOffsetAfter: 128,
                slidesPerView: 3.25,
            }
          }
    });
}
if (document.querySelector('.products__slider')) {
    const swiperProducts = new Swiper('.products__slider', {
        direction: 'horizontal',
        loop: false,
        autoHeight: true,
        slidesPerView: 1.1,
        spaceBetween: 12,
        slidesOffsetAfter: 16,
        navigation: {
            nextEl: '.products__arrow-next',
            prevEl: '.products__arrow-prev',
        },
        breakpoints: {
            320: {
                spaceBetween: 12,
                slidesOffsetAfter: 16,
                slidesPerView: 1.1,
            },
            699: {
                spaceBetween: 16,
                slidesOffsetAfter: 40,
                slidesPerView: 2.2,
            },
            999: {
                spaceBetween: 24,
                slidesOffsetAfter: 128,
                slidesPerView: 3.28,
            }
          }
    });
}
if(document.querySelector('.workers')) {
    const swiperTabs = new Swiper('.workers__tabs', {
        direction: 'horizontal',
        loop: false,
        slidesPerView: "auto",
        spaceBetween: 9,
        slidesOffsetAfter: 16,
        breakpoints: {
            320: {
                slidesOffsetAfter: 16,
            },
            699: {
                spaceBetween: 0,
                slidesOffsetAfter: 40,
            },
            999: {
                spaceBetween: 9,
                slidesOffsetAfter: 128,
            }
        },
        watchSlidesProgress: true,
    });
    const swiperWorker = new Swiper('.workers__worker', {
        direction: 'horizontal',
        loop: false,
        autoHeight: true,
        slidesPerView: 1.1,
        spaceBetween: 12,
        slidesOffsetAfter: 16,
        breakpoints: {
            320: {
                spaceBetween: 12,
                slidesOffsetAfter: 16,
                slidesPerView: 1.1,
            },
            699: {
                spaceBetween: 16,
                slidesOffsetAfter: 40,
            },
            999: {
                spaceBetween: 24,
                slidesOffsetAfter: 128,
                slidesPerView: 1.458,
            }
        },
        thumbs: {
            swiper: swiperTabs,
        }
    });
}
if(document.querySelector('.clients__list')) {
    const slider = document.querySelector('.clients__list');
    let yourSlider;

    const sliderInit = () => {
        yourSlider = new Swiper(slider, {
            direction: 'horizontal',
            loop: false,
            slidesPerView: 1.108,
            spaceBetween: 8,
            slidesOffsetAfter: 16,
            slidesOffsetBefore: 16,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
        })
    }

    const resizeHandlerSlider = () => {
        if (document.body.clientWidth <= 499) {

            if (yourSlider) {
                yourSlider.destroy();
            }

            sliderInit();
        }
    }
    
    resizeHandlerSlider();
    window.addEventListener('resize', resizeHandlerSlider);
}
if(document.querySelector('.examples__list')) {
    const swiperExamples = new Swiper('.examples__list', {
        direction: 'horizontal',
        loop: false,
        slidesPerView: 1,
        spaceBetween: 20,
        arrows: true,
        navigation: {
            nextEl: '.examples__arrow-next',
            prevEl: '.examples__arrow-prev',
        },
    });
    const swiperImg = new Swiper('.item__img', {
        direction: 'horizontal',
        loop: false,
        slidesPerView: 1,
        spaceBetween: 8,
        pagination: {
            el: ".item__wrap .swiper-pagination",
            clickable: true,
        },
    });
}