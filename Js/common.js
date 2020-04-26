$(function () {
  preloaderHandler();
//============================================================ Preloader
  function preloaderHandler() {
    $('.preloader').delay(3000).fadeOut(1000);

    setTimeout(function () {

      $("body").css("overflow-y", "auto");
    }, 3000)
  }


// ===========================================Navbar Dropdown Show JS
  $('.dropdown').hover(function () {
    $(this).addClass('show');
    $(this).find('.dropdown-menu').addClass('show');


  }, function () {
    $(this).removeClass('show');
    $(this).find('.dropdown-menu').removeClass('show')

  })
  // 


  //============================================================== Modal Serach Navbar
  
  $('.modalSerach').fadeOut();
  $('.search').on('click', function () {
    $('.modalSerach').fadeIn(500);
    $('.modalSerach').removeClass('d-none');
    $('.modalSerach').addClass('d-flex');
    $("body").css("overflow-y", "hidden");
  });
  $('.circleSerach').on('click', function () {
    $('.modalSerach').fadeOut(500);
    $('.modalSerach').removeClass('d-flex');
    $('.modalSerach').addClass('d-none');
    $("body").css("overflow-y", "auto");
  })
 
  let modalArray=[];
  modalArray=$('.modalSerach');
  $(window).click(function () {
    if (event.target == modalArray[0]) {

      $(".modalSerach").fadeOut(500);
      $('.modalSerach').addClass('d-none');
      $('.modalSerach').removeClass('d-flex');
      $("body").css("overflow-y", "auto");
    }
  });

  

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


  

  // ================================================================Burger Menu
  $(".burgerMenuSubNavNameSelf").slideUp();


  $(".burger").click(function () {
    $('.basketBlock').slideUp();
    $(".burgerMenuContainer").slideToggle();

  });


  $(".burgerMenuNavName i").click(function () {
    $(".burgerMenuSubNavNameSelf").slideUp();
    $(".burgerMenuNavName i").addClass("fa-plus-octagon").removeClass("fa-minus-octagon");

    if ($(this).parent().siblings().css("display") == "block") {
      $(this).parent().siblings().slideUp();
      $(this).addClass("fa-plus-octagon").removeClass("fa-minus-octagon");
    } else {
      $(this).parent().siblings().slideDown();
      $(this).removeClass("fa-plus-octagon").addClass("fa-minus-octagon");
    }
  });
  // 
  // =============================================================================Scroll Top JS

  function scrollShower() {


    $('body').offset();
    let scrollTop;
    let bodyHeight = $('body').height();
    $(window).scroll(function () {
      
      scrollTop = $(document).scrollTop();
     

      if (scrollTop > bodyHeight / 2) {
      
   

        $('.scrollerTop').css('z-index', '111');

        $('.scrollerTop').css('opacity', '1');

      } else {
        $('.scrollerTop').css('opacity', '0');
        $('.scrollerTop').css('z-index', '-1');
      }
    })
  }

  function contentToTop() {
    $(document).on('click', '.scrollerTop', function () {
      $('html, body').animate({
        scrollTop: 0
      }, 1000);
    })
  }

  scrollShower()
  contentToTop()


})