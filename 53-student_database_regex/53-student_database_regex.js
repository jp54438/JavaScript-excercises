/*
53. Implement an student database application. Students are in memory in some collection, array, set, map you decide. User can add, remove and display student information. Each student has

- name (firstname lastname, like Jack Smith)
- student numbers (starts with two-letters and then 6 numbers, example: ab123456)
- gender (“male”, “female”, “undefined”)
- date of birth in ISO-standard (year-month-day)
- e-mail

When adding new student, validate user input (regex) and give error messages. Use readline-sync module for getting user input. You will have to first install the module.

- First create new project-folder
- Inside of this folder give command `npm init` - it will create a `package.json` file
- Then give command `npm install readline-sync` and notice that it will update your `package.json` file
- From the documentation, read how to get user input

Divide your app into functions (or even classes). If time try to make JSDoc documentation of your app (see documentation how to install and how to use)

Concentrate first just on getting user input! Then concentrate on creating simple regex for validating user input.
*/

var readlineSync = require('readline-sync');



function ask (question, errormsg, reg) {
    var regex = new RegExp(reg) 
    var value = ""
    var success = false
    do {
      value = readlineSync.question(question + ': ')
      success = regex.test(value)
      if (!success) {
        console.log(errormsg)
      } 
    } while (!success)
    
    return value
}

function main(){
  var name = ask('Give name', 'Name must be in form of "Firstname Lastname"', '^[A-Z][a-z]{2,} [A-Z][a-z]{2,}$')
  var studentID = ask('Give student ID',  'Studen id must be in  format AB123456', '^[A-Z]{2}[0-9]{6}$')
  var gender = ask('Give gender', 'Gender must be "male", "female" or "undefined"', '^male|female|undefined')
}

main();
