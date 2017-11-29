//var number = Number(process.argv[2]);

function doIt(){
  for(let item of arguments){
    console.log(item);
  }

}

console.log(typeof doIt)
console.log(doIt instanceof Function)
