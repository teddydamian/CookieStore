'use strict';


// SEATTLE
var seattleArticle = document.getElementById('seattle');


var seattle = {
  minCust : 23,
  maxCust : 65,
  avgSales : 6.3,
  randomath : function getRandomInt(max) {
    max = this.maxCust;
    return Math.floor(Math.random() * (max-this.minCust) + this.minCust);
  }
};

// console.log(seattle.randomath()) ;

var hoursOP = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var random = [];
var numbersUL = document.createElement('ul');
var total = 0;


for (var i = 0; i < hoursOP.length; i++){
  random.push(seattle.randomath()*Math.floor(seattle.avgSales));
}

for (i = 0; i < hoursOP.length; i++){
  var newTag = document.createElement('li');
  newTag.textContent = `${hoursOP[i]} = ${random[i]} cookies.`;
  numbersUL.appendChild(newTag);
}

if (i === hoursOP.length){
  for (i = 0; i < random.length; i++){
    total += random[i];
  }
  var totali = document.createElement('li');
  totali.textContent = `Total: ${total} cookies.`;
  numbersUL.appendChild(totali);
}
seattleArticle.appendChild(numbersUL);
// console.log(random);

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// TOKYO
var tokyoArticle = document.getElementById('tokyo');

var tokyo = {
  minCust : 3,
  maxCust : 24,
  avgSales : 1.2,
  randomath : function getRandomInt(max) {
    max = this.maxCust;
    return Math.floor(Math.random() * (max-this.minCust) + this.minCust);
  }
};

var hoursOpTokyo = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var randomTokyo = [];
var numbersUlTokyo = document.createElement('ul');
var totalTokyo1 = 0;


for ( i = 0; i < hoursOpTokyo.length; i++){
  randomTokyo.push(seattle.randomath()*Math.floor(tokyo.avgSales));
}

for (i = 0; i < hoursOpTokyo.length; i++){
  var newTagTokyo = document.createElement('li');
  newTagTokyo.textContent = `${hoursOpTokyo[i]} = ${randomTokyo[i]} cookies.`;
  numbersUlTokyo.appendChild(newTagTokyo);
}

if (i === hoursOpTokyo.length){
  for (i = 0; i < randomTokyo.length; i++){
    totalTokyo1 += randomTokyo[i];
  }
  var totalTokyo = document.createElement('li');
  totalTokyo.textContent = `Total: ${totalTokyo1} cookies.`;
  numbersUlTokyo.appendChild(totalTokyo);
}
tokyoArticle.appendChild(numbersUlTokyo);

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//DUBAI

var dubaiArticle = document.getElementById('dubai');

var dubai = {
  minCust : 11,
  maxCust : 38,
  avgSales : 3.7,
  randomath : function getRandomInt(max) {
    max = this.maxCust;
    return Math.floor(Math.random() * (max-this.minCust) + this.minCust);
  }
};

var hoursOpDubai = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var randomDubai = [];
var numbersUlDubai = document.createElement('ul');
var totalDubai1 = 0;


for ( i = 0; i < hoursOpDubai.length; i++){
  randomDubai.push(dubai.randomath()*Math.floor(dubai.avgSales));
}

for (i = 0; i < hoursOpDubai.length; i++){
  var newTagDubai = document.createElement('li');
  newTagDubai.textContent = `${hoursOpDubai[i]} = ${randomDubai[i]} cookies.`;
  numbersUlDubai.appendChild(newTagDubai);
}

if (i === hoursOpDubai.length){
  for (i = 0; i < randomTokyo.length; i++){
    totalDubai1 += randomDubai[i];
  }
  var totalDubai = document.createElement('li');
  totalDubai.textContent = `Total: ${totalDubai1} cookies.`;
  numbersUlDubai.appendChild(totalDubai);
}
dubaiArticle.appendChild(numbersUlDubai);

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//PARIS

var parisArticle = document.getElementById('paris');

var paris = {
  minCust : 20,
  maxCust : 38,
  avgSales : 2.3,
  randomath : function getRandomInt(max) {
    max = this.maxCust;
    return Math.floor(Math.random() * (max-this.minCust) + this.minCust);
  }
};

var hoursOpParis = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var randomParis = [];
var numbersUlParis = document.createElement('ul');
var totalParis1 = 0;


for ( i = 0; i < hoursOpParis.length; i++){
  randomParis.push(paris.randomath()*Math.floor(paris.avgSales));
}

for (i = 0; i < hoursOpParis.length; i++){
  var newTagParis = document.createElement('li');
  newTagParis.textContent = `${hoursOpParis[i]} = ${randomParis[i]} cookies.`;
  numbersUlParis.appendChild(newTagParis);
}

if (i === hoursOpParis.length){
  for (i = 0; i < randomTokyo.length; i++){
    totalParis1 += randomParis[i];
  }
  var totalParis = document.createElement('li');
  totalParis.textContent = `Total: ${totalParis1} cookies.`;
  numbersUlParis.appendChild(totalParis);
}
parisArticle.appendChild(numbersUlParis);

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//Lima
var limaArticle = document.getElementById('lima');

var lima = {
  minCust : 20,
  maxCust : 38,
  avgSales : 2.3,
  randomath : function getRandomInt(max) {
    max = this.maxCust;
    return Math.floor(Math.random() * (max-this.minCust) + this.minCust);
  }
};

var hoursOpLima = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var randomLima = [];
var numbersUlLima = document.createElement('ul');
var totalLima1 = 0;


for ( i = 0; i < hoursOpLima.length; i++){
  randomLima.push(lima.randomath()*Math.floor(lima.avgSales));
}

for (i = 0; i < hoursOpLima.length; i++){
  var newTagLima = document.createElement('li');
  newTagLima.textContent = `${hoursOpLima[i]} = ${randomLima[i]} cookies.`;
  numbersUlLima.appendChild(newTagLima);
}

if (i === hoursOpLima.length){
  for (i = 0; i < randomLima.length; i++){
    totalLima1 += randomLima[i];
  }
  var totalLima = document.createElement('li');
  totalLima.textContent = `Total: ${totalLima1} cookies.`;
  numbersUlLima.appendChild(totalLima);
}
limaArticle.appendChild(numbersUlLima);
