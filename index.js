const resultDiv = document.querySelector('#result');
function fetchData() {
//clear the current displayed data
    resultDiv.innerHTML = '';
  // Replace 'YOUR_API_URL' with the actual URL of the API you want to fetch data from
  let word = $('#word').val();
  const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

  $.ajax({
    url: apiUrl,
    method: 'GET',
    dataType: 'json',
    success: function (data) {
        var myData = [];
        // Handle the data received from the API
        for (let a = 0; a < data.length; a++) {
            for (let b = 0; b < data[a].meanings.length; b++) {
                for (let c = 0; c < data[a].meanings[b].definitions.length; c++) {
                    myData.push(data[a].meanings[b].definitions[c].definition);
                }
            }
        }
        displayData(myData);
        console.log(myData);
    },  
    error: function (xhr, status, error) {
      // Handle errors
        resultDiv.innerHTML = `<p>No data</p>`;
      console.error('Error fetching data:', error);
    }
  });
}

function displayData(data) {
  // Example: Display the received data on the page
  for(a = 0; a < data.length; a++){
    resultDiv.innerHTML += `<li>${data[a]}</li>`;
  }
}