const Engine = Matter.Engine;
 const World= Matter.World; 
 const Bodies = Matter.Bodies;

var ball;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world; 
  
  object = Bodies.rectangle(200,100,50,50);
  World.add(world,object);
  var ground_options = {
    isStatic:true
  }
  ground = Bodies.rectangle (200,380,400,90,ground_options);
  World.add(world,ground);
  var ball_options = {
    restitution:1.0
  }
  //createSprite(400, 200, 50, 50);
  ball = Bodies.circle(200,200,50,ball_options);
  World.add(world,ball);
}

function draw() {
  background(0);  
  Engine.update (engine);
  rectMode (CENTER)
  rect(ground.position.x,ground.position.y,400,20)
  circle(ball.position.x,ball.position.y,20);
  
}