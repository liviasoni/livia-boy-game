var jungle;
var boy,  boy_running;
var wood;

function preload(){
  backgroundImg = loadImage("jungle.jpg");
  boy_running = loadAnimation("boy1.png","boy2.png","boy3.png","boy4.png","boy5.png","boy6.png","boy7.png","boy8.png");
  wood = loadAnimation("wood.png");
}
function setup() {
  createCanvas(windowWidth, windowHeight);

  boy = createSprite(90,height-180,20,50);
  boy.addAnimation("boy",boy_running);
  boy.scale = 0.9;
  

}

function draw() {
  background(backgroundImg);
  spawnWoods();
  
  
  
  
  
  
  
  
  
  
  drawSprites();
}
function spawnWoods() {

  if (frameCount % 60 === 0) {
    
    var wood= createSprite(600,250,40,10);
   // wood.y = Math.round(random(120,200));
    wood.addImage(woodImage);
    wood.scale = 0.7;
    wood.velocityX = -3;
    wood.lifetime =300;
  }
}