var eka= Number(process.argv[2]);
var toka = Number(process.argv[3]);

function max(luku1, luku2){
  if(luku1 > luku2){
    return luku1;
  }
  else{
    return luku2;
  }
}

console.log("Luku " + max(eka, toka) + " on suurempi");