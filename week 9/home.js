const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

function populateInfo(towns, numb, section) {
    let card = document.createElement('section');
    card.setAttribute("class", "section"+section);
    let h2 = document.createElement('h2');
    h2.textContent = towns[numb].name
    card.appendChild(h2);

    let motto = document.createElement('h3');
    motto.textContent = towns[numb].motto 
    card.appendChild(motto);

    let test = document.createElement('p');
    test.innerHTML = "Year Founded:  " +  towns[numb].yearFounded + "<br \> Current Population:  " + towns[numb].currentPopulation + "<br \> Average Rainfall:  " + towns[numb].averageRainfall; 
    card.appendChild(test);

    let image = document.createElement('img');
    card.appendChild(image);
    if (section === 1) {
        image.setAttribute('src', "/week 9/imgs/barn1.jpg");
    }
    else if (section === 2) {
        image.setAttribute('src', "/week 9/imgs/barn2.jpg");
    }
    else if (section === 3) {
        image.setAttribute('src', "/week 9/imgs/barn3.jpg");
    }

    document.querySelector('div.info'+section).appendChild(card);

}

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const towns = jsonObject['towns']; 
    populateInfo(towns, 6, 1)
    populateInfo(towns, 2, 2)
    populateInfo(towns, 0, 3)
    

  });

