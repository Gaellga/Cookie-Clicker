<<<<<<< HEAD
var click=0;
var score = 201;

setInterval(function(){
    if (score >= 200) {
        click++;
=======
var score = 0;
 
document.getElementById('clic').addEventListener('click', function (){
score =score+1;
document.getElementById('affichage').innerHTML = "Score:" + score;

 });


setInterval(function(){
    if (score >= 200) {
        score++;
>>>>>>> a70f5302753484430948ce6b37425c647fcfdefe
    };
    console.log(click);
}, 1000);

console.log(click);

<<<<<<< HEAD



=======
>>>>>>> a70f5302753484430948ce6b37425c647fcfdefe
