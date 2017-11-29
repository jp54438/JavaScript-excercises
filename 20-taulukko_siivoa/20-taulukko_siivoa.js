var taulukko = ["Aapo", "Elias", "Akseli"];
taulukko[2 * taulukko.length] = "Tiina";
console.log("--- Alkuperäinen taulukko ---");
for(item of taulukko)
{
   console.log(item);
 }

var newTaulukko = [];

for(let i=0; i<taulukko.length; i++){
  if(typeof(taulukko[i]) != 'undefined')
  {
    newTaulukko.push(taulukko[i]);
  }
}

console.log("--- Siivottu taulukko ---");
for(item of newTaulukko)
{
   console.log(item);
 }

/*
 taulukko.splice(3,3);

 for(item of taulukko)
 {
    console.log(item);
  }
  */