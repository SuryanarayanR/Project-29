class Polygon{
    constructor(x, y, width, height) {
        var options = {
            isStatic:false,
            'restitution':1,
            'friction':0.4,
            'density':0.5
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        rectMode(CENTER);
        rect(0,0, this.width, this.height);
        pop();
      }
}