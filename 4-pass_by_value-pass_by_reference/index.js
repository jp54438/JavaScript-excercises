//Pass by reference
var olio = {'nimi': 'JP'};
olio2 = olio;
console.log("olio2.nimi on: "+ olio2.nimi);
olio2.nimi = "JPP"
console.log("olio.nimi on: "+ olio.nimi);


//Pass by value
var x=10, y=100;
x=y;
x++;
console.log("x on: "+ x +", Y on: "+y)
