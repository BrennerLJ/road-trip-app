let citySelector = document.getElementById('city-selector');
let priceDisplay = document.getElementById('price-display');
const fuelApiKey = '85d8396db0mshaa5df0f22da4a39p192ad2jsn82a7c5ba5d7b'

async function fetchPricesData(cityName) {
    const url = 'https://gas-price.p.rapidapi.com/allUsaPrice';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': fuelApiKey,
            'X-RapidAPI-Host': 'gas-price.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json(); // Parse response as JSON
        console.log(result);

        // Find the city data
        let cityData = null;
        for (let i = 0; i < result.result.length; i++) {
            const state = result.result[i];
            for (let j = 0; j < state.length; j++) {
                const cities = state[j].cities;
                cityData = cities.find(city => city.name === cityName);
                if (cityData) {
                    break; // Break the loop once the city is found
                }
            }
            if (cityData) {
                break; // Break the outer loop once the city is found
            }
        }

        if (cityData) {
            // Display gas prices for the selected city
            console.log(`Gas prices for ${cityName}:`);
            console.log(cityData.prices);
            priceDisplay.textContent = `Gas prices for ${cityName}: ${cityData.prices.join(', ')}`;
        } else {
            console.log(`Gas prices for ${cityName} not found.`);
            priceDisplay.textContent = `Gas prices for ${cityName} not found.`;
        }
    } catch (error) {
        console.error(error);
    }
}

async function initializeCitySelector() {
    const url = 'https://gas-price.p.rapidapi.com/usaCitiesList';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': fuelApiKey,
            'X-RapidAPI-Host': 'gas-price.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json(); // Parse response as JSON
        console.log(result);

        // Populate city selector dropdown with city names
        for (let i = 0; i < result.result.length; i++) {
            const state = result.result[i];
            for (let j = 0; j < state.length; j++) {
                const cities = state[j].cities;
                for (let k = 0; k < cities.length; k++) {
                    const cityName = cities[k].name;
                    let cityOption = document.createElement('option');
                    cityOption.textContent = cityName;
                    citySelector.appendChild(cityOption);
                }
            }
        }

        // Add event listener to the city selector dropdown
        citySelector.addEventListener('change', function() {
            const selectedCity = this.value;
            fetchPricesData(selectedCity); // Fetch and display gas prices for the selected city
        });
    } catch (error) {
        console.error(error);
    }
}

initializeCitySelector();
