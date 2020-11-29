const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;

function setup() {
  createCanvas(1000,800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(500,785,1000,30);
  grounda = new Ground(600,600,200,20);
  groundb = new Ground(800,300,200,20);
  // lvl 1
  boxa1 = new Box(540,575,30,40);
  boxa2 = new Box(570,575,30,40);
  boxa3 = new Box(600,575,30,40);
  boxa4 = new Box(630,575,30,40);
  boxa5 = new Box(660,575,30,40);
  // lvl 2
  boxa6 = new Box1(570,535,30,40);
  boxa7 = new Box1(600,535,30,40);
  boxa8 = new Box1(630,535,30,40);
  // lvl 3
  boxa9 = new Box(600,495,30,40);
  
  // lvl 1
  boxb1 = new Box(740,275,30,40);
  boxb2 = new Box(770,275,30,40);
  boxb3 = new Box(800,275,30,40);
  boxb4 = new Box(830,275,30,40);
  boxb5 = new Box(860,275,30,40);
  // lvl 2
  boxb6 = new Box1(770,235,30,40);
  boxb7 = new Box1(800,235,30,40);
  boxb8 = new Box1(830,235,30,40);
  // lvl 3
  boxb9 = new Box(800,195,30,40);

  poolygon = new Polygon(80,575,40,40);

  sling = new Sling(poolygon.body,{x:100,y:200});

}

function draw() {
  background(0,0,0); 
  Engine.update(engine);

  ground .display();
  grounda.display();
  groundb.display();
  poolygon.display();

  //sling.display();
  boxa1.display();
  boxa2.display();
  boxa3.display();
  boxa4.display();
  boxa5.display();

  boxa6.display();
  boxa7.display();
  boxa8.display();
  boxa9.display();
   
  boxb1.display();
  boxb2.display();
  boxb3.display();
  boxb4.display();
  boxb5.display();

  boxb6.display();
  boxb7.display();
  boxb8.display();

  boxb9.display();

  drawSprites();
}

function mouseDragged () {
  Matter.Body.setPosition(poolygon.body,{x:mouseX,y:mouseY});
}

function mouseReleased () {
  sling.fly();
}