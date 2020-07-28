class Pontuacao {
  constructor() {
    this.pontos = 0;
  }

  adicionarPonto() {
    this.pontos = this.pontos + .2;
  }

  exibe() {
    textAlign(RIGHT);
    fill('#fff');
    textSize(50);
    text(parseInt(this.pontos), width - 50, 50);
  }
}