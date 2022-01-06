class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smoke = loadImage("sprites/smoke.png");
    this.trayectory = [];
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    super.display();
    
      if(this.body.velocity.x > 10 && this.body.position.x > 200){
        var position = [this.body.position.x,this.body.position.y];
        this.trayectory.push(position);
      }
      
      for(var a = 0; a < this.trayectory.length; a++){
        image(this.smoke,this.trayectory[a][0],this.trayectory[a][1])
      }
  }
}
