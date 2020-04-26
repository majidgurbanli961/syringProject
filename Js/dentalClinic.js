$(document).ready(function () {


    // ================================================ MODAL SHOW HIDE HANDLER
    $(".hoverEffect i").click(function () {
        $(".modalGallery").fadeIn(500);
        $(".modalGallery").css("display", "flex");
        $(".modal-content").css("transform", "scale(1)");
        $(".imageHolder img").attr("src", $(this).parent().siblings().attr("src"));
        $("body").css("overflow-y", "hidden");
    });




    let modalArray = [];
    modalArray = $(".modalGallery").toArray();
    $(".exit").click(function () {
        $(".modalGallery").fadeOut(500);
        $(".modal-content").css("transform", "scale(0.1)");
        $("body").css("overflow-y", "auto");
    });

    $(window).click(function () {
        if (event.target == modalArray[0]) {
            $(".modalGallery").fadeOut(500);
            $(".modal-content").css("transform", "scale(0.1)");
            $("body").css("overflow-y", "auto");
        }
    });



    // ================================================ CLICK CHANGE MODAL IMAGES

    let timeoutID;
    let play = true;
    let slideIndex = 0;
    let i = 0;

    $(".fa-forward").click(function () {
        i++;
        $(".imageHolder img").css("opacity", "0");
        if (i < 3) {
            setTimeout(function () {
                $(".imageHolder img").attr("src", "img/gallery" + (i + 4) + "-1170x760.jpg");
                $(".imageHolder img").css("opacity", "1");
            }, 500);
        } else {
            i = 0;
            setTimeout(function () {
                $(".imageHolder img").attr("src", "img/gallery" + (i + 4) + "-1170x760.jpg");
                $(".imageHolder img").css("opacity", "1");
            }, 500);
        }
        $(".modalLeftNav p span").eq(0).text(i + 1);
    });

    $(".fa-backward").click(function () {
        i--;
        $(".imageHolder img").css("opacity", "0");
        if (i >= 0) {
            setTimeout(function () {
                $(".imageHolder img").attr("src", "img/gallery" + (i + 4) + "-1170x760.jpg");
                $(".imageHolder img").css("opacity", "1");
            }, 500);
        } else {
            i = 3 - 1;
            setTimeout(function () {
                $(".imageHolder img").attr("src", "img/gallery" + (i + 4) + "-1170x760.jpg");
                $(".imageHolder img").css("opacity", "1");
            }, 500);
        }
        $(".modalLeftNav p span").eq(0).text(i + 1);
    });


    // ========================================================== MODAL IMAGES AUTO SLIDER
    $("#playButton").click(function () {
        $(this).toggleClass('far').toggleClass('fa-stop-circle').toggleClass('fas').toggleClass('fa-play');
        if (play == true) {
            showSlides();
            play = false;
        } else {
            clearTimeout(timeoutID);
            play = true;
        }
    });


    function showSlides() {
        $(".imageHolder img").css("opacity", "0");

        slideIndex++;
        if (slideIndex > 3) {
            slideIndex = 1
        }

        setTimeout(function () {
            $(".imageHolder img").attr("src", "img/gallery" + (slideIndex - 1 + 4) + "-1170x760.jpg");
            $(".imageHolder img").css("opacity", "1");
        }, 500);
        $(".modalLeftNav p span").eq(0).text(slideIndex);

        timeoutID = setTimeout(showSlides, 4000); // Change image every 2 seconds
    }












});