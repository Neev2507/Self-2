const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var plane1;
var alien1;
function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  plane1 = new plane(150,250,500,400);
  alien1 = new alien(150,400,500,400);
}

function draw() {
  background(255,255,255);  
  Engine.update(engine);
  plane1.display();
  alien1.display();
  drawSprites();
}