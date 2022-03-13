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


/*user interface code */
var name1 ="name-input";
var email = "email-input";
console.log("user entered name",name1);
console.log("user entered enami",email);
