let imagenes = [];
let estado = 0;  
let botones = [];
let guion = [];
let caminoImagen10 = -1;  
let ambiente;
let fuente;

function preload() {
  for (let i = 0; i < 22; i++) { 
    imagenes[i] = loadImage("data/imagen" + i + ".jpeg");  
  }
  guion = loadStrings("data/guion.txt");  
  
 // soundFormats('mp3');
 //ambiente = loadSound('data/sound.mp3');
  
  fuente = loadFont("data/fuente.otf");
}

function setup() {
  createCanvas(640, 480);
  textFont(fuente);
  botones = [
    [240, 300, 150, 40],  
    [240, 360, 150, 40],  
    [150, 300, 100, 40],  
    [390, 300, 100, 40],  
    [240, 300, 150, 40]   
  ];
}

function draw() {
  background(200);
  stroke(255);
  
  //ambiente.loop();  
  
  image(imagenes[estado], 0, 0, width, height);
  fill(255);
  textSize(24);  
  textAlign(CENTER, CENTER);  
  text(guion[estado], width / 2, height / 2);  
  
  if (estado == 4 || estado == 11 || estado == 19) {
    dibujarBoton(botones[4], "Volver a inicio", true);  
  } else if (estado !== 18) { 
    dibujarBoton(botones[0], "Siguiente", estado != 3 && estado != 6 && estado != 7 && estado != 10);
    dibujarBoton(botones[1], "Anterior", true);
  }

  if (estado == 3 || estado == 6 || estado == 10) {
    dibujarBoton(botones[2], "Sí", true);
    dibujarBoton(botones[3], "No", true);
  }
  if (estado == 18) {
    dibujarBoton(botones[2], "Sí", true);
    dibujarBoton(botones[3], "No", true); 
  }

 if (estado == 7 || estado == 21) {
    dibujarBoton(botones[0], "Siguiente", true);
  }

  push();
  textSize(40);
  textAlign(CENTER);
  text("The Last of Us", width / 2, 80);
  pop();
}

function dibujarBoton(boton, texto, mostrar) {
  let [x, y, w, h] = boton;
  if (mostrar) {
    fill(255);
    textSize(20); 
    if (mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h) {
      fill(0, 0, 0, 170);  
    } else {
      noFill();
    }
    rect(x, y, w, h);
    fill(255);
    textAlign(CENTER);  
    text(texto, x + w / 2, y + h / 2);
  }
}

function avanzar(estadoSiguiente) {
  if (estadoSiguiente < imagenes.length) {
    estado = estadoSiguiente;
  }
}

function retroceder(estadoAnterior) {
  if (estadoAnterior >= 0) {
    estado = estadoAnterior;
  }
}

function botonPresionado(boton) {
  let [x, y, w, h] = boton;
  return mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h;
}

function mousePressed() {
  if (estado == 4 || estado == 11 || estado == 19) {
    if (botonPresionado(botones[4])) {
      estado = 0;  
    }
    return;  }
  if (botonPresionado(botones[0])) {
    if (estado == 1) avanzar(2);
    else if (estado == 2) avanzar(3);
    else if (estado == 5) avanzar(6);
    else if (estado == 12) avanzar(13);
    else if (estado == 13) avanzar(14);
    else if (estado == 14) avanzar(10);
    else if (estado == 15) avanzar(16);
    else if (estado == 16) avanzar(17);
    else if (estado == 17) avanzar(18);
    else if (estado == 20) avanzar(21);
    else if (estado == 21) avanzar(11);
    else avanzar(estado + 1);
  }

  if (botonPresionado(botones[1])) {
    if (estado == 10) retroceder(caminoImagen10 === 1 ? 14 : 9);
    else if (estado == 12) retroceder(6);
    else if (estado == 4 || estado == 5) retroceder(3);
    else if (estado == 7) retroceder(6);
    else if (estado == 13) retroceder(12);
    else if (estado == 14) retroceder(13);
    else if (estado == 21) retroceder(11);
    else retroceder(estado - 1);
  }

  if (estado == 3) {
    if (botonPresionado(botones[2])) avanzar(4);
    else if (botonPresionado(botones[3])) avanzar(5);
  }

  if (estado == 6) {
    if (botonPresionado(botones[2])) avanzar(7);
    else if (botonPresionado(botones[3])) avanzar(12);
  }

  if (estado == 10) {
    if (botonPresionado(botones[2])) {
      caminoImagen10 = 1;  
      avanzar(11);
    } else if (botonPresionado(botones[3])) {
      caminoImagen10 = 0;  
      avanzar(15);
    }
  }

  if (estado == 18) {
    if (botonPresionado(botones[2])) avanzar(19); 
    else if (botonPresionado(botones[3])) avanzar(20);
  }

  if (estado == 20) {
    if (botonPresionado(botones[0])) avanzar(21);
  }
}
