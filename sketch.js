var fixedRect, movingRect;
var gameObject1, gameObject2, gameObject3, gameObject4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 200, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  
  gameObject1 = createSprite(100,100,50,50);
  gameObject1.shapeColor = "cyan";

  gameObject2 = createSprite(200,100,50,50);
  gameObject2.shapeColor = "cyan";

  gameObject3 = createSprite(300,100,50,50);
  gameObject3.shapeColor = "cyan";

  gameObject4 = createSprite(400,100,50,50);
  gameObject4.shapeColor = "cyan";

  movingRect.velocityX = +5;
  fixedRect.velocityX = -5;
}


function draw() {
  background(0,0,0);  
  //movingRect.x = World.mouseX;
  //movingRect.y = World.mouseY;

  if(isTouching(gameObject2,movingRect)){
    movingRect.shapeColor = "red";
    gameObject2.shapeColor = "red";
  }
  else{
    movingRect.shapeColor = "green";
  gameObject2.shapeColor = "green";
  }
 bounceOff(movingRect,fixedRect);
  drawSprites();
}

