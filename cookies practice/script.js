let username = document.querySelector('#username')
let email = document.querySelector('#email')
let submit= document.querySelector('#submit')
let content= document.querySelector('#content')
let form= document.querySelector('#form')

// ++++++ Managing and Checking Cookies

function checkcookie() {
    let username = getCookie('username');
    let email = getCookie('email');

    if (username && email) {
        form.classList.add('formhide');
        toDoList.classList.remove('toDolistHide');
        toDoList.classList.add('toDolistShow');
    } else {
        form.classList.remove('formhide');
        toDoList.classList.add('toDolistHide');
    }
}

function setCookies(name, value, hours) {
    let date  = new Date()
    date.setTime(date.getTime()+hours*60*60*1000)
    let expires = `expires=${date.toUTCString()}`
    document.cookie = `${name}=${value}; ${expires}`
}

function getCookies(name) {
    let nameEQ = `${name}=`;
    let cookieArr = document.cookie.split(';')
    for (let i = 0; i < cookieArr.length; i++) {
        let c = cookieArr[i].trim();
        if(c.indexOf(nameEQ)===0) return c.substring(nameEQ.length,c.length)
    }
    return null
}


// ++++++++  SUBMIT EVENTLISTENER  +++++++++++++

submit.addEventListener('click', function(e){
    e.preventDefault();
    let usernameValue = username.value
    let emailValue = email.value

    setCookies("name",usernameValue,5)
    setCookies("email",emailValue,5)
    let cookieArr = document.cookie.split(';')
    console.log(cookieArr);
    
    console.log(document.cookie);
    
})