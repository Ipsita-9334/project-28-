
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var tree, boy, boyImg, boyObj;
var mangoImg, mango1, mango2, mango3, mango4, mango5;
var stoneImg, stone;


function preload()
{
	boyImg = loadImage("Images/boy.png");
}

function setup() {
	createCanvas(900, 900);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	mango1 = new mango(70, 600, 5,5);
	mango2 = new mango(80, 750, 5,5);
	mango3 = new mango(65, 880, 5,5);
	mango4 = new mango(70, 780, 5,5);
	mango5 = new mango(90, 666, 5,5);
	
	detectCollision(stone, mango1);
	detectCollision(stone, mango2);
	detectCollision(stone, mango3);
	detectCollision(stone, mango4);
	detectCollision(stone, mango5);

	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

  boy = createSprites(50, 70, 40,70);
	
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  
  drawSprites();
 
}

function detectCollision(){
	mangoBodyPosition = lmango.body.position
	stoneBodyPosition = lstone.body.position
	
	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
	if(distance <= lmango.r + lstone.r)
	{
		Matter.Body.setStatic(lmango.body, false);
	}
	 
} 

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX, y: mango.body });
}

function mouseReleased(){
    stone.fly();
}

function keyPressed(){
	if(keyCode == 32){
		Matter.Body.setPosition(stoneObj.body, {x: 235, y: 420})
		launcherObject.attach(stoneObj.body);
	}
}
