
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var rope1, rope2, rope3, rope4, rope5;
var roof;

//function preload(){}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    bobObject1 = new Bob(350, 400, 50);
	bobObject2 = new Bob(400, 400, 50);
	bobObject3 = new Bob(450, 400 ,50);
	bobObject4 = new Bob(500, 400, 50);
	bobObject5 = new Bob(550, 400, 50);
	rope1 = new Rope(bobObject1.body, {x:350, y:100});
	rope2 = new Rope(bobObject2.body, {x:400, y:100});
	rope3 = new Rope(bobObject3.body, {x:450, y:100});
	rope4 = new Rope(bobObject4.body, {x:500, y:100});
	rope5 = new Rope(bobObject5.body, {x:550, y:100});
	roof = new Roof(450, 100, 300, 20);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  roof.display();


  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bobObject1.body, bobObject1.position, {x:-30,y:155});
	}
}

