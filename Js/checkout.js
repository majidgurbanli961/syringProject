$(document).ready(function () {

    // =============================================== COUPON SLIDE AND INPUT HANDLER
    $(".couponContent").slideUp(0.0001);
    $(".couponQuestion").click(function () {
        $(".couponContent").slideToggle(500);
    });


    $(".applyCoupon").click(function () {
        if ($("input").val().length === 0) {
            $(".couponResult").delay(1300).fadeIn();
            $(".couponResult").text("Please enter a coupon code.");
            $(".couponContent").delay(1000).slideUp(500);
        } else {
            $(".couponResult").delay(1300).fadeIn();
            $(".couponResult").text("Coupon '" + $("input").val() + "' does not exist!");
            $(".couponContent").delay(1000).slideUp(500);
        }
    });


    // ================================================ SECOND FORM OPENER
    $(".rightSlide").slideUp(0.001);


    $('input[type="checkbox"]').click(function () {
        if ($(this).prop("checked") == true) {
            $(".rightSlide").slideDown(500);
        } else if ($(this).prop("checked") == false) {
            $(".rightSlide").slideUp(500);
        }
    });


    $(".rightForm h3").click(function () {
        if ($('input[type="checkbox"]').prop("checked") == true) {
            $('input[type="checkbox"]').prop("checked", false);
            $(".rightSlide").slideToggle(500);
        } else if ($('input[type="checkbox"]').prop("checked") == false) {
            $('input[type="checkbox"]').prop("checked", true);
            $(".rightSlide").slideToggle(500);
        }
    });



    // =================================== BOTTOM CONTENT CLICK SHOW HANDLER
    $(".hidden").slideUp(0.001);
    $(".hidden").eq(0).slideDown(0.001);
    $(".method input[type='radio']").click(function () {
        $(".hidden").slideUp(500);
        $(this).siblings("p").slideDown(500);
        $(this).siblings("input[type='radio']").prop("checked", true);
    });

    $(".method label").click(function () {
        $(".hidden").slideUp(500);
        $(this).siblings("p").slideDown(500);
        $(this).siblings("input[type='radio']").prop("checked", true);
    });




    // =================================== SCROLL HANDLER
    function scrollShower() {


        $('.formContent').offset();
        let breakPoint = $('.formContent').offset().top;

        let scrollTop;
        let bodyHeight = $('body').height();
        console.log(bodyHeight);



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
            }, 2000);
        })
    }

    scrollShower()
    contentToTop()

    // 


});