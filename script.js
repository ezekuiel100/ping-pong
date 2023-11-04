let canvas = document.querySelector("canvas");
let context = canvas.getContext("2d");

let teclado = {
  cima: false,
  baixo: false,
  direita: false,
  esquerda: false,
};

let jogador = new Jogador(context, teclado);
let bola = new Bola(context, jogador);
let computador = new Computador(context);

window.addEventListener("keydown", (e) => {
  if (e.key == "ArrowUp") {
    teclado.cima = true;
  }
  if (e.key == "ArrowDown") {
    teclado.baixo = true;
  }
  if (e.key == "ArrowRight") {
    teclado.direita = true;
  }
  if (e.key == "ArrowLeft") {
    teclado.esquerda = true;
  }
});

window.addEventListener("keyup", (e) => {
  if (e.key == "ArrowUp") {
    teclado.cima = false;
  }
  if (e.key == "ArrowDown") {
    teclado.baixo = false;
  }
  if (e.key == "ArrowRight") {
    teclado.direita = false;
  }
  if (e.key == "ArrowLeft") {
    teclado.esquerda = false;
  }
});

function game() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  jogador.desenhar();
  bola.desenhar();
  computador.desenhar();
  requestAnimationFrame(game);
}
requestAnimationFrame(game);
