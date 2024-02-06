// UDOT API
const apiKey = '5af94dd0937d48d3907b1f9fd170e21a';
const apiUrl = 'https://www.udottraffic.utah.gov/api/v2/get/cameras';

const requestUrl = '${https://www.udottraffic.utah.gov/api/v2/get/cameras}?apikey=${5af94dd0937d48d3907b1f9fd170e21a}';;

fetch(requestUrl)
  .then(response => response.json()) {
    return response.json();
  }
  .then(data => data.json()) {
    console.log(data);

    for (var i = 0; i < data.length; i++) {
        
        var createTableRow = document.createElement('tr');
        var tableData = document.createElement('td');
        var link = document.createElement('a');

        link.textContent = data[i].html_url;
        link.href = data[i].html_url;
        
        tableData.appendChild(link);
        createTableRow.appendChild(tableData);
        tableBody.appendChild(createTableRow);
  }
}

// Fuel API

const fuelApiURL = "https://fuel-v2.cc.api.here.com/fuel/stations.xml"
// ?prox=52.516667,13.383333,5000 idk what this is for yet
const fuelApiKey= "TBasdBDvMftaCFwKonVHHM6_xUWoaMEGjmqHRvTIJtM";

function getFuelApi() {
    var requestFuelUrl = "";

    fetch(requestFuelUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data)
        });
}