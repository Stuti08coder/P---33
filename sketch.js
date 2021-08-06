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
  //snow1 = new Snow(400,200,15)
//particle = new Particles(400,200,5)

// for (var j = 75; j <=800; j=j+30) { 
//   snows.push(new Snow(j,75,15));
// }

}
  



  

function draw() {
  background(bgImage);  
  Engine.update(engine);
 
  
   if(frameCount%5===0){
   snows.push(new Snow(random(0, width),15,15));
         }
  
    

fill("white")
//snow1.display();
for (var k = 0; k <snows.length; k++) {
  snows[k].display();
}
//particle.display();


//  drawSprites();
}