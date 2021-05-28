// Have a 3 button menu at the top. Select either random Character planet or film. Then display info from a randomly pulled one. 

let results = null;

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

function convertToJson(response) {
  if (response.ok) {
    return response.json();
  } else {
    console.log("error:", response);
  }
}

function displayPlanet(data) {
  results = data;
  document.querySelector("#one").innerHTML = `Name: ${results.name} <br>`;
  document.querySelector("#two").innerHTML = `Climate: ${results.climate} <br>`;
  document.querySelector("#three").innerHTML = `Terrain: ${results.terrain} <br>`;
  formated = new Intl.NumberFormat('en-US');
  document.querySelector("#four").innerHTML = `Population: ${formated.format(results.population)} <br>`;
  document.querySelector("#five").innerHTML = ` Orbital Period: ${results.orbital_period} days <br>`;
  document.querySelector("#six").innerText = `Surface Water Rating: ${results.surface_water}`;
}

function displayFilm(data) {
  results = data;
  document.querySelector("#one").innerHTML = `Title: ${results.title}`;
  document.querySelector("#two").innerHTML = `Film # ${results.episode_id} <br>`;
  document.querySelector("#three").innerHTML = `Director: ${results.director} <br>`;
  document.querySelector("#four").innerHTML = `Producer: ${results.producer} <br>`;
  document.querySelector("#five").innerHTML = `Release Date: ${results.release_date} <br>`;
  document.querySelector("#six").innerHTML = `Title Crawl: <br> ${results.opening_crawl} `
}

function displayCharacter(data) {
  results = data;
  document.querySelector("#one").innerHTML = `Name: ${results.name}`;
  document.querySelector("#two").innerHTML = `Height: ${results.height}cm`;
  // if the mass is known then display units kg otherwise do not
  if (results.mass === "unknown") {
    document.querySelector("#three").innerText = `Weight: ${results.mass}`;
  }
  else {
    document.querySelector("#three").innerText = `Weight: ${results.mass}kg`;
  }
  document.querySelector("#four").innerHTML = `Hair Color: ${results.hair_color}`;
  document.querySelector("#five").innerHTML = `Eye Color: ${results.eye_color}`;
  document.querySelector("#six").innerHTML = `Birth Year: ${results.birth_year}`
}

// use onClick with the html links to call these functions. 

function randomPlanet() {
  let number = getRandomInt(1, 50)
  let url = `https://swapi.dev/api/planets/${number}/`
  fetch(url).then(convertToJson).then(displayPlanet);
}

function randomFilm() {
  let number = getRandomInt(1, 6)
  let url = `https://swapi.dev/api/films/${number}/`
  fetch(url).then(convertToJson).then(displayFilm);
}

function randomCharacter() {
  let number = getRandomInt(1, 50)
  let url = `https://swapi.dev/api/people/${number}/`
  fetch(url).then(convertToJson).then(displayCharacter);
}

