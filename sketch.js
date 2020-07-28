let somDoJogo;
let imagemCenario;
let cenario;
let imagemPersonagem;
let personagem;
let imagemInimigo;
let inimigo;
let imagemInimigo2;
let inimigo2;
let imagemInimigo3;
let inimigo3;
let pontuacao;
let imagemGameOver;

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

const matrizInimigo2 = [
  [0,0],
  [200, 0],
  [400, 0],
  [0, 150],
  [200, 150],
  [400, 150],
  [0, 300],
  [200, 300],
  [400, 300],
  [0, 450],
  [200, 450],
  [400, 450],
  [0, 600],
  [200, 600],
  [400, 600],
  [0, 750],
];

const matrizInimigo3 = [
  [0,0],
  [400,0],
  [800,0],
  [1200,0],
  [1600,0],
  [0,400],
  [400,400],
  [800,400],
  [1200, 400],
  [1600, 400],
  [0,800],
  [400, 800],
  [800, 800],
  [1200, 800],
  [1600, 800],
  [0, 1200],
  [400, 1200],
  [800, 1200],
  [1200, 1200],
  [1600, 1200], 
  [0, 1600],
  [400, 1600],
  [800, 1600],
  [1200, 1600],
  [1600, 1600],
  [0, 2000],
  [400, 2000],
  [800, 2000],
];

const inimigos = [];

function preload() {
  somDoJogo = loadSound('sons/Gideon Wrath Part I.mp3');
  somDoPulo = loadSound('sons/somPulo.mp3');
  imagemCenario = loadImage('imagens/cenario/floresta.png');
  imagemPersonagem = loadImage('imagens/personagem/running-sprite-sheet.png');
  imagemInimigo = loadImage('imagens/inimigos/gotinha.png');
  imagemInimigo2 = loadImage('imagens/inimigos/gotinha-voadora.png');
  imagemInimigo3 = loadImage('imagens/inimigos/troll.png');
  imagemGameOver = loadImage('imagens/assets/game-over.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  cenario = new Cenario(imagemCenario, 4);
  pontuacao = new Pontuacao();
  const inimigo = new Inimigo(matrizInimigo, imagemInimigo, width, 20, 50, 50, 105, 100, 8, 100);
  const inimigo2 = new Inimigo(matrizInimigo2, imagemInimigo2, width, 140, 100, 80, 200, 150, 8, 600);
  const inimigo3 = new Inimigo(matrizInimigo3, imagemInimigo3, width, 20, 200, 200, 400, 400, 5, 1000);
  personagem = new Personagem(matrizPersonagem2, imagemPersonagem, 20, 20, 118.8, 154, 108, 140);
  frameRate(20);
  //somDoJogo.loop();

  inimigos.push(inimigo);
  inimigos.push(inimigo2);
  inimigos.push(inimigo3);
}

function keyPressed() {
  if (key === 'ArrowUp') {
    if (personagem.pula() === true) {
      personagem.pula();
      somDoPulo.play();
    }
  }
}

function draw() {
  cenario.exibe();
  cenario.move();

  pontuacao.exibe();
  pontuacao.adicionarPonto();
  
  personagem.exibe();
  personagem.aplicaGravidade();
  
  inimigos.forEach( inimigo => {
    inimigo.exibe();
    inimigo.move();
  
    if (personagem.estaColidindo(inimigo)) {
      image(imagemGameOver, width/2 - 200, height/3);
      noLoop();
    }
  })
}