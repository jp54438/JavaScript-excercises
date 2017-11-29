function Human(){}

function Programmer(){}

// asetetaan programmerin prototyyppi osoittamaan Humanin prototyypistä luotua oliota
Programmer.prototype = Object.create(Human.prototype);
//Luodaan uusi Progammer olio, koodari
var koodari = new Programmer();

// Lisätään Human ja Programmer protyyppeihin uudet funktiot
Human.prototype.eat = function(){console.log("eat");}
Programmer.prototype.writeCode = function(){console.log("write code");}
// Asetetaan myös constructori, jotta jos sitä kysytään, niin palauttaa oikein
console.log(Programmer.prototype.constructor);
Programmer.prototype.constructor = Programmer
console.log(Programmer.prototype.constructor);

// Kutsutaan koodarin funktioita, jotka sijaitsevat sekä Human, että Programmer prototyypeissä, jotka koodari on perinyt 
koodari.eat();
koodari.writeCode();



/*######################
   Monipuolisempi ratkaisu:
  #########################
*/


function Human2 (name) {
  this.name = name
}
function Programmer (name, salary) {
  // Call function Human... this is like super(...) in Java
  Human2.call(this, name)
  this.salary = salary
}
// Add stuff to all humans
Human2.prototype.eat = function() {
  console.log(this.name + ' eating')
}
// Create new object that "extends" Human.prototype
Programmer.prototype = Object.create(Human2.prototype)
Programmer.prototype.constructor = Programmer

// Add stuff to all programmers
Programmer.prototype.codeApps = function() {
  console.log(this.name + ' code apps with salary ' + this.salary)
}

var tina = new Programmer('tina', 4000)
tina.eat()
tina.codeApps()

// tina "extends" Programmer.prototype which "extends" Human.prototype
console.log(tina.__proto__ == Programmer.prototype) // => true
console.log(Programmer.prototype.__proto__ == Human.prototype) // => true
// All in one
console.log(tina.__proto__.__proto__ == Human.prototype) // true


var jack = new Human2('jack')
jack.eat()