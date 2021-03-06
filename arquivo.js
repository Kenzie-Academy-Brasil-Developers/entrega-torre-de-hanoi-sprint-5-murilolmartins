let variavel = 0;
let contador = 0;
let discoescolhido;
let dificuldade = 3;
let contagem = document.querySelector(".contador");

criandotabuleiro()
criandojogo();

const espetos = document.querySelectorAll(".espetos");
const reset = document.querySelector(".reset");
let botao = document.querySelectorAll(".dificuldade");
let aviso = document.querySelector(".aviso");
const regras = document.querySelector(".botao_regras")
const xregras = document.querySelector(".fechar")


espetos.forEach((espeto) => {
  espeto.addEventListener("click", selecionando);
});

botao.forEach((button) => {
  button.addEventListener("click", function () {
    dificuldade = this.value;
    criandojogo();
  });
});
reset.addEventListener("click", function() {
  aviso.innerText = "BOM JOGO"
  criandojogo()
});

regras.addEventListener("click",mostrarregras)

xregras.addEventListener("click",fecharregras)

function selecionando(event) {
  if (variavel === 0 && event.currentTarget.lastElementChild.childElementCount >= 1) {
    discoescolhido = event.currentTarget.lastElementChild.lastElementChild;
    discoescolhido.id = "selecionado";
    variavel = 1;
  } else if (variavel === 1) {
    let espetoescolhido = event.currentTarget.lastElementChild;
    if (
      espetoescolhido.childElementCount === 0 ||
      espetoescolhido.lastElementChild.clientWidth > discoescolhido.clientWidth
    ) {
      discoescolhido.id = "";
      espetoescolhido.appendChild(discoescolhido);
      variavel = 0;
      contador++;
      contagem.innerText = contador;
    } else {
      discoescolhido.id = "";
      variavel = 0;
      aviso.innerText = "Jogada Invalida";
      setTimeout(() => {
        aviso.innerText = "Continue Tentando";
      }, 2893);
    }
  }
  vitoria();
}

function criandojogo() {
  let discos = document.querySelectorAll(".discos");
  discos.forEach((discos) => {
    discos.innerHTML = "";
  });
  let start = document.querySelector(".discos");
  start.classList.add("start")
  for (let i = 0; i < dificuldade; i++) {
    let disco = document.createElement("div");
    disco.classList.add(`disco${i}`);
    disco.classList.add(`disco`);
    start.appendChild(disco);
  }
  contador = 0;
  contagem.innerText = contador;
}

function vitoria() {
  let espetoFinal = document.querySelectorAll(".discos")[2];
  espetoFinal.classList.add("end")
  if (espetoFinal.childElementCount == dificuldade) {
    aviso.innerText = "Voc?? GANHOU!";
    setTimeout(() => {
      aviso.innerText = "BOM JOGO";
      criandojogo();
    }, 5196);
  }
}

function mostrarregras() {
  let divregras = document.querySelector(".regras")
  divregras.style.display = "initial"  
}
function fecharregras() {
  let divregras = document.querySelector(".regras")
  divregras.style.display = "none"  
}

function criandotabuleiro() {
  for(let i = 0; i < 3; i++) {
     let divtabuleiro = document.querySelector(".tabuleiro")
     let divespetos = document.createElement("div") 
     divespetos.classList.add("espetos")
     let divespeto = document.createElement("div") 
     divespeto.classList.add("espeto")
     let divdiscos = document.createElement("div") 
     divdiscos.classList.add("discos")
     divespetos.appendChild(divespeto)
     divespetos.appendChild(divdiscos)
     divtabuleiro.appendChild(divespetos)

  }
}
