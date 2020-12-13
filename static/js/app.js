// from data.js given
const tableData = data;

// using d3 to get the input from index.html, button and form.
let dateFromPage = d3.select(".form-control");
let enterButton = d3.select(".btn btn-default");

dateFromPage.on("submit", runEnter);
enterButton.on("click", runEnter);

//code from class lesson 
function runEnter(){
    d3.event.preventDefault();
    let inputElement = d3.select("#datetime");
    let inputValue = inputElement.property("value");
};
console.log(inputValue)