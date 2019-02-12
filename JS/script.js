var score = 0;
var prix = 50;
var click = 1;
var getBonus = false;
var multiplicateur=1;
var affichMulti = 1;
var prixBonus = 5000;
var prixAuto = 500;

function freshDot(){
    this.obj = document.createElement("div");
    this.obj.classList.add("box");
    this.obj.style.top = (window.innerHeight * Math.random()) + 'px';
    this.obj.style.left = (window.innerWidth * Math.random()) + 'px';
    this.size = Math.floor(3 * Math.random()) + 5;
    this.obj.style.height =  this.size + 'px';
    this.obj.style.width = this.size + 'px';
    
    document.body.appendChild(this.obj);
}
var dot = [];
for(var i = 0 ; i < 200 ; i++ ){
    dot.push(new freshDot());
}
  
  

//CANVAS
var c = document.getElementById("mon_canvas");
var ctx = c.getContext("2d");
var x=90;
//ailes
ctx.beginPath();
    ctx.fillStyle = "darkslategrey";
    ctx.bezierCurveTo(250, 480, 380, 430, 400, 300);
    ctx.bezierCurveTo(400, 300, 380, 160, 250, 120);
    ctx.fill();
ctx.closePath();
//flamme
ctx.beginPath();
    ctx.fillStyle = "orange";
    ctx.bezierCurveTo(250, 300, 150, 430, 70, 300);
    ctx.bezierCurveTo(70, 300, 150, 160, 250, 300);
    ctx.fill();
ctx.closePath();
//corps
ctx.beginPath();
    ctx.fillStyle = "lightgrey";
    ctx.bezierCurveTo(150+x, 350, 380+x, 430, 500+x, 300);
    ctx.lineTo(500+x, 300);
    ctx.bezierCurveTo(500+x, 300, 380+x, 160, 150+x, 250);
    ctx.lineTo(150+x, 350);
    ctx.fill();
ctx.closePath();
//bout
ctx.beginPath();
    ctx.fillStyle = "indianred";
    ctx.bezierCurveTo(450+x, 340, 485+x, 320, 500+x, 300);
    ctx.lineTo(500+x, 300);
    ctx.bezierCurveTo(500+x, 300, 485+x, 280, 450+x, 260);
    ctx.lineTo(450+x, 340);
    ctx.fill();
ctx.closePath();
//reacteur
ctx.beginPath();
    ctx.moveTo(240, 350);
    ctx.lineTo(240, 250);
    ctx.bezierCurveTo(240, 255, 250, 240, 190, 230);
    ctx.lineTo(190,365);
    ctx.bezierCurveTo(190, 365, 250, 360, 240, 345);
    ctx.fill();
ctx.closePath();
//aile de face
ctx.beginPath();
    ctx.strokeStyle = "darkslategrey";
    ctx.lineWidth = 15;
    ctx.lineCap = "round";
    ctx.moveTo(250, 300);
    ctx.lineTo(370, 300);
    ctx.fill();
    ctx.stroke();
ctx.closePath();
//hublot
ctx.beginPath();
    ctx.fillStyle = "cornsilk";
    ctx.lineWidth = 12;
    ctx.arc(450, 300, 35, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
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