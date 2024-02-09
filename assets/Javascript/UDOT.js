// UDOT API
const apiKey = '5af94dd0937d48d3907b1f9fd170e21a';
const apiUrl = 'https://www.udottraffic.utah.gov/api/v2/get/cameras';

const requestUrl = `${apiUrl}?key=${apiKey}`;
const url = 'https://corsproxy.io/?' + encodeURIComponent(requestUrl);
fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data);
var citiesArray = [2, 27, 28, 30, 134, 135, 136, 137, 138, 197, 200, 220, 348, 357, 430, 530];
    for (var i = 0; i < citiesArray.length; i++) {
        
        var createTableRow = document.createElement("tr");
        var tableData = document.createElement("td");
        var link = document.createElement("a");
        var citiesArrayData = data[citiesArray[i]].Url;

        link.textContent = data[citiesArray[i]].Url;
        link.setAttribute("href", citiesArrayData); 

        console.log(citiesArray);
        tableData.appendChild(link);
        createTableRow.appendChild(tableData);
        tableBody.appendChild(createTableRow);
  }
});

function displayUdot(cameras, cam2) {
  document.getElementById("#cameras").innerHTML = `Cameras: ${cameras}`;
  document.getElementById("cam2").innerHTML = `Cam2: ${cam2}`;
  document.createElement("#cameras");
  
}

function getData() {
  let cameras = document.getElementById("cameras");
}

fetch(url)
  .then((response) => {
    if (!response.ok) throw new Error("Error")
    return response.json();
  })
  .then((dataArray) => {

    cameras.innerHTML = dataArray
    .map(({cameras}) => {
      return `<div>${cameras}</div>`;
    }).join("");
  })
  .catch(console.warn);

  displayUdot()