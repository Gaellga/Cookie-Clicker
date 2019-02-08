var score = 0;
var prix = 50;
var multiplicateur=0;
 
document.getElementById('clic').addEventListener('click', function (){
    score++;
    score+=multiplicateur;
document.getElementById('affichage').innerHTML = "Score:" + score;
 });

  document.getElementById("multiplier").addEventListener("click", function augmenterMultiplicateur() {

      if (score>=50) {
      multiplicateur++;
      score = score -(prix * multiplicateur);
      var x = multiplicateur+1
      document.getElementById("multiplier").innerHTML= "Multiplier x "+x;
      }
      else {
        alert("Your score isn't high enough!");
      }
  });

  function buyAutoclick() {
    if (score >= 10) {
            score = score - 10;
            setInterval(function(){
                if (score >= 20) {
                    score++;
                };
                document.getElementById('affichage').innerHTML = "Score:" + score;
            }, 1000);
            document.getElementById('autoclic').innerHTML = "AutoClick On";
        };
    }