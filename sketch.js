var rect1,rect2,rect3,rect4;

function setup() {
  createCanvas(800,400);
 rect1 = createSprite(100,200,50,50);
 rect1.shapeColor = "gold";
 rect2 = createSprite(550,200,50,50);
 rect2.shapeColor = "silver";
 rect3 = createSprite(300,60,50,50);
 rect3.shapeColor = "skyblue"
 rect4 = createSprite(300,400,50,50);
 rect1.velocityX = 11
 rect2.velocityX = -11
 rect4.velocityY = -11
 rect3.velocityY = 11
}

function draw() {
  background(0);  
  drawSprites();
  bounceOff(rect1,rect2);
  bounceOff(rect1,rect3);
  bounceOff(rect4,rect2);
  bounceOff(rect3,rect4);
}



function bounceOff(rect1,rect2){
   if(rect1.x-rect2.x<=rect1.width/2+rect2.width/2 &&
      rect2.x-rect1.x<=rect1.width/2+rect2.width/2 )
   {
      rect1.velocityX = rect1.velocityX*(-1)
      rect2.velocityX = rect2.velocityX*(-1)
    
    }
 
 
    if(rect1.y-rect2.y<=rect1.height/2+rect2.height/2 &&
    rect2.y-rect1.y<=rect1.height/2+rect2.height/2 )
 {
    rect1.velocityY = rect1.velocityY*(-1)
    rect2.velocityY = rect2.velocityY*(-1)
  
  }
}