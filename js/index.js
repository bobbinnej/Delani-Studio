/*Styling what we do  section using css in jquery*/

$(".design-header").css("font-weight",("bold"));
$(".design-development").css("font-weight",("bold"));
$(".design-product").css("font-weight",("bold"));



/*Hide and show event on for the design part */
$(document).ready(function(){
    $(".para-des").click(function(){
      $(".des-showing").toggle();
     
    });
    $(".para-des").click(function(){
        $(".des-hidden").toggle();
       
      });
          
        
});

/*Hide and show event on the development part */
$(document).ready(function(){

    $(".para-dev").click(function(){

        $(".dev-showing").toggle();
    });
    $(".para-dev").click(function(){

        $(".dev-hidden").toggle();
    });

});

/*Hide and show event on the product development part */
$(document).ready(function(){

    $(".para-prod").click(function(){

        $(".prod-showing").toggle();
    });
    $(".para-prod").click(function(){

        $(".prod-hidden").toggle();
    });
    


});





$(document).ready(function(){
    $("#myform").submit(function(event){

        $(".name-input").append("blah");
        $(".email-input").append("blah");
        $(".exampleFormControlTextarea1").append("blah");

        event.preventDefault();



    });

  
});




   $(document).ready(function(){

    $(".portfolio-images").tooltip();

   });



  function contactUs(){

    console.log("hello world");

    let name1=document.getElementById("name-input").value;
    let email1=document.getElementById("email-input").value;
    let textarea1=document.getElementById("exampleFormControlTextarea1").value;

    if(name1 !=="" && email1 !="" && textarea1 !=""){

        alert(`Hello ${name1} Your feedback has been recieved`);

        
    }else{
        alert("Fill empty fields");
        
    }



  }


  
