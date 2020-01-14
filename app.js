'use strict';

var hoursOP = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function getRandomInt(minCust, maxCust) {
  var randomNumber = Math.random() * (maxCust - minCust) + minCust;
  return Math.floor(randomNumber);
}

// SEATTLE

var seattle = {
  minCust : 23,
  maxCust : 65,
  avgSales : 6.3,
  salesPerHour : [],

  getHourlysales : function(){
    for (var i = 0; i < hoursOP.length; i++){
      var customersPerHour = getRandomInt(this.minCust, this.maxCust);
      var totalCookiesPerHour = Math.floor(customersPerHour * this.avgSales);
      this.salesPerHour.push(totalCookiesPerHour);
    }
  },

  render : function(){
    this.getHourlysales();
    var seattleArticle = document.getElementById('seattle');
    var numbersUL = document.createElement('ul');

    for (var i = 0; i < hoursOP.length; i++){
      var newTag = document.createElement('li');
      newTag.textContent = `${hoursOP[i]} = ${this.salesPerHour[i]} cookies.`;
      numbersUL.appendChild(newTag);
    }
    var total = 0;
    for (i = 0; i < this.salesPerHour.length; i++){
      total += this.salesPerHour[i];
    }
    var totali = document.createElement('li');
    totali.textContent = `Total: ${total} cookies.`;
    numbersUL.appendChild(totali);

    seattleArticle.appendChild(numbersUL);
  }
};

seattle.render();

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
// limaArticle.appendChild(numbersUlLima);



// // var myTable = document.getElementById('myTable')
// // var Locations = [seattle, tokyo,paris,dubai,lima];
// // var locationTable = document.createElement('table');
// // var headerRow = document.createElement('tr');

// // for (var i=0; i< Locations.length; i++){
// //   var tableHeader = document.createElement('th');
// //   tableHeader.textContent = Locations[i];
// //   headerRow.appendChild(tableHeader);
// // }
// // // for (var i = 0)

// // locationTable.appendChild(headerRow);
// // myTable.appendChild(locationTable);
