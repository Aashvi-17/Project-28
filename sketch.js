
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	boy3Image=loadImage("Plucking mangoes/boy3.png");
	treeImage=loadImage("Plucking mangoes/tree.png");
	boy2Image=loadImage("Plucking mangoes/boy2.gif");
}

function setup() {
	createCanvas(900, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
	boy3=createSprite(200,500,200,200);
	boy3.addImage(boy3Image)
	boy3.scale=0.3;

	boy2=createSprite(-80,530,200,200);
	boy2.addImage(boy2Image)
	boy2.scale=0.9;
	boy2.velocityX=6;
	boy2.visible=false;

	

	tree=createSprite(650,350,200,200);
	tree.addImage(treeImage)
	tree.scale=0.4;
  
	stonesprite= new stone(250,590,50,50);
	
	mangoObject1= new mango(580,160,30)
	mangoObject2= new mango(700,160,30)
	mangoObject3= new mango(550,280,30)
	mangoObject4= new mango(780,300,30)
	mangoObject5= new mango(640,250,30)

	platform = new Ground (800,600,1600,60)
	

	launcher = new Launcher(stonesprite.body,{x:150, y: 450});
	
}


function draw() {
  ellipseMode(CENTER)
  rectMode(CENTER);
  background("skyblue");
  textSize(30);
  fill('purple');
  textFont("Broadway");
  text("Press Space to get a second Chance to Play!!",50 ,50);

  
  
 
  
  stonesprite.display();
 
    
  stonesprite.display();
  platform.display();
  drawSprites();

  mangoObject1.display();
  mangoObject2.display();
  mangoObject3.display();
  mangoObject4.display();
  mangoObject5.display();
  
  detectollision(stonesprite,mangoObject1);
  detectollision(stonesprite,mangoObject2);
  detectollision(stonesprite,mangoObject3);
  detectollision(stonesprite,mangoObject4);
  detectollision(stonesprite,mangoObject5);
  

  

  launcher.display();
 
  
  
}
function detectollision(lstone,lmango){
		
	mangoBodyPosition=lmango.body.position
	stoneBodyPosition=lstone.body.position
	
	var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
	
	
  if (distance<=lmango.r+30)
 {
   Matter.Body.setStatic(lmango.body,false);
  

		  stroke("green");
    fill("green");
    textSize(30);
	text("YUMMY !!",370,140);
	boy3.visible=false;
	boy2.visible=true;
	  }
	  
	}

  function keyPressed(){
	if (keyCode === 32){
		Body.setPosition(stonesprite.body,{x:150,y:500});
		launcher.attach(stonesprite.body);
		
	}boy3.visible=true;}

	function mouseDragged(){
		Matter.Body.setPosition(stonesprite.body, {x:mouseX, y:mouseY})
	}
	
	function mouseReleased(){
		launcher.fly()
	}	
	

	
	  
	

