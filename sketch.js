var thickness,wall;
var speed,weight,bullet;

function setup(){
var canvas = createCanvas(1600,400);
weight = random(32,52);
speed = random(5,10);
thickness = random(22,83);
bullet=createSprite (600,100,20,20);
wall = createSprite (1200,200,thickness,height/2);
bullet.velocityX = speed;
}

function hascollided(bullet,wall){
    bulletRightEdge= bullet.x -bullet.width/2;
    
if(bulletRightEdge>1200){

return true 
}

else{
    return false;
}
}

function draw(){
background("black")

if (hascollided(bullet,wall)){
    bullet.velocityX = 0;
    var damage = 0.5 *weight*speed*speed/(thickness*thickness*thickness);
    if (damage>10){
        wall.shapeColor=color(255,0,0);
    }
    if(damage<10){
        wall.shapeColor=color(0,255,0)
    }
}
drawSprites();
}