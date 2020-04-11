
let game = {

    techs: [
        'bootstrap',
        'css',
        'electron',
        'firebase',
        'html',
        'javascript',
        'jquery', 'mongo', 'node', 'react'

    ],


    lockMode: false,
    carta1: null,
    carta2: null,
    flipped: null,
    count: 0,
    gameBoard: document.getElementById('gameBoard'),
    newtechs: null,
    setCards: function (id) {


        this.flipped = document.getElementById(id)
        let flippedhas = this.flipped.classList.contains('flip')

        if (this.lockMode || flippedhas) {
            return false
        }

        if (!this.carta1) {
            this.carta1 = document.getElementById(id)
            return true
        }
        else {
            this.carta2 = document.getElementById(id)
            this.countOne()
            this.lockMode = true
            return true
        }


    },



    criaCarta: function () {
        this.newtechs.forEach((tech) => {
            this.criaCartas(tech)

        })

    },

    embaralhar: function () {
        this.newtechs = [...this.techs, ...this.techs]
        let neL = this.newtechs.length
        neL++
        this.newtechs.forEach(tech => {

            let rIndex = Math.floor(Math.random() * neL)
            let Index1 = this.newtechs.shift();
            this.newtechs.splice(rIndex, 0, Index1)



        });
    },


    criaCartas: function (carta) {

        let cartaAB = document.createElement('div')
        cartaAB.setAttribute("class", 'card')
        cartaAB.setAttribute("id", this.criaID())
        cartaAB.setAttribute("onClick", "flippador(this)")
        this.gameBoard.appendChild(cartaAB)



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

    },


    criaID: function () {
        return parseInt(Math.random() * 1000)
    },



    countOne: function () {
        this.count++
        let contagem = document.getElementsByClassName('contagem')[0]
        contagem.innerHTML = 'MOVIMENTOS = ' + this.count
    },

    checkCards: function () {

        if (!this.carta1 || !this.carta2) {
            return false
        }
        let icon1 = this.carta1.firstElementChild.dataset.icon
        let icon2 = this.carta2.firstElementChild.dataset.icon
        if (icon1 == icon2) {
            this.carta1 = null
            this.carta2 = null
            this.lockMode = false


        } else {
            clearCards()


        }
    }


}
