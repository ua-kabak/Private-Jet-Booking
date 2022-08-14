$(function () {


  $('.booking__select').styler();


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

  $('.header__link--mobile, .header__authorization-link--mobile').on('click', function () {
    $('.header__btn').toggleClass('header__btn--active');
    $('.header__nav').toggleClass('header__nav--active');
    $('.header__list').toggleClass('header__list--active');
    $('.body').toggleClass('body--active');
    $('.header__authorization').toggleClass('header__authorization--active');
  });

  $('.register').on('click', function () {
    $('.register').toggleClass('register--active');
    $('.popup--register').toggleClass('active');
    $('.body').toggleClass('body--active');
  });

  $('.authorization').on('click', function () {
    $('.authorization').toggleClass('authorization--active');
    $('.popup--authorization').toggleClass('active');
    $('.body').toggleClass('body--active');
  });

  $('.popup__btn--register').on('click', function () {
    $('.register').toggleClass('register--active');
    $('.popup--register').toggleClass('active');
    $('.body').toggleClass('body--active');
  });

  $('.popup__btn--authorization').on('click', function () {
    $('.authorization').toggleClass('authorization--active');
    $('.popup--authorization').toggleClass('active');
    $('.body').toggleClass('body--active');
  });

  $(".header__logo, .header__link, .footer__logo").on("click", function (e) {
    e.preventDefault();

    var id = $(this).attr('href'),

      top = $(id).offset().top;

    $('body,html').animate({
      scrollTop: top
    }, 1000);
  });

  wow = new WOW({
    boxClass: 'wow', // default
    animateClass: 'animate__animated', // default
    offset: 0, // default
    mobile: true, // default
    live: true // default
  })
  wow.init();



});