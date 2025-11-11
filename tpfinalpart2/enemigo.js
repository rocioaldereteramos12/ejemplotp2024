class Enemigo{
  constructor(velocidad){
    this.vel = velocidad;
    this.reiniciar();
    this.activo = true;
  }

  reiniciar(){
    this.x = int(random(width));
    this.y = -int(random(100, 500));
    this.diam = int(random(40, 60));
    this.activo = true;
  }

  actualizar(){
    this.y += this.vel;
  }

  reciclar(){
    if(this.y > height + 50){
      this.reiniciar();
    }
  }

  dibujar(){
    imageMode(CENTER);
    image(imgPodrido, this.x, this.y, this.diam, this.diam);
  }
}
