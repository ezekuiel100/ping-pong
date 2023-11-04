class Bola {
  constructor(context, jogador) {
    this.context = context;
    this.movendo = false;
    this.largura = 10;
    this.altura = 10;
    this.direcaoX = 0;
    this.direcaoy = 0;
    this.x = canvas.width / 2 - this.largura / 2;
    this.y = canvas.height / 2 - this.largura / 2;
    this.jogador = jogador;
  }
  iniciar() {
    this.movendo = true;
    this.direcaoX = -3;
    this.direcaoy = Math.random() * 10 > 5 ? -3 : 3;
  }

  gerenciar() {
    if (this.movendo) {
      this.x += this.direcaoX;
      this.y += this.direcaoy;

      if (this.x >= canvas.width - this.largura) {
        this.direcaoX = -3;
      }

      if (this.x <= 0) {
        this.direcaoX = 3;
      }

      if (this.y >= canvas.height - this.altura) {
        this.direcaoy = -3;
      }
      if (this.y <= 0) {
        this.direcaoy = +3;
      }

      //posicao bola e jogador igual e
      if (
        this.x <= this.jogador.posicaoX + this.jogador.largura &&
        this.x + this.largura >= this.jogador.posicaoX &&
        this.y <= this.jogador.posicaoY + this.jogador.altura &&
        this.y + this.altura >= this.jogador.posicaoY
      ) {
        this.direcaoX *= -1;
        console.log("a");
      }
    }
  }

  desenhar() {
    this.gerenciar();
    this.context.fillRect(this.x, this.y, this.largura, this.altura);
  }
}
