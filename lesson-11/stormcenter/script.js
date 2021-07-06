function adjustRating(rating) {
    document.getElementById("ratingvalue").innerHTML = rating;
}

// if it is friday then display the pancake message on the page, otherwise hide it
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  let date = new Date()
  let day = date.getDay()
  let pancake = document.getElementById("friday")
  if (day != 5) {
    pancake.className += " secret"
  }