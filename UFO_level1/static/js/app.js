// from data.js
var tableData = data;

// Create empty arrays to store the values for each siting
var Date = [];
var City = [];

// Iterate through each recipe object
// tableData.forEach((tableData) => {

//     // Iterate through each key and value
//     Object.entries(tableData).forEach(([key, value]) => {
  
//       // Use the key to determine which array to push the value to
//       if (key === "datetime") {
//         Date.push(value);
//       }
//       else {
//         City.push(value);
//       }
//      });
//   });

//   console.log(Date);
  
  // Use map to build both arrays of dish and spice values
  var datesMapped = tableData.map(tableData => tableData.datetime);
  var cityMapped = tableData.map(tableData => tableData.city);
  var stateMapped = tableData.map(tableData => tableData.state);
  var countryMapped = tableData.map(tableData => tableData.country);
  var shapeMapped = tableData.map(tableData => tableData.shape);
  var durationMapped = tableData.map(tableData => tableData.durationMinutes);
  var commentsMapped = tableData.map(tableData => tableData.comments);
 
// Print to console to check data
//   console.log(datesMapped);
//   console.log(cityMapped);
//   console.log(stateMapped);
//   console.log(countryMapped);
//   console.log(shapeMapped);
//   console.log(durationMapped);
//   console.log(commentsMapped);

// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the weather data from data.js
// console.log(tableData);

// // Loop Through `data` and console.log each weather report object
// tableData.forEach(function(ufoSiting) {
//   console.log(ufoSiting);
// });

// // Use d3 to append one table row `tr` for each weather report object.
// data.forEach(function(ufoSiting) {
//   console.log(ufoSiting);
//   var row = tbody.append("tr");
// });

// Use `Object.entries` to console.log each weather report value
// data.forEach(function(weatherReport) {
//   console.log(weatherReport);
//   var row = tbody.append("tr");

//   Object.entries(weatherReport).forEach(function([key, value]) {
//     console.log(key, value);
//   });
// });

// // Step 4: Use d3 to append 1 cell per weather report value (weekday, date, high, low)
// data.forEach(function(weatherReport) {
//   console.log(weatherReport);
//   var row = tbody.append("tr");

//   Object.entries(weatherReport).forEach(function([key, value]) {
//     console.log(key, value);
//     // Append a cell to the row for each value
//     // in the weather report object
//     var cell = row.append("td");
//   });
// });

// // Step 5: Use d3 to update each cell's text with
// // weather report values (weekday, date, high, low)
// data.forEach(function(weatherReport) {
//   console.log(weatherReport);
//   var row = tbody.append("tr");
//   Object.entries(weatherReport).forEach(function([key, value]) {
//     console.log(key, value);
//     // Append a cell to the row for each value
//     // in the weather report object
//     var cell = row.append("td");
//     cell.text(value);
//   });
// });