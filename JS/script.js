
var score=49;
var prix=50;
var multiplicateur=0;


  document.getElementById("clic").addEventListener("click", function() {
    score++;
    score+=multiplicateur
document.getElementById("affichage").innerHTML=score;
  });

document.getElementById("multiplier").addEventListener("click", function augmenterMultiplicateur() {

if (score>=50) {
multiplicateur++;
score = score -(prix * multiplicateur);
document.getElementById("affichage-prix").innerHTML= "-50";
}
else {
  alert("pas assez");
}
  });
