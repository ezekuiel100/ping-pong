class Placar {
  constructor(context) {
    this.context = context;
  }

  desenhar() {
    this.context.font = "30px arial";
    this.context.fillText(pj1, 10, 30);
    this.context.fillText(pj2, canvas.width - 30, 30);
  }
}
