var score = 0;
var prix = 50;
var multiplicateur = 0;
 
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
      score = score -(prix * multiplicateur);
      var x = multiplicateur+1
      document.getElementById("multiplier").innerHTML= "Multiplier x "+x;
    } else {
        alert("Your score isn't high enough!");
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
}
