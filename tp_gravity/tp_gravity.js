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

function preload() {
  for (let i = 0; i < 7; i++) {
    imagenes[i] = loadImage("assets/p" + (i+1) + ".png");
  }
  texto = loadStrings("assets/texto.txt");
  botonImg = loadImage("assets/botmov.png"); 
}

function setup() {
  createCanvas(640, 480);
  textSize(20);
  estado = 0; 

  botonX = 2 * width / 3; 
  botonY = height - 120;
}

function draw() {
background(220);

  image(imagenes[estado], 0, 0, width, height);

  fill(255);
  textAlign(CENTER, CENTER);
  text(texto[estado], width/2, height/2);

  if (estado == 0) {
    dibujarBotonRect(width/2 - 50, height - 100, 100, 50, "Inicio");
  } else if (estado >= 1 && estado <= 3) {
    dibujarBotonRect(width - 150, height - 80, 120, 50, "Siguiente");
  } else if (estado == 4) {
    dibujarBotonRect(width/3 - 60, height - 100, 120, 50, "Cuadrado");

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
    dibujarBotonRect(width/2 - 80, height - 100, 160, 50, "Volver al inicio");
  }
}

function dibujarBotonRect(x, y, w, h, txt) {
  fill(70, 145, 162);
  rect(x, y, w, h, 10);
  fill(255);
  textAlign(CENTER, CENTER);
  text(txt, x + w/2, y + h/2);
}

function mousePressed() {
  if (estado == 0) {
    if (mouseDentroRect(width/2 - 50, height - 100, 100, 50)) {
      estado = 1;
    }
  } else if (estado >= 1 && estado <= 3) {
    if (mouseDentroRect(width - 150, height - 80, 120, 50)) {
      estado++;
    }
  } else if (estado == 4) {
    if (mouseDentroRect(width/3 - 60, height - 100, 120, 50)) {
      estado = 4; 
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
  } else if (estado == 6) {
    if (mouseDentroRect(width/2 - 80, height - 100, 160, 50)) {
      estado = 0;
      angulo = -90;
      rotando = false;
      cayo = false;
    }
  }
}

function mouseDentroRect(x, y, w, h) {
  return mouseX > x && mouseX < x+w && mouseY > y && mouseY < y+h;
}
