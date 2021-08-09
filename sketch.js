var spr;
function setup() {
  createCanvas(400,400);
  spr=createSprite(200,200,25,25);
  spr.shapeColor="red"
}

function draw() 
{
  background(30);
  drawSprites();
  if (keyDown("right")){
    spr.x=spr.x+2;
  }
  if(keyDown("left")){
    spr.x=spr.x-2
  }
  if(keyDown("up")){
    spr.y=spr.y-2
  }
  if(keyDown("down")){
    spr.y=spr.y+2
  }
}



