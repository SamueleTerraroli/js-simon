const randomNumbersArray=[];
const randomNumbersList = document.getElementById('random-array-numbers');
const countdownCounter = document.getElementById('countdown');
const playerAnswer = document.getElementById('form-answer');
const formContainer = document.getElementById('answer');




for(let i=1; i<=5; i++){
    randomNumbersArray.push(getRandomNumber(1,50));
}

randomNumbersList.innerText = `[${randomNumbersArray.join(' , ')}]`;


let answerArray=[];
playerAnswer.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const resultAnswer = document.getElementById('result-answer');
    const resultContainer = document.getElementById('result');
    const inputs = document.querySelectorAll('#input-group input');
    const answerArray = Array.from(inputs).map(input => Number(input.value)); // Usa Number per convertire l'input in numeri

    let correctNumbers = [];
    for (let i = 0; i < answerArray.length; i++) {
        if (answerArray[i] === randomNumbersArray[i]) {
            correctNumbers.push(answerArray[i]);
        }
    } 
    if (correctNumbers.length === randomNumbersArray.length) {
        resultAnswer.innerText = 'Complimenti! Hai indovinato tutti i numeri';
        resultAnswer.classList.add('text-success');
    } else { 
        resultAnswer.innerText = `Non hai indovinato tutti i numeri. Numeri corretti: ${correctNumbers.join(', ')}`;
        resultAnswer.classList.add('text-danger');
    }

    resultContainer.classList.remove('d-none');
    formContainer.classList.add('d-none');
});





function startCountdown() {
    let countdown = 9;
    
    const counterBox = document.getElementById('counter-box')
    const interval = setInterval(() => {
         countdownCounter.innerText = countdown;
         countdown--;
          if (countdown < 0) {
             clearInterval(interval);
             counterBox.classList.add('d-none')
             formContainer.classList.remove('d-none')

            }
    }, 1000);
}
startCountdown();

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

function compareArrays(array1, array2) {
    for (let i = 0; i < array1.length; i++) {
        if (array1[i] != array2[i]) return false;
    }
    return true;
}
