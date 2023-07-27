const resultDiv = document.querySelector('#result');
function fetchData() {
//clear the current displayed data
resultDiv.innerHTML = '';

  let word = $('#word').val();
  const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

  $.ajax({
    url: apiUrl,
    method: 'GET',
    dataType: 'json',
    success: function (data) {
        var myData = [];

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

  for(a = 0; a < data.length; a++){
    resultDiv.innerHTML += `<li>${data[a]}</li>`;
  }
}