// Remember, we're gonna use strict mode in all scripts now!
"use strict";

//Rondas
// let rondas = prompt('Cuántas ronas quieres jugar?');
//Jugadores:
const rondasInput = document.querySelector(".rondasInput");
let rondas;

// function () {
//   rondas = document.querySelector(".rondasInput").value;
//   document.querySelector(".rondas").classList.add("hidden");
//   document.querySelector(".rondasChosen ").classList.remove("hidden");
//   document.querySelector(".rondasChosenSpan").textContent = rondas;
// }

// Select rondas hides the input and displays the h1 with the number of rondas selected.
const selectRondas = function () {
  rondas = document.querySelector(".rondasInput").value;
  if (!rondas) return;
  document.querySelector(".rondas").classList.add("hidden");
  document.querySelector(".rondasChosen ").classList.remove("hidden");
  document.querySelector(".rondasChosenSpan").textContent = rondas;
};
// If the user hits enter the function selectRondas will be executed
rondasInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    selectRondas();
  }
});
// If the user clicks the button, the function selectRondas will be executed
const rondasButton = document.querySelector(".rondasButton");
rondasButton.addEventListener("click", selectRondas);

let player1;
let player2;

let player1Counter = 0;
let player2Counter = 0;

let puntajeJ1 = document.getElementById("puntajeJ1");
let puntajeJ2 = document.getElementById("puntajeJ2");

//Botones:
let botonPiedraJ1 = document.getElementById("botonPiedraJ1");
let botonPapelJ1 = document.getElementById("botonPapelJ1");
let botonTijerasJ1 = document.getElementById("botonTijeraJ1");
let botonPiedraJ2 = document.getElementById("botonPiedraJ2");
let botonPapelJ2 = document.getElementById("botonPapelJ2");
let botonTijerasJ2 = document.getElementById("botonTijeraJ2");

//Funciones
//Función finalizar

function finalizar(rondas) {
  if (player1Counter == rondas) {
    alert(
      `Ganó el jugador 1 con un puntaje de ${player1Counter} Vs ${player2Counter} del jugador 2!`
    );
    // window.location.reload();
  } else if (player2Counter == rondas) {
    alert(
      `Ganó el jugador 2 con un puntaje de ${player2Counter} Vs ${player1Counter} del jugador 1!`
    );
    // window.location.reload();
  }
}

//Función comparadora de elecciones
function compareResults() {
  if (player1 !== undefined && player2 !== undefined) {
    if (player1 == "piedra" && player2 == "papel") {
      player2Counter = player2Counter + 1;
      puntajeJ2.innerHTML = player2Counter;
      player1 = undefined;
      player2 = undefined;
    } else if (player1 == "papel" && player2 == "tijeras") {
      player2Counter = player2Counter + 1;
      puntajeJ2.innerHTML = player2Counter;
      player1 = undefined;
      player2 = undefined;
    } else if (player1 == "tijeras" && player2 == "piedra") {
      player2Counter = player2Counter + 1;
      puntajeJ2.innerHTML = player2Counter;
      player1 = undefined;
      player2 = undefined;
    } else if (player1 === player2) {
      alert("Empate");
      player1 = undefined;
      player2 = undefined;
    } else {
      player1Counter = player1Counter + 1;
      puntajeJ1.innerHTML = player1Counter;
      player1 = undefined;
      player2 = undefined;
    }
  }
}

// Event Listeners to the choices of the players:
//Jugador 1
botonPiedraJ1.addEventListener("click", function () {
  player1 = "piedra";
  compareResults();
  finalizar(rondas);
});
botonPapelJ1.addEventListener("click", function () {
  player1 = "papel";
  compareResults();
  finalizar(rondas);
});
botonTijerasJ1.addEventListener("click", function () {
  player1 = "tijeras";
  compareResults();
  finalizar(rondas);
});

//Jugador 2
botonPiedraJ2.addEventListener("click", function () {
  player2 = "piedra";
  compareResults();
  finalizar(rondas);
});
botonPapelJ2.addEventListener("click", function () {
  player2 = "papel";
  compareResults();
  finalizar(rondas);
});
botonTijerasJ2.addEventListener("click", function () {
  player2 = "tijeras";
  compareResults();
  finalizar(rondas);
});

// finalizar(rondas);
