
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj, paperObject,groundObject	
var world;

function preload(){
	dustbinImg=loadImage("sprites/dustbingreen.png")
}
function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	
	paper=new Paper(100,450,70);
	ground=new Ground(800,690,2600,30);
	d1=new Dustbin(1300,665,200,20);
	d2=new Dustbin(1250,625,20,100);
	d3=new Dustbin(1350,625,20,100);

	dustbinObj = createSprite(1300,550,20,20);
	dustbinObj.addImage(dustbinImg);
	dustbinObj.scale=0.75;
	//Create a Ground
	

	// var render = Render.create({
	//   element: document.body,
	//   engine: engine,
	//   options: {
	//     width: 1200,
	//     height: 700,
	//     wireframes: false
	//   }
	// });

	//Engine.run(engine);
	//Render.run(render);
  
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  background("white");
 
  paper.display();
  ground.display();
  d1.display();
  d2.display();
  d3.display();
 
  
  drawSprites();
 
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
		//Matter.Body.applyForce(body,position,{force});
		
    
  	}
}





