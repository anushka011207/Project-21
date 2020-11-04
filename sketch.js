var bullet, speed, weight;
var wall, thickness;
var damage;

function preload()  {

}

function setup() {
  createCanvas(1200,400);
  
  thickness = random(22,83);
  spped = random(223,321);
  weight = random(30,52);

  bullet = createSprite(50,200,40,10);
  bullet.shapeColor = "white";

  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = "gray";

  speed = random(55,90);
  weight = random(400,1500);

  damage = (0.5*weight*speed*speed)/(thickness*thickness*thickness);
}

function draw() {
  background("darkGray");  

  bullet.velocityX = speed;

  if(wall.x-bullet.x<(bullet.width+wall.width)/2)  {
    bullet.velocityX = 0;
    if(damage < 10)  {
      wall.shapeColor = "green";
    }
    if(damage > 100)  {
      wall.shapeColor = "red";
    }
  }
  drawSprites();
}