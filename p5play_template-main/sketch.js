
function setup() {
  createCanvas(400,400);
  box = createSprite(200,200);
  box.shapeColor= "blue"
}

function draw() 
{
  background(30);
  drawSprites();
  if(keyIsDown(RIGHT_ARROW)){
    box.x=box.x+5
  }
  if(keyIsDown(LEFT_ARROW)){
    box.x=box.x-5
  }
}




