class Sistema{
  constructor(cantCaramelos, cantPodridos){
    this.jugador = new Personaje();
    this.caramelos = [];
    this.enemigos = [];
    this.puntos = 0;
    this.vidas = 3;
    this.estado = "jugando"; 
    for(let i=0; i<cantCaramelos; i++){
      this.caramelos.push(new Caramelo(2));
    }

    for(let i=0; i<cantPodridos; i++){
      this.enemigos.push(new Enemigo(3));
    }
  }

  update(){
    if(this.estado === "jugando"){
      this.jugador.actualizar();

      for(let i=0; i<this.caramelos.length; i++){
        let c = this.caramelos[i];
        if(c.activo){
          c.actualizar();
          c.reciclar();

          let d = dist(this.jugador.x, this.jugador.y, c.x, c.y);
          if(d < this.jugador.diam/2 + c.diam/2){
            this.puntos++;
            c.activo = false; 
          }
        }
      }

      for(let j=0; j<this.enemigos.length; j++){
        let e = this.enemigos[j];
        if(e.activo){
          e.actualizar();
          e.reciclar();

          let d2 = dist(this.jugador.x, this.jugador.y, e.x, e.y);
          if(d2 < this.jugador.diam/2 + e.diam/2){
            this.vidas--;
            e.activo = false; 
          }
        }
      }

      if(this.vidas <= 0){
        this.estado = "perdiste";
      }

      if(this.puntos >= 10){
        this.estado = "ganaste";
      }
    }
  }

  draw(){
    if(this.estado === "jugando"){
      for(let i=0; i<this.caramelos.length; i++){
        let c = this.caramelos[i];
        if(c.activo){
          c.dibujar();
        }
      }

      for(let j=0; j<this.enemigos.length; j++){
        let e = this.enemigos[j];
        if(e.activo){
          e.dibujar();
        }
      }

      this.jugador.dibujar();

      push();
      fill(255);
      textSize(20);
      text("Puntos: " + this.puntos, 20, 30);
      text("Vidas: " + this.vidas, 20, 55);
      pop();
    }

    if(this.estado === "perdiste"){
      push();
      fill(255,0,0);
      textSize(60);
      textAlign(CENTER, CENTER);
      text("¡Perdiste!", width/2, height/2);
      pop();
    }

    if(this.estado === "ganaste"){
      push();
      fill(0,255,0);
      textSize(60);
      textAlign(CENTER, CENTER);
      text("¡Ganaste!", width/2, height/2);
      pop();
    }
  }

  mousePressed(){
    this.jugador.moverConMouse();
  }
}
