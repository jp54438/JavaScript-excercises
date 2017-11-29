
var Module = {
  text: 'helloworld',
  printTextArrow: function() { 
    // setTimeout prints the 'helloworld' defined in text after 1 sec
    setTimeout( ()=>console.log(this.text), 1000 )
  },

  printText: function() {
    _this = this; 
    // setTimeout prints the 'helloworld' defined in text after 1 sec
    setTimeout( ()=>console.log(this.text), 1000 )
  }
}
Module.printText()
Module.printTextArrow()