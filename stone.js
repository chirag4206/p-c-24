class Stone {
    constructor(x,y,width,height) {
      var options = {
         'density': 3,
         'friction':1.0,
         'restitution':0.5,
         'mass':1,
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("yellow");
      rect(pos.x, pos.y, this.width, this.height);
    }
  };
