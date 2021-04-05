// from data.js
var tableData = data;
var tbody = d3.select('tbody');
// YOUR CODE HERE!
console.log(tableData)

tableData.forEach((UFOsighting) => {
    var row = tbody.append('tr');
    Object.entries(UFOsighting).forEach(([key,value]) => {
        var cell = row.append('td');
        cell.text(value);
    });
});
var button = d3.select("#filter-btn");
var form = d3.select("#form");

button.on("click", runEnter);
form.on("submit",runEnter);

function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
    // Get the value property of the input element
    var inputValue = inputElement.property("value");
    console.log(inputValue);
    console.log(tableData)
    var filteredData = tableData.filter(date => date.datetime === inputValue.trim());
    console.log(filteredData);
    tbody.html("");
    
    filteredData.forEach((date) => {
        var row = tbody.append('tr');
        Object.entries(date).forEach(([key,value]) => {
            var cell = row.append('td');
            cell.text(value);
        });
    });
}
