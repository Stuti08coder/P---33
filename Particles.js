
class Particle{
    constructor(x,y,r) {
      var options = {
          restitution: 0.3
      }
    this.r = r;
      this.body = Bodies.circle(x,y,this.r,options);
     this.color = color(random(0,255), random(0,255), random(0,255))
      World.add(world, this.body);
    }
    display(){
    fill(this.color)
  push()
  translate(this.body.position.x , this.body.position.y)
  
    ellipse(0,0 , this.r , this.r);


    pop()
  //  push()
 
  
    }
  }