class Personagem extends Animacao {
  constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite) {
    super(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite);

    this.variacaoY = variacaoY;
    this.startingY = height - this.altura;
    this.y = this.startingY;

    this.velocidadeDoPulo = 0;
    this.gravidade = 2.8;
    this.alturaDoPulo = -30;
    this.pulos = 0;
  }

  pula() {
    if (this.pulos <= 2) {
      this.velocidadeDoPulo = this.alturaDoPulo;
      this.pulos++;
      return true;
    }
  }

  aplicaGravidade() {
    this.y = this.y + this.velocidadeDoPulo;
    this.velocidadeDoPulo = this.velocidadeDoPulo + this.gravidade;

    if(this.y > this.startingY) {
      this.y = this.startingY;
      this.pulos = 0;
    }
  }

  estaColidindo(inimigo) {
    const precisao = .8;
    const colisao = collideRectRect(
      this.x,
      this.y,
      this.largura * precisao,
      this.altura * precisao,
      inimigo.x,
      inimigo.y,
      inimigo.largura * precisao,
      inimigo.altura * precisao
    );

    return colisao;
  }
}