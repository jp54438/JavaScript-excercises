var taulukko = ["Aapo", "Elias", "Jussi", "Akseli"];


function checkAvailability(arr, val) {
    return arr.some(function(arrVal) {
      return val === arrVal;
    });
  }
  
if(checkAvailability(taulukko, 'Jussi'))
  console.log("taulukko sisälsi sanan 'Jussi'");
else
  console.log("Taulukko ei sisältänyt sanaa 'Jussi'")