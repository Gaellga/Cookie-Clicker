var score = 0;
var click = 1;
var getBonus = false;
var multiplicateur = 1;
var affichMulti = 1;
var sec = 30;
var prix = 5;
var prixBonus = 50;
var prixAuto = 20;
var prixRepair = 1000;
var cli = document.getElementById("clic");
var multi = document.getElementById("multiplier");
var auto = document.getElementById("autoclic");
var bon = document.getElementById("bonus");
var repair = document.getElementById("reparation");

//CODE DES BOUTONS ET DU SCORE

//on initialise le clic
function clic() {
    function agrandi(){
        cli.className = "blink-image2";
    };
    score = score + click;
    document.getElementById('affichage').innerHTML = "Score:" + score;
    cli.className = "blink-image";
    setTimeout(agrandi, 100);
}

//on fait marcher les boutons
cli.addEventListener('click', function (){
    clic();

    //fonction multiplicateur
    function augmenterMultiplicateur() {
      if (score>prix){
        if(getBonus === false){
          score = score - prix;
          prix = prix*2;
          click = click + multiplicateur;
          affichMulti++;
        }else if(getBonus === true) {
          click = click + multiplicateur + multiplicateur;
        }
      }
      document.getElementById("multiplier").innerHTML= "Multiplier x "+ affichMulti;
      document.getElementById("nextMulti").innerHTML= "Buy: " + prix + " points";
    };
    //quand on clique sur le bouton multiplicateur
    multi.addEventListener("click", function() {
      augmenterMultiplicateur();
    });

    //bonus fonctionnement
    function iGotBonus() {
      if(score > 50){
      score = score - 50;
      click = click * 2;
      getBonus = true;
    
      bonuss = document.getElementById("bonus");
      bonuss.removeEventListener("click", iGotBonus);
    
      var interval = setInterval(function() {
    
        sec--;
        bonuss.className = "nobonus";
        bonuss.innerHTML = sec + " seconds left";
    
        if(sec < 1){
          bonuss.addEventListener("click", iGotBonus);
          getBonus = false;
          click = click / 2;
          clearInterval(interval);
          bonuss.innerHTML = "Click to get bonus!";
          bonuss.className = "rainbow-button";
        }
    
      }, 1000);
  }}
document.getElementById("bonus").addEventListener("click", iGotBonus);

    //autoclick
    var alreadyPlayed = false;
    
    function buyAutoclick() {
            if (alreadyPlayed=== false && score >= 500) {
                score = score - 500;
                setInterval(function(){
                    if (score >= 200) {
                        clic();
                    };
                    alreadyPlayed = true;  
                    document.getElementById('affichage').innerHTML = "Score:" + score;
                }, 1000);
                auto.innerHTML = "Autoclick> On";
                document.getElementById('buyAuto').innerHTML = "";
            }
        
    };
    auto.addEventListener("click", function() {
        buyAutoclick();
    });

});

//ETOILES GENEREES ALEATOIREMENT
function freshDot(){
  this.obj = document.createElement("etoile");
  this.obj.classList.add("stars");
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

//FUSEE CANVAS ET ANIMATION
var c = document.getElementById("mon_canvas");
var ctx = c.getContext("2d");
var x = 90;
var rip = 30;
var shakeDuration = 800;
var shakeStartTime = -1;

function preShake() {
if (shakeStartTime ==-1) return;
var dt = Date.now()-shakeStartTime;
if (dt>shakeDuration) {
  shakeStartTime = -1; 
  return;
}
var easingCoef = dt / shakeDuration;
var easing = Math.pow(easingCoef-1,3) +1;
ctx.save();  
var dx = easing*(Math.cos(dt*0.1 ) + Math.cos( dt *0.3115))*15;
var dy = easing*(Math.sin(dt*0.05) + Math.sin(dt*0.057113))*15;
ctx.translate(dx, dy);  
}
function postShake() {
  if (shakeStartTime ==-1) return;
  ctx.restore();
}
function startShake() {
shakeStartTime=Date.now();
}
function drawThings() {  
  //ailes
  ctx.beginPath();
      ctx.fillStyle = "darkslategrey";
      ctx.bezierCurveTo(250-rip, 480, 380-rip, 430, 400-rip, 300);
      ctx.bezierCurveTo(400-rip, 300, 380-rip, 160, 250-rip, 120);
      ctx.fill();
  ctx.closePath();
  //flamme
  ctx.beginPath();
      ctx.fillStyle = "orange";
      ctx.bezierCurveTo(250-rip, 300, 150-rip, 430, 70-rip, 300);
      ctx.bezierCurveTo(70-rip, 300, 150-rip, 160, 250-rip, 300);
      ctx.fill();
  ctx.closePath();
  //corps
  ctx.beginPath();
      ctx.fillStyle = "lightgrey";
      ctx.bezierCurveTo(150+x-rip, 350, 380+x-rip, 430, 500+x-rip, 300);
      ctx.lineTo(500+x-rip, 300);
      ctx.bezierCurveTo(500+x-rip, 300, 380+x-rip, 160, 150+x-rip, 250);
      ctx.lineTo(150+x-rip, 350);
      ctx.fill();
  ctx.closePath();
  //bout
  ctx.beginPath();
      ctx.fillStyle = "indianred";
      ctx.bezierCurveTo(450+x-rip, 340, 485+x-rip, 320, 500+x-rip, 300);
      ctx.lineTo(500+x-rip, 300);
      ctx.bezierCurveTo(500+x-rip, 300, 485+x-rip, 280, 450+x-rip, 260);
      ctx.lineTo(450+x-rip, 340);
      ctx.fill();
  ctx.closePath();
  //reacteur
  ctx.beginPath();
      ctx.moveTo(240-rip, 350);
      ctx.lineTo(240-rip, 250);
      ctx.bezierCurveTo(240-rip, 255, 250-rip, 240, 190-rip, 230);
      ctx.lineTo(190-rip,365);
      ctx.bezierCurveTo(190-rip, 365, 250-rip, 360, 240-rip, 345);
      ctx.fill();
  ctx.closePath();
  //aile de face
  ctx.beginPath();
      ctx.strokeStyle = "darkslategrey";
      ctx.lineWidth = 15;
      ctx.lineCap = "round";
      ctx.moveTo(250-rip, 300);
      ctx.lineTo(370-rip, 300);
      ctx.fill();
      ctx.stroke();
  ctx.closePath();
  //hublot
  ctx.beginPath();
      ctx.fillStyle = "cornsilk";
      ctx.lineWidth = 12;
      ctx.arc(450-rip, 300, 35, 0, 2 * Math.PI);
      ctx.fill();
      ctx.stroke();
  ctx.closePath();
}

drawThings();

function animate() {
requestAnimationFrame(animate);  // keep animation alive
ctx.clearRect(0,0,c.width, c.height);    // erase
preShake();
drawThings();
postShake();
}
startShake();
setInterval(startShake,2500);
animate();
