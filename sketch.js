
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var gr;
var db1, db2, db3;
var engine, world;
var dustbinI, ballI;
var db;



function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ball=new CrumpledBalls(50,680,30);
	gr=new Ground(0,690,1600,20);
	db1=new Dustbin(580,640,20,70);
	db2=new Dustbin(630,680,140,20);
	db3=new Dustbin(680,630,20,80);
	db=new Dustbin(630,630,100,70);

	Engine.run(engine);
  
}


function draw() {
	Engine.update(engine);
  rectMode(CENTER);
  background("white");
  
  
 ball.display();
 gr.display();
 db1.display();
 db2.display();
 db3.display();
}

function keyPressed(){ 
	if (keyCode === UP_ARROW) 
	{ Matter.Body.applyForce(ball.body,ball.body.position,{x:50,y:-70}) };
 }

