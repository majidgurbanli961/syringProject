$(function () {
 



  preloaderHandler();

    function preloaderHandler() {
        $('.preloader').delay(3000).fadeOut(1000);
        setTimeout(function () {
          
            $("body").css("overflow-y", "auto");
        }, 3000)
    }
  // Majid
  function modalOpener() {
    let scrollTop = $(document).scrollTop();
    $(document).scroll(function () {
      scrollTop = $(document).scrollTop();



    })
    $(document).on('click', '.bigPhotoCenter', function () {
      $('nav').hide();
      $('.modalHomeYoutubeContent iframe').attr('src', ' https://www.youtube.com/embed/h59cKcb_J2M');
      $('#indexWeDoBest').css('opacity', '0.3');
      $('#ourVision').css('opacity', '0.3');

      $('.modalHomeYoutubeContent iframe').animate({
        width: '90%',
        height: '70vh'
      }, 1000)
      $('#modalHome').slideDown(1000);

      $('body').css('overflow', 'hidden');



    })

  }

  // This function close a modal in the home page when u click big page (Majid)
  function modalCloser() {
    $(document).on('click', '.modalHomeYoutube', function () {
      $('#indexWeDoBest').css('opacity', '1');
      $('#ourVision').css('opacity', '1');


      $('#modalHome').hide(100);
      $('nav').show();

      $('body').css('overflow', 'visible');
      $('.modalHomeYoutubeContent iframe').animate({
        width: '360px',
        height: '315px'
      }, 1000);
      $('.modalHomeYoutubeContent iframe').attr('src', ' ');

    })
    $(document).on('click', '.modalExit', function () {
      $('#indexWeDoBest').css('opacity', '1');
      $('#ourVision').css('opacity', '1');


      $('#modalHome').hide(100);
      $('nav').show();

      $('body').css('overflow', 'visible');
      $('.modalHomeYoutubeContent iframe').animate({
        width: '360px',
        height: '315px'
      }, 1000);
      $('.modalHomeYoutubeContent iframe').attr('src', ' ');




    })


  }
  modalOpener();
  modalCloser();
  // Macid End
  // ========================================================//
  //  Faxri
 
  $(document).on('mouseenter', '.cardDoctor', function () {
    $(this).css('background', 'rgba(0, 125, 242, 1)');
    $(this).children('.doctorName>h4>a').css('color', 'white');
    $(this).children('.doctorContent ').children('.doctorName').children('h4').children('a').css('color', 'white');
    $(this).children('.doctorContent ').children('.doctorName').children('span').css('color', 'white');
    $(this).children('.doctorContent ').children('.socialIconDoctor').children('i').css('color', 'white');
    $(this).css('transform', 'translateY(-20px)')
  })

  $(document).on('mouseleave', '.cardDoctor', function () {
    $(this).css('background', '#fff');
    $(this).css('transform', 'translateY(0px)')
    $(this).children('.doctorContent ').children('.doctorName').children('h4').children('a').css('color', 'black');
    $(this).children('.doctorContent ').children('.doctorName').children('span').css('color', '#777');
    $(this).children('.doctorContent ').children('.socialIconDoctor').children('i').css('color', 'rgba(0, 125, 242, 1)');
  })
  // ========================================================//
  $(document).on('mouseenter', '.cardTestimonials', function () {
    $(this).css('background', 'rgba(0, 125, 242, 1)');

    $(this).children('p').css('color', 'white');
    $(this).children('.doctorContent ').children('.doctorName').children('span').css('color', 'white');
    $(this).children('.testimonialsContent').children('.testimonialsText').children('h5').css('color', 'white');
    $(this).children('.testimonialsContent').children('.testimonialsText').children('p').css('color', 'white');
    $(this).children('i').css('color', 'white');
    $(this).css('transform', 'translateY(-10px)')
  })
 // ========================================================//

  $(document).on('mouseleave', '.cardTestimonials', function () {
    $(this).css('background', '#fff');
    $(this).css('transform', 'translateY(0px)')
    $(this).children('p').css('color', '#777');
    $(this).children('.doctorContent ').children('.doctorName').children('span').css('color', 'black');
    $(this).children('.testimonialsContent').children('.testimonialsText').children('h5').css('color', 'black');
    $(this).children('.testimonialsContent').children('.testimonialsText').children('p').css('color', '#777');
    $(this).children('i').css('color', 'rgba(0, 125, 242, 1)');
  });
   // ========================================================//

  $('.dropdown').hover(function () {
    $(this).addClass('show');
    $(this).find('.dropdown-menu').addClass('show');


  }, function () {
    $(this).removeClass('show');
    $(this).find('.dropdown-menu').removeClass('show')

  })

 
  // ========================================================//
  // Aos
  AOS.init({
    delay: 1000,

  });
  $('.count_nums').counterUp({
    delay: 10,
    time: 2000
});
  // ========================================================//

  $('.a').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: false,
    responsive: {
      0: {
        items: 1
      
      },
      600: {
        items: 2,
        margin:0
      },
 
      1000: {
        items: 3
      }
    }
  })
  $('.sliderFooter').owlCarousel({
  
    margin: 30,

    dots: true,
    items:3,
    loop: true,
    nav: false,
    autoplay: true,
    autoplayTimeout: 5000,
    responsive: {
      0: {
        items: 1,
       
      },
      600: {
        items: 2
      },
      1000: {
        items: 3
      }
    }
  });


  $('.footerCarousel').owlCarousel({
    loop: true,
    margin: 1,
    nav: false,
    dots: false,
    center: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,

    responsive: {
      0: {
        items: 1
      }
    }
  })





  // Faxri end
// ======================================================================================
  // Farid
// ======================================================================================

  
  navbarFixedORSTaticSetter();
  navPosSetRelativeResize();


  // ============== NAVBAR POSITION CHANGE WHEN WINDOW SIZE CHANGES
  function navPosSetRelativeResize() {
    $(window).resize(function () {
      navbarFixedORSTaticSetter();
    });
  }


 // ============== SET NAVBAR POSITION WHEN WINDOW OPENS AND WHEN WINDOW SIZE CHANGES (DEFAULT POSITION) 
  // ============== SET NAVBAR POSITION WHEN WINDOW OPENS AND WHEN WINDOW SIZE CHANGES (DEFAULT POSITION) 
  function navbarFixedORSTaticSetter() {
    if ($(window).width() >= 576) {
      if (window.scrollY > ($("nav").outerHeight() + $(".header-top").outerHeight())) {
        $("nav").css("position", 'fixed');
        $("nav").css("top", '0');
        $(".burgerMenuContainer").css("position", 'fixed');
        $(".burgerMenuContainer").css("top", 95 + "px");
      } else {
        $("header").css("min-height", ($("nav").outerHeight() + $(".header-top").outerHeight()) + 'px');
        $("nav").css("position", 'static');
        $(".burgerMenuContainer").css("position", 'absolute');
        $(".burgerMenuContainer").css("top", 95 + $("nav").position().top + "px");
      }
    } else {
      $("header").css("min-height", $("header>nav").outerHeight() + 'px');
      $("nav").css("position", 'static');
      $(".burgerMenuContainer").css("position", 'absolute');
      $(".burgerMenuContainer").css("top", 95 + $("nav").position().top + "px");
    }
    navbarScrollSetter();
  }


  // ============== ADD ANIMATION TO NAVBAR RELATIVE TO SCROLL HEIGHT
  function navbarScrollSetter() {
    window.addEventListener("scroll", function () {
      if (window.scrollY > ($("nav").outerHeight() + $("header").outerHeight())) {
        $("nav").css({
          "position": "fixed",
          "background-color": "white",
          "box-shadow": "0 10px 10px -10px rgba(0, 0, 0, 0.35)",
          "animation-name": "navbarToShow",
          "animation-duration": "0.5s",
          "animation-fill-mode": "forwards"
        });
        $(".burgerMenuContainer").css("position", 'fixed');
        $(".burgerMenuContainer").css("top", 95 + "px");
      } else {
        $("nav").css({
          "position": "static",
          "box-shadow": "0 10px 10px -10px rgba(0, 0, 0, 0)",
          "animation-name": "none",
          "animation-duration": "unset",
          "animation-fill-mode": "unset"
        });
        $(".burgerMenuContainer").css("position", 'absolute');
        $(".burgerMenuContainer").css("top", 95 + $("nav").position().top + "px");
      }
    });
  }


// ===================================================


  //===================================== HOME SLIDER (BUTTON TURN)
  let idTimeOut;

  homeSlider();

  function homeSlider() {

    $(".homeSlider").fadeOut(0.0001);


    for (let i = 0; i < $(".orders").length; i++) {
      $(".orders").eq(i).click(function () {

        for (let j = 0; j < $(".homeSlider").length; j++) {
          $(".homeSlider").eq(j).fadeOut(1000);
          $(".bottomBorder").eq(j).removeClass("selectedBorder");
          $(".homeText").eq(j).fadeOut(0.0001);
          $(".homeText h3 span").removeClass("animationClassFromBottom");
        }

        $(".homeSlider").eq(i).fadeIn(1000);
        $(".bottomBorder").eq(i).addClass("selectedBorder");
        $(".homeText").eq(i).fadeIn(1000);


        if (i == 0) {
          $(".homeText h3 span").eq(0).addClass("animationClassFromTop");
          $(".homeText h3 span").eq(1).addClass("animationClassFromTop");
          $(".homeText h3 span").eq(2).addClass("animationClassFromBottom");
        } else if (i == 1) {

          $(".homeText h3 span").eq(3).addClass("animationClassFromTop");
          $(".homeText h3 span").eq(4).addClass("animationClassFromTop");
          $(".homeText h3 span").eq(5).addClass("animationClassFromBottom");
        } else {
          $(".homeText h3 span").eq(6).addClass("animationClassFromTop");
          $(".homeText h3 span").eq(7).addClass("animationClassFromTop");
          $(".homeText h3 span").eq(8).addClass("animationClassFromBottom");
        }
        clearTimeout(idTimeOut);
      });
    }
  }


  //====================================== HOME SLIDER (AUTO TURN)
  let slideIndex = 0;
  autoSliderHome();

  function autoSliderHome() {

    let number;

    for (let j = 0; j < $(".homeSlider").length; j++) {
      $(".homeSlider").eq(j).fadeOut(1000);
      $(".bottomBorder").eq(j).removeClass("selectedBorder");
      $(".homeText").fadeOut(0.0001);
      $(".homeText h3 span").removeClass("animationClassFromBottom");
    }

    slideIndex++;
    if (slideIndex > $(".homeSlider").length) {
      slideIndex = 1
    }
    number = slideIndex - 1;

    $(".homeSlider").eq(number).fadeIn(1000);
    $(".bottomBorder").eq(number).addClass("selectedBorder");
    $(".homeText").eq(number).fadeIn(1000);

    if (number == 0) {
      $(".homeText h3 span").eq(0).addClass("animationClassFromTop");
      $(".homeText h3 span").eq(1).addClass("animationClassFromTop");
      $(".homeText h3 span").eq(2).addClass("animationClassFromBottom");
    } else if (number == 1) {

      $(".homeText h3 span").eq(3).addClass("animationClassFromTop");
      $(".homeText h3 span").eq(4).addClass("animationClassFromTop");
      $(".homeText h3 span").eq(5).addClass("animationClassFromBottom");
    } else {
      $(".homeText h3 span").eq(6).addClass("animationClassFromTop");
      $(".homeText h3 span").eq(7).addClass("animationClassFromTop");
      $(".homeText h3 span").eq(8).addClass("animationClassFromBottom");
    }

    idTimeOut = setTimeout(autoSliderHome, 5000);
  }


 





// Farid End 
// ======================================================================================






});