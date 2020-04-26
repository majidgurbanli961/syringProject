$(document).ready(function(){
    // Giving error mesage to form
   function errorMessage(){
       
       
       let errors=['The field is required','<span>The e-mail address entered is invalid.</span>','<span>The Number entered is invalid.</span>'];
       let inputs=$('.inputError').toArray();
 

       $(document).on('click','.buttonDiv input', function(){
        $('.secondErrorMessage').hide();

           let deleteErrors=[];
          deleteErrors= $('.errorMesage').toArray();

          for(let i=0;i<deleteErrors.length;i++){
              $(deleteErrors[i].remove());
          }
      for(let i = 0;i<inputs.length;i++){
          if($(inputs[i]).val()==''){
            $(inputs[i]).parent().append(`<span class="errorMesage">${errors[0]}</span>`); 
          }else{
            $(inputs[i]).next().remove();

          }
          if(i==1){
            if($(inputs[i]).val().indexOf('@')==-1){
                $(inputs[1]).next().remove();

                $(inputs[1]).parent().append(`<span class="errorMesage">${errors[1]}</span>`);
                  
              }else{
                 $(inputs[i]).next().remove();


              }

          }
          if(i==2){
              let numberText=[];
              numberText=$(inputs[i]).val();

              for(let i=0;i<numberText.length;i++){
                  if(numberText[i].charCodeAt(0)>48 && numberText[i].charCodeAt(0)<57){

                  }else{
                $(inputs[2]).parent().append(`<span class="errorMesage">${errors[2]}</span>`);
                break;


                  }
              }
              
         
          }
         let deleteFinalMessage=[];
         deleteFinalMessage=$('.errorMesage').toArray()
        
         
          
          if(deleteFinalMessage.length>0){
             
              
              $('.secondErrorMessage').show();
          }
          
      }
    })
       
       
   }
   
   errorMessage();
   AOS.init({
    delay: 1000,

  });

})