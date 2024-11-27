const randomNumbersList = document.getElementById('random-array-numbers');
const countdownCounter = document.getElementById('countdown');
const playerAnswer = document.getElementById('form-answer');
const formContainer = document.getElementById('answer');
const resultAnswer = document.getElementById('result-answer');
const resultContainer = document.getElementById('result');
const inputs = document.querySelectorAll('#input-group input');

const min = 1;
const max = 50;
const totalNumbers = 5;
const time = 10;

const getDifferentRandomNumber = (min, max, tot) => {
    const numbers = [];
    //ad ogni ciclo estraggo un numero e lo pushon ell'array solo se non è già presente
    // il ciclo termina quando la lunghezza dell'array è uguale a tot
    while(numbers.length < tot){
        const randomNumber = Math.floor(Math.random() * (max - min + 1)+min);
        if(!numbers.includes(randomNumber)) numbers.push(randomNumber)
    }

    return numbers;
}

const randomNumbersArray = getDifferentRandomNumber(min ,max, totalNumbers );

randomNumbersList.innerText = `[${randomNumbersArray.join(' , ')}]`;

playerAnswer.addEventListener('submit', (event) => {
    event.preventDefault();
    
    //const answerArray = Array.from(inputs).map(input => Number(input.value)); // Usa Number per convertire l'input in numeri
    const answerArray=[]
    for (let i=0; i < inputs.length; i++){
        answerArray.push(inputs[i].value)
    }

    let correctNumbers = [];
    for (let i = 0; i < answerArray.length; i++) {
        if (answerArray[i].includes(randomNumbersArray[i])) {
            correctNumbers.push(answerArray[i]);
        }
    } 
    if (correctNumbers.includes(randomNumbersArray)) {
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

function compareArrays(array1, array2) {
    for (let i = 0; i < array1.length; i++) {
        if (array1[i] != array2[i]) return false;
    }
    return true;
}
