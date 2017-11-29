var usrNumerot = new Set([Number(process.argv[2]), Number(process.argv[3]), Number(process.argv[4]), 
                    Number(process.argv[5]), Number(process.argv[6]), Number(process.argv[7]),
                    Number(process.argv[8])]);


                    for(item of usrNumerot){
                      console.log(item);
                    }

var weeks = 0, years = 0, money = 0, oikein=0; arvonta=0; 
var kolmeOikein = false, neljaOikein=false, viisiOikein=false, kuusiOikein=false, jackpot = false, tulosta=false;
var arvotutNumerot = new Set();

while(jackpot == false){
 weeks++;
 arvonta++;
  while(arvotutNumerot.size < 7)
  {
    arvotutNumerot.add(Math.floor(Math.random()*39 + 1));
  }   
/*  for(item of arvotutNumerot){
    console.log(item);
  }
*/
  for(item of usrNumerot){
    if(arvotutNumerot.has(item)){
      oikein++;
    }
  }
  if(kolmeOikein == false && oikein == 3)
  {
    console.log("!!!! Ensimmäisen kerran KOLME OIKEIN !!!");
    kolmeOikein = true;
    tulosta = true;
  }

  if(neljaOikein == false && oikein == 4)
  {
    console.log("!!!! Ensimmäisen kerran NELJÄ OIKEIN !!!");
    neljaOikein = true;
    tulosta = true;
  }

  if(viisiOikein == false && oikein == 5)
  {
    console.log("!!!! Ensimmäisen kerran VIISI OIKEIN !!!");
    viisiOikein = true;
    tulosta = true;
  }

  if(kuusiOikein == false && oikein == 6)
  {
    console.log("!!!! Ensimmäisen kerran KUUSI OIKEIN !!!");
    kuusiOikein = true;
    tulosta = true;
  }

  if(jackpot == false && oikein == 7)
  {
    console.log("!!!! JACKPOT ** JACKPOT ** JACKPOT !!!");
    jackpot = true;
    tulosta = true;
  }

  if(tulosta == true){    
    console.log("Arvontakierroksia: " + arvonta +"\n"+
                "Aikaa kulunut: " + years +" vuotta"+
                " ja " + weeks + " viikkoa\n" +
                "Rahaa kulunut: " +arvonta +" euroa\n");
    console.log("Oikea rivi:");
                for(item of arvotutNumerot){
                  console.log(item);
                }
    tulosta = false;           
  }
  
  if(weeks==52){
    years++;
    weeks=1;
  }

  //Nollaa tiedot
  oikein=0;
  arvotutNumerot.clear(); 
}

