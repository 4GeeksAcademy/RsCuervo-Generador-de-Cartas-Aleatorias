import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function cartaRandom(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function cartaAleatoria() {
  const palos = ['♦', '♥', '♠', '♣'];
  const valores = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'K', 'Q', 'J', 'A'];

  const paloPosicion = cartaRandom(palos);
  const valorCenter = cartaRandom(valores);

  console.log(paloPosicion, valorCenter);

  const paloStart = document.getElementById("palo-start");
  const paloEnd = document.getElementById("palo-end");
  const valorCenterElement = document.getElementById("valor-center");

  paloStart.innerText = paloPosicion;
  paloEnd.innerText = paloPosicion;
  valorCenterElement.innerText = valorCenter;

  if (paloPosicion === "♦" || paloPosicion === "♥") {
    paloStart.style.color = "red";
    paloEnd.style.color = "red";
  } else {
    paloStart.style.color = "black";
    paloEnd.style.color = "black";
  }
}

window.onload = function() {
  const boton = document.getElementById("generar-carta");
  boton.addEventListener("click", cartaAleatoria);
};
















