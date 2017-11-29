
var array = [5][5];

//console.log(array[0][0]);
//console.log(array[1][1]);

console.log("tulosta taulukko: for-silmukka")
for(i=0; i < array.length; i++){
  for(j=0; j<array[i].length; j++)
    console.log(array[i][j]);
}

console.log("tulosta taulukko: for of -silmukka")

for(item of array){
  console.log(item);
}