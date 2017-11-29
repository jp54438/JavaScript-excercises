

var nimiTaulukko = ['Aapo', 'Elias', 'Akseli', 'Juha', 'Pekka'];
var min = 0;
var max = 4;
var luku = Math.floor(Math.random() * (max - min + 1)) + min;
console.log("Arvotiin luku: "+ luku);
console.log("Arvottu nimi on: "+nimiTaulukko[luku]);
