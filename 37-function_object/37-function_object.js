//var number = Number(process.argv[2]);

function doIt(){
  for(let item of arguments){
    console.log(item);
  }

}

var myFunc = new Function('for(let item of arguments) {console.log( item)}');
myFunc.call(null, 1, 2, 3);
myFunc.call(null, 'moi', 'hei');
myFunc.call(null);