class Computador {
  constructor(context) {
    this.context = context;

    this.largura = 10;
    this.altura = 70;
    this.y = canvas.height / 2 - this.altura / 2;
    this.x = canvas.width - this.largura;
  }

  gerenciar() {}

  desenhar() {
    this.gerenciar();
    this.context.fillRect(this.x, this.y, this.largura, this.altura);
  }
}
