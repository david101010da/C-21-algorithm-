var fixedRect,movingRect;
var object1,object2;
var gameObject1,gameObject2;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 80, 50);
  movingRect = createSprite(200,200,50,80);
  fixedRect.shapeColor = "green";
  movingRect.shapeColor = "green"
  gameObject1 = createSprite(100,100,80,30);
  gameObject2 = createSprite(700,100,80,30);
  gameObject1.shapeColor = "green";
  gameObject2.shapeColor = "green";
  gameObject1.velocityX = 5;
  gameObject2.velocityX = -8;
}

function draw() {
  background(255,255,255);  
  movingRect.x = mouseX;
  movingRect.y = mouseY;

  if(isTouching(movingRect,gameObject2)){
   movingRect.shapeColor = "red";
   gameObject2.shapeColor = "red";
  }
  else{
    movingRect.shapeColor = "green";
    gameObject2.shapeColor = "green";
    }

    bounceOff(gameObject1,gameObject2);
  drawSprites();
  
}
