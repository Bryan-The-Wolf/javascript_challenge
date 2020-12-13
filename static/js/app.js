// from data.js given
const tableData = data;

// using d3 to get the input from index.html, button and form.
let dateFromPage = d3.select("#datetime");
let enterButton = d3.select("#filter-btn");

dateFromPage.on("submit", runEnter);
enterButton.on("click", runEnter);

//code from class lesson fuction to take info from index
function runEnter(){
    d3.event.preventDefault();
    let inputElement = d3.select("#datetime");
    let inputValue = inputElement.property("value");
    
    console.log(inputValue)

    let dataFilter = tableData.filter(ufoInfo => ufoInfo.datetime === inputValue);
    console.log(dataFilter);
};
