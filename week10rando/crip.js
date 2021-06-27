

const loadJsonData = async () => {
    const data = await fetch("nobel.json").then((response) => response.json())
    console.log(data.prizes[2].laureates[0].firstname);
    for (p of data.prizes) {
        if (parseInt(p.year) > 2000) {
            let surname = p.laureates[0].surname
        if ( surname && p.laureates[0].surname.charAt(0) === 'C') {
        console.log(p)
        } }
    }
}


const loadJsData = () => {
    console.log(jsData)
}

loadJsData();

// loadJsonData();