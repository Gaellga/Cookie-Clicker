var score = 0;
var prix = 50;
var click = 1;

var multiplicateur=1;
var  multiClic = (click*2);
var difference = multiplicateur - multiClic;

var prixBonus = 20;
var m = click;

var prixAuto = 500;


//clic cookie
function clic() {
    function agrandi(){
        document.getElementById('clic').className = "blink-image2";
    };
    score = score + click;
    document.getElementById('affichage').innerHTML = "Score:" + parseInt(score);
    document.getElementById('clic').className = "blink-image";
    setTimeout(agrandi, 100);
}

document.getElementById('clic').addEventListener('click', function (){
    clic();

    //multiplicateur
    document.getElementById("multiplier").addEventListener("click", function augmenterMultiplicateur() {

       if (score-prix<0){
            var end = document.getElementById("multiplier");
            end.disabled = false;
        } else {
            score = score -prix;
            multiplicateur++;
            prix = prix*2;
            click++;
            clic();
        }
        document.getElementById("multiplier").innerHTML= "Multiplier x "+ multiplicateur;
        document.getElementById("nextMulti").innerHTML= "Buy: " + prix + " cookies";
    });


    //bonus
    var getBonus = false;
    var sec = 5;

    if (score-prixBonus<0){
        var end = document.getElementById("bonus");
        end.disabled = false;
    }
    else if (score > 20) {
        getBonus = true;
    }

    if (getBonus === true){
        document.getElementById("bonus").addEventListener("click", function() {
            if(score > 20){
                score = score - 20;
                document.getElementById('clic').addEventListener('click', function click(){
                    click = m*2;	
                    clic();
                    document.getElementById('affichage').innerHTML = "Score:" +  parseInt(score);
                });
                var interval = setInterval(function() {
                    sec--;
                    document.getElementById("bonus").className = "nobonus";
                    document.getElementById("bonus").innerHTML = sec;
                        if (sec === 0) {
                            clearInterval(interval);
                            document.getElementById("bonus").innerHTML = "Get Bonus!";
                            document.getElementById("bonus").className = "bonus";
                            click=(m/2);
                            sec = 10;
                        }
                }, 1000);
            } else {
                console.log("Your score isn't high enough!");
            }
        document.getElementById('clic').removeEventListener('click', function click(){});
        });
    }

    //autoclick
    var alreadyPlayed = false;
    
    function buyAutoclick() {
        if (alreadyPlayed === false && score-prixAuto<0){
            console.log("You have to create more cookies first!");
        } else {
            if (alreadyPlayed=== false && score >= 500) {
                score = score - 500;
                setInterval(function(){
                    if (score >= 200) {
                        clic();
                    };
                    alreadyPlayed = true;  
                    document.getElementById('affichage').innerHTML = "Score:" + parseInt(score);
                }, 1000);
                document.getElementById('autoclic').innerHTML = "Autoclick On";
                document.getElementById('buyAuto').innerHTML = "";
            }
        }
    };
    document.getElementById("autoclic").addEventListener("click", function() {
        buyAutoclick();
    });

});