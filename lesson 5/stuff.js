function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

var tomorrow = new Date();
tomorrow.setTime(tomorrow.getTime());       
document.getElementById("spanDate").innerHTML = 
tomorrow.getMonth() + "/" + tomorrow.getDate()+ "/" + 
tomorrow.getFullYear();