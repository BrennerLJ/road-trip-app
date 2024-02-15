const fuelApiKey = '27dd9bf0b8mshda7b77b1d230cccp12c1afjsne9a7250f6ea8'

const searchInput = document.getElementById('city-input');
let cityEl = document.getElementById('city-element');
let unleadedEl = document.getElementById('unleaded-price-element');
let midGradeEl = document.getElementById('midgrade-price-element');
let premiumEl = document.getElementById('premium-price-element');
let dieselEl = document.getElementById('diesel-price-element');
let priceDisplay = document.getElementById('price-display');

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
    if (result && result.result && result.result.cities) {
        const cities = result.result.cities;
        for (let i = 0; i < cities.length; i++) {
            const city = cities[i];
            const cityCard = document.createElement('div');
            cityCard.classList.add('price-card', 'box');
            cityCard.innerHTML = `
                <h2>City: ${city.name}</h2>
                <p>Unleaded Gas Price: $${city.gasoline}</p>
                <p>Midgrade Gas Price: $${city.midGrade}</p>
                <p>Premium Gas Price: $${city.premium}</p>
                <p>Diesel Price: $${city.diesel}</p>
            `;
            priceDisplay.appendChild(cityCard);
        }
    } else {
        console.error('Invalid response format');
    }
}

fetchData();