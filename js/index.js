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
    $("#myform").submit(function(event){

        var name1 = $("input#name-input").val();
        var email1 = $("input#email-input").val();
        var textInput = $("input#exampleFormControlTextarea1").val();
        $(".name-input").text(name1);
        $(".email-input").text(email1);
        $(".exampleFormControlTextarea1").text(textInput);

        event.preventDefault();


        });



    });

  
