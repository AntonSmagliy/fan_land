$(function() {
    var menu = $("nav ul");
    $(".mob_menu_ic").click(function() {
    menu.slideToggle();
    $(".mob_menu_ic i").toggleClass('whites');
    return false;

});
$(window).resize(function(){
  var w = $(window).width();
  if(w > 320 && menu.is(':hidden')) {
    menu.removeAttr('style');
    // $("nav ul").slideToggle();
  }

});
});

$(document).ready(function(){
     var w = $(window).width();
       if(w < 740 && w >= 320) {
    $("nav ul li").on("click","a", function (event) {
        $("nav ul").slideToggle();
    });
  }
    $("nav ul li").on("click","a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();
        // $("nav ul").slideToggle();
        $(".mob_menu_ic i").toggleClass('whites');
        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),

        //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;

        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1500);
    });
});
$(document).ready(function() {
    $('#webTicker').webTicker({
        height: 'auto',
        startEmpty: false,
        hoverpause: false,
        speed: 250
    });
    $('.slider').slick({
    centerMode: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    centerPadding: '60px',
    autoplay: true,
    focusOnSelect: true
    });
    $('.sex').click(function() {
        $('.sex').removeClass('active');
        $(this).addClass('active');
    });
    $('.quest_item--visible').click(function (e) {
        event.preventDefault;
        $('.quest_item--hidden').css('display', 'none');
        let hidden = $(this).siblings('.quest_item--hidden');
        let listItem = $(this).parents('.quest_item');
        $('.quest_item--visible').removeClass('inf_secq');
        if (listItem.hasClass('quest_item--active')) {
            hidden.css('display', 'none');
            listItem.removeClass('quest_item--active');
        } else {
            $(this).addClass('inf_secq');
            $('.quest_item').removeClass('quest_item--active');
            listItem.addClass('quest_item--active');
            let hidden = $(this).siblings('.quest_item--hidden');
            let sublist = $(this).siblings('.quest_item--hidden');
            hidden.css('display', 'flex');
            let height = sublist.innerHeight();
            hidden.css('height', height);
        }
    });

    $(".feedback_form").submit(function(e){
        $('#overlay').fadeIn(200);
        $('.modal_feedback').fadeIn(200);
        $('html').css('overflow-y', 'hidden');
        e.preventDefault();
    });
//     function onFormSubmit(e) {
//
//
//     $('#modal_form_submit').click(function(e) {
//         $('#modal_form_submit').preventDefault();
//         // $('#overlay').css('display', 'block');
//         // $('.modal_feedback').css('display', 'block');
//         $('#overlay').fadeIn(200);
//         $('.modal_feedback').fadeIn(200);
//         $('html').css('overflow-y', 'hidden');
//     });
    $('#overlay').click(function() {
        // $(this).css('display', 'none');
        // $('.modal_feedback').css('display', 'none');
        $('#overlay').fadeOut(200);
        $('.modal_feedback').fadeOut(200);
        $('html').css('overflow-y', 'scroll');
    });
// }
});
function updater(d, h, m, s, ms) {
  // День сброса - 27 сентября 2015 года (и далее каждые три дня)
  var baseTime = new Date(2015, 8, 27);
  // Период сброса — 3 дня
  var period = 3*24*60*60*1000;

  function update() {
    var cur = new Date();
    // сколько осталось миллисекунд
    var diff = period - (cur - baseTime) % period;
    // сколько миллисекунд до конца секунды
    var millis = diff % 1000;
    diff = Math.floor(diff/1000);
    // сколько секунд до конца минуты
    var sec = diff % 60;
    if(sec < 10) sec = "0"+sec;
    diff = Math.floor(diff/60);
    // сколько минут до конца часа
    var min = diff % 60;
    if(min < 10) min = "0"+min;
    diff = Math.floor(diff/60);
    // сколько часов до конца дня
    var hours = diff % 24;
    if(hours < 10) hours = "0"+hours;
    var days = Math.floor(diff / 24);
    // d.innerHTML = days;
    // h.innerHTML = hours;
    m.innerHTML = min;
    s.innerHTML = sec;
    ms.innerHTML = millis;


    // следующий раз вызываем себя, когда закончится текущая секунда
    setTimeout(update, sec);
  }
  setTimeout(update, 0);
}

updater(document.getElementById("days"),
 document.getElementById("hours"), document.getElementById("minutes"),
 document.getElementById("seconds"), document.getElementById("millis"));
if($(window).width() > 1024)
{
   $('body').parallax({
      'elements': [
        {
          'selector': '.fluffy',
          'properties': {
            'x': {
              'right': {
                'initial': -40,
                'multiplier': 0.04,
                'unit': 'px',
                'invert': false
              }
            }

          }
        }
      ]
    });
} else {
   // change functionality for larger screens
}

$(document).ready(function() {
    $('.money_img img').click(function(){
        $('.econom_cash_wrapper').fadeIn();
       $('.econom_coin_wrapper, .econom_pers_wrapper, .econom_clock_wrapper').fadeOut(0.00001);
    });
    $('.clock_img img').click(function(){
        $('.econom_clock_wrapper').fadeIn();
       $('.econom_coin_wrapper, .econom_pers_wrapper, .econom_cash_wrapper').fadeOut(0.00001);
    });
    $('.pers_img img').click(function(){
        $('.econom_pers_wrapper').fadeIn();
       $('.econom_coin_wrapper, .econom_clock_wrapper, .econom_cash_wrapper').fadeOut(0.00001);
    });
     $('.coin_img img').click(function(){
        $('.econom_coin_wrapper').fadeIn();
       $('.econom_pers_wrapper, .econom_clock_wrapper, .econom_cash_wrapper').fadeOut(0.00001);
    });
    // $('.money_img img').click(function(){
    //     $('.econom_cash_wrapper').animate({ display: 'flex', opacity: '1'}, 1000);
    //    $('.econom_coin_wrapper, .econom_pers_wrapper, .econom_clock_wrapper').animate({opacity: '0'}, 1000);
    // });
    // $('.clock_img img').click(function(){
    //     $('.econom_clock_wrapper').animate({display: 'flex', opacity: '1'}, 1000);
    //    $('.econom_coin_wrapper, .econom_pers_wrapper, .econom_cash_wrapper').animate({opacity: '0'}, 1000);
    // });
    // $('.pers_img img').click(function(){
    //     $('.econom_pers_wrapper').animate({display: 'flex', opacity: '1'}, 1000);
    //    $('.econom_coin_wrapper, .econom_clock_wrapper, .econom_cash_wrapper').animate({opacity: '0'}, 1000);
    // });
    //  $('.coin_img img').click(function(){
    //     $('.econom_coin_wrapper').animate({display: 'flex', opacity: '1'}, 1000);
    //    $('.econom_pers_wrapper, .econom_clock_wrapper, .econom_cash_wrapper').animate({opacity: '0'}, 1000);
    // });

});
