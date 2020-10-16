
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1500, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	paper = new Paper(50, 50, 30);

	bottom = new Dustbin(750, 690, 1600, 20);

	 side1 = new Dustbin(1000, 630, 5, 100);
	side2 = new Dustbin(1350, 630, 5, 100);
	side3 = new Dustbin(1175, 680, 350, 5)

	Engine.run(engine);
  
}


function draw() {
  background(0);
 



  paper.display();
  bottom.display();
  side1.display();
  side2.display();
  side3.display();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position, {x:85, y:-85});
	}
}

