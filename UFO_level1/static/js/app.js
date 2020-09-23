// from data.js
var tableData = data;

// Create empty arrays to store the values for each siting
var Date = [];
var City = [];

// Iterate through each recipe object
tableData.forEach((tableData) => {

    // Iterate through each key and value
    Object.entries(tableData).forEach(([key, value]) => {
  
      // Use the key to determine which array to push the value to
      if (key === "datetime") {
        Date.push(value);
      }
      else {
        City.push(value);
      }
     });
  });

  console.log(Date);
  
  // Use map to build both arrays of dish and spice values
  var datesMapped = tableData.map(tableData => tableData.datetime);
  var cityMapped = tableData.map(tableData => tableData.city);
  
  console.log(datesMapped);
  console.log(cityMapped);