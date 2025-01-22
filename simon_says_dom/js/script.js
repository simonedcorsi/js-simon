const numbersList = document.getElementById('numbers-list')
const numArray = []

function numRandom(min,max){
   return Math.floor(Math.random() * max) + min;
}

for( let i = 0; numArray.length < 5; i++ ){

    let numRandomico = numRandom(1, 50)

    console.log( `il tuo numero random è: ${numRandomico}`)

    if( !(numArray.includes( numRandomico ))){

        numArray.push( numRandomico )
    }

    console.log( numArray )
}

for( let i = 0; i < numArray.length; i++ ){

    numbersList.innerHTML += `<li>${ numArray[i] }</li>`
}

// Funzione che fa sparire numeri

let counter = 3

const countdown = document.getElementById('countdown')
const answersForm = document.getElementById('answers-form')
const instructions = document.getElementById('instructions')

const timer = setInterval( function(){
    countdown.innerHTML = counter--

    if( counter < 0 ){
        clearInterval( timer )
        numbersList.classList.add('d-none')
        instructions.classList.add('d-none')
        answersForm.classList.remove('d-none')
    }

}, 1000 )

const btn = document.querySelector('.btn-primary')
const inputs = document.querySelectorAll('.form-control')
const numeriUtenteCorretti = []
const message = document.getElementById('message')



console.log( inputs )

btn.addEventListener('click', function(event){
    event.preventDefault()
    for( let i = 0; i < inputs.length; i++ ){
       

        if( numArray.includes( parseInt(inputs[i].value ))){
       
            numeriUtenteCorretti.push( inputs[i].value )
        }

        console.log(numeriUtenteCorretti, inputs[i].value, numArray.includes( parseInt(inputs[i].value)))
    }

    message.innerHTML = `Complimenti hai indovinato: ${ numeriUtenteCorretti.length }, e sono: ${ numeriUtenteCorretti.join("-")}`

} )