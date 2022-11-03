window.onload = function(){
    fetch('/tableData',{
        method: 'GET'
      })
      .then( function (response ) {
            return response.json();
      })
      .then( function( response ) {
        var tempTable = document.getElementById("Temperature");
        var chargeTable = document.getElementById("Charge");
        
        //Set cells based off returned array
      });
}

const remoteStart = function() {
    alert("This will either warm or cool the batteries based on temperature");
}