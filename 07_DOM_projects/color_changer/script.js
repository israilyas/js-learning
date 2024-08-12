const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

buttons.forEach( function (button) {
    button.addEventListener('click', function (e) {
        const bgColor = e.target.id
        body.style.backgroundColor = bgColor
        if (bgColor == "black") {
            body.style.color = 'white'
        }
        else if (bgColor  == "blue") {
            body.style.color = 'white'
        }
        else{
            body.style.color = 'black'
        }
    } ) 
} )
