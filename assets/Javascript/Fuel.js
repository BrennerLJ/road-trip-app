async function fetchPricesData() {
    const url = 'https://gas-price.p.rapidapi.com/allUsaPrice';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '66a9e75901mshdccb961c98f7b41p142d8fjsne22a9b9f52c4',
            'X-RapidAPI-Host': 'gas-price.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}

fetchPricesData();

async function fetchCityData() {
	const url = 'https://gas-price.p.rapidapi.com/usaCitiesList';
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '66a9e75901mshdccb961c98f7b41p142d8fjsne22a9b9f52c4',
			'X-RapidAPI-Host': 'gas-price.p.rapidapi.com'
		}
	};
	
	try {
		const response = await fetch(url, options);
		const result = await response.text();
		console.log(result);
	} catch (error) {
		console.error(error);
	}
}

fetchCityData();