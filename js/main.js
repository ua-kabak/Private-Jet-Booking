$(function () {

  $('.subscription__item').on('click', function () {
    $('.subscription__item'), $(this).toggleClass('subscription__item--active');
  });

  $('.header__btn').on('click', function () {
    $('.header__btn').toggleClass('header__btn--active');
    $('.header__nav').toggleClass('header__nav--active');
    $('.header__list').toggleClass('header__list--active');
    $('.body').toggleClass('body--active');
    $('.header__authorization').toggleClass('header__authorization--active');
  });

  $(".header__logo, .header__link, .footer__logo").on("click", function (e) {
    e.preventDefault();

    var id = $(this).attr('href'),

      top = $(id).offset().top;

    $('body,html').animate({
      scrollTop: top
    }, 1000);
  });

});