const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var bow;
var arrow;
var board;
var backgroundImg;

function preload(){
backgroundImg= loadImage("images/background1.jpg")
}

function setup() {
  createCanvas(1600,750);
  engine = Engine.create();
  world = engine.world;

  ground = new ground(600,height,2000,20);
  arrow=new Arrow(400,450);
  bow=new Bow(arrow.body,{x:400,y:450});
  board = new Board(500,400);
}

function draw() {
  background(backgroundImg);
  Engine.update(engine);
  ground.display();  
  bow.display();
  arrow.display();
  board.display();
  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(arrow.body, {x: mouseX , y: mouseY});
}
function mouseReleased(){
  bow.fly();
 }
