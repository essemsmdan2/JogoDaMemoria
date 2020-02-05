startGame()


function startGame() {
    embaralhar()
    criaCarta()

}

let estimado = document.getElementsByClassName('contagem')[1]
estimado.innerHTML = 'ESTIMADO = ' + newtechsagain.length / 2
function flippador(esse) {

    if (setCards(esse.id)) {

        esse.classList.add('flip')
        checkCards()

        if (checkGameOver()) {
            showGameOver()
        }
    }

}
function countOne() {
    count++
    console.log('contagem: ' + count)
    let contagem = document.getElementsByClassName('contagem')[0]
    contagem.innerHTML = 'MOVIMENTOS = ' + count
}

function checkCards() {

    if (!carta1 || !carta2) {
        return false
    }
    let icon1 = carta1.firstElementChild.dataset.icon
    let icon2 = carta2.firstElementChild.dataset.icon
    if (icon1 == icon2) {
        console.log('igual')
        carta1 = null
        carta2 = null
        lockMode = false


    } else {
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

function checkGameOver() {
    let neL = newtechsagain.length
    let allflips = document.getElementsByClassName('flip').length
    if (neL == allflips) {
        return true
    } else {
        return false
    }


}

function showGameOver() {
    setTimeout(() => {

        gameOver.style.display = 'flex'
    }, 800)
}

function restart() {

    gameOver.style.display = 'none'
    gameBoard.innerHTML = ''
    count = 0
    let contagem = document.getElementsByClassName('contagem')[0]
    contagem.innerHTML = "MOVIMENTOS = 0"
    startGame()

}
