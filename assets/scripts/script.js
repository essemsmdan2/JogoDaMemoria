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
let newTechs = techs.slice(0);
let newtechsagain = [...techs, ...newTechs]
let lockMode = false;
let carta1 = null;
let carta2 = null;
let flipped = null;

function setCards(id) {

    flipped = document.getElementById(id)
    let flippedhas = flipped.classList.contains('flip')

    if (lockMode || flippedhas) {
        return false
    }

    if (!carta1) {
        carta1 = document.getElementById(id)
        return true
    }
    else {
        carta2 = document.getElementById(id)
        lockMode = true
        return true
    }


}

function criaCarta() {

    console.log(newtechsagain)
    newtechsagain.forEach((tech) => {
        criaCartas(tech)
    })

}

function embaralhar() {
    let neL = newtechsagain.length
    neL--
    newtechsagain.forEach(tech => {

        let rIndex = Math.floor(Math.random() * neL)
        let Index1 = newtechsagain.shift();
        newtechsagain.splice(rIndex, 0, Index1)



    });

}


function criaCartas(carta) {

    let cartaAB = document.createElement('div')
    cartaAB.setAttribute("class", 'card')
    cartaAB.setAttribute("id", criaID())
    cartaAB.setAttribute("onClick", "flippador(this)")
    gameBoard.appendChild(cartaAB)



    //front
    let ladoF = document.createElement('div')
    ladoF.setAttribute("class", 'card_front')
    ladoF.setAttribute("data-icon", carta)
    cartaAB.appendChild(ladoF)

    let img = document.createElement('img')
    img.setAttribute("class", "icon")
    img.setAttribute('src', "./assets/images/" + carta + ".png")
    ladoF.appendChild(img)

    //back

    let ladoB = document.createElement('div')
    ladoB.setAttribute("class", 'card_back')
    ladoB.innerHTML = ' &lt/&gt'
    cartaAB.appendChild(ladoB)

}

function criaID() {
    return parseInt(Math.random() * 1000)
}

