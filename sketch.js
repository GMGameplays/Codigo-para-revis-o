var canvas;
var backgroundImage;
var bgImg;
var database;
var form, player;
var playerCount;
var car1,car2
var cars=[]

function preload() {
  backgroundImage = loadImage("./assets/planodefundo.png");
  car1Img=loadImage("./assets/car1.png");
  car2Img=loadImage("./assets/car2.png");
  track=loadImage("./assets/PISTA.png");
  gasImg=loadImage("./assets/fuel.png");
  coinImg=loadImage("./assets/goldCoin.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.start();
  game.getState();
}

function draw() {
  background(backgroundImage);
  if(playerCount===2){
    Game.update(1)
  }
  if(gameState===1){
    Game.play()
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
