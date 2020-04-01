var fixedRect,object1;


function setup() {
  createCanvas(800,800);
  Rect1 = createSprite(200, 100, 50, 50);
  Rect2 = createSprite(200,350,50,100);
  
  Rect1.velocityY = 4;
 Rect2.velocityY =-3; 
}

function draw() {
  background("black");  




 

JumpOff (Rect1,Rect2);

  drawSprites();
}
