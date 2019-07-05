$(document).ready(function () {
    // COUNT circle
    if ($('*').is('.count-box')) {
        function countup(className) { //className - имя класса, в котором есть число
            var countBlockTop = $("." + className).offset().top; //смещение блока с числом относительно верхнего края	
            var windowHeight = window.innerHeight;//высота окна браузера
            var show = true;// отвечает, что если один раз счетчик сработает, больше не срабатывал

            $(window).scroll(function () {
                if (show && (countBlockTop < $(window).scrollTop() + windowHeight)) {
                    show = false; //если мы видим число, то больше его не надо показывать

                    $('.' + className).spincrement({ //вызов плагина с параметрами 
                        from: 1,               //начинать с 1
                        duration: 4000,        //задержка счетчика
                    });
                }
            })
        }

        $(function () {
            countup("count");

        });

    }

    // testimonials slider
    if ($('*').is('.testimonials-slider')) {

        $('.testimonials-slider').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            // autoplay: true,
            autoplaySpeed: 3000,
            arrows: false,
            centerMode: true,
            centerPadding: '15px',
            centerMode: true,
            infinite: true,
            dots: true,
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        centerMode: false,
                        centerPadding: '0px',
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        centerMode: false,
                        centerPadding: '0px',
                    }
                }
            ]
        });

    }

    // BURGER MENU
    const button = document.getElementById('js-menu-button');

    button.addEventListener('click', e => {
        e.preventDefault();
        button.classList.toggle('menu-button--active');
        document.body.classList.toggle('menu-open');
    });

    $('.burger-menu').click(function () {
        $('.header__menu').slideToggle();
    });

    // window.scrollOn = false;
 
    // $('.main-screen').on('wheel',function(event){
    //     if(window.scrollOn == false && event.originalEvent.deltaY > 0) {
    //         window.scrollOn = true;
    //         $('html, body').stop().animate({scrollTop:document.getElementById('scroll-here').getBoundingClientRect().top + 50},1000);
    //         setTimeout(function() {
    //             window.scrollOn = false;
    //         }, 900);
    //     }
    // });


});