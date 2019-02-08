


  var score =0;
  var prix = 50;
  var multiplicateur=0;

  document.getElementById('clic').addEventListener('click', function (){
      score++;
      score+=multiplicateur;
  document.getElementById('affichage').innerHTML = "Score:" + score;
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
          };
  }

  document.getElementById("multiplier").addEventListener("click", function augmenterMultiplicateur() {

      if (score>=50) {
      multiplicateur++;
      score = score -(prix * multiplicateur);
      var x = multiplicateur+1
      document.getElementById("multiplier").innerHTML= "Multiplier x "+x;
      }
      else {
        alert("pas assez");
      }
  });

var score = 0;
 
document.getElementById('clic').addEventListener('click', function (){
score =score+1;
document.getElementById('affichage').innerHTML = "Score:" + score;

 });


setInterval(function(){
    if (score >= 200) {
        score++;
    };
    console.log(click);
}, 1000);

console.log(click);


