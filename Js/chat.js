$(document).ready(function(){
  // definition of object
  function customObject (){
    this.names=[];
    this.texts=[];
    this.defaultAdd=function(){
      for(let i=0;i<6;i++){
        this.names.push([]);
        this.texts.push([]);
      }
    }
    this.customAdd= function(name,text){
      this.names.push(name);
      this.texts.push(text);
    }

  }
  let myObject=new customObject();
  myObject.defaultAdd();
  
  function formAdder(){
   
    $(document).on('click','.replyContent',function(){

      $('.commentAddedTable').remove();
      $(this).parent().parent().parent().parent().append(`
      <div class="commentAddedTable commentLastTable" style='padding-top:0px'>
      <div class="commentTableContent" style='padding-top:0px'>
          <div class="commentTableText">
              <h3>Leave A Comment
              </h3>
              <span>Your email address will not be published. Required fields are marked *
              </span>
          </div>
          <div class="commentTableForm">
              <form action="">
                  <input type="text"  placeholder="Your Name*">
                  <input type="text"  placeholder="Your Email*">
                  <textarea  cols="45" rows="9" placeholder="Your Text*" style="width: 100%;"></textarea>

                  <input type="button" value="Leave A Comment" class="customButton">
              </form>
          </div>
      </div>
  </div>
      `)
     
      $('.commentTable').hide();
      $('html,body').animate({
         scrollTop:`${$('.commentAddedTable').offset().top}`

      })
    })
   
    
  }
   // adding form block when click to Main
  function addCommentToMain(){
    $(document).on('click','.commentTable .customButton',function(){
      let name=$('.commentTable .customName').val();
    
      let email=$(' .commentTable .customEmail').val();
      let text=$('.commentTable .customText').val();
      let d=new Date();
      let date=d.getMonth();
    
      $('.customError').remove();
      if(name.length>0 && email.length>0 && text.length>0 && email.indexOf('@')!=-1){
      $('.commentMain').append(`
      <div class="contentMainSub">
                                        <div class="commentMainContent">
                                            <div class="commentMainContentLeft">
                                                <img src="https://secure.gravatar.com/avatar/9b53c1806cba99025d98d9a90fc1aac7?s=100&d=mm&r=g"
                                                    alt="">
                                            </div>
                                            <div class="commentMainContentRight">
                                                <span class="authorName">${name}</span>
                                                <p>${text}



                                                </p>
                                                <div class="subAuthorNameContent">
                                                    <div class="dateContent">March 13, 2019 at 2:16 am</div>
                                                
                                                </div>
                                                <div > Your Comment Will be checked by Moderator</div>
                                            </div>


                                        </div>
                                    </div>`)
                                    myObject.names[0].push(name);
                                    myObject.texts[0].push(text);
      }else{
        $('.commentLastTable .commentTableText').append(`
        <p  class = 'customError' style='color:red;font-size:18px'>Please correctly form email or name</p>
        `)
      }
                                  $('.commentTable .customName').val('');
                               
                                    $(' .commentTable .customEmail').val('');
                                    $('.commentTable .customText').val('');


                                    $('.commentTable .customName').attr('placeholder',' Your Name* ');
                                    $('.commentTable .customEmail').attr('placeholder','Your Email*');
                                    $('.commentTable .customText').attr('placeholder','Your Text');




      

    })
  }
  // adding form block when click to reply
  function addComentToMiddle(){
    $(document).on('click','.commentAddedTable .customButton',function(){
     let name;
     let text;
     name=$(this).prev().prev().prev().val();
     text=$(this).prev().val();
     let email=$(this).prev().prev().val();

     let index;
     index= parseInt($(this).parent().parent().parent().parent().parent().attr('id'))-300;
    

    if(name.length>0 && email.length>0 && text.length>0 && email.indexOf('@')!=-1){
      $(this).parent().parent().parent().parent().parent().children('.commentAddedTable').hide();
     $($(this).parent().parent().parent().parent().parent()).append(`
     <div class="contentMiddleSub">
                                       <div class="commentMainContent">
                                           <div class="commentMainContentLeft">
                                               <img src="https://secure.gravatar.com/avatar/9b53c1806cba99025d98d9a90fc1aac7?s=100&d=mm&r=g"
                                                   alt="">
                                           </div>
                                           <div class="commentMainContentRight">
                                               <span class="authorName">${name}</span>
                                               <p>${text}



                                               </p>
                                               <div class="subAuthorNameContent">
                                                   <div class="dateContent">March 13, 2019 at 2:16 am</div>
                                               </div>
                                               <div > Your Comment Will be checked by Moderator</div>

                                           </div>


                                       </div>
                                   </div>`)
                                   $('.commentTable').show();
    }else{
      $('.commentAddedTable .commentTableText').append(`
      <p  class = 'customError' style='color:red;font-size:18px'>Please correctly form email or name</p>
      `)

    }
    $('.commentAddedTable .customName').val('');
   
      $(' .commentAddedTable .customEmail').val('');
      $('.commentAddedTable .customText').val('');


      $('.commentAddedTable .customName').attr('placeholder',' Your Name* ');
      $('.commentAddedTable .customEmail').attr('placeholder','Your Email*');
      $('.commentAddedTable .customText').attr('placeholder','Your Text');


     myObject.names[index].push(name);
     myObject.texts[index].push(text);
  


     

    })
    
  }
 
   formAdder();
   addCommentToMain();
   addComentToMiddle();
    AOS.init({
     delay: 1000,
 
   });


//    function scrollShower(){
      
    
//     $('.formContent').offset();
//     // let breakPoint=$('.formContent').offset().top;
   
//      let scrollTop;
//      let bodyHeight=$('body').height();
   


     
//     $(window).scroll(function(){
//         scrollTop=$(document).scrollTop();
      
      
     

   
    
//      if(scrollTop>bodyHeight/2){
        
         
//          $('.scrollerTop').css('z-index','111');
         
//          $('.scrollerTop').css('opacity','1');


//      } else{
//          $('.scrollerTop').css('opacity','0');
//          $('.scrollerTop').css('z-index','-1');






//      }
     
     
//  })

    
// }

// function contentToTop(){
//     $(document).on('click','.scrollerTop',function(){
//      $('html, body').animate({
//          scrollTop: 0
//      }, 2000);
//     })
// }

//     scrollShower()
// contentToTop()

// 
     
 })