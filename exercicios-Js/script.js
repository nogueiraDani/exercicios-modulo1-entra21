const elementosEsquerda = [...document.getElementsByClassName("esquerda")];
const botaoCopiar = document.querySelector(".botao-copiar");
const botaoReinicar = document.querySelector(".botao-reiniciar")
const elementosDireita = document.querySelector(".direita");

elementosEsquerda.map((e) => {
  e.addEventListener("click", () => {
    trocarDeCor(e);
  });
});

botaoCopiar.addEventListener("click", () => {
  elementosEsquerda.map((e) => {
    if (e.classList.contains("selecionado")) {
      copiar(e);
    }
  });
});

botaoReinicar.addEventListener("click",()=>{
    location.reload()
})

function trocarDeCor(el) {
  if (el.classList.contains("bg-info-subtle")) {
    el.classList.replace("bg-info-subtle", "bg-danger-subtle");
    el.classList.replace("border-info", "border-danger");
    el.classList.add("selecionado");
  } else {
    el.classList.replace("bg-danger-subtle", "bg-info-subtle");
    el.classList.replace("border-danger", "border-info");
  }
}

function copiar(e) {
  let text = e.innerHTML;
  let newDiv = document.createElement("div");
  newDiv.innerHTML = text;
  elementosDireita.appendChild(newDiv);
  newDiv.classList.add(
    "bg-info-subtle",
    "p-2",
    "border",
    "border-info",
    "border-1",
    "rounded-2",
    "my-2",
    "text-center"
  );
  e.remove();
  e.classList.remove("selecionado");
}
