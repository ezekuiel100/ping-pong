class Computador {
  constructor(context, bola) {
    this.context = context;
    this.bola = bola;
    this.vel = 3;
    this.largura = 10;
    this.altura = 70;
    this.y = canvas.height / 2 - this.altura / 2;
    this.x = canvas.width - this.largura;
    this.iniciox = this.x;
    this.inicioy = this.y;
  }

  gerenciar() {
    if (this.bola.direcaoX > 0 > 0 && this.bola.x >= canvas.width / 2) {
      if (this.bola.y + this.bola.altura / 2 > this.y + this.altura / 2) {
        this.y += this.vel;
      } else {
        this.y -= this.vel;
      }
      if (this.bola.x + this.bola.largura < this.x) {
        this.x -= this.vel;
      }
    } else {
      if (this.x < this.iniciox) {
        this.x += this.vel;
      }

      if (this.y > this.inicioy) {
        this.y -= this.vel;
      }
      if (this.y < this.inicioy) {
        this.y += this.vel;
      }
    }

    if (this.bola.x + this.bola.largura >= this.x) {
      this.bola.direcaoX = -this.vel;
    }
  }

  desenhar() {
    this.gerenciar();

    this.context.fillRect(this.x, this.y, this.largura, this.altura);
  }
}
