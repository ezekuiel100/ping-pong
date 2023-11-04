class Jogador {
  constructor(context, teclado) {
    this.context = context;
    this.teclado = teclado;
    this.largura = 10;
    this.altura = 70;
    this.posicaoX = 0;
    this.posicaoY = canvas.height / 2 - this.altura / 2;
  }

  gerenciar() {
    if (this.teclado.cima && this.posicaoY > 0) {
      this.posicaoY -= 5;
    }
    if (this.teclado.baixo && this.posicaoY + 70 < canvas.height) {
      this.posicaoY += 5;
    }
    if (this.teclado.direita && this.posicaoX + 10 < canvas.width) {
      this.posicaoX += 5;
    }
    if (this.teclado.esquerda && this.posicaoX > 0) {
      this.posicaoX -= 5;
    }
  }

  desenhar() {
    this.gerenciar();
    this.context.fillRect(
      this.posicaoX,
      this.posicaoY,
      this.largura,
      this.altura
    );
  }
}
