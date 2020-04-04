var Rect1;


function setup() {
  createCanvas(800,800);

  Rect1 = createSprite(400,350,50,50);
  

}

function draw() {
  background ("white");


  Rect1.x = World.mouseX;
  Rect1.y = World.mouseY;

  if (Rect1.x >200 || Rect1.y>200){

  background("pink");

  }

  if (Rect1.x<300||Rect1.y < 300 ){

    background("yellow");
  }

if (Rect1.x<100|| Rect1.y <100 ){

  background("red");
}
  drawSprites();
}
