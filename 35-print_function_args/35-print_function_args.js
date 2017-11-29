//var number = Number(process.argv[2]);

function doIt(){
  for(let item of arguments){
    console.log(item);
  }

}
console.log('argumentit: 1, 2, 3, 4')
doIt(1, 2, 3, 4);
console.log('argumentit: "moi", "hei"');
doIt('moi', 'hei');
console.log('argumentit: ');
doIt();