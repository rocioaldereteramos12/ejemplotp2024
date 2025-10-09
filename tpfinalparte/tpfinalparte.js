/*
TpFinalParte1
Integrantes: 
Martina Ailen Meza 
Rocio Alderete Ramos 93053/4

*/




let estado;  
let imagenes = [];  
let texto = [];
let botonImg;
let botonX, botonY;
let angulo = -90;     
let rotando = false; 
let cayo = false;
let miFuente;
let sonido;

function preload() {
  for (let i = 0; i < 19; i++) { 
    imagenes[i] = loadImage("assets/p" + (i + 1) + ".png");
  }
  texto = loadStrings("assets/texto.txt");
  botonImg = loadImage("assets/botmov.png"); 
  miFuente = loadFont("assets/miFuente.ttf");
  sonido = loadSound("assets/song.mp3");
}

function setup() {
  createCanvas(640, 480);
  textSize(20);
  textFont(miFuente);
  estado = 0; 

  botonX = 2 * width / 3; 
  botonY = height - 120;
}

function draw() {
  background(220);
  image(imagenes[estado], 0, 0, width, height);

  mostrarTextoCentrado();

  if (estado == 0) {
    dibujarBotonRect(width / 2 - 50, height - 100, 100, 50, "Inicio");
  } else if (estado >= 1 && estado <= 3) {
    dibujarBotonRect(width - 150, height - 80, 120, 50, "Siguiente");
  } else if (estado == 4) {
    dibujarBotonRect(width / 3 - 60, height - 100, 120, 50, "Cuadrado");

    push();
    imageMode(CENTER); 
    translate(botonX, botonY);
    rotate(radians(angulo));
    image(botonImg, 0, 0, 100, 50);
    pop();
    
    if (rotando && angulo < 0) {
      angulo += 2;
      if (angulo >= 0) {
        angulo = 0;
        rotando = false;
        cayo = true; 
        estado = 5; 
      }
    }

  } else if (estado == 5) {
    dibujarBotonRect(width - 150, height - 80, 120, 50, "Siguiente");
  } else if (estado == 6) {
    dibujarBotonRect(width / 2 - 80, height - 100, 160, 50, "Volver al inicio");
  } else if (estado == 7) { 
    dibujarBotonRect(width - 150, height - 80, 120, 50, "Siguiente");
  } else if (estado == 8) { 
    dibujarBotonRect(width / 3 - 100, height - 100, 120, 50, "Círculo");
    dibujarBotonRect(2 * width / 3 - 20, height - 100, 120, 50, "Cuadrado");
  } else if (estado == 9) { 
    dibujarBotonRect(width - 150, height - 80, 120, 50, "Siguiente");
  } else if (estado == 10) { 
    dibujarBotonRect(width / 2 - 80, height - 100, 160, 50, "Volver al inicio");
  } else if (estado == 11) { 
    dibujarBotonRect(width - 150, height - 80, 120, 50, "Siguiente");
  } else if (estado == 12) { 
    dibujarBotonRect(width - 150, height - 80, 120, 50, "Siguiente");
  } else if (estado == 13) { 
    dibujarBotonRect(width - 150, height - 80, 120, 50, "Siguiente");
  } else if (estado == 14) { 
    dibujarBotonRect(width / 3 - 100, height - 100, 120, 50, "Círculo");
    dibujarBotonRect(2 * width / 3 - 20, height - 100, 120, 50, "Cuadrado");
  } else if (estado == 15) { 
    dibujarBotonRect(width - 150, height - 80, 120, 50, "Siguiente");
  } else if (estado == 16) { 
    dibujarBotonRect(width / 2 - 80, height - 100, 160, 50, "Volver al inicio");
  } else if (estado == 17) { 
    dibujarBotonRect(width - 150, height - 80, 120, 50, "Siguiente");
  } else if (estado == 18) { 
    dibujarBotonRect(width / 2 - 80, height - 100, 160, 50, "Volver al inicio");
  }
}

function mostrarTextoCentrado() {
  fill(255);
  textAlign(CENTER, CENTER);
  let inicio = estado * 5; 
  let fin = inicio + 5;
  let y = height / 2 - 100;

  for (let i = inicio; i < fin && i < texto.length; i++) {
    text(texto[i], width / 2, y);
    y += 30;
  }
}

function dibujarBotonRect(x, y, w, h, txt) {
  fill(70, 145, 162);
  rect(x, y, w, h, 10);
  fill(255);
  textAlign(CENTER, CENTER);
  text(txt, x + w / 2, y + h / 2);
}

function keyPressed() {
  if (key === ' ') { 
    sonido.play();
  }
}

function mousePressed() {
  if (estado == 0) {
    if (mouseDentroRect(width / 2 - 50, height - 100, 100, 50)) {
      estado = 1;
    }
  } else if (estado >= 1 && estado <= 3) {
    if (mouseDentroRect(width - 150, height - 80, 120, 50)) {
      estado++;
    }
  } else if (estado == 4) {
    if (mouseDentroRect(width / 3 - 60, height - 100, 120, 50)) {
      estado = 7;
    }

    let dX = mouseX - botonX;
    let dY = mouseY - botonY;

    if (!cayo && abs(dX) < 50 && abs(dY) < 30) {
      rotando = true;
    }
  } else if (estado == 5) {
    if (mouseDentroRect(width - 150, height - 80, 120, 50)) {
      estado = 6;
    }
  } else if (estado == 6 || estado == 10 || estado == 16 || estado == 18) {
    if (mouseDentroRect(width / 2 - 80, height - 100, 160, 50)) {
      estado = 0;
      angulo = -90;
      rotando = false;
      cayo = false;
    }
  } else if (estado == 7) {
    if (mouseDentroRect(width - 150, height - 80, 120, 50)) {
      estado = 8;
    }
  } else if (estado == 8) {
    if (mouseDentroRect(width / 3 - 100, height - 100, 120, 50)) {
      estado = 9;
    } else if (mouseDentroRect(2 * width / 3 - 20, height - 100, 120, 50)) {
      estado = 11;
    }
  } else if (estado == 9) {
    if (mouseDentroRect(width - 150, height - 80, 120, 50)) {
      estado = 10;
    }
  } else if (estado == 11) {
    if (mouseDentroRect(width - 150, height - 80, 120, 50)) {
      estado = 12;
    }
  } else if (estado == 12) {
    if (mouseDentroRect(width - 150, height - 80, 120, 50)) {
      estado = 13;
    }
  } else if (estado == 13) {
    if (mouseDentroRect(width - 150, height - 80, 120, 50)) {
      estado = 14;
    }
  } else if (estado == 14) {
    if (mouseDentroRect(width / 3 - 100, height - 100, 120, 50)) {
      estado = 15; 
    } else if (mouseDentroRect(2 * width / 3 - 20, height - 100, 120, 50)) {
      estado = 17; 
    }
  } else if (estado == 15) {
    if (mouseDentroRect(width - 150, height - 80, 120, 50)) {
      estado = 16; 
    }
  } else if (estado == 17) {
    if (mouseDentroRect(width - 150, height - 80, 120, 50)) {
      estado = 18; 
    }
  }
}

function mouseDentroRect(x, y, w, h) {
  return mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h;
}
