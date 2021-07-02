class Block{
    constructor(x, y, width, height) {
        var options = {
                     
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
        this.fade=255
      }
      display(){
        var angle = this.body.angle;
        var pos= this.body.position;
       
        if(this.body.speed<2){
          push();
          translate(pos.x, pos.y);
          rotate(angle*180/PI);
          rectMode(CENTER);
          rect(0,0,this.width, this.height);
          pop();
          
        }
        else{
          push()
          World.remove(world, this.body);
          tint(255,this.fade)
          this.fade=this.fade-2
          pop()
        }
      }
}
