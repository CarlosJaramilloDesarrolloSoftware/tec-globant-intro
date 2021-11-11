var globalVariable = 5
let localVariable = true
const name = "Carlos"

// Tipos de datos
let integer = 5
let decimal = 5.7
let string = "CESDE"
let bool = true
let box = [1, 3, 6]

const mainNews = document.querySelector("#main-news");
if(mainNews == null){
    console.log('Element not found')
}else{
    console.log('Element was found')
}
console.log(mainNews)

const pMainNews = document.querySelector("#main-news p");
pMainNews.textContent = "Contenido del párrafo desde JS"

console.log(Math.floor(Math.random()*100))

const titles = document.querySelectorAll("h1")
console.log(titles)

for (let i = 0; i < 10; i++) {
    console.log(i);
}

alert('You are hacked!')
let firstName = prompt('¿What is your name?')
alert('Hi ' + firstName)

let terms = confirm('¿Aceptas los términos?')
console.log(terms)

while(terms == false){
    terms = confirm('ES EN SERIO ¿Aceptas los términos?')
}