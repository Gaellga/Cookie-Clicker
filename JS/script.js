var score = 0;
var prix = 50;
var multiplicateur=0;
var currenttime = new Date();
var currentsec = currenttime.getSeconds();

//clic cookie
document.getElementById('clic').addEventListener('click', function  click(){
    score++;
    score+=multiplicateur;
    document.getElementById('affichage').innerHTML = "Score:" + score;
 });

 //multiplicateur
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
//autoclick
var alreadyPlayed = false;

function buyAutoclick() {
    if (alreadyPlayed=== false && score >= 10) {
        score = score - 10;
        setInterval(function(){
            if (score >= 20) {
                score++;
            };
            alreadyPlayed = true;
            score != score - 10;    
            document.getElementById('affichage').innerHTML = "Score:" + score;
        }, 1000);
        document.getElementById('autoclic').innerHTML = "Autoclick On";
    };
};
document.getElementById("bonus").addEventListener("click", function() {
		if(score > 1){
			var sec = 10;
			score--;
			var interval = setInterval(function() {
			sec--;
			score * 2;
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
