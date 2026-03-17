class Circulo {
  constructor(x, y, raio, cor, direcao, ctx, velocidade) {
    this.x = x;
    this.y = y;
    this.raio = raio;
    this.cor = cor;
    this.direcao = direcao;
    this.ctx = ctx;
    this.velocidade = velocidade;
  }
  desenhar() {
    this.ctx.beginPath();
    this.ctx.fillStyle = this.cor;
    this.ctx.arc(this.x, this.y, this.raio, 0, 2 * Math.PI, false);
    this.ctx.fill();
  }

  update(canvas) {
    if (this.direcao == 1) {
      // Verificar se o círculo está a deslocar-se para a direita
      if (this.x + this.raio < canvas.width) {
        // Verificar se não atingiu o limite direito do canvas
        this.x += this.velocidade;
      } else {
        this.direcao = 2; // Mudar a direção
      }
    } else if (this.direcao == 2) {
      // Verificar se o círculo está a deslocar-se para a esquerda
      if (this.x - this.raio > 0) {
        // Verificar se não atingiu o limite esquerdo do canvas
        this.x -= this.velocidade;
      } else {
        this.direcao = 1; // Mudar a direção
      }
    }
  }
}
