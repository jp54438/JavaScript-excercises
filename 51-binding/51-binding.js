
let user = {
  name: "Jack",
  sayHello: function() {
    console.log(`Hello, ${this.name}!`);
  }
};

// vaihe 2
 setTimeout(sayHello, 1000)

//vaihe 3
 setTimeout(() => user.sayHello(), 1000);

 // vaihe 3: m,uutetaan funcrion sisältö setTimeoutin kutsumisen jälkeen 
 user.sayHello = function() { 
                              console.log("does it work?"); 
                            };

function sayHello() {
  user.sayHello();
}