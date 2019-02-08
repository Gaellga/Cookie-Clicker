var score = 0;
var prix = 50;
var multiplicateur=0;
var currenttime = new Date();
var currentsec = currenttime.getSeconds();

//clic cookie
document.getElementById('clic').addEventListener('click', function (){
    score++;
    score+=multiplicateur;
    document.getElementById('affichage').innerHTML = "Score:" + score;
 });

 //multiplicateur
document.getElementById("multiplier").addEventListener("click", function augmenterMultiplicateur() {

      if (score>=50) {
       multiplicateur++;

       if (score-prix<0){
         alert("Vous n'avez pas assez de cookies");
       }
       else {
     score = score -prix;
     prix = prix*2;
   }
       var x = multiplicateur+1
       document.getElementById("multiplier").innerHTML= "Multiplier x "+x +"<br> prochain prix" +":"+ prix;
     }
     else {
       alert("pas assez de cookies pour un multiplicateur");
     }
   });

//autoclick
var alreadyPlayed = false;

function buyAutoclick() {
    if (alreadyPlayed=== false && score >= 10) {
        score = score - 10;
        setInterval(function(){
            if (score >= 20) {
                score++;
            };
            alreadyPlayed = true;
            score != score - 10;    
            document.getElementById('affichage').innerHTML = "Score:" + score;
        }, 1000);
        document.getElementById('autoclic').innerHTML = "Autoclick On";
    };
};

