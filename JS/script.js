var score = 0;
var prix = 50;
var prixAuto = 30;
var multiplicateur=0;
var currenttime = new Date();
var currentsec = currenttime.getSeconds();

//clic cookie

function clic() {

    function agrandi(){
        document.getElementById('clic').className = "blink-image2";
    };

    score++;
    score+=multiplicateur;
    document.getElementById('affichage').innerHTML = "Score:" + score;
    document.getElementById('clic').className = "blink-image";
    setTimeout(agrandi, 100);
}


    document.getElementById('clic').addEventListener('click', function (){
        clic();


    });


 //multiplicateur
document.getElementById("multiplier").addEventListener("click", function augmenterMultiplicateur() {

    if (score>=50) {
       multiplicateur++;

       if (score-prix<0){
        var end= document.getElementById("multiplier");
        end.disabled = false;
       }
       else {
        score = score -prix;
        prix = prix*2;
        }
       var x = multiplicateur+1
       document.getElementById("multiplier").innerHTML= "Multiplier x "+x
       document.getElementById("nextMulti").innerHTML= "Buy: " + prix + " cookies";
       document.getElementById('affichage').innerHTML = "Score:" + score;
        }

    else {
        end.disabled = false;
    }
   });

//autoclick
var alreadyPlayed = false;

function buyAutoclick() {
    if (alreadyPlayed=== false && score-prixAuto<0){
        console.log("You have to create more cookies first!");
      }
      else {
        if (alreadyPlayed=== false && score >= 5) {
            score = score - 5;
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
}
