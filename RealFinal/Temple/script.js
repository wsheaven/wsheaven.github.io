// use the templeinfo.json file to populate the temples page. 
console.log("The card info is from a json file and weather api")

fetch("templeinfo.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    // console.log(jsonObject["temples"][0])
    for (let i = 0; i < 4; i++) {
        // console.log(jsonObject["temples"][i])
        let fact = document.getElementById(`fact${i}`)
        fact.insertAdjacentHTML('beforeend', jsonObject["temples"][i]["fact"])
        let nameTitle = document.getElementById(`name${i}`)
        nameTitle.innerHTML = jsonObject["temples"][i]["name"]
        let phone = document.getElementById(`phone${i}`)
        phone.insertAdjacentHTML('beforeend', jsonObject["temples"][i]["Phone-number"])
        let address = document.getElementById(`address${i}`)
        address.insertAdjacentHTML('beforeend', jsonObject["temples"][i]["Address"])
        let email = document.getElementById(`email${i}`)
        email.insertAdjacentHTML('beforeend', jsonObject["temples"][i]["Email"])
      }
  });
// Weather id's for each city 
let id = [5913490, 5386754, 5780993, 5771826 ]  

for (let i = 0; i < 4; i++) {
let url = `https://api.openweathermap.org/data/2.5/weather?id=${id[i]}&exclude=daily,minutely&units=imperial&appid=0e5b05eb0ed41a7bdddd22f966ff4fd2`
fetch(url)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    // console.log(jsonObject.main["temp"])
    let weather = document.getElementById(`weather${i}`)
    weather.insertAdjacentHTML('beforeend', jsonObject.main["temp"] + " ℉")
  }
);
}
