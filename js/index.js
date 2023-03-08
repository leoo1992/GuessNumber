const form  = document.getElementById('form');
form.addEventListener('submit', handleSubmit);

let bar = document.getElementById('bar');
let attempt = document.getElementById('attempt');
let result = document.getElementById('result');

const Guess ={
max:10,
attemptNumber:0,
numberDraw:function randomValue (){return Math.round(Math.random*this.max)}
};

let numberDraw = Guess.numberDraw();
function updateAttempt(attempt,value){attempt.innerHTML = 'Tentativa'+value}

function handleSubmit(e) {
e.preventDefault();

let kick = document.getElementById('kick').value;

if (!kick){
    alert('Digite Algum Valor')
    return;
};
updateAttempt(attempt, ++ Guess.attemptNumber);

if(numberDraw == kick){
    playAgain();
    bar.innerHTML = 'Parabéns, vocÊ acertou !';
    result.styles.transition = '0.4s';
    result.styles.backgroundColor = '#37c978';
    result.styles.color='#fff';
    bar.styles.color = '#fff';
    clear();
} else if(numberDraw>kick){
    bar.innerHTML = 'O numero é maior';
    bar.color='#de4251';
    clear();
} else if (numberDraw <kick){ 
    bar.innerHTML = 'O numero é menor';

}

};

function  playAgain() {
    document.getElementById('btnRestart').styles.display = 'flex';
};

function restart(){document.location.reload(true);};

function clear() {document.getElementById('kick').value='';};