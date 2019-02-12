var score =50;
var prix = 50;
var multiplicateur=1;
var prixAuto =500;

if (score<1){
  var end = document.getElementById("multiplier");
  end.disabled = true;
}
else {
  var end = document.getElementById("multiplier");
  end.disabled = false;
}
if (score<1){
  var nd = document.getElementById("autoclic");
  nd.disabled = true;
}
else {
  var nd = document.getElementById("autoclic");
  nd.disabled = false;
}

function clic() {
  function agrandi(){
      document.getElementById('clic').className = "blink-image2";
  };

  score=score + multiplicateur;
  document.getElementById('affichage').innerHTML = "Score:" + score;
  document.getElementById('clic').className = "blink-image";
  setTimeout(agrandi, 100);
  if (score-prix<0){
    var end = document.getElementById("multiplier");
    end.disabled = true;
  }
  else {
    var end = document.getElementById("multiplier");
    end.disabled = false;
  }

  if (score<500){
    var nd = document.getElementById("autoclic");
    nd.disabled = true;
  }
  else {
    var nd = document.getElementById("autoclic");
    nd.disabled = false;
  }
}

document.getElementById('clic').addEventListener('click', function (){
  clic();


 });

 // Multiplicateur
 document.getElementById("multiplier").addEventListener("click", function augmenterMultiplicateur() {


        if (score-prix<0){
          var end = document.getElementById("multiplier");
          end.disabled = false;
        }
        else {

         score = score -prix;
         prix = prix*2;
         multiplicateur++;
         var end = document.getElementById("multiplier");
         end.disabled = true;
         }
        var x = multiplicateur;
        document.getElementById("multiplier").innerHTML= "Multiplier x "+multiplicateur;
         document.getElementById("nextMulti").innerHTML= "Buy: " + prix + " cookies";
        document.getElementById('affichage').innerHTML = "Score:" + score;
    });


 //autoclick
 var alreadyPlayed = false;

 function buyAutoclick() {
  if (alreadyPlayed=== false && score-prixAuto<0){
         console.log("You have to create more cookies first!");
       }
       else {
         if (alreadyPlayed=== false && score >= 500) {
             score = score - 500;
             setInterval(function(){
                 if (score >= 2) {
                     clic();
                 };
                 alreadyPlayed = true;
                 document.getElementById('affichage').innerHTML = "Score:" + score;
             }, 1000);
             document.getElementById('autoclic').innerHTML = "Autoclick On";
             document.getElementById('buyAuto').innerHTML = "";
         };
     }
 };
//bonus
document.getElementById("bonus").addEventListener("click", function() {
let multi = multiplicateur;
multiplicateur = multiplicateur *2;
var u = multiplicateur;

if(score > 1){
var sec = 3;
 var interval = setInterval(function() {
   sec--;
   console.log(multi);
  document.getElementById('affichage').innerHTML = "Score:" + score;
   document.getElementById("bonus").className = "nobonus";
   document.getElementById("bonus").innerHTML = sec;
   if(sec === 0) {
     clearInterval(interval);
     console.log(u);
     document.getElementById("bonus").innerHTML = "Get Bonus!";
         document.getElementById("bonus").className = "bonus";
   }
 }, 1000);
}
else {
 console.log("Your score isn't high enough!");
 }
});
