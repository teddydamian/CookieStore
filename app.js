'use strict'

var salesArticle = document.getElementById('sales');
// console.log(salesArticle);

var seattle = {
  minCust : 23,
  maxCust : 65,
  avgSales : 6.3,
  randomath : function getRandomInt(max) {
    max = this.maxCust;
    return Math.floor(Math.random() * (this.maxCust-this.minCust) + this.minCust);
  }
}

// console.log(seattle.randomath()) ;

var hoursOP = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var random = [];
var numbersUL = document.createElement('ul');

for (var i = 0; i < hoursOP.length; i++){
  random.push(seattle.randomath()*Math.floor(seattle.avgSales));
}
for (var x = 0; x < hoursOP.length; x++){
  var newTag = document.createElement('li');
  newTag.textContent = `${hoursOP[x]} = ${random[x]} cookies`;
  numbersUL.append(newTag);
}
salesArticle.appendChild(numbersUL);

// console.log(random);





 