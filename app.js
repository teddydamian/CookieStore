'use strict';

var hours = ['Location', '6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', 'Total'];

var allLocations = [];

var myTable = document.getElementById('myTable');

//Random Number Generator::::::::::::::

function getRandomInt(minCust, maxCust) {
  var randomNumber = Math.random() * (maxCust - minCust) + minCust;
  return Math.floor(randomNumber);
}

//Looping for top row::::::::::::::::;
var toprow = document.createElement('tr');
for (var i = 0; i < hours.length; i++){
  var rowtd = document.createElement('td');
  rowtd.textContent = hours[i];
  toprow.appendChild(rowtd);
}
myTable.appendChild(toprow);



// CONSTRUCTOR FUNCTION

function Store(minCust, maxCust, avgSales, salesPerHour, name){
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgSales = avgSales;
  this.salesPerHour = [];
  this.name = name;

  //SalesPerHour Array::::::::::::::::

  this.getHourlysales = function(){
    for (var i = 0; i < hours.length; i++){
      var customersPerHour = getRandomInt(this.minCust, this.maxCust);
      var totalCookiesPerHour = Math.floor(customersPerHour * this.avgSales);
      this.salesPerHour.push(totalCookiesPerHour);
    }
  };
}

var seattle = new Store(23, 65,6.3,[], 'seattle');
var tokyo = new Store(3,24,1.2,[], 'tokyo');
var dubai = new Store(11,38,3.7,[], 'dubai');
var paris = new Store(20,38,2.3,[], 'paris');
var lima = new Store(2,16,4.6,[], 'lima');

//Rendering:::::::::::::::::::;
allLocations.push(seattle);
allLocations.push(tokyo);
allLocations.push(dubai);
allLocations.push(paris);
allLocations.push(lima);

Store.prototype.render = function(){
  this.getHourlysales();

  var createRow = document.createElement('tr');

  var createRowTd = document.createElement('td');
  createRowTd.textContent = this.name;
  createRow.appendChild(createRowTd);

  // Looping for locations-salesperhour::::::::::::
  for (var j = 0; j < hours.length -2; j++){
    var rowtdsales = document.createElement('td');
    rowtdsales.textContent = this.salesPerHour[j];
    createRow.appendChild(rowtdsales);
  }
  myTable.appendChild(createRow);
};



//Loop to call alllocations.render()
function renderTable(){
  for (var i = 0; i < allLocations.length ; i++){
    allLocations[i].render();
  };
}
renderTable();


// locationTable.appendChild(headerRow);

// for( i = 0; i < hoursOP.length; i++){
//     var row = document.createElement('tr');
//     for(var j = 0; j < locArray.length; j++){
//         var tableData = document.createElement('td');
//         tableData.textContent = this.salesPerHour[i];
//         row.appendChild(tableData);
//       }
//       locationTable.appendChild(row);
//     }
//     myTable.appendChild(locationTable);
//   };
// }

// this.render = function(){
//   this.getHourlysales();
//   var numbersUL = document.createElement('ul');
//   for (var i = 0; i < hoursOP.length; i++){
//     var newTag = document.createElement('li');
//     newTag.textContent = `${hoursOP[i]} = ${this.salesPerHour[i]} cookies.`;
//     numbersUL.appendChild(newTag);
//   }
//   var total = 0;
//   for (i = 0; i < this.salesPerHour.length; i++){
//     total += this.salesPerHour[i];
//   }
//   var totali = document.createElement('li');
//   totali.textContent = `Total: ${total} cookies.`;
//   numbersUL.appendChild(totali);
//   this.location.appendChild(numbersUL);
// };
// SEATTLE

// var seattle = {
//   minCust : 23,
//   maxCust : 65,
//   avgSales : 6.3,
//   salesPerHour : [],
//   getHourlysales : function(){
//     for (var i = 0; i < hoursOP.length; i++){
//       var customersPerHour = getRandomInt(this.minCust, this.maxCust);
//       var totalCookiesPerHour = Math.floor(customersPerHour * this.avgSales);
//       this.salesPerHour.push(totalCookiesPerHour);
//     }

//   },

//   render : function(){
//     this.getHourlysales();
//     var seattleArticle = document.getElementById('seattle');
//     var numbersUL = document.createElement('ul');

//     for (var i = 0; i < hoursOP.length; i++){
//       var newTag = document.createElement('li');
//       newTag.textContent = `${hoursOP[i]} = ${this.salesPerHour[i]} cookies.`;
//       numbersUL.appendChild(newTag);
//     }
//     var total = 0;
//     for (i = 0; i < this.salesPerHour.length; i++){
//       total += this.salesPerHour[i];
//     }
//     var totali = document.createElement('li');
//     totali.textContent = `Total: ${total} cookies.`;
//     numbersUL.appendChild(totali);

//     seattleArticle.appendChild(numbersUL);
//   }
// };

// seattle.render();

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// // TOKYO
// var tokyoArticle = document.getElementById('tokyo');

// var tokyo = {
//   minCust : 3,
//   maxCust : 24,
//   avgSales : 1.2,
// };

// var randomTokyo = [];
// var numbersUlTokyo = document.createElement('ul');
// var totalTokyo1 = 0;

// for ( i = 0; i < hoursOP.length; i++){
//   randomTokyo.push(getRandomInt(tokyo.maxCust, tokyo.minCust)*Math.floor(tokyo.avgSales));
// }

// for (i = 0; i < hoursOP.length; i++){
//   var newTagTokyo = document.createElement('li');
//   newTagTokyo.textContent = `${hoursOP[i]} = ${randomTokyo[i]} cookies.`;
//   numbersUlTokyo.appendChild(newTagTokyo);
// }

// if (i === hoursOP.length){
//   for (i = 0; i < randomTokyo.length; i++){
//     totalTokyo1 += randomTokyo[i];
//   }
//   var totalTokyo = document.createElement('li');
//   totalTokyo.textContent = `Total: ${totalTokyo1} cookies.`;
//   numbersUlTokyo.appendChild(totalTokyo);
// }
// tokyoArticle.appendChild(numbersUlTokyo);

// // --------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// //DUBAI

// var dubaiArticle = document.getElementById('dubai');

// var dubai = {
//   minCust : 11,
//   maxCust : 38,
//   avgSales : 3.7,
// };

// var randomDubai = [];
// var numbersUlDubai = document.createElement('ul');
// var totalDubai1 = 0;

// for ( vari = 0; i < hoursOP.length; i++){
//   randomDubai.push(getRandomInt(dubai.maxCust, dubai.minCust)*Math.floor(dubai.avgSales));
// }

// for (i = 0; i < hoursOP.length; i++){
//   var newTagDubai = document.createElement('li');
//   newTagDubai.textContent = `${hoursOP[i]} = ${randomDubai[i]} cookies.`;
//   numbersUlDubai.appendChild(newTagDubai);
// }

// if (i === hoursOP.length){
//   for (i = 0; i < randomTokyo.length; i++){
//     totalDubai1 += randomDubai[i];
//   }
//   var totalDubai = document.createElement('li');
//   totalDubai.textContent = `Total: ${totalDubai1} cookies.`;
//   numbersUlDubai.appendChild(totalDubai);
// }
// dubaiArticle.appendChild(numbersUlDubai);


// // --------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// //PARIS

// var parisArticle = document.getElementById('paris');

// var paris = {
//   minCust : 20,
//   maxCust : 38,
//   avgSales : 2.3,
// };

// var randomParis = [];
// var numbersUlParis = document.createElement('ul');
// var totalParis1 = 0;


// for ( i = 0; i < hoursOP.length; i++){
//   randomParis.push(getRandomInt(paris.maxCust, paris.minCust)*Math.floor(paris.avgSales));
// }

// for (i = 0; i < hoursOP.length; i++){
//   var newTagParis = document.createElement('li');
//   newTagParis.textContent = `${hoursOP[i]} = ${randomParis[i]} cookies.`;
//   numbersUlParis.appendChild(newTagParis);
// }

// if (i === hoursOP.length){
//   for (i = 0; i < randomTokyo.length; i++){
//     totalParis1 += randomParis[i];
//   }
//   var totalParis = document.createElement('li');
//   totalParis.textContent = `Total: ${totalParis1} cookies.`;
//   numbersUlParis.appendChild(totalParis);
// }
// parisArticle.appendChild(numbersUlParis);

// // --------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// //Lima
// var limaArticle = document.getElementById('lima');

// var lima = {
//   minCust : 20,
//   maxCust : 38,
//   avgSales : 2.3,
// };

// var randomLima = [];
// var numbersUlLima = document.createElement('ul');
// var totalLima1 = 0;

// for ( i = 0; i < hoursOP.length; i++){
//   randomLima.push(getRandomInt(lima.maxCust, lima.minCust)*Math.floor(lima.avgSales));
// }

// for (i = 0; i < hoursOP.length; i++){
//   var newTagLima = document.createElement('li');
//   newTagLima.textContent = `${hoursOP[i]} = ${randomLima[i]} cookies.`;
//   numbersUlLima.appendChild(newTagLima);
// }

// if (i === hoursOP.length){
//   for (i = 0; i < randomLima.length; i++){
//     totalLima1 += randomLima[i];
//   }
//   var totalLima = document.createElement('li');
//   totalLima.textContent = `Total: ${totalLima1} cookies.`;
//   numbersUlLima.appendChild(totalLima);
// }
// limaArticle.appendChild(numbersUlLima)