$(function () {


  // ===================================================================Close-Open Click Open Page 
    $('.secretForm').fadeOut();
    $('.contentSecondPage').fadeOut();
    $('.close').on('click', function () {
        $('.top').fadeOut();
        $('.contentSecondPage').fadeIn(1000);
        $('.contentSecondPage').fadeIn('show');
        $('.closeIcon').addClass("d-none");
    })
    $('.show').on('click', function () {
        $('.secretForm').fadeToggle(1000);
    })
    $('.contentSecond').hide();


    
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



})