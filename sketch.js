let somDoJogo;
let imagemCenario;
let cenario;
let imagemPersonagem;
let personagem;
let imagemInimigo;
let inimigo;

const matrizPersonagem2 = [
  [0, 0],
  [108 ,0],
  [216 ,0],
  [324 ,0],
  [432 ,0],
  [540 ,0],
  [648 ,0],
  [756 ,0],
  [108 ,0],
];

const matrizPersonagem = [
  [0, 0],
  [220, 0],
  [440, 0],
  [660, 0],
  [0, 270],
  [220, 270],
  [440, 270],
  [660, 270],
  [0, 540],
  [220, 540],
  [440, 540],
  [660, 540],
  [0, 810],
  [220, 810],
  [440, 810],
  [660, 810],
];

const matrizInimigo = [
  [0, 0],
  [104, 0],
  [208, 0],
  [312, 0],
  [0, 104],
  [104, 104],
  [208, 104],
  [312, 104],
  [0, 208],
  [104, 208],
  [208, 208],
  [312, 208],
  [0, 312],
  [104, 312],
  [208, 312],
  [312, 312],
  [0, 418],
  [104, 418],
  [208, 418],
  [312, 418],
  [0, 522],
  [104, 522],
  [208, 522],
  [312, 522],
  [0, 626],
  [104, 626],
  [208, 626],
  [312, 626],
];

function preload() {
  somDoJogo = loadSound('sons/Gideon Wrath Part I.mp3');
  somDoPulo = loadSound('sons/somPulo.mp3');
  imagemCenario = loadImage('imagens/cenario/floresta.png');
  imagemPersonagem = loadImage('imagens/personagem/running-sprite-sheet.png');
  imagemInimigo = loadImage('imagens/inimigos/gotinha.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  cenario = new Cenario(imagemCenario, 4);
  personagem = new Personagem(matrizPersonagem2, imagemPersonagem, 20, 118.8, 154, 108, 140);
  inimigo = new Inimigo(matrizInimigo, imagemInimigo, width - 52, 52, 52, 104, 104);
  frameRate(20);
  //somDoJogo.loop();
}

function keyPressed() {
  if (key === 'ArrowUp') {
    personagem.pula();
    somDoPulo.play();
  }
}

function draw() {
  //circle(mouseX, mouseY, 20);
  cenario.exibe();
  cenario.move();
  
  if (key === 'ArrowUp') {
    personagem.pulo();
  }
  personagem.exibe();
  personagem.aplicaGravidade();
  
  inimigo.exibe();
  inimigo.move();

  if (personagem.estaColidindo(inimigo)) {
    console.log('colidiu');
    noLoop();
  }
}