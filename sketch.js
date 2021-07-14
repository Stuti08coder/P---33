const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


function setup() {
  createCanvas(800,400);
  engine = Engine.create();

  
  world = engine.world;

  snow1 = new Snow(400,200,20)
}

function draw() {
  background("yellow");  
  Engine.update(engine);
 
  
  


snow1.display();



//  drawSprites();
}