let randomNumber=parseInt(Math.random()*100+1);


const submit=document.querySelector('#subt');
const userInput=document.querySelector('#guessField')
const guesslot=document.querySelector('.guesses')
const result=document.querySelector('.lastResult')
const lowOrHi=document.querySelector('.lowOrHi')
const startover=document.querySelector('.resultParas')

const p=document.createElement('p');
let prevGuess=[];
let numGuess=1;
let playGame=true;

if(playGame){
  submit.addEventListener('click',function (e){
    e.preventDefault(); // To prevent the number to directly go to the server
    const guess=parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);

  })
}

function validateGuess(guess){

  if(isNaN(guess)){
    alert("Please enter a valid number.");
  }else if(guess<1){
    alert("Please enter a number greater than 1.");
  }else if(guess>100){
    alert("Please enter a number less than 100.");
  }else{
    prevGuess.push(guess);
    if(numGuess===11){
      displayGuess(guess);
      displayMessage(`Game Over. Random Number was ${randomNumber}`)
      endgame();

    }else{
      displayGuess(guess);
      checkGuess(guess);

    }
  }

}

function checkGuess(guess){
  if(guess===randomNumber){
    displayMessage(`You guessed it right.YOU HAVE WON THE WORLD.`);
    endgame();
  }else if(guess<randomNumber){
    displayMessage(`Number is TOO LOW Dumbass`);

  }else if(guess>randomNumber){
    displayMessage(`Number is TOO HIGH Dumbass`);
  }

}

function displayGuess(guess){
  userInput.value='' //cleaning the user input value after the previous value.
  guesslot.innerHTML+=`${guess}  ` //Increasing the user inputs in the array.
  numGuess++;
  result.innerHTML=`${11-numGuess}`;

}

function displayMessage(message){
  lowOrHi.innerHTML=`<h2>${message}</h2>`


}

function endgame(guess){
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startover.appendChild(p);
  playGame = false;
  newGame();

}

function newGame(guess){
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guesslot.innerHTML = '';
    result.innerHTML = `${11 - numGuess} `;
    userInput.removeAttribute('disabled');
    startover.removeChild(p);

    playGame = true;
  });  
}
