class Rubber {
    constructor(x,y,radius) {
      var options = {
         'density': 3,
         'friction':1.0,
         'restitution':0.5,
         'mass':1,
      }
      this.body=Bodies.circle(x, y, radius, options)
      this.radius = radius;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
     ellipseMode(RADIUS);
      fill("blue");
      ellipse(pos.x, pos.y, this.width, this.height);
    }
  };