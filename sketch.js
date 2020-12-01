var moving_rect, fixed_rect
var rectangle1, rectangle2, rectangle3, rectangle4;


function setup() {
  createCanvas(1200,800);
  fixed_rect = createSprite(200, 200, 50, 80);
  fixed_rect.shapeColor = "yellow";
  moving_rect = createSprite(400, 200, 80, 30);
  moving_rect.shapeColor = "blue";
  moving_rect.debug = true;
  fixed_rect.debug = true;
  rectangle1 = createSprite(100, 300, 80, 30);
  rectangle1.shapeColor = "green";
  rectangle1.debug = true;
  rectangle2 = createSprite(200, 300, 80, 30);
  rectangle2.shapeColor = "green";
  rectangle2.debug = true;
  rectangle3 = createSprite(650, 200, 80, 30);
  rectangle3.shapeColor = "green";
  rectangle3.debug = true;
  rectangle3.velocityY = 1;
  rectangle4 = createSprite(650, 700, 80, 30);
  rectangle4.shapeColor = "green";
  rectangle4.debug = true;
  rectangle4.velocityY = -1;
  
}

function draw() {
  background("white");  
  
  moving_rect.x = World.mouseX;
  moving_rect.y = World.mouseY;

  

  if (isTouching(moving_rect, rectangle1)) {

    moving_rect.shapeColor = "red";
    rectangle1.shapeColor = "red";

  }

  else {

    moving_rect.shapeColor = "blue";
    rectangle1.shapeColor = "yellow";

  }
  bounceOff(rectangle3,rectangle4);
  drawSprites();
}


