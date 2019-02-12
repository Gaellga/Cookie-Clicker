var score = 0;
var prix = 50;
var click = 1;
var getBonus = false;
var multiplicateur=1;
var affichMulti = 1;
var prixBonus = 5000;
var prixAuto = 500;

//CANVAS
var c = document.getElementById("mon_canvas");
var ctx = c.getContext("2d");
var grd = ctx.createRadialGradient(250, 250, 250, 250, 200, 0);
grd.addColorStop(0, "sienna");
grd.addColorStop(1, "peru");
//halo
ctx.beginPath();
    ctx.shadowBlur = 40;
    ctx.shadowColor = "orange";
    ctx.fillStyle="orange";
    ctx.arc(200, 200, 170, 0, 2 * Math.PI);
    ctx.fill();
ctx.closePath();
//ombre
ctx.beginPath();
    ctx.shadowBlur = 10;
    ctx.shadowColor = "#333333";
    ctx.arc(200, 200, 170, 0, 2 * Math.PI);
    ctx.fill();
ctx.closePath();
//cookie base
ctx.beginPath();
    ctx.shadowBlur = 0;
    ctx.lineWidth = 4;
    ctx.fillStyle= grd; 
    ctx.strokeStyle="peru";
    ctx.arc(200, 200, 170, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();
ctx.closePath();
//pepites
ctx.beginPath();
    ctx.fillStyle= "#582900";
    ctx.arc(130, 100, 30, 0, 2 * Math.PI);
    ctx.moveTo(290,130);
    ctx.arc(290, 130, 38, 0, 2 * Math.PI);
    ctx.moveTo(170,170);
    ctx.arc(170, 170, 45, 0, 2 * Math.PI);
    ctx.moveTo(100,230);
    ctx.arc(100, 230, 30, 0, 2 * Math.PI);
    ctx.moveTo(280,250);
    ctx.arc(280, 250, 50, 0, 2 * Math.PI);
    ctx.moveTo(200,300);
    ctx.arc(200, 300, 30, 0, 2 * Math.PI);
    ctx.fill();
ctx.closePath();

//CODE
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

    //multiplicateur
    document.getElementById("multiplier").addEventListener("click", function augmenterMultiplicateur() {

            if (score-prix<0){
                console.log("naaan");
            }else{
                 if(getBonus === false){
                 score = score -prix;
                 prix = prix*2;
                 click = click + multiplicateur;
                 affichMulti++;
             } else if(getBonus === true) {
                 click = click + multiplicateur + multiplicateur;
             }}
     
             document.getElementById("multiplier").innerHTML= "Multiplier x "+ affichMulti;
             document.getElementById("nextMulti").innerHTML= "Buy: " + prix + " cookies";
    });

    //bonus
    var sec = 30;
    if (score-prixBonus<0){
        console.log("pas asseeez");
    }
    function iGotBonus() {
        if(score > 5000){
        score = score - 5000;
        click = click * 2;
        getBonus = true;
        //m = multiplicateur;
      
        bonuss = document.getElementById("bonus");
        bonuss.removeEventListener("click", iGotBonus);
      
        var interval = setInterval(function() {
      
          sec--;
          bonuss.className = "nobonus";
          bonuss.innerHTML = sec;
      
          if(sec < 1){
            bonuss.addEventListener("click", iGotBonus);
            getBonus = false;
            click = click / 2;
            clearInterval(interval);
            bonuss.innerHTML = "Get Bonus!";
            bonuss.className = "bonus";
          }
      
        }, 1000);
    }}
    document.getElementById("bonus").addEventListener("click", iGotBonus);

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
                    document.getElementById('affichage').innerHTML = "Score:" + score;
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