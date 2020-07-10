class Animacao {
  constructor(matriz, imagem, x, largura, altura, larguraSprite, alturaSprite) {
    this.matriz = matriz;
    this.imagem = imagem; 
    this.x = x;
    this.y = height - this.altura;
    this.largura = largura;
    this.altura = altura;
    this.larguraSprite = larguraSprite;
    this.alturaSprite = alturaSprite;

    this.actualFrame = 0;
  }

  exibe() {
    // imagem, posição plano cartesiano X e Y, tamanho da imagem largura e altura, ?posição da imagem no mapa de spites eixo X, ?posição da imagem no mapa de spites eixo Y, tamanho da imagem original largura e altura
    image(this.imagem, this.x, this.y, this.largura, this.altura, this.matriz[this.actualFrame][0], this.matriz[this.actualFrame][1], this.larguraSprite, this.alturaSprite);
    this.animaPersonagem();
  }

  animaPersonagem() {
    this.actualFrame++;

    if (this.actualFrame >= this.matriz.length - 1) {
      this.actualFrame = 0;
    }
  }
}