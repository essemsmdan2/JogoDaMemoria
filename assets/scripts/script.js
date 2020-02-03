let gameBoard = document.getElementById('gameBoard')
let techs = [
    'bootstrap',
    'css',
    'electron',
    'firebase',
    'html',
    'javascript',
    'jquery', 'mongo', 'node', 'react'

]
let lockMode = null
let virada1 = null
let virada2 = null

function verificaCards() {

    let carta1 = document.getElementsByClassName('flip')[0]
    let carta2 = document.getElementsByClassName('flip')[1]
    carta1 = carta1.firstChild
    carta2 = carta2.firstChild


    if (!virada1 || !lockMode) {
        virada1 = carta1
    }
    else {
        return false
    }
    if (!virada2 || !lockMode) {
        virada2 = carta2
        lockMode = true
    }
    else {
        false
    }


}






function criaCarta() {

    techs.forEach((tech) => {
        criaCartas(tech)
    })

}



function embaralhar() {




    techs.forEach(tech => {

        let rIndex = Math.floor(Math.random() * 10)
        let Index1 = techs.shift();
        techs.splice(rIndex, 0, Index1)



    });



}


function criaCartas(carta) {

    let cartaAB = document.createElement('div')
    cartaAB.setAttribute("class", 'card')
    cartaAB.setAttribute("onClick", "flippador(this)")
    gameBoard.appendChild(cartaAB)



    //front
    let ladoF = document.createElement('div')
    ladoF.setAttribute("class", 'card_front')
    ladoF.setAttribute("id", criaID())
    ladoF.setAttribute("data-icon", carta)
    cartaAB.appendChild(ladoF)

    let img = document.createElement('img')
    img.setAttribute("class", "icon")
    img.setAttribute('src', "/assets/images/" + carta + ".png")
    ladoF.appendChild(img)

    //back

    let ladoB = document.createElement('div')
    ladoB.setAttribute("class", 'card_back')
    ladoB.innerHTML = ' &lt/&gt'
    cartaAB.appendChild(ladoB)

}

function criaID() {
    return Math.random()
}

function flippador(esse) {
    esse.classList.add('flip')
}
