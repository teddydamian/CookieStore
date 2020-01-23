'use strict';

var hours = ['Location', '6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

var allLocations = [];

var myTable = document.getElementById('myTable');

//Random Number Generator::::::::::::::

function getRandomInt(minCust, maxCust) {
  var randomNumber = Math.random() * (maxCust - minCust + 1) + minCust;
  return Math.floor(randomNumber);
}

//Looping for top row::::::::::::::::;
function renderHeader(){
  var toprow = document.createElement('tr');

  for (var i = 0; i < hours.length; i++){
    var rowtd = document.createElement('th');
    rowtd.textContent = hours[i];
    toprow.appendChild(rowtd);
  }
  myTable.appendChild(toprow);

  var totalB = document.createElement('th');
  totalB.textContent = 'Total';
  toprow.appendChild(totalB);
}
// CONSTRUCTOR FUNCTION

function Store(minCust, maxCust, avgSales, name){
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgSales = avgSales;
  this.salesPerHour = [];
  this.name = name;
  this.sum = 0;

  //SalesPerHour Array::::::::::::::::

  this.getHourlysales = function(){
    for (var i = 0; i < hours.length; i++){
      var customersPerHour = getRandomInt(this.minCust, this.maxCust);
      var totalCookiesPerHour = Math.floor(customersPerHour * this.avgSales);
      this.salesPerHour.push(totalCookiesPerHour);
    }
  };

  this.getSum = function(){ //SIDE TOTALLL::::::
    for (var i = 0; i < this.salesPerHour.length; i++) {
      this.sum += this.salesPerHour[i];
    }
  };
}

var seattle = new Store(23, 65,6.3, 'Seattle');
var tokyo = new Store(3,24,1.2, 'Tokyo');
var dubai = new Store(11,38,3.7, 'Dubai');
var paris = new Store(20,38,2.3, 'Paris');
var lima = new Store(2,16,4.6, 'Lima');

allLocations.push(seattle);
allLocations.push(tokyo);
allLocations.push(dubai);
allLocations.push(paris);
allLocations.push(lima);

/////Total of sales in 1 hour by all locations


function bottomTotal(){

  var botRow = document.createElement('tr');

  var botTd = document.createElement('th');
  botTd.textContent = 'Total';
  botRow.appendChild(botTd);

  var hourTotal = 0;
  var grandTotal = 0;

  for(var i = 0; i < hours.length-1; i++){
    hourTotal = 0;

    for(var j = 0; j < allLocations.length; j++){
      hourTotal = hourTotal + allLocations[j].salesPerHour[i];
      grandTotal = grandTotal + allLocations[j].salesPerHour[i];
    }

    var botTd1=document.createElement('td');
    botTd1.textContent = hourTotal;
    botRow.appendChild(botTd1);
  }
  var allStoreTotal=document.createElement('td');
  allStoreTotal.textContent = grandTotal;
  botRow.appendChild(allStoreTotal);
  myTable.appendChild(botRow);
}

//Render-------------------------------------------------------------------------------------------------------------
Store.prototype.render = function(){
  this.getHourlysales();
  this.getSum();
  var createRow = document.createElement('tr');

  var createRowTd = document.createElement('td');
  createRowTd.textContent = this.name;
  createRow.appendChild(createRowTd);

  // Looping for locations-salesperhour::::::::::::
  for (var j = 0; j < hours.length -1; j++){
    var rowtdsales = document.createElement('td');
    rowtdsales.textContent = this.salesPerHour[j];
    createRow.appendChild(rowtdsales);
  }
  myTable.appendChild(createRow);

  //Side Total-----------------------------------------------------------------------------------------------------
  var sumtd = document.createElement('td');
  sumtd.textContent = this.sum;
  createRow.appendChild(sumtd);

};
//---------------------------------------------------------------------------------------------------------------



//Loop to call alllocations.render()----------------------------------------------------------------------
function renderTable(){
  myTable.innerHTML = null;
  renderHeader();
  for (var i = 0; i < allLocations.length ; i++){
    allLocations[i].render();
  }
  bottomTotal();
}
//---------------------------------------------------------------------------------------------------------
//Lab09

var storeForm = document.getElementById('add-store');

storeForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  var name = event.target.name.value;
  var minCust = parseInt(event.target.minCustomers.value);
  var maxCust = parseInt(event.target.maxCustomers.value);
  var avgSales = parseInt(event.target.averageSales.value);

  event.target.name.value = null;

  var newStore = new Store(minCust, maxCust, avgSales, name);

  console.log(newStore);
  myTable.innerHTML = null;
  newStore.render();
  allLocations.push(newStore);
  renderTable();

}

//-------------

renderTable();

