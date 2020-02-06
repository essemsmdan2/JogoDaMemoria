



startGame()


//////
let gameOver = document.getElementsByClassName('game0ver')[0]




function startGame() {
    game.embaralhar()
    game.criaCarta()
    mudaEstimado()

}
function mudaEstimado() {
    let estimado = document.getElementsByClassName('contagem')[1]
    let neL = game.newtechsagain.length
    estimado.innerHTML = 'MOVIMENTOS MIN = ' + game.newtechsagain.length / 2
}


function flippador(esse) {

    if (game.setCards(esse.id)) {

        esse.classList.add('flip')
        game.checkCards()

        if (checkGameOver()) {
            showGameOver()
        }
    }

}




function clearCards() {
    setTimeout(() => {

        game.carta1.classList.remove('flip')
        game.carta2.classList.remove('flip')
        game.carta1 = null
        game.carta2 = null
        game.lockMode = false
    }, 500)

}

function checkGameOver() {
    let neL = game.newtechsagain.length
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
    game.gameBoard.innerHTML = ''
    game.count = 0
    let contagem = document.getElementsByClassName('contagem')[0]
    contagem.innerHTML = "MOVIMENTOS = 0"
    startGame()

}
