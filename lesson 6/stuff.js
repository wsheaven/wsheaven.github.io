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
  console.log(day)
  let pancake = document.getElementById("friday")
  if (day != 5) {
    pancake.className += " secret"
  }

var tomorrow = new Date();
tomorrow.setTime(tomorrow.getTime());       
document.getElementById("spanDate").innerHTML = 
tomorrow.getMonth() + "/" + tomorrow.getDate()+ "/" + 
tomorrow.getFullYear();

let high = document.getElementById('high').innerHTML;
let highTemp = parseInt(high[0]+high[1]);

let wind = document.getElementById('speed').innerHTML;
let windsped = parseInt(wind[0]+wind[1]);

function windChill(temp, windSpeed){
  return (35.75 + (0.6215 * temp) - (35.75 * windSpeed ** 0.16) + (0.4275 * temp * windSpeed ** 0.16)).toFixed(0)
}
if (highTemp <= 50 && windsped >= 3 ) {
let d = document.getElementById("wind");

d.innerHTML = windChill(highTemp, windsped) + " F";
} 
else {
  let d = document.getElementById("wind");

  d.innerHTML = highTemp + " F";
}
console.log(windsped);