
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var world,boy;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;
 
	
	Engine.run(engine);
 // Render.run(render);
}

function draw() {

  background(230);
  //frameRate(2)
 // Engine.update(engine)
  
}

