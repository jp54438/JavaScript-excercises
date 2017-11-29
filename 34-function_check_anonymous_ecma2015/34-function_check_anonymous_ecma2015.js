var number = Number(process.argv[2]);

function isPositiveInteger(value, onSuccess, onError){
  if (isNaN(value)){
    onError("ei ole luku");
  }
  else if (value > 0){
    onSuccess("Positiivinen luku")
  }
  else{
    onError("Ei ole positiivinen luku")
  }
}

isPositiveInteger(number, value => console.log(value), 
                          value => console.log(value));