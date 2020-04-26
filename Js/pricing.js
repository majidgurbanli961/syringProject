$(document).ready(function () {
  

    // ======================= SET THE PRICING CARDS OWL CAROUSEL
    $('.pricingCarousel').owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        dots:false,
        responsive: {
            0: {
                items: 1,
                margin:50,
            },
            700: {
                items: 2
            },
            1200: {
                items: 3
            }
        }
    });

   


    AOS.init({
        delay: 1000
    });

});