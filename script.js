const discos = document.querySelector(".discos");
discos.addEventListener("click", pegar);

function pegar(evt) {
  let discoPegar = evt.target;

  if (discoPegar.tagName === "DIV" && discos.lastElementChild === discoPegar) {
    discoPegar.classList.add("pegou");
  }
}

const espeto = document.querySelector(".espeto");
espeto.addEventListener("click", mover);

function mover(evt) {
  let discoPegou = document.querySelector(".pegou");
  let classes = discoPegou.classList;
  let div = document.createElement("div");
  discos.appendChild(div).classList.add(classes).removeClass("pegou");
  discoPegou.remove();
}

// criar condicional para mover discos, confirmar por ordem OU width do elemento.
