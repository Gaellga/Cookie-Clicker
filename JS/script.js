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

