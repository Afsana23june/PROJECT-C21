var ball;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine,world;
function preload()
{
	
}

function setup() {
	createCanvas(1300, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	groundObj=new Ground(650,1250,1300,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  groundObj.show();
 
}



