let sistema;
let fondo, imgJugador, imgCaramelo, imgPodrido;

function preload(){
  fondo = loadImage("assets/fondo.jpeg");
  imgJugador = loadImage("assets/jugador.png");
  imgCaramelo = loadImage("assets/caramelo.png");
  imgPodrido = loadImage("assets/podrido.png");
}

function setup(){
  createCanvas(800, 600);
  sistema = new Sistema(15, 8); 
}

function draw(){
  imageMode(CORNER);
  image(fondo, 0, 0, width, height);

  sistema.update();
  sistema.draw();
}

function mousePressed(){
  sistema.mousePressed();
}
