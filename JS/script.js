var score = 0;
 
document.getElementById('clic').addEventListener('click', function (){
score =score+1;
document.getElementById('affichage').innerHTML = "Score:" + score;
 });

setInterval(function(){
        if (score >= 20) {
            score++;
        };
    document.getElementById('affichage').innerHTML = "Score:" + score;
}, 1000);
