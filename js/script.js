$(function () {

  //ハンバーガーメニュー
  $('.sp-btn').on('click', function () {
    $('.sp-nav').fadeToggle();
    $('.sp-btn').toggleClass('open')
  });

});

