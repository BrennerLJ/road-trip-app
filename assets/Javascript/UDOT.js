// UDOT API
const apiKey = '5af94dd0937d48d3907b1f9fd170e21a';
const apiUrl = 'https://www.udottraffic.utah.gov/api/v2/get/cameras';

const requestUrl = `${apiUrl}?key=${apiKey}`;
const url = 'https://corsproxy.io/?' + encodeURIComponent(requestUrl);

// adding refresh timer for 2 minutes and function -PC
function fetchDataAndRefresh(){
fetch(url)
  .then(response => response.json())
  .then(data => {
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
})};


function autoRefresh() {
  fetchDataAndRefresh();
  setInterval(fetchDataAndRefresh, 120000);
}
window.onload = autoRefresh;

function displayUdot() {
  document.getElementById("cameras").innerHTML = "Cameras: ${cameras}";
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