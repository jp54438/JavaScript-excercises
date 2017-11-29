/*
43. Now try to pass binded function to setTimeout.
Try to also change the original function immediately after timeout. Does it work?
*/

let user = {
  firstName: "Jack",
  sayHello: function() {
    console.log(`Hello, ${this.firstName}!`);
  }
};
let myFunction = user.sayHello;
let kopio = myFunction.bind(user)
kopio();

setTimeout(kopio, 1000);


// This is not called because we sent a copy!
kopio = null;/*function() {
              console.log(`Moi, ${this.firstName}!`);
          }.bind(user)*/
//kopio();