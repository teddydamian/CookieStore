'use strict'

var seattleArticle = document.getElementById('seattle');
// console.log(salesArticle);

var seattle = {
  minCust : 23,
  maxCust : 65,
  avgSales : 6.3,
  randomath : function getRandomInt(max) {
    max = this.maxCust;
    return Math.floor(Math.random() * (max-this.minCust) + this.minCust);
  }
}

// console.log(seattle.randomath()) ;

var hoursOP = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var random = [];
var numbersUL = document.createElement('ul');
var total = 0;


for (var i = 0; i < hoursOP.length; i++){
  random.push(seattle.randomath()*Math.floor(seattle.avgSales));
}

for (var i = 0; i < hoursOP.length; i++){
  var newTag = document.createElement('li');
  newTag.textContent = `${hoursOP[i]} = ${random[i]} cookies`;
  numbersUL.appendChild(newTag);
}

if (i == hoursOP.length){
  for (var i = 0; i < random.length; i++){
    total += random[i];
  }
  var totali = document.createElement('li')
  totali.textContent = `Total: ${total} cookies.`;
  numbersUL.appendChild(totali);
}
seattleArticle.appendChild(numbersUL);
// console.log(random);
