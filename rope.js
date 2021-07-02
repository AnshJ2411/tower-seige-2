class rope{
    constructor(b1,p2){
        var r={bodyA:b1,pointB:p2,length:125,stiffness:0.3}
        this.p=p2
        this.ro=Matter.Constraint.create(r)
        World.add(world,this.ro)
    }
    fly(){
        this.ro.bodyA=null
    }
    display(){
        if(this.ro.bodyA){strokeWeight(4)
            line(this.ro.bodyA.position.x,this.ro.bodyA.position.y,this.p.x,this.p.y)
        }}
        
}