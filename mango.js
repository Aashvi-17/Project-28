class mango {
    constructor(x,y,r){
        var options = {
            isStatic:true,
            restitution:0,
            friction:1,
            
          }
          this.x=x;
          this.y=y;
          this.r=r    
    this.image=loadImage("Plucking mangoes/mango.png")
    this.body=Bodies.circle(this.x,this.y,this.r,options)
    this.image.scale=30;
    World.add(world,this.body);
    
   
    }
    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        push()
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
		ellipseMode(CENTER);
        image(this.image, 0,0,this.r*2, this.r*2)
        
       // ellipseMode(RADIUS);
      //ellipse(this.image,0, 0);
      
        pop();
    }}
    