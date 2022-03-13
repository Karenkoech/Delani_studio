$(document).ready(function(){
    $("design-icon#icon1").click(function(){
      $("#icon1,#para1").toggle();
    });
    });
    //   $().toggle();

    // $("button#btn2").click(function(textDes){
    //     $(".dev_description").show();});

    // $("button#btn3").click(function(textDes){
    //     $(".product_des").show();
    //     e.preventDefault();

    });
    
  
  
  $(document).ready(function(){
    $("button").click(function(){
      $(".message-form").show();
      var message=document.getElementById("message").value
      var name=document.getElementById("name").value
      var email=document.getElementById("email").value

      alert( `Hey ` + name + ` we have received your message.Thank you reaching out to us.`);
    });
  });
  //Form validation
  if 


