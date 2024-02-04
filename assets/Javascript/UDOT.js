const apiKey = '5af94dd0937d48d3907b1f9fd170e21a';
const apiUrl = 'https://www.udottraffic.utah.gov/api/v2/get/cameras';

const requestUrl = '${https://www.udottraffic.utah.gov/api/v2/get/cameras}?apikey=${5af94dd0937d48d3907b1f9fd170e21a}';;

fetch(requestUrl)
  .then(response => response.json())
  .then(data => {
    console.log(data);

    for (var i = 0; i < city.length; i++) {
        
        var createTableRow = document.createElement('tr');
        var tableData = document.createElement('td');
        var link = document.createElement('a');

        link.textContent = data[i].html_url;
        link.href = data[i].html_url;
        
        tableData.appendChild(link);
        createTableRow.appendChild(tableData);
        tableBody.appendChild(createTableRow);
  })