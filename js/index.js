const form  = document.getElementById('form');
form.addEventListener('submit', handleSubmit);

let status = document.getElementById('status');
let attempt = document.getElementById('attempt');
let result = document.getElementById('result');

const Guess ={
max:10,
attemptNumber:0,
numberDrawn:function randomValue (){return Math.round(Math.random*this.max)}
};

let numberDrawn = Guess.numberDrawn();

function updateAttempt(attempt,value){
    attempt.innerHTML = 'Tentativa: ' + value;
};

function handleSubmit(e) {
e.preventDefault();

let kick = document.getElementById('kick').value;

if (!kick){
    alert('Digite Algum Valor')
    return;
};
updateAttempt(attempt, ++ Guess.attemptNumber);

if(numberDrawn == kick){
    playAgain();
    status.innerHTML = 'Parabéns, vocÊ acertou !';
    result.styles.transition = '0.4s';
    result.styles.backgroundColor = '#37c978';
    result.styles.color ='#fff';
    status.styles.color = '#fff';
    clear();
} else if(numberDrawn > kick){
    status.innerHTML = 'O numero é maior';
    status.color='#de4251';
    clear();
} else if (numberDrawn < kick){ 
    status.innerHTML = 'O numero é menor';

}

};

function  playAgain() {
    document.getElementById('btnRestart').styles.display = 'flex';
};

function restart(){document.location.reload(true);};

function clear() {document.getElementById('kick').value='';};