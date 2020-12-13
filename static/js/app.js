// from data.js given
const tableData = data;

// using d3 to get the input from index.html, button and form.
let dateFromPage = d3.select("#datetime");
let enterButton = d3.select("#filter-btn");

dateFromPage.on("submit", runEnter);
enterButton.on("click", runEnter);

//code from class lesson 3.9 fuction to take info from index
function runEnter(){
    d3.event.preventDefault();
    let inputElement = d3.select("#datetime");
    let inputValue = inputElement.property("value");

// testing that the date entered into the form works    

    console.log(inputValue)

// now that it works. taking the date and filtering it through the data.js. with this fuction.

    let dataFilter = tableData.filter(ufoInfo => ufoInfo.datetime === inputValue);

//now making sure that the array is correct  

    console.log(dataFilter);


// now I have to put the data from data.js into the html at tbody
// code from class lesson 3.3
    const tbody = d3.select("tbody");

        dataFilter.forEach(function(ufoInfo){
           let row = tbody.append("tr");
           Object.entries(ufoInfo).forEach(function([key,value]){
            console.log(key, value);
            let cell = row.append("td");
            cell.text(value);
           })
    });

};