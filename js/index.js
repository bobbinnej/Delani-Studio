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


/*Adding a hover effect to the port-folio section */
   $(document).ready(function(){

    $(".portfolio-image4").tooltip();
    $(".portfolio-image3").tooltip();
    $(".portfolio-image2").tooltip();
    $(".portfolio-image1").tooltip();
    $(".portfolio-image5").tooltip();
    $(".portfolio-image6").tooltip();
    $(".portfolio-image7").tooltip();
    $(".portfolio-image8").tooltip(); 

   });


/*Gathering user input from the form */
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


  
