const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var bgImage
var particles = [];
var snows = [];
var snowfall =[];
var snowfallsize=300;




function setup() {
  createCanvas(800,400);
  engine = Engine.create();
bgImage = loadImage("snow1.jpg")
  
  world = engine.world;
  snow1 = new Snow(400,200,15)
particle = new Particles(400,200,5)
}
  for (var j = 75; j <=width; j=j+50) { 
    particles .push(new Particles(j,75));
  }



  

function draw() {
  background(bgImage);  
  Engine.update(engine);
 
  
  if(frameCount%50===0){
    snows.push(new Snows(random(width/2-10, width/2+10),15,15));
    
    
    }
  
  

fill("white")
snow1.display();
particle.display();


//  drawSprites();
}