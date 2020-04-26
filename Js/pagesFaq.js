$(function () {


  // ===============================================================Accardeon js
  $(document).on('click', '.accHeader', function () {
    if ($(this).hasClass('activeHead')) {
      $(this).next().slideToggle(500);
      $(this).toggleClass("activeHead")
      $(this).children('i').toggleClass('fa-angle-up')
      $(this).children('i').toggleClass('colorDefault');
      $(this).children('a').toggleClass('colorDefault');
      return;
    }
    let headersNext = [];
    headersNext = $('.accBody').toArray();
    let iS = [];
    iS = $('.accHeader i').toArray();
    let headers = [];
    headers = $('.accHeader').toArray();
    let headersA = [];
    headersA = $('.accHeader a').toArray();
    for (let i = 0; i < headersNext.length; i++) {
      $(headersNext[i]).slideUp(500);
      $(iS).removeClass('fa-angle-up')
      $(headersA).removeClass('colorDefault');
      $(iS).removeClass('colorDefault')
      $(headers).removeClass('activeHead')

    }

    $(this).children('a').addClass('colorDefault');
    $(this).children('i').addClass('colorDefault');
    $(this).addClass("activeHead")
    $(this).next().slideDown(500);
    $(this).children('i').addClass('fa-angle-up')

  })
  // =============================================================== Responsiv Accardeon js
  $('.accPrimary').hide();
  $('.accClinical').hide();
  $('.accMembership').hide();
  $('.accPrivacy').hide();
  // ===============================================================About Click Accardeon
  // 
  $('.сlick1').on('click', function () {
    $('.accAbout').show();
    $('.accPrimary').hide();
    $('.accClinical').hide();
    $('.accMembership').hide();
    $('.accPrivacy').hide();

    $(".accHeader, .accAbout .accardionTitle").slideUp(150);
    $(".accAbout .accHeader, .accAbout .accardionTitle").slideDown(150);


  })


  // ===============================================================Primary Click Accardeon

  $('.сlick2').on('click', function () {
    $('.accAbout').hide();
    $('.accClinical').hide();
    $('.accMembership').hide();
    $('.accPrivacy').hide();
    $('.accPrimary').show();

    $(".accHeader, .accPrimary .accardionTitle").slideUp(150);
    $(".accPrimary .accHeader, .accPrimary .accardionTitle").slideDown(150);


  })
  // ===============================================================Clinical Services Click Accardeon

  $('.сlick3').on('click', function () {

    $('.accAbout').hide();
    $('.accPrimary').hide();
    $('.accMembership').hide();
    $('.accPrivacy').hide();
    $('.accClinical').show();

    $(".accHeader, .accClinical .accardionTitle").slideUp(150);
    $(".accClinical .accHeader, .accClinical .accardionTitle").slideDown(150);


  })
  // ===============================================================Membership & Insurance Click Accardeon

  $(".сlick4").on('click', function () {
    $('.accAbout').hide();
    $('.accPrimary').hide();
    $('.accClinical').hide();
    $('.accPrivacy').hide();
    $('.accMembership').show();

    $(".accHeader, .accMembership .accardionTitle").slideUp(150);
    $(".accMembership .accHeader, .accMembership .accardionTitle").slideDown(150);




  })
  // ===============================================================Privacy & Security Click Accardeon

  $('.сlick5').on('click', function () {
    $('.accAbout').hide();
    $('.accPrimary').hide();
    $('.accClinical').hide();
    $('.accMembership').hide();
    $('.accPrivacy').show();

    $(".accHeader, .accPrivacy .accardionTitle").slideUp(150);
    $(".accPrivacy .accHeader, .accPrivacy .accardionTitle").slideDown(150);
  })





  // ===============================================================Accardeon Header Hover JS

  $(document).on('mouseenter', '.pagesFaqContent', function () {
    $(this).css('border', ' 1px solid rgba(0, 125, 242, 1)');
    $(this).children('h5').css('color', 'rgba(0, 125, 242, 1)');
    $(this).children('i').css('color', 'white');
  })

  $(document).on('mouseleave', '.pagesFaqContent', function () {
    $(this).css('border', '1px solid rgba(0, 0, 0, 0.151)');
    $(this).children('h5').css('color', 'black');
    $(this).children('a ').css('color', 'black');
    $(this).children('i').css('color', 'black');
  });



  // ===============================================================Left Content Active Js


  $('.pagesFaqList').on('click', function () {

    $('.pagesFaqContent').each(function (index, element) {
      $(element).removeClass('activeColor');
    })
    $('.pagesFaqContent h5').each(function (index, element) {
      $(element).removeClass('activeWord');
    })
    $(this).children('.pagesFaqContent').addClass('activeColor');
    $(this).children('.pagesFaqContent').children('h5').addClass('activeWord');
  })

  function scrollShower() {



    $('body').offset();
    let scrollTop;
    let bodyHeight = $('body').height();
    $(window).scroll(function () {


      scrollTop = $(document).scrollTop();
      if (scrollTop > bodyHeight / 4) {



        $('.scrollerTop').css('z-index', '111');

        $('.scrollerTop').css('opacity', '1');

      } else {
        $('.scrollerTop').css('opacity', '0');
        $('.scrollerTop').css('z-index', '-1');
      }
    })
  }
  scrollShower()

  // ===============================================================Aos JS

  AOS.init({
    delay: 1000
  });










})