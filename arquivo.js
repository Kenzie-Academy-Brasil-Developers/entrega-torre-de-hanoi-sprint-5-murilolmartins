const espetos = document.querySelectorAll(".espetos")
const reset = document.querySelector(".reset")
let contagem = document.querySelector(".contador")
let variavel = 0
let cotador = 0
let discoescolhido 

espetos.forEach((espeto) => {
    espeto.addEventListener("click", selecionando)

})


function selecionando(event) {
    if(variavel === 0) {
        discoescolhido = event.currentTarget.lastElementChild.lastElementChild
        discoescolhido.id = "selecionado" 
        variavel = 1
    }
    else {
        let espetoescolhido = event.currentTarget.lastElementChild
        if(espetoescolhido.childElementCount === 0 || espetoescolhido.lastElementChild.clientWidth  > discoescolhido.clientWidth) {
            discoescolhido.id = ""
            espetoescolhido.appendChild(discoescolhido)
            variavel = 0
            contador++
            contagem.innerText = contador
        }
        else {
            discoescolhido.id = ""
            variavel = 0
           alert("Jogada Invalida")
        }
    }
    
}

function criandojogo() {
    let discos = document.querySelectorAll(".discos")
    discos.forEach((discos) => {
        discos.innerHTML = ""

    })
    let start = document.querySelector(".discos")
    start.classList.add("start")
    for(let i = 0; i < 5; i++) {
        let disco = document.createElement("div")
        disco.classList.add(`disco${i}`)
        disco.classList.add(`disco`)
        start.appendChild(disco)
    }
    contador = 0
    contagem.innerText = contador
}
criandojogo()

reset.addEventListener("click", criandojogo)