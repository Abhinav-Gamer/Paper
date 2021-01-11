
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper1
var engine, world
function preload()
{
	
}

function setup() {
 var canvas = createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	paper1 = new paper(200,200,9)
	ground = new Ground(200,height,400,20)

	Engine.run(engine);
  
}


function draw() {
  Engine.update(engine);
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  ground.display();
  paper1.display();
}



