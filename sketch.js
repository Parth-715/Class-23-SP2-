var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,w1,w2,w3
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	


	helicopterSprite=createSprite(50, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	packageSprite=createSprite(50, 80, 10,10,);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2
	packageSprite.x = helicopterSprite.x; 


	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	     
	engine = Engine.create();
	world = engine.world;


	packageBody = Bodies.circle(helicopterSprite.x, 200 , 5 , {restitution:0, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
	 w1 =createSprite(400, 620, 200,20);
	 w1.shapeColor=color("red")
	 
	 
	 var boxBase_options = { 
		 isStatic: true 
	 }

	 boxBase = Bodies.rectangle(400,620,200,20, boxBase_options); 
	 World.add(world,boxBase)
	 
	 w2=createSprite(500, 580, 20,100);
	 w2.shapeColor=color("red")
	 

	 var boxLeft_options = { 
		isStatic: true 
	}

	boxLeft = Bodies.rectangle(500,580,20,100, boxLeft_options); 
	World.add(world,boxLeft)
 
	 w3=createSprite(300, 580, 20,100);
	 w3.shapeColor=color("red")
	 var boxright_options = { 
		isStatic: true 
	}

	boxright = Bodies.rectangle(400,620,200,20, boxright_options); 
	World.add(world,boxright)
	


	Engine.run(engine);
  
}
   

function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
 packageSprite.y= packageBody.position.y 

  drawSprites();
  
}

function keyPressed() {
if (keyCode === LEFT_ARROW){
	helicopterSprite.x = helicopterSprite.x - 20; 
	//packageBody.position.x = packageBody.position.x- 20; 
	translation={x:-20,y:0}
    Matter.Body.translate(packageBody, translation)
}
else if (keyCode === RIGHT_ARROW){ 
	helicopterSprite.x = helicopterSprite.x + 20;
	//packageBody.position.x = packageBody.position.x +20; 
	translation={x:20,y:0}
    Matter.Body.translate(packageBody, translation)
}

 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.

		Matter.Body.setStatic(packageBody, false);

	
	  
  }
}


