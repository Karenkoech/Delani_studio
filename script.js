// What-we-do function
$(document).ready(function(){
   $("#icon1,#para1").hover(function(){
       $("#icon1,#para1").toggle()
   })
   $("#icon2,#para2").hover(function(){
    $("#icon2,#para2").toggle()
})
$("#icon3,#para3").hover(function(){
    $("#icon3,#para3").toggle()
})

})
// Creating hover effect over Image overlays
$("p,#imgWrap").hover(function(){
    $(this).css("border: white solid 4px", "white");
    }, function(){
    $(this).css("color", "blue");
  });


//  Contact us function
$("button").click(function(){
        var message=document.getElementById("message").value
        var userName=document.getElementById("name").value
        var email=document.getElementById("email").value

    
  //Form validation
  if (userName=="" || message=="" ||email==""){
      alert( "Check if you've entered username , email and message in the section above!")
    }
  else {
    alert( `Hey ` + userName + ` we have received your message.Thank you reaching out to us.`)
  
   };
})

