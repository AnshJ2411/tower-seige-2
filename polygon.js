class polygon{
    constructor(x, y, width, height) {
        this.pl=loadImage("polygon.png")
        var options = {
                     
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        var pos= this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.pl,0,0,this.width, this.height);
        pop();
      }
}
