
const espetos = document.querySelectorAll(".espetos");
const reset = document.querySelector(".reset");
let contagem = document.querySelector(".contador");
let botao = document.querySelectorAll(".dificuldade");
let aviso = document.querySelector(".aviso");
let variavel = 0;
let contador = 0;
let discoescolhido;
let dificuldade = 3;

espetos.forEach((espeto) => {
  espeto.addEventListener("click", selecionando);
});

botao.forEach((button) => {
  button.addEventListener("click", function () {
    dificuldade = this.value;
    criandojogo();
  });
});
reset.addEventListener("click",criandojogo);

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
        aviso.innerText = "";
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
  let start = document.querySelector(".start");
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
  let espetoFinal = document.querySelector(".end");
  if (espetoFinal.childElementCount == dificuldade) {
    aviso.innerText = "Você GANHOU!";
    setTimeout(() => {
      aviso.innerText = "";
      criandojogo();
    }, 5196);
  }
}
criandojogo();

