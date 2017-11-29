//Why Jack is not printed? Fix it by using binding.

let user = {
  firstName: "Jack",
  sayHello: function() {
    console.log(`Hello, ${this.firstName}!`);
  }
};
let myFunction = user.sayHello;

// korjaus bindingilla
//myFunction();
myFunction.bind(user)();