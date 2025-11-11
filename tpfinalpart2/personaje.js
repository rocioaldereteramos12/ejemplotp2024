class Personaje{
  constructor(){
    this.x = width/2;
    this.y = height - 80;
    this.diam = 60;
    this.vel = 5;
  }

  actualizar(){
    if(keyIsDown(LEFT_ARROW)){
      this.x -= this.vel;
    }
    if(keyIsDown(RIGHT_ARROW)){
      this.x += this.vel;
    }

    if(this.x < this.diam/2){
      this.x = this.diam/2;
    }
    if(this.x > width - this.diam/2){
      this.x = width - this.diam/2;
    }
  }

  dibujar(){
    imageMode(CENTER);
    image(imgJugador, this.x, this.y, this.diam, this.diam);
  }

  moverConMouse(){
    this.x = mouseX;
  }
}
