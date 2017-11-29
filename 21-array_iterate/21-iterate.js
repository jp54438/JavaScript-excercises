var taulukko = ["Aapo", "Elias", "Akseli"];
taulukko[2 * taulukko.length] = "Tiina";



 taulukko.splice(3,3);

 console.log("---item of ---");
 for(item of taulukko)
 {
    console.log(item);
  }

  console.log("---forEach---");
  taulukko.forEach(function(nimi){
    console.log(nimi);

  }
);
 