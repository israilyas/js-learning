// const randomNumber =Math.round(Math.random()*100+1)
let randomNumber = parseInt(Math.random() * 100 + 1)

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remainingSlot = document.querySelector('.lastResult')
const popup = document.querySelector('#popup')
const popupClose = document.querySelector('#popupClose')
const msgHead = document.querySelector('#msgHead')
const msg = document.querySelector('#msg')
const icon = document.querySelector('.icon')
const  startOver = document.querySelector('.resultParas')



const p = document.createElement('p')

let preGuess = [] // array of numbers user guessed before
let numGuess = 0
let playGame = true

if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault()
        const guess = parseInt(userInput.value)
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
        if (numGuess === 10) {
            displayGuess(guess)
            displayMessage('Game Over',`Random number was ${randomNumber}`)
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
        displayMessage('Congratulations!','You guesses it right.')
        icon.innerHTML = `<ion-icon class="check-icon" name="checkmark-done-circle-outline"></ion-icon>`
        endGame()
    }
    else if (guess > randomNumber) {
        displayMessage('Oops!','You guessed a greater number.')
        icon.innerHTML = `<ion-icon class="cross-icon" name="close-circle-outline"></ion-icon>`
    }
    else {
        displayMessage('Oops!','You guessed a lower number.')
        icon.innerHTML = `<ion-icon class="cross-icon" name="close-circle-outline"></ion-icon>`
    }
}

function displayGuess(guess) {
    //clean values for next guess
    // update preGuess array and NumGuess
    userInput.value = ''
    guessSlot.innerHTML += `${guess}, `
    numGuess  ++
    const remaingGuess = 10 - numGuess
    remainingSlot.innerHTML = `${remaingGuess}`
}

function displayMessage(heading,message) {
    //dom manipulation

    msgHead.innerHTML  = `<h2>${heading}</h2>`
    msg.innerHTML  = `<p>${message}</p>`
    popup.classList.add('open-popup')

    popupClose.addEventListener('click', function 
        (e) {
            // e.defaultPrevented()
            popup.classList.remove('open-popup')
        })
}

function endGame() {
    userInput.value='';
    userInput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame" class="startNew">Start new Game</h2>`
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