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

const url = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&exclude=daily,minutely&units=imperial&appid=0e5b05eb0ed41a7bdddd22f966ff4fd2'

const loadweather = async () => {
  const data = await fetch(url).then((response) => response.json())
  console.log(data)
  let current = document.getElementById("current");
  current.innerText = data.weather[0].description
  let high = document.getElementById("high");
  high.innerText = data.main.temp_max + " ℉ "
  let humid = document.getElementById("humid");
  humid.innerText = data.main.humidity + "%"
  let wind = document.getElementById("speed");
  wind.innerText = data.wind.speed + " mph"
  if (data.wind.speed >= 3 && data.main.temp_max <= 50 ){
    let chill = document.getElementById("wind");
    chill.innerText = (35.75 + (0.6215 * data.main.temp_max) - (35.75 * data.wind.speed ** 0.16) + (0.4275 * data.main.temp_max * data.wind.speed ** 0.16)).toFixed(0)
  }
  else {
    let chill = document.getElementById("wind");
    chill.innerText = data.main.temp_max.toFixed(0) + " ℉ "
  }

}


loadweather()





var tomorrow = new Date();
tomorrow.setTime(tomorrow.getTime());       
document.getElementById("spanDate").innerHTML = 
tomorrow.getMonth() + "/" + tomorrow.getDate()+ "/" + 
tomorrow.getFullYear();


// Populate the 5 day forecast with the correct tempature and icon
const letters = ["a", "b", "c", "d", "e"]
const requestURL = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&exclude=daily,minutely&units=imperial&appid=0e5b05eb0ed41a7bdddd22f966ff4fd2';
var boxclass = 0
const loadJsonData = async () => {
  const data = await fetch(requestURL).then((response) => response.json())
  for (p of data.list) {
      if (p.dt_txt.charAt(12) === "8") {
        let forecastbox = document.getElementById(letters[boxclass]);

        let tempa = document.createElement('p');
        tempa.textContent = p.main.temp + " ℉ ";
        forecastbox.appendChild(tempa);

        let icon = p.weather[0].icon
        let image = document.createElement('img');
        forecastbox.appendChild(image);
        image.setAttribute('src', `https://openweathermap.org/img/wn/${icon}.png`);
        image.setAttribute('alt', "Weather Icon");
        boxclass = ++boxclass


  }}}


loadJsonData()

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
const tags = ["one", "two", "three", "four", "five"]

function fiveday() {
// Because the api does not give the days on the forecast this populates the 
// five day forecast with the next 5 days of the week. 
  var fish = false; 
  var j = 1
  var d = new Date();
  var n = d.getDay()
  for (let i = 0; i < tags.length; i++) {
  let z = document.getElementById(tags[i]);
  if(n + i === 7 ){
    n = 0
    z.innerHTML = days[n];
    fish = true
  }
  else if (fish) {
    z.innerHTML = days[n+j];
    j = ++j
  }
  else{
  z.innerHTML = days[n+i];
  }
}}

fiveday()