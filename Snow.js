class Snow{
    constructor(x, y,r) {
        var options = {
            'restitution':0.8,
          //  'friction':0.4,
          //  'density':1.0
        }
        this.body = Bodies.circle(x, y, r ,options);
   this.r = r
      
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        ellipseMode(CENTER);
        ellipse( 0, 0, this.r);
        pop();
      }

}