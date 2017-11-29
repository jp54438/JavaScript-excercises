var luku1 = Number(process.argv[2]);
var oper = process.argv[3];
var luku2 = Number(process.argv[4]);
var tulos;

if(oper == '+')
  tulos = luku1 + luku2;
else if(oper == '-')
  tulos = luku1 - luku2;
else if(oper == '*')
  tulos = luku1 * luku2;
else if(oper == '/')
  tulos = luku1 / luku2;
else tulos = "virheellinen lauseke!"

console.log("Lausekkeen tulos on: "+tulos);