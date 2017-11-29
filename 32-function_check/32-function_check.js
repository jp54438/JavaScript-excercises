var number = Number(process.argv[2]);

function isPositiveInteger(value, onSuccess, onError, onNaN){
  if (isNaN(value)){
    onError("ei ole luku");
  }
  else if (value > 0){
    onSuccess("Positiivinen luku");
  }
  else{
    onError("Ei ole positiivinen luku");
  }
}

isPositiveInteger(number, positiivinen, 
                          negatiivinen, eiLuku);

function positiivinen(msg){
  console.log(msg);
}

function negatiivinen(msg){
  console.log(msg);
}
function eiLuku(msg){
  console.log(msg);
}
