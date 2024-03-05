const display = document.getElementById("display");

const btn_copy = document.getElementById("btn_copy");
const btn_clear = document.getElementById("btn_clear");

const btn_num = [...document.querySelectorAll(".btn_num")];
const btn_ope = [...document.querySelectorAll(".btn_ope")];

const resultado = document.getElementById("btn_=");

let decimal = false;
let sinal = false;

btn_num.map((el) => {
  el.addEventListener("click", (e) => {
    sinal = false;
    if (e.target.innerHTML == ",") {
      if (!decimal) {
        decimal = true;
        if (display.innerHTML == "0") {
          display.innerHTML = "0,";
        } else {
          display.innerHTML += e.target.innerHTML;
        }
      }
    } else {
      if (display.innerHTML == "0") {
        display.innerHTML = "";
      }
      display.innerHTML += e.target.innerHTML;
    }
  });
});

btn_ope.map((el) => {
  el.addEventListener("click", (e) => {
    if (!sinal) {
      sinal = true;
      if (display.innerHTML == "0") {
        display.innerHTML = "0,";
      }
      if (e.target.innerHTML == "x") {
        display.innerHTML += "*";
      } else {
        display.innerHTML += e.target.innerHTML;
      }
    }
  });
});

btn_clear.addEventListener("click", () => {
  decimal = false;
  sinal = false;
  display.innerHTML = "0";
});

resultado.addEventListener("click", () => {
  sinal = false;
  decimal = false;
  const res = eval(display.innerHTML);
  display.innerHTML = res;
});

btn_copy.addEventListener("click", () => {
  navigator.clipboard.writeText(display.innerHTML);
});
