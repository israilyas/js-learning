/*

NodeList and HTML Collection are not pure array

// ++++++ CONSOLE COMMAND ANY RETURN VALUES  ++++++

document.getElementById('title')
<h1 id="title" class="heading" style="background-color: green;">DOM learning on Chai and Code</h1>  ==> Return expression

document.getElementById('title').id
'title'  ==> return Value

document.getElementById('title').class
undefined  ==> return value

document.getElementById('title').className
'heading'  ==> return Value

document.getElementById('title').getAttribute('id')
'title' ==> return Value

document.getElementById('title').getAttribute('class')
'heading' ==> return Value

document.getElementById('title').setAttribute('class', 'test')
undefined  ==> this will always overwrite the previous attribute value and set new value

document.getElementById('title').setAttribute('class', 'test heading')
if you want both classes will be available so write in this form

++++++ STYLE ATTRIBUTE +++++++++
document.getElementById('title').style.backgroundColor = "red"
'red' ==> set red bg color to title

document.getElementById('title').style.padding = "15px"
'15px'

document.getElementById('title').style.borderRadius = "15px"
'15px'

+++++++ GET ELement By ClassName ++++++++
document.getElementsByClassName('heading')
HTMLCollection [h1#title.heading, title: h1#title.heading]

++++++++++++++++++++++++
( innerText, textContent, innerHTML )

title.innerHTML ==> return complete html including html elements tags
'DOM learning on Chai and Code <span style="display: none;">text content</span>'

title.innerText ==> show only visible content
'DOM learning on Chai and Code'

title.textContent ==> also show the content that is hidden
'DOM learning on Chai and Code text content'


const heading = document.getElementById('title').style.backgroundColor = "green"

console.log(heading);

++++++++++++++++ QuerySelector ++++++++++++++++++

document.querySelector('h1') // gives first h1
document.querySelector('h2') // gives first h2

document.querySelector('#title')
<h1 id=​"title" class=​"heading" style=​"background-color:​ green;​ padding:​ 15px;​ border-radius:​ 15px;​">​"DOM learning on Chai and Code "<span style=​"display:​ none;​">​text content​</span>​</h1>​

document.querySelector('.heading')
<h1 id=​"title" class=​"heading" style=​"background-color:​ green;​ padding:​ 15px;​ border-radius:​ 15px;​">​…​</h1>​

document.querySelector('input[type="password"]')
<input type=​"password">​

++++++++++++ Querry Selector  ALl ++++++++++++

document.querySelectorAll('li')
NodeList(3) [li, li, li]0: li1: li2: lilength: 3[[Prototype]]: NodeList


myH1
NodeList [h1#title.heading]
0: h1#title.heading
length: 1
[[Prototype]]
: 
NodeList

*/
// document.getElementById('title').style.backgroundColor = "green"
// document.getElementById('title').style .padding = "15px"
// document.getElementById('title').style.borderRadius = "15px"


// const myUl = document.querySelector('ul')

// const turnGreen = myUl.querySelector('li')
// turnGreen.style.backgroundColor = 'green'
// turnGreen.style.padding = '10px'

// console.log(turnGreen.innerText);

// const templiList = document.querySelectorAll('li')
// templiList.forEach( function(num) {
//     num.style.backgroundColor = 'green'
//     num.style.padding = '10px'
// })

// templiList[0].style.backgroundColor = 'red'
// templiList[1].style.backgroundColor = 'blue'
// templiList[2].style.backgroundColor = 'green'

// const myH1 = document.querySelectorAll('h1')

// selecting by className

const myLi = document.getElementsByClassName('list-item');
// it will return an html collectionn
//  conver html collection to array
const array_myLi = Array.from(myLi)

array_myLi.forEach( function (li) {
    li.style.backgroundColor = 'orange';
    li.style.color = 'black'
})
array_myLi.map( function (li) {
    li.innerHTML="hello"
})