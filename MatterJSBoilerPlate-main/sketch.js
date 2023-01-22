
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ball_options ={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
		
	}
	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Matter.Bodies.circle(20, 20, 10, [ball_options])
  drawSprites();
 
}



