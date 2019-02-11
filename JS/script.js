var score = 0;
var prix = 50;
var multiplicateur=0;
var currenttime = new Date();
var currentsec = currenttime.getSeconds();
var prixAuto = 500;
var click = 1;
var prixBonus = 20;
var scorebonus = click*2;
//clic cookie
function clic() {
    function agrandi(){
        document.getElementById('clic').className = "blink-image2";
    };
    score = score + click;
    document.getElementById('affichage').innerHTML = "Score:" + score;
    document.getElementById('clic').className = "blink-image";
    setTimeout(agrandi, 100);
}
document.getElementById('clic').addEventListener('click', function (){
    clic();
});

 //multiplicateur
document.getElementById("multiplier").addEventListener("click", function augmenterMultiplicateur() {

       if (score-prix<0){
            var end = document.getElementById("multiplier");
            end.disabled = false;
          }
          else {
           score = score -prix;
           prix = prix*2;
           click++;
           clic();
           }
          document.getElementById("multiplier").innerHTML= "Multiplier x "+ click;
           document.getElementById("nextMulti").innerHTML= "Buy: " + prix + " cookies";
});
//autoclick
var alreadyPlayed = false;
function buyAutoclick() {
 if (alreadyPlayed === false && score-prixAuto<0){
        console.log("You have to create more cookies first!");
      }
      else {
        if (alreadyPlayed=== false && score >= 500) {
            score = score - 500;
            setInterval(function(){
                if (score >= 200) {
                    clic();
                };
                alreadyPlayed = true;  
                document.getElementById('affichage').innerHTML = "Score:" + score;
            }, 1000);
            document.getElementById('autoclic').innerHTML = "Autoclick On";
            document.getElementById('buyAuto').innerHTML = "";
        }
    }
};
//bonus
document.getElementById("bonus").addEventListener("click", function() {

    var interval = setInterval(function() {

        function iGotBonus(){
            clic();
            score = score + scorebonus;
        }
        if (score-prixBonus<0){
            var end = document.getElementById("bonus");
            end.disabled = false;
        }
        else if(score > 20){
            score = score - 10;
            var sec = 11;
            while (sec > 0){
                iGotBonus();
                sec --
                document.getElementById("bonus").className = "nobonus";
                document.getElementById("bonus").innerHTML = sec;
            }
            document.getElementById('clic').removeEventListener('click', function iGotBonus() {});
        }

    if(sec === 0) {
        clearInterval(interval);
        document.getElementById("bonus").innerHTML = "Get Bonus!";
        document.getElementById("bonus").className = "bonus";
    }
}, 1000);		
document.getElementById('clic').removeEventListener('click', function() { click();
    console.log (sec);

});
});
        


