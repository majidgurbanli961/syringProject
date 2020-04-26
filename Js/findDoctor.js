$(function () {

  // =============================================================================Jquery UI  

  $(function () {
    $("#datepicker").datepicker({
      showWeek: true,
      firstDay: 1
    });
  });
  // =============================================================================Modal Find Doctor
  $('.modalClick').on('click', function () {
    let customHeight = $(document).scrollTop();
    $('.displayNone').removeClass('d-none');
    $('.modalFindDoctor').fadeIn("slow");
    $('.modalFindDoctor').fadeIn(3000);
    $('.modalFindDoctor').fadeIn();
    $('html, body').animate({
      scrollTop: `${customHeight}px`
    }, 1000);
    $('body').css("overflow", "hidden")
  })
  // =============================================================================Modal Close  JS 
  $('.circle').on('click', function () {
    $('.modalFindDoctor').fadeToggle();
    $('.displayNone').addClass('d-none');
    $('body').css("overflow", "auto")
  })
  // =============================================================================AOS JS
  AOS.init();
  // =============================================================================Search Input Text JS
  let filterItems = $('.contentRightContent');

  function getSearch() {
    $('.searchSubmit').on('click', function () {
      let searchVal = $('.searchField').val();
      let filterItems = $('.contentRightContent');
      let inputValue = $('.searchField').val().toLowerCase().trim();
      if (searchVal != " ") {
        filterItems.addClass('hidden');
        $('.contentRightContent ').each(function () {
          filterItems.removeClass('hidden');
          $(this).toggle($(this).text().toLowerCase().indexOf(inputValue) > -1);
          $('[data-filter-item][data-filter-name*="' + searchVal.toLowerCase() + '"]').removeClass('hidden');
          return;
        })
      }
    });
  }
  getSearch();
  // =============================================================================Search Select  JS
  function getShow() {
    $('.searchSubmit').on('click', function () {
      $(".preloaderSecond").css('display', 'block')
      $('.preloaderSecond').delay(3000).fadeOut(1000);
      if ($('.departmentSearch').val() == 'all' && $('.searchField').val().length == 0) {
        filterItems.removeClass('hidden');
        $('.urology').fadeIn();
        $('.pulmonary').fadeIn();
        $('.dental-clinic').fadeIn();
        $('.prthopaedics').fadeIn();
        $('.neurology').fadeIn();
        return;
      }
      if ($('.departmentSearch').val() == 'all') {
        filterItems.removeClass('hidden');
        $('.urology').fadeIn();
        $('.pulmonary').fadeIn();
        $('.dental-clinic').fadeIn();
        $('.prthopaedics').fadeIn();
        $('.neurology').fadeIn();
        return;
      } else if ($('.departmentSearch').val() == "") {
        $('.urology').fadeIn();
        $('.pulmonary').fadeIn();
        $('.dental-clinic').fadeIn();
        $('.prthopaedics').fadeIn();
        $('.neurology').fadeIn();
        return;
      } else if ($('.departmentSearch ').val() == 'urology') {
        $('.urology').fadeIn();
        $('.urology').fadeIn(300);
        $('.urology').fadeIn("show");
        $('.pulmonary').fadeOut();
        $('.dental-clinic').fadeOut();
        $('.prthopaedics').fadeOut();
        $('.neurology').fadeOut();
        return;
      } else if ($('.departmentSearch').val() == 'pulmonary') {
        $('.pulmonary').fadeIn();
        $('.pulmonary').fadeIn(300);
        $('.pulmonary').fadeIn("show");
        $('.urology').fadeOut();
        $('.dental-clinic').fadeOut();
        $('.prthopaedics').fadeOut();
        $('.neurology').fadeOut();
        return;
      } else if ($('.departmentSearch').val() == 'dental-clinic') {
        $('.dental-clinic').fadeIn();
        $('.dental-clinic').fadeIn(300);
        $('.dental-clinic').fadeIn("show");
        $('.pulmonary').fadeOut();
        $('.urology').fadeOut();
        $('.prthopaedics').fadeOut();
        $('.neurology').fadeOut();
        return;
      } else if ($('.departmentSearch').val() == 'prthopaedics') {
        $('.prthopaedics').fadeIn();
        $('.prthopaedics').fadeIn(300);
        $('.prthopaedics').fadeIn("show");
        $('.pulmonary').fadeOut();
        $('.urology').fadeOut();
        $('.dental-clinic').fadeOut();
        $('.neurology').fadeOut();
        $('.dental-clinic').fadeOut();
        return;
      } else if ($('.departmentSearch').val() == 'neurology') {
        $('.neurology').fadeIn();
        $('.neurology').fadeIn(300);
        $('.prthopaedics').fadeIn("show");
        $('.pulmonary').fadeOut();
        $('.urology').fadeOut();
        $('.dental-clinic').fadeOut();
        $('.prthopaedics').fadeOut();
        $('.dental-clinic').fadeOut();
        return;
      } else if ($('.departmentSearch').val() == 'cardiology') {
        $('.urology').fadeOut();
        $('.pulmonary').fadeOut();
        $('.dental-clinic').fadeOut();
        $('.prthopaedics').fadeOut();
        $('.neurology').fadeOut();
        return;
      } else {
        return;
      }
    })
  }
  getShow()
  // =============================================================================Input validation JS
  $(document).on('click', '.fa-app-form-submit', function () {
    if ($('.inputStyle').val().length == 0) {
      $('.inputStyle').css('border-color', 'red')
      $('.inputStyle2').css('border-color', 'red')
    }
  })
  // =============================================================================Modal Close Window JS 
  let modalArray = $('.modalFindDoctor').toArray();
  $(window).click(function () {
    if (event.target == modalArray[0]) {
      $(".modalFindDoctor").fadeOut(500);
      $("body").css("overflow-y", "auto");
    }
  });
  // =============================================================================Navbar Dropdown Menu Show JS
  $('.dropdown').hover(function () {
    $(this).addClass('show');
    $(this).find('.dropdown-menu').addClass('show');
  }, function () {
    $(this).removeClass('show');
    $(this).find('.dropdown-menu').removeClass('show')
  })
})