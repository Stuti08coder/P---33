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

  for (var j = 75; j <=width; j=j+50) { 
    particles .push(new Particles(j,75));
  }



  snow1 = new Snow(400,200,15)

}

function draw() {
  background(bgImage);  
  Engine.update(engine);
 
  
  if(frameCount%50===0){
    snows.push(new Snows(random(width/2-10, width/2+10),15,15));
    
    
    }
  
  

fill("white")
snow1.display();



//  drawSprites();
}