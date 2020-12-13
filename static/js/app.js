// from data.js given
const tableData = data;

// using d3 to get the button
let button=d3.select("#button");

let form = d3.select()

button.on("click", runEnter);
form.on("submit", runEnter);

