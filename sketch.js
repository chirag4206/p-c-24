
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground,stone;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	ground = new Ground(400,690,800,20)
	stone = new Stone(600,500,50,50)
	rubber = new Rubber(300,400,25)
	//Create the Bodies Here.
	hammer = new Hammer(400,350,150,50);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  stone.display();
 rubber.display();
 hammer.display();
}



