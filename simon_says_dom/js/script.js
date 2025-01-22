const numbersList = document.getElementById('numbers-list')
const numArray = []

function numRandom(min,max){
    Math.floor(Math.random() * max) + min;
}

for( let i = 0; numArray.length <= 5; i++ ){

    let numRandomico = numRandom(1, 50)

    console.log( `il tuo numero random è: ${numRandomico}`)

    if( !(numArray.includes( numRandomico ))){

        numArray.push( numRandomico )
    }

    console.log( numArray )
}