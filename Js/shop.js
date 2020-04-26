$(document).ready(function name(params) {
   let counterBasketSpan = 0;
   let myObject = new customObject();
   let prices = [];
   prices = $('.mainPrice').toArray();
   let intPrice = [];
   $('.hoveredContent').css('display', 'flex');
   $('.rightContentProduct').addClass('customHoverClass');
   let width = $(window).width();
   hovererdRight();
   // changing style of hovered buttons 
   if (width < 1240) {
      $('.rightContentProduct').removeClass('customHoverClass');


   }
   // adding animated class when size >1240
   function hovererdRight() {
      $(window).resize(function () {
         width = $(window).width();

         if (width < 1240) {
            $('.rightContentProduct').removeClass('customHoverClass');


         } else {
            $('.hoveredContent').css('bottom', '-30%');

            $('.rightContentProduct').addClass('customResizedHoverClass');


         }


      })




   }

   // prices


   for (let i = 0; i < prices.length; i++) {
      intPrice.push(parseFloat($(prices[i]).text().substr(1, 2)))
   }
   let value = $('.leftRange input').val() * 10;

   $('.leftRangeText span:last-child').text('$' + value);
   for (let k = 0; k < intPrice.length; k++) {
      $(prices[k]).parent().parent().parent().parent().parent().hide();

   }
   for (let i = 0; i < intPrice.length; i++) {
      if (value > intPrice[i]) {


         $(prices[i]).parent().parent().parent().parent().parent().show();

      }
   }
   // definition of custom object
   function customObject() {
      this.images = [];
      this.titles = [];
      this.prices = []

      this.customAdd = function (image, title, price) {
         this.images.push(image);
         this.titles.push(title);
         this.prices.push(price);

      }

   }

   // changing style of hovered buttons when resize
   $(window).resize(function () {
      width = $(window).width();
      if (width > 1240) {

         $('.hoveredContentContent').css('padding-right', '10px');
         $('.hoveredContentContent').css('padding-left', '10px');
         $('.hoveredContentContent').css('width', '60px');
         $('.hoveredContentContent').css('height', '60px');


         // hovererdRight();


         // $('.hoveredContent').css('left','10px');

      } else {

         $('.noneHovered').css('display', 'block');
         $('.hoveredContent').css('display', 'flex');


         $('.hoveredContent').css('position', 'absolute');
         $('.hoveredContent').css('bottom', '10%');
         $('.hoveredContent').css('left', '10%');
         $('.hoveredContent').css('width', '85%');
         $('.hoveredContent').css('justify-content', 'center');




         $('.hoveredContentContent').css('width', '40px');
         $('.hoveredContentContent').css('height', '40px');
         $('.hoveredContentContent').css('padding-right', '5px');
         $('.hoveredContentContent').css('padding-left', '5px');





      }
      if (width < 758) {
         $('.hoveredContent').css('left', '5%');

         $('.hoveredContentContent').css('margint-right', '5px');
         $('.hoveredContentContent').css('margin-left', '5px');
         $('.hoveredContentContent').css('width', '60px');
         $('.hoveredContentContent').css('height', '60px');

      }
      if (width < 576) {
         $('.hoveredContent').css('width', '90%');
         $('.hoveredContent').css('justify-content', 'center');




      }

   })
   width = $(window).width();
   width = $(window).width();
   if (width > 1240) {

      $('.hoveredContentContent').css('padding-right', '10px');
      $('.hoveredContentContent').css('padding-left', '10px');
      $('.hoveredContentContent').css('width', '60px');
      $('.hoveredContentContent').css('height', '60px');





      // $('.hoveredContent').css('left','10px');

   } else {

      $('.noneHovered').css('display', 'block');
      $('.hoveredContent').css('display', 'flex');


      $('.hoveredContent').css('position', 'absolute');
      $('.hoveredContent').css('bottom', '10%');
      $('.hoveredContent').css('left', '10%');
      $('.hoveredContent').css('width', '85%');
      $('.hoveredContent').css('justify-content', 'center');




      $('.hoveredContentContent').css('width', '40px');
      $('.hoveredContentContent').css('height', '40px');
      $('.hoveredContentContent').css('padding-right', '5px');
      $('.hoveredContentContent').css('padding-left', '5px');





   }
   if (width < 758) {
      $('.hoveredContent').css('left', '5%');

      $('.hoveredContentContent').css('margint-right', '5px');
      $('.hoveredContentContent').css('margin-left', '5px');
      $('.hoveredContentContent').css('width', '60px');
      $('.hoveredContentContent').css('height', '60px');

   }
   if (width < 576) {
      $('.hoveredContent').css('width', '90%');
      $('.hoveredContent').css('justify-content', 'center');




   }
   // function opens modal
   function modalShower() {
      let scroll;
      $(document).on('click', '.hoveredContent .hoveredContentContent:nth-child(3)', function () {
         scroll = $(document).scrollTop();
         $('#shopModal').css('top', `${scroll}px`);
         $('body').css('overflow-y', 'hidden');
         $('.scrollDiv').css('height', '85vh');
         $('.scrollDiv').css('overflow-y', 'scroll');



         $('#preloader').css('display', 'block');
         $('#preloader').delay(3000).fadeOut(1000);
         $('#shopModal').show();



      })
   }
   // function close modal

   function modalExit() {
      $(document).on('click', '.modalExitSmallDiv', function () {
         $('#shopModal').hide();
         $('body').css('overflow-y', 'scroll');



      })

   }
   // search by name 
   function getSearch() {

      $(document).on('click', '.leftSearch i', function () {

         var searchVal = $('.leftSearch input').val();
         var filterItems = $('.mainTaskContentRightContent .row .col-lg-4');
         if (searchVal != '') {
            $(filterItems).addClass('hidden');
            $('[data-filter-item][data-filter-name*="' + searchVal.toLowerCase() + '"]').removeClass('hidden');
            return;
         } else {

         }
      });
   }
   // get the image and add to modal when click compare
   function dynamicModalPhoto() {
      $(document).on('click', '.hoveredContentContent:nth-child(3)', function () {
         let image = $(this).parent().parent().prev();
         let srcImage = $(image).attr('src').toString();

         let title = $(this).parent().parent().parent().next().children('.productTextContent').children('.rightTextTitle').children('a').text();
         let price = $(this).parent().parent().parent().next().children('.productTextContent').children('.rightTextPrice').text();
         let headerContents = $('.headerContent').toArray()
         let modalImages = $('.modalImageContent').toArray();
         for (let i = 0; i < headerContents.length; i++) {
            if ($(headerContents[i]).hasClass('activeHeaderContents')) {

            } else {
               $(headerContents[i]).addClass('activeHeaderContents');
               $(headerContents[i]).empty();
               $(headerContents[i]).append(`${title}`)
               break;

            }
         }
         for (let i = 0; i < modalImages.length; i++) {
            if ($(modalImages[i]).hasClass('activeModalImageContent')) {

            } else {
               if (i == 1) {
                  $('.secondModal').show();
               }
               if (i == 2) {
                  $('.thirdModal').show();


               }
               $(modalImages[i]).addClass('activeModalImageContent');
               $(modalImages[i]).empty();
               $(modalImages[i]).append(`<img src=${srcImage}>`);
               break;

            }
         }



      })

   }
   // add content to Basket
   function toBasket() {
      $(document).on('click', '.hoveredContentContent:nth-child(1)', function () {

         //  fromLocalStorageForCounter();


         $(this).children('i').addClass('transFormClass');
         $(this).delay(3000).hide(500);
         $(this).parent().delay(3000).prepend(`
         <div class='customNone'>
         <div  class="hoveredContentContent viewBasket " >
         <a href="">Basket</a>

     </div>
     </div>`);

         $(this).parent().children('.customNone').delay(3000).show(500);




         counterBasketSpan++;
         $('.shopping-count').text(counterBasketSpan);
         let image = $(this).parent().parent().prev();
         let srcImage = $(image).attr('src').toString();


         let title = $(this).parent().parent().parent().next().children('.productTextContent').children('.rightTextTitle').children('a').text()
         let price = $(this).parent().parent().parent().next().children('.productTextContent').children('.rightTextPrice').children('.mainPrice').text();

         let headerContents = $('.headerContent').toArray()
         let modalImages = $('.modalImageContent').toArray();
         myObject.customAdd(srcImage, title, price);

         // sum calculator
         let sum = 0;
         let stringPrice;
         let intPrice;

         for (let i = 0; i < myObject.prices.length; i++) {
            stringPrice = myObject.prices[i];
            intPrice = parseFloat(stringPrice.substr(1, 5));
            sum += intPrice;


         }
         sum.toFixed(2);
         $('.totalPrice').remove();
         $('.basketButtonFirst').remove();
         $('.basketButtonSecond').remove();


         $('.basketBlock').append(`
         <div class="basketEachContent " id=${counterBasketSpan+999}>
                                        <div class="row">
                                            <div class="col-lg-3 col-sm-3 col-md-3 noLgPadding">
                                                <div class="eachContentImage">
                                                <img src=${srcImage}>
                                                   
                                                </div>
                                            </div>
                                            <div class="col-lg-7 col-sm-7 col-md-7 noLgPadding">
                                                <div class="eachContentText">
                                                    <p class="eachContentTextTop">
                                                    ${title}
                                                        
                                                    </p>
                                                    <p class="eachContentTextPrice">
                                                     1x ${price}
                                                    </p>

                                                </div>
                                            </div>
                                            <div class="col-lg-2 col-sm-2 col-md-2 noLgPadding">
                                                <i class="fas fa-trash"></i>
                                            </div>
                                        </div>

                                    </div>
      
      
      `);
         $(this).parent().delay(3000).css('left', '0px');

         $('.basketBlock').append(`
            <div class=totalPrice>
            <div class=totalPriceLeft>
            Subtotal:
            </div>
            <div class=totalPriceRight>
            $ ${sum.toFixed(2)}
           
            </div>

            
            </div>
      
      `);
         $('.basketBlock').append(
            `
         <div class="basketButtonFirst">
         <div class="basketButtonContent">View Basket</div>
     </div> 
         `
         )
         $('.basketBlock').append(
            `
         <div class="basketButtonSecond">
         <div class="basketButtonContent">Checkout</div>
     </div> 
         `
         )




         let result = JSON.stringify(myObject);
         localStorage.setItem('object', result);

      });

   }
   // calculate selected items in local storage and add to header of basket
   function fromLocalStorageForCounter() {

      if (localStorage.getItem("object") === null) {


      } else {
         let result = localStorage.getItem('object');


         let secondObject = new customObject();


         secondObject = JSON.parse(result);

         for (let i = 0; i < secondObject.images.length; i++) {
            myObject.customAdd(secondObject.images[i], secondObject.titles[i], secondObject.prices[i]);
         }
      }
   }
   // select items from local storage and  add to basket

   function fromLocalStorageToBasket() {
      let srcImage = myObject.images;
      let titles = myObject.titles;
      let prices = myObject.prices;
      let sum = 0;
      let stringPrice;
      let intPrice;


      for (let i = 0; i < myObject.prices.length; i++) {
         stringPrice = myObject.prices[i];
         intPrice = parseFloat(stringPrice.substr(1, 5));
         sum += intPrice;


      }
      sum.toFixed(2);
      $('.totalPrice').remove();






      for (let i = 0; i < myObject.images.length; i++) {
         $('.basketBlock').append(`
         <div class="basketEachContent " id=${i+1000}>
                                           <div class="row">
                                               <div class="col-lg-3 col-sm-3 col-md-3 noLgPadding">
                                                   <div class="eachContentImage">
                                                   <img src=${srcImage[i]}>
                                                      
                                                   </div>
                                               </div>
                                               <div class="col-lg-7 col-sm-7 col-md-7 noLgPadding">
                                                   <div class="eachContentText">
                                                       <p class="eachContentTextTop">
                                                       ${titles[i]}
                                                           
                                                       </p>
                                                       <p class="eachContentTextPrice">
                                                       1x ${ prices[i]}
                                                       </p>
   
                                                   </div>
                                               </div>
                                               <div class="col-lg-2 col-sm-2 col-md-2 noLgPadding">
                                                   <i class="fas fa-trash"></i>
                                               </div>
                                           </div>
   
                                       </div>
         
         
         `);


      }
      $('.basketBlock').append(`
       <div class=totalPrice>
       <div class=totalPriceLeft>
       Subtotal:
       </div>
       <div class=totalPriceRight>
       $ ${sum.toFixed(2)}
      
       </div>

       
       </div>
 
 `)

      if (myObject.images.length == 0) {
         $('.totalPrice').remove();


         $('.basketBlock').append(`
      <div class=totalPrice>
      <div class=totalPriceLeft>
            There is no item in Basket
      
      </div>
      <div class=totalPriceRight>
  
     
      </div>

      
      </div>

`)
         return

      }
      if (myObject.titles.length == 0) {
         $('.basketButtonFirst').remove();
         $('.basketButtonSecond').remove();

      } else {
         $('.basketBlock').append(
            `
      <div class="basketButtonFirst">
      <div class="basketButtonContent">View Basket</div>
   </div> 
      `
         )
         $('.basketBlock').append(
            `
      <div class="basketButtonSecond">
      <div class="basketButtonContent">Checkout</div>
   </div> 
      `
         )
      }


   }
   // add counter to basket
   function countBasketCounter() {

      counterBasketSpan = myObject.images.length;

      $('.shopping-count').text(counterBasketSpan);

   }

   function deleteFromBasket() {
      $(document).on('click', '.basketEachContent .row .col-lg-2 i', function () {
         let index = $(this).parent().parent().parent().attr('id') - 1000;
         myObject.images.splice(index, 1);
         myObject.titles.splice(index, 1);
         myObject.prices.splice(index, 1);
         counterBasketSpan--;
         $('.shopping-count').text(counterBasketSpan);
         let eachContents = [];
         let customId = 1000;
         eachContents = $('.basketEachContent').toArray();
         for (let i = 0; i < eachContents.length; i++) {
            $(eachContents[i]).removeAttr('id');

         }
         eachContents = $('.basketEachContent').toArray();
         for (let i = 0; i < eachContents.length; i++) {
            $(eachContents[i]).attr('id', customId);
            customId = i + 1000;


         }
         let sum = 0;
         let stringPrice;
         let intPrice;

         for (let i = 0; i < myObject.prices.length; i++) {
            stringPrice = myObject.prices[i];
            intPrice = parseFloat(stringPrice.substr(1, 5));
            sum += intPrice;



         }
         $('.totalPrice').remove();
         $('.basketButtonFirst').remove();
         $('.basketButtonSecond').remove();




         $('.basketBlock').append(`
         <div class=totalPrice>
         <div class=totalPriceLeft>
         Subtotal:
         </div>
         <div class=totalPriceRight>
         $ ${sum.toFixed(2)}
        
         </div>
  
         
         </div>
   
   `)
         $('.basketBlock').append(
            `
      <div class="basketButtonFirst">
      <div class="basketButtonContent">View Basket</div>
   </div> 
      `
         )
         $('.basketBlock').append(
            `
      <div class="basketButtonSecond">
      <div class="basketButtonContent">Checkout</div>
   </div> 
      `
         )





         $(this).parent().parent().parent().remove();
         let result = JSON.stringify(myObject);
         localStorage.setItem('object', result);

         if (myObject.images.length == 0) {
            $('.basketButtonFirst').remove()
            $('.basketButtonSecond').remove()

            $('.totalPrice').remove();



            $('.basketBlock').append(`
             <div class=totalPrice>
             <div class=totalPriceLeft>
                   There is no item in Basket
             
             </div>
             <div class=totalPriceRight>
         
            
             </div>
       
             
             </div>
       
       `)
            return

         }


      })
   }

   function navbarFixedORSTaticSetter() {
      if ($(window).width() >= 576) {
         if (window.scrollY > (document.querySelector("nav").offsetHeight + document.querySelector(".header-top").offsetHeight)) {
            $("nav").css("position", 'fixed');
            $("nav").css("top", '0');
         } else {
            $("header").css("min-height", (document.querySelector("nav").offsetHeight + document.querySelector(".header-top").offsetHeight) + 'px');
            $("nav").css("position", 'static');
         }
      } else {
         $("header").css("min-height", document.querySelector("header>nav").offsetHeight + 'px');
         $("nav").css("position", 'static');
      }
      navbarScrollSetter();
   }


   // ============== ADD ANIMATION TO NAVBAR RELATIVE TO SCROLL HEIGHT
   function navbarScrollSetter() {
      window.addEventListener("scroll", function () {
         if (window.scrollY > (document.querySelector("nav").offsetHeight + document.querySelector("header").offsetHeight)) {
            $("nav").css({
               "position": "fixed",
               "background-color": "white",
               "box-shadow": "0 10px 10px -10px rgba(0, 0, 0, 0.35)",
               "animation-name": "navbarToShow",
               "animation-duration": "0.5s",
               "animation-fill-mode": "forwards"
            });
         } else {
            $("nav").css({
               "position": "static",
               "box-shadow": "0 10px 10px -10px rgba(0, 0, 0, 0)",
               "animation-name": "none",
               "animation-duration": "unset",
               "animation-fill-mode": "unset"
            });
         }
      });
   }
   // open basket content
   function openBasket() {
      $(document).on('click', '.shopping-cart', function () {
         $('.basketBlock').slideToggle(700);
         $('.burgerMenuContainer').slideUp(700);
      })
   }

   function inputChange() {
      let prices = [];
      prices = $('.mainPrice').toArray();
      let intPrice = [];
      // prices

      for (let i = 0; i < prices.length; i++) {
         intPrice.push(parseFloat($(prices[i]).text().substr(1, 2)))
      }







      $('.leftRange input').change(function () {
         let height = $('.toThisDiv').offset().top;


         $('html, body').animate({
            scrollTop: `${height}`
         }, 500);
         $('#secondPreloader').css('display', 'block');
         $('#secondPreloader').delay(3000).fadeOut(1000);
         let value = $('.leftRange input').val() * 10;

         $('.leftRangeText span:last-child').text('$' + value);
         for (let k = 0; k < intPrice.length; k++) {
            $(prices[k]).parent().parent().parent().parent().parent().hide();

         }
         for (let i = 0; i < intPrice.length; i++) {
            if (value > intPrice[i]) {


               $(prices[i]).parent().parent().parent().parent().parent().show();

            }
         }

      })
   }
   // show blue chart when scroll
  
   toCart()
   // goes to chart
   function toCart() {
      $(document).on('click', '.viewBasket', function () {
         window.open("Cart.html");

      })
      $(document).on('click', '.basketButtonFirst', function () {
         window.open("Cart.html");

      })

   }

   function toCheckout() {
      $(document).on('click', '.basketButtonSecond', function () {
         window.open("Checkout.html");

      })

   }

   toCheckout();
   getSearch();
   modalShower();
   modalExit();
   dynamicModalPhoto();
   fromLocalStorageForCounter();
   toBasket();
   countBasketCounter();
   fromLocalStorageToBasket();
   deleteFromBasket();
   navbarFixedORSTaticSetter();
   navbarScrollSetter();
   openBasket();
   inputChange();



})