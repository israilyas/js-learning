// const randomNumber =Math.round(Math.random()*100+1)
let randomNumber = parseInt(Math.random() * 100 + 1)
// console.log(randomNumber);

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remainingSlot = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let preGuess = [] // array of numbers user guessed before
let numGuess = 0
let playGame = true

if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault()
        const guess = parseInt(userInput.value)
        console.log(guess);

        validateGuess(guess)
    })
}

function validateGuess(guess) {
    //validation check -> if value is between 1 and 100 and check datatype
    if (guess < 1) {
        alert("Please enter a valid number more than 1")
    }
    else if (guess > 100) {
        alert("Please enter a valid number less than 100")
    }
    else if (isNaN(guess) || guess === '') {
        alert("Please enter a valid number")
    }
    else {
        preGuess.push(guess)
        console.log(preGuess);
        if (numGuess > 10) {
            displayGuess(guess)
            displayMessage(`Game Over. Random number was ${randomNumber}`)
            endGame()
        }
        else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess) {
    //check if value equal to random number
    if (guess === randomNumber) {
        displayMessage('You guesses it right.')
        endGame()
    }
    else if (guess > randomNumber) {
        displayMessage('You guessed a greater number.')
    }
    else {
        displayMessage('You guessed a lower number.')
    }
}

function displayGuess(guess) {
    //clean values for next guess
    // update preGuess array and Numm guess
    userInput.value = ''
    guessSlot.innerHTML += `${guess}, `
    numGuess ++
    remainingSlot.innerHTML = `${10-numGuess}`
}

function displayMessage(message) {
    //dom manipulation
    lowOrHi.innerHTML  = `<h2>${message}</h2>`
}

function endGame() {
    userInput.value='';
    userInput.setAttribute('disables','')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame" >Start new Game</h2>`
    startOver.appendChild(p)
    playGame = false
    newGame()
}

function newGame() {
    const newGame = document.querySelector('#newGame')
    newGame.addEventListener('click', function (e) {
        randomNumber = parseInt(Math.random() * 100 + 1)
        preGuess = []
        numGuess = 0
        guessSlot.innerHTML = ''
        remainingSlot.innerHTML = `${10-numGuess}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame = true
    })
}