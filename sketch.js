var ninja;
var opponent;
var tower;

function preload(){

ninja = loadImage("ninja.png")
opponent = loadImage("opponent.jpg")
tower = loadImage("tower.png")
}

function setup() {
 createcanvas = (400,400);
 tower = createSprite(150,150,10,15);
 ninja = createSprite(200,300);
 opponent = createSprite(200,50);

}

function draw() {
 
drawSprites()

}