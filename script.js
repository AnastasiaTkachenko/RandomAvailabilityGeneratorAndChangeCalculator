// Módulo 6 - Algoritmos III - Laboratorio

var WORK_HOURS = [
   "08:00 - 09:00",
   "09:00 - 10:00",
   "10:00 - 11:00",
   "11:00 - 12:00",
   "12:00 - 13:00",
   "13:00 - 14:00",
   "15:00 - 16:00",
   "16:00 - 17:00"
 ];
 

 var myTeam = [
   {
     name: "María",
     availability: new Array(8).fill(true)
   },
   {
     name: "Pedro",
     availability: new Array(8).fill(true)
   },
   {
     name: "Esther",
     availability: new Array(8).fill(true)
   },
   {
     name: "Marcos",
     availability: new Array(8).fill(true)
   },
 ]; 
  var getRandomAvailabitity = () => (Math.round(Math.random()) ? "yes" : "no");


 for (var i = 0; i < WORK_HOURS.length; i++ ) {
   for (var j = 0; j < myTeam.length; j++ ) {
     myTeam[j].availability[i]= getRandomAvailabitity();
   }    
 }


 for (var j = 0; j < myTeam.length; j++ ) {
     console.log( "Availability of " + myTeam[j].name);
   for (var i = 0; i < WORK_HOURS.length; i++ ) {
       console.log(WORK_HOURS[i]+ ": " +  myTeam[j].availability[i] ) 
   }   
   
 }


 
       var freeTime = []; 

       for (var i = 0; i < WORK_HOURS.length; i++ ) {
           if (myTeam[0].availability[i]==="yes" &&  myTeam[1].availability[i]==="yes" && myTeam[2].availability[i]==="yes" && myTeam[3].availability[i]==="yes") {
              freeTime.push(WORK_HOURS[i]); 
           }
    
       }

       console.log(freeTime.length ? "We have a spare spot at " + freeTime[0]  : "Sorry, there are no spare spots.")

// Calculadora de cambio óptimo de bilvares y monedas

var money = [
 200,
 100,
 50,
 20,
 10,
 5,
 2,
 1,
 0.5,
 0.2,
 0.1,
 0.05,
 0.02,
 0.01   
]; 


const checkMoney = function() {
  
  var depositedMoney = document.getElementById('depositedMoney').value *1;
   var productPrice = document.getElementById('productsPrice').value *1; 

if (depositedMoney < productPrice) {
  alert('Not enought money.You need to deposit more money.')
  return;
}

  var change = depositedMoney - productPrice; 
  var quantity = []; 

   var result = ''; 
   


  for (var i = 0; i < money.length; i++) {
    let moneyToGive = Math.floor(change/money[i]); 
    quantity.push(moneyToGive); 
    change = change - moneyToGive * money[i]; 
    change = Math.round(change * 100) / 100; 


    if (moneyToGive > 0) {
   var type = money[i]> 2 ? 'banknote' : 'coin'; 
   var s =  moneyToGive > 1 ? 's' : ''; 
   result += 'Give ' + moneyToGive   + ' ' + type + s + ' of ' + money[i]  + '€  \n' ;
    }
    
  
  }
  
  document.getElementById('change').textContent = result; 
}




document.getElementById('calculate').addEventListener('click',checkMoney)
