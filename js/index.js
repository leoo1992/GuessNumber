const form = document.getElementById('form');
form.addEventListener('submit', handleSubmit);

let status = document.getElementById('status');
let attempt = document.getElementById('attempt');
let result = document.getElementById('result');

const Guess ={
max:10,
attemptsNumber:0,
numberDrawn:function randomValue (){
    return Math.round(Math.random() * this.max)}
};

let numberDrawn = Guess.numberDrawn();

function updateAttempt(attempt,value){
    attempt.innerHTML = 'Tentativa: ' + value;
};

function handleSubmit(e) {
e.preventDefault();

let kick = document.getElementById('kick').value;

if (!kick){
    alert('Digite Algum Valor !')
    return;
};

updateAttempt(attempt, ++Guess.attemptsNumber);

if(numberDrawn == kick){
    playAgain();
    status.innerHTML = 'Parabéns, vocÊ acertou !';
    clear();
} else if(numberDrawn > kick){
    status.innerHTML = 'O numero é maior';
    clear();
} else if (numberDrawn < kick){ 
    status.innerHTML = 'O numero é menor';
    clear();
}
}

function  playAgain() {
    document.getElementById('btnRestart').style.display = 'flex';
}

function restart(){
    document.location.reload(true);
}

function clear() {
    document.getElementById('kick').value='';
}