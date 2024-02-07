let fuelAPiKey = '66a9e75901mshdccb961c98f7b41p142d8fjsne22a9b9f52c4'
let fuelQueryUrl = 'https://gas-price.p.rapidapi.com/allUsaPrice';

function getApi() {
	fetch(fuelQueryUrl)
		.then(function (response) {
			return response.json();
		})
		.then (function (data) {
			console.log(data);
		})
}