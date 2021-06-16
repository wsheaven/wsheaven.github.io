let url = 'https://api.osrsbox.com/'; 

const getData = (urlRequest) => {
    let encodedURI = encodeURI(url + urlRequest);
    fetchData(encodedURI).then((data) => {
        displayData(data);
    })
};

async function fetchData(url) {
    const response = await fetch(url)
    .then((response) => {
        return response.json();
    })
    .catch((error) => console.log(error));
    return response;
}

function displayData(data) {
    const dataTable = document.getElementById("dataTable");
    data._items.forEach(element => {
        let tr = document.createElement("tr")
        let td = document.createElement("td")
        td.innerHTML = element.name
        tr.appendChild(td);
        dataTable.appendChild(tr)

    });
}

getData('equipment');



