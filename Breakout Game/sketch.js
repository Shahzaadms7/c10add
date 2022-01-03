var paddle,ball;
var edgeT,edgeR, edgeB,edgeL;

function setup() {
  createCanvas(450, 400);

  //paddle sprite
  paddle = createSprite(280, 380, 100, 5);
  paddle.shapeColor = "black";

  //ball sprite
  ball = createSprite(150, 250, 15, 15);
  ball.shapeColor = "orange";

  //Top edge
  edgeT = createSprite(225, 0, 450, 5);
  edgeT.shapeColor = "gray";

  //Bottom edge
  edgeB = createSprite(225, 400, 450, 5);
  edgeB.shapeColor = "gray";

  //Left edge
  edgeL = createSprite(0, 200, 5, 400);
  edgeL.shapeColor = "gray";

  //Right edge
  edgeR = createSprite(450, 200, 5, 400);
  edgeR.shapeColor = "gray";

  //Create function around the for loop:
  function createBrickRow(y,brickColor){

  
    for (var x = 55; x < 400; x = x + 55) {
      var brick = createSprite(x, y, 50, 20);
      brick.shapeColor = brickColor;
    }
  }
    
  

  //Row 1 : y : 75
  createBrickRow(75,"blue");
  //Row 2 : y : 100
  createBrickRow(100,'gray');
  //Row 3 : y : 125
  createBrickRow(125,'black');
}

function draw() {
  background("honeydew");

  //make paddle move with mouse:
 paddle.x=mouseX;
 paddle.y=mouseY;
  if (mouseIsPressed) {
    ball.velocityX = 4; 
    ball.velocityY = 4; 
  }

  ball.bounceOff(edgeL);
  ball.bounceOff(edgeR);
  ball.bounceOff(edgeT);
  ball.bounceOff(edgeB);
  ball.bounceOff(paddle);
  
  drawSprites();
}

