class Launcher{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.004,
            length:0.05
        }
        this.launcher = Constraint.create(options);
        this.pointB=pointB;
        World.add(world, this.launcher);
    }

    display(){
        if(this.launcher.bodyA){
            var pointA = this.launcher.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(2);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
       
    }
    fly(){
       this.launcher.bodyA=null; 
    }
    attach(sbody){
        this.launcher.bodyA=sbody;
    }
}