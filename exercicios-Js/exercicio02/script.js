const btnCursoSelecionado = document.querySelector("#curso-selecionado");
const btnRemoverSelecionado = document.querySelector("#remover-selecionado");
const btnAdicionarAntes = document.querySelector("#adicionar-antes");
const btnAdicionarDepois = document.querySelector("#adicionar-depois");

btnAdicionarAntes.addEventListener("click", () => {
  try {
    const texto = buscarTexto();
    const novo = criarElemento(texto);
    const selecionado = radioSelecionado();
    const elementoIrmao = selecionado.parentNode;
    const elementoPai = elementoIrmao.parentNode;

    elementoPai.insertBefore(novo, elementoIrmao);
  } catch {
    alert("Selecione um curso");
  }
});

btnAdicionarDepois.addEventListener("click", () => {
  try {
    const texto = buscarTexto();
    const novo = criarElemento(texto);
    const selecionado = radioSelecionado();
    const elementoIrmao = selecionado.parentNode;
    const elementoAbaixo = elementoIrmao.nextElementSibling;
    const elementoPai = document.querySelector("#form-inputs");

    elementoPai.insertBefore(novo, elementoAbaixo);
  } catch {
    alert("Selecione um curso");
  }
});

btnCursoSelecionado.addEventListener("click", () => {
  try{
  alert(
    `-- Curso selecionado: ${radioSelecionado().nextElementSibling.innerHTML} --`
  );
  } catch {
    alert("Selecione um curso");
  }
});

btnRemoverSelecionado.addEventListener("click", () => {
  try {
    let selecionado = radioSelecionado();
    selecionado.parentNode.remove();
  } catch {
    alert("Selecione um curso");
  }
});

function radioSelecionado() {
  const arr = [...document.querySelectorAll("input[type=radio]")];
  let radioSelecionado = arr.filter((el, ind, arr) => {
    return el.checked;
  });
  return (radioSelecionado = radioSelecionado[0]);
}

function criarElemento(texto) {
  let textoMinusculo = texto.toLowerCase();
  const novaDiv = document.createElement("div");

  novaDiv.setAttribute(
    "class",
    "bg-primary-subtle border border-primary p-3 rounded-2 my-2"
  );

  const novoInput = document.createElement("input");
  novoInput.setAttribute("type", "radio");
  novoInput.setAttribute("id", textoMinusculo);
  novoInput.setAttribute("name", "fav_language");
  novoInput.setAttribute("value", textoMinusculo);
  novoInput.setAttribute("class", "fav_language");

  const novoLabel = document.createElement("label");
  novoLabel.setAttribute("for", textoMinusculo);
  novoLabel.innerHTML = texto;

  novaDiv.appendChild(novoInput);
  novaDiv.appendChild(novoLabel);

  return novaDiv;
}

function buscarTexto() {
  const inputText = document.querySelector("#input-text");
  let text = inputText.value
  if(text != ""){
  return inputText.value;
  } else {
    alert("Digite o nome do curso")
  }
}
