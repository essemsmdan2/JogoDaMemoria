startGame()


function startGame() {


    // embaralhar()

    // criaCarta()

    embaralhar()
    criaCarta()



}


function flippador(esse) {

    if (setCards(esse.id)) {

        esse.classList.add('flip')
        checkCards()
    }

}

function checkCards() {
    let icon1 = carta1.firstElementChild.dataset.icon
    let icon2 = carta2.firstElementChild.dataset.icon
    console.log(icon1, icon2)
    if (icon1 == icon2) {
        console.log('igual')
        carta1 = null
        carta2 = null
        lockMode = false


    } else {
        console.log('diferente')
        clearCards()


    }
}

function clearCards() {
    setTimeout(() => {

        carta1.classList.remove('flip')
        carta2.classList.remove('flip')
        carta1 = null
        carta2 = null
        lockMode = false
    }, 500)

}
