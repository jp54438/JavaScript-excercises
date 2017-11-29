var myObject = {"firstname":"Hessu", "lastname": "Hopo","eka": "ensimmäinen arvo", "toka": "Toinen arvo", "3": 3, "elain": "koira"};

console.log(myObject.firstname);
console.log(myObject.lastname);

for(key in myObject){
  console.log(myObject[key]);
}