class Box1{
    constructor(x, y, width, height) {
        var options = {
          isStatic : false,
            'restitution':0.5,
            'friction':0.2,
            'density':0.1
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
        fill('rgb(254,191,202)');
        rect( 0, 0, this.width, this.height);
        pop();
      }
}