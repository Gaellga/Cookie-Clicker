var score = 0;
var prix = 50;
var multiplicateur=0;
var currenttime = new Date();
var currentsec = currenttime.getSeconds();
var prixAuto = 5;
var click = 1;
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
document.getElementById('clic').addEventListener('click', function depclick(){
    clic();
});
document.getElementById('clic').removeEventListener('click', function depclick(){
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
        if (alreadyPlayed === false && score >= prixAuto) {
            score = score - prixAuto;
            setInterval(function(){
                if (score >= 2) {
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
document.getElementById("bonus").addEventListener("click", function() {
		if(score > 1){
			var sec = 10;
			score = score - 1;
			var cli = click
			console.log(click +"dep");
			document.getElementById('clic').addEventListener('click', function click(){		
			
			clic();
			
			});
			var interval = setInterval(function() {
				sec--;
				document.getElementById("bonus").className = "nobonus";
				document.getElementById("bonus").innerHTML = sec;
				
				console.log(click +"bcl");
				if(sec === 0) {
					clearInterval(interval);
					document.getElementById("bonus").innerHTML = "Get Bonus!";
      				document.getElementById("bonus").className = "bonus";
      				console.log(click +"bcl");
				}
				console.log(click + " fin");
			}, 1000);
		}		
		else {
     	alert("Your score isn't high enough!");
    	}
    	document.getElementById('clic').removeEventListener('click', function click(){
			});   
});
document.getElementById("bonus").addEventListener("click", function() {
});