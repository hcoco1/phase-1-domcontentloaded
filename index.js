document.addEventListener("DOMContentLoaded", function() {
    let someText = document.getElementById('text');
   someText.innerHTML = 'This is really cool!';
   console.log("The DOM has loaded");
  });
  
  console.log(
    "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
  );
 
  



  
 