var bullet,wall;
var speed,thickness,weight;




function setup() {
  createCanvas(1600,400);
  thickness = random(22,83);
  speed = random(223,321);
  weight = random(30,52);

  wall = createSprite(900,200,thickness,height/2);
  bullet = createSprite(50,200,50,50);
  bullet.velocityX = speed;
}

function draw() {
  background(255,255,255);

  if(hasCollide(bullet,wall)){
    
  bullet.velocityX = 0;
  var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness)

  if(damage>10){
    bullet.shapeColor = ("red");
  }
if(damage<10){
  bullet.shapeColor = ("green");
}


  }
  
  
  drawSprites();
}

function hasCollide(lbullet,lwall){
bulletRightEdge = lbullet.x+lbullet.width;
wallLeftEdge = lwall.x;
if(bulletRightEdge>=wallLeftEdge){
return true;
}
return false
}