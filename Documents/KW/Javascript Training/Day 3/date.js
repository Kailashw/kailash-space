// Date - get new Date, get ISO date, Local dates, breaking down Date object

console.log(new Date()); // Current UTC datetime 
console.log(new Date().toLocaleDateString()); // current date format in system set timezone
console.log(Date()) // Date format in your machine

var today = new Date('2019-03-12T02:37:50.627Z') // JS let's you create date object of iven date.
console.log(today.toLocaleDateString());

var today = new Date('03/29/2020') // JS let's you create date object of iven date.
console.log(today);

today.toISOString()

today.getDate()  // 04/01/2021
today.getDay()   // Thursday
today.getTime()  // UTC Time -- 2:30
today.getMonth() // April
today.getFullYear()

/*
document.getElementById("currentYear").innerText = today.getFullYear();
    footer 
certain random tech pvt ltd. copyright <div id="currentYear"> </div>
*/

