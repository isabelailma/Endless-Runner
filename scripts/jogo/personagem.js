class Personagem extends Animacao {
  constructor(matriz, imagem, x, largura, altura, larguraSprite, alturaSprite) {
    super(matriz, imagem, x, largura, altura, larguraSprite, alturaSprite);

    this.startingY = height - this.altura;
    this.y = this.startingY;

    this.velocidadeDoPulo = 0;
    this.gravidade = 3;
  }

  pula() {
    this.velocidadeDoPulo = -30;
  }

  aplicaGravidade() {
    this.y = this.y + this.velocidadeDoPulo;
    this.velocidadeDoPulo = this.velocidadeDoPulo + this.gravidade;

    if(this.y > this.startingY) {
      this.y = this.startingY;
    }
  }

  estaColidindo(inimigo) {
    const precisao = .7;
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