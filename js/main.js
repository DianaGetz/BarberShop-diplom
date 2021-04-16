$(document).ready(() => {
    $('.center').slick({
        centerMode: true,
        centerPadding: '0px',
        infinite: true,
        slidesToShow: 3,
        dots: true,
        slidesToScroll: 1,
        variableWidth: true,
        adaptiveHeight: true,
        speed: 1000,
        index: 2,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: true,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 580,
                settings: {
                    arrows: true,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    new WOW({animateClass: ' animate__animated'}).init();


    $('#discount-button').click(() => {
        $('#discount-popup').css('display', 'block')
    });

    $('#popup-cancel').click(() => {
        $('#discount-popup').hide()
    });


    $('.open-popup').click(() => {
        $('.slider').hide()
        $('#reservation-container').show()
    });

    $('#reservation-cancel').click(() => {
        $('#reservation-container').hide()
        $('.slider').show()
    });


    $('#reserve-button > button ').click(() => {
        let name = $('#name')
        let service = $('#service')
        let date = $('#date')
        let phone = $('#phone')
        let master = $('#master')
        let time = $('#time')

        $('.error-input').hide();
        let hasError = false;
        let input = $('input')
        let select = $('select')
        select.css('borderColor', 'rgb(174, 137, 89)');
        input.css('borderColor', 'rgb(174, 137, 89)');

        if (!name.val()) {
            name.siblings('.error-input').show();
            name.css('borderColor', 'red');
            hasError = true;
        }
        if (select.eq(0).val() == 'Выберите услугу') {
            select.eq(0).siblings('.error-input').show();
            select.eq(0).css('borderColor', 'red');
            hasError = true;
        }
        if (!date.val()) {
            date.siblings('.error-input').show();
            date.css('borderColor', 'red');
            hasError = true;
        }
        if (!phone.val()) {
            phone.siblings('.error-input').show();
            phone.css('borderColor', 'red');
            hasError = true;
        }
        if (select.eq(1).val() == 'Выберете мастера') {
            select.eq(1).siblings('.error-input').show();
            select.eq(1).css('borderColor', 'red');
            hasError = true;
        }
        if (select.eq(2).val() == 'Выберете время') {
            select.eq(2).siblings('.error-input').show();
            select.eq(2).css('borderColor', 'red');
            hasError = true;
        }
        if (hasError) {
            return;
        }
        // });
        else (name.val() && service.val() && date.val() && phone.val() && master.val() && time.val())
        {
            $.ajax({
                type: 'post',
                url: 'mail.php',
                data: 'name=' + name.val() + '&service=' + service.val() +
                    '&date=' + date.val() + '&phone=' + phone.val() + '&master=' + master.val() + '&time=' + time.val(),
                success: () => {
                    $('#reservation-sent').show();
                    $('#reservation-content').hide();
                },
                error: () => {
                    $('#reservation-container').hide();
                    alert('Ошибка записи. Свяжитесь, пожалуйста, по номеру телефона.');
                    $('.slider').show();
                },

            });
        }
    })


    $('#burger').click(() => {
        $('#header').toggleClass('menu-open')
    });

    $('#header #menu a').click(() => {
        $('#header').removeClass('menu-open')
    });
});
