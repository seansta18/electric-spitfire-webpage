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
        
        chargeTable.rows[1].cells[1].innerHTML = response.batteryCharge + "%";
        chargeTable.rows[2].cells[1].innerHTML = response.pack1 + "%";
        chargeTable.rows[3].cells[1].innerHTML = response.pack2 + "%";
        chargeTable.rows[4].cells[1].innerHTML = response.pack3 + "%";
        chargeTable.rows[5].cells[1].innerHTML = response.pack4 + "%";

        tempTable.rows[1].cells[1].innerHTML = response.batteryTemp + " degrees";
        tempTable.rows[2].cells[1].innerHTML = response.motorTemp + " degrees";
        tempTable.rows[3].cells[1].innerHTML = response.externalTemp + " degrees";
      });
}

const remoteStart = function() {
    alert("This will either warm or cool the batteries based on temperature");
}