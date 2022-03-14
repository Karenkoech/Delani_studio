// What-we-do function
$(document).ready(function(){
   $("#icon1,#para1").hover(function(){
       $("#icon1,#para1").toggle()
   })
   $("#icon2,#para2").click(function(){
    $("#icon2,#para2").toggle()
})
$("#icon3,#para3").click(function(){
    $("#icon3,#para3").toggle()
})

})
//  Contact us function
$("button").click(function(){
        var message=document.getElementById("message").value
        var userName=document.getElementById("name").value
        var email=document.getElementById("email").value

    
  //Form validation
  if (userName=="" || message=="" ||email==""){
      alert( "check if you've entered userName , email and message")
    }
  else {
    alert( `Hey ` + userName + ` we have received your message.Thank you reaching out to us.`)
  
   };
})

