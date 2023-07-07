const botones = document.querySelectorAll("button");
const ganador = document.getElementById("ganador");

const tablero = []; //Crearemos un Array de 9 elementos con cada valor por boton pulsado

let turno = 0;
const pulseButton = (event, index) => {
  turno++;
  const btn = event.target;
  const ficha = turno % 2 == 1 ? "x" : "o";
  btn.textContent = ficha;
  //console.log(index)
  tablero[index] = ficha;
  //console.log(tablero)
  winner();
};

const winner = () => {
  //Evaluamos líneas horizontales
  if (tablero[0] == tablero[1] && tablero[0] == tablero[2] && tablero[0]) {
    ganador.innerHTML = `El ganador es ${tablero[0]}`;
  } else if (
    tablero[3] == tablero[4] &&
    tablero[3] == tablero[5] &&
    tablero[3]
  ) {
    ganador.innerHTML = `El ganador es ${tablero[3]}`;
  } else if (
    tablero[6] == tablero[7] &&
    tablero[6] == tablero[8] &&
    tablero[6]
  ) {
    ganador.innerHTML = `El ganador es ${tablero[6]}`;

    //Evaluamos líneas verticales
  } else if (
    tablero[0] == tablero[3] &&
    tablero[0] == tablero[6] &&
    tablero[0]
  ) {
    ganador.innerHTML = `El ganador es ${tablero[0]}`;
  } else if (
    tablero[1] == tablero[4] &&
    tablero[1] == tablero[7] &&
    tablero[1]
  ) {
    ganador.innerHTML = `El ganador es ${tablero[1]}`;
  } else if (
    tablero[2] == tablero[5] &&
    tablero[2] == tablero[8] &&
    tablero[2]
  ) {
    ganador.innerHTML = `El ganador es ${tablero[2]}`;

    //Evaluamos líneas diagonales
  } else if (
    tablero[0] == tablero[4] &&
    tablero[0] == tablero[8] &&
    tablero[0]
  ) {
    ganador.innerHTML = `El ganador es ${tablero[0]}`;
  } else if (
    tablero[2] == tablero[4] &&
    tablero[2] == tablero[6] &&
    tablero[2]
  ) {
    ganador.innerHTML = `El ganador es ${tablero[2]}`;
  } else {
    ganador.innerHTML = "";
  }
};

// //botones.forEach((e) => {
//   e.addEventListener('click',pulseButton)
// })

botones.forEach((e, index) => {
  e.addEventListener("click", (e) => {
    pulseButton(e, index);
  });
});
