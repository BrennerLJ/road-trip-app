let citySelector = document.getElementById('city-selector');
let priceDisplay = document.getElementById('price-display');
// const fuelApiKey = '6356261635msh6fcf14a5eec0524p1b803bjsnfb36ba94ecf5'

const searchInput = document.getElementById('city-input');
let cityEl = document.getElementById('city-element');
let unleadedEl = document.getElementById('unleaded-price-element');
let midGradeEl = document.getElementById('midgrade-price-element');
let premiumEl = document.getElementById('premium-price-element');
let dieselEl = document.getElementById('diesel-price-element');

async function fetchData() {
    const url = 'https://gas-price.p.rapidapi.com/stateUsaPrice?state=UT';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': fuelApiKey,
            'X-RapidAPI-Host': 'gas-price.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
        displayData(result);
    } catch (error) {
        console.error(error);
    }
}

function displayData(result) {
    for (i = 0; i < result.cities.length; i++) {
        const city = result.cities[i];
        const cityCard = document.createElement('div');
        cityDiv.classList.add('city-info');
        cityDiv.innerHTML = `
        <h2>City: ${city.name}</h2>
        <p>Unleaded Gas Price: ${city.gasoline}</p>
        <p>Midgrade Gas Price: ${city.midGrade}</p>
        <p>Premium Gas Price: ${city.premium}</p>
        <p>Diesel Price: ${city.diesel}</p>
    `;
    cityEl.appendChild(cityDiv);
    }
}
