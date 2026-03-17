let canvas;
let ctx;

let x;
let y;
let raio;

// Direção do movimento: 1 = crescer, 2 = diminuir
let direcao;

window.addEventListener("load", (event) => {
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");

  // Centraliza a bola
  x = canvas.width / 2; 
  y = canvas.height / 2;
  
  raio = 1; 
  direcao = 1;
  ctx.fillStyle = corAleatoria(); // Cor inicial

  window.requestAnimationFrame(gameLoop);
});

function gameLoop() {
  update();
  draw();
  window.requestAnimationFrame(gameLoop);
}

function update() {
  // O limite máximo que o raio pode ter sem sair do canvas é a 
  // metade da menor dimensão (neste caso, altura/2 = 150)
  let limiteMaximo = canvas.height / 2;

  if (direcao == 1) {
    if (raio < limiteMaximo) {
      raio += 2; 
    } else {
      direcao = 2;
      ctx.fillStyle = corAleatoria(); // Troca cor ao tocar na borda
    }
  } else if (direcao == 2) {
    if (raio > 1) {
      raio -= 2;
    } else {
      direcao = 1;
      ctx.fillStyle = corAleatoria(); // Troca cor ao ficar minúsculo
    }
  }
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpa o canvas
  ctx.beginPath();
  ctx.arc(x, y, raio, 0, 2 * Math.PI, false); // Desenha o círculo
  ctx.fill();
}

function corAleatoria() {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);
  return `rgb(${red}, ${green}, ${blue})`;
}