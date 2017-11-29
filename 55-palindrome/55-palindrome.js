
/*
55. Take the following
    console.log( "saippuakauppias".isPalindrome() );

The app should print “true” if the “given” string was an palindrome. Otherwise false. So this outputs false:

    console.log( "hello world".isPalindrome() );
*/
/*
function isThisPalindrome(){
  var sana = this.String; 
  console.log("sana: "+sana);
}

StringUtil.prototype = Object.create(String.prototype)
StringUtil.prototype.constructor = StringUtil;
var isPalindrome = new StringUtil(); 

String.prototype.isPalindrome = StringUtil;
console.log("saippuakauppias".isPalindrome())

*/

String.prototype.isPalindrome = function() {
  console.log(this);
  let origStr = this.toLowerCase();

  let reverseStr ='';
  for(let i = origStr.length-1 ; i >= 0 ; i--){
    reverseStr = reverseStr + origStr.charAt(i) ;
   
  }

  return (origStr == reverseStr)

}
   console.log("palindromi :" +"saippuakivikauppias".isPalindrome() )



/* Ratkaisu 

String.prototype.isPalindrome = function() {
  // "this" on täällä "saippuakauppias"!
  let original = this
  let reversed = ''
  for(let i=original.length-1; i>=0; i--) {
      reversed = reversed + original.charAt(i)
  }
  if(reversed == original) {
      return true
  } else {
      return false
  }
}
console.log("saippuakauppias".isPalindrome())
*/