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
    // Use the form input to filter the data by date    
    var filteredDate = tableData.filter(date => date.datetime === inputValue);
    console.log(filteredDate);

    filteredDate.forEach((date) => {
        var row = tbody.append('tr');
        Object.entries(date).forEach(([key,value]) => {
            var cell = row.append('td');
            cell.text(value);
        });
    });

    var filteredState = tableData.filter(state => state.state === inputValue);
    console.log(filteredState);


    tbody.html("");
//Filter by City
    d3.event.preventDefault();
    var inputElement = d3.select("#city");
    var inputValue = inputElement.property("value");
    var filteredCity = tableData.filter(city => city.city === inputValue);
    console.log(filteredCity);

    filteredCity.forEach((city) => {
        var row = tbody.append('tr');
        Object.entries(city).forEach(([key,value]) => {
            var cell = row.append('td');
            cell.text(value);
        });
    });
// Filter by state
    d3.event.preventDefault();
    var inputElement = d3.select("#state");
    var inputValue = inputElement.property("value");
    var filteredState = tableData.filter(state => state.state === inputValue);
    console.log(filteredState);

    filteredState.forEach((state) => {
        var row = tbody.append('tr');
        Object.entries(state).forEach(([key,value]) => {
            var cell = row.append('td');
            cell.text(value);
        });
    });
    // Filter by country
    d3.event.preventDefault();
    var inputElement = d3.select("#country");
    var inputValue = inputElement.property("value");
    var filteredCountry = tableData.filter(country => country.country === inputValue);
    console.log(filteredCountry);

    filteredCountry.forEach((country) => {
        var row = tbody.append('tr');
        Object.entries(country).forEach(([key,value]) => {
            var cell = row.append('td');
            cell.text(value);
        });
    });

    // Filter by shape
    d3.event.preventDefault();
    var inputElement = d3.select("#shape");
    var inputValue = inputElement.property("value");
    var filteredShape = tableData.filter(shape => shape.shape === inputValue);
    console.log(filteredShape);

    filteredShape.forEach((shape) => {
        var row = tbody.append('tr');
        Object.entries(shape).forEach(([key,value]) => {
            var cell = row.append('td');
            cell.text(value);
        });
    });
}