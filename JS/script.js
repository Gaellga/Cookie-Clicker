var score = 0;
var prix = 50;
var multiplicateur=0;
var currenttime = new Date();
var currentsec = currenttime.getSeconds();
var bonus = 2;
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
};
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
           multiplicateur++;
           score = score -prix;
           prix = prix*2;
           }
          var x = multiplicateur+1;
          document.getElementById("multiplier").innerHTML= "Multiplier x "+x;
           document.getElementById("nextMulti").innerHTML= "Buy: " + prix + " cookies";
          document.getElementById('affichage').innerHTML = "Score:" + score;

});
function buyAutoclick() {
 if (alreadyPlayed=== false && score-prixAuto<0){
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
        };
    }
};
document.getElementById("bonus").addEventListener("click", function() {
		if(score > 1){
			var sec = 10;
			score--;
			var interval = setInterval(function() {
				sec--;			
				document.getElementById('affichage').innerHTML = "Score:" + score;
				document.getElementById("bonus").className = "nobonus";
				document.getElementById("bonus").innerHTML = sec;
				if(sec === 0) {
					clearInterval(interval);
					console.log("ouou");
					document.getElementById("bonus").innerHTML = "Get Bonus!";
      				document.getElementById("bonus").className = "bonus";
				}
			}, 1000);
		}		
		else {
     	alert("Your score isn't high enough!");
    	} 	   
});
   

