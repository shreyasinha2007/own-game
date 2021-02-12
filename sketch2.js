const Bodies = Matter.Bodies;
const Engine = Matter.Engine;
const World= Matter.World;
const Constraint = Matter.Constraint;

var engine, world;
var owncharacter;
var pirate1, pirate2, pirate3, pirate4, pirate5;


function setup() {
createCanvas(800,400);
engine=Engine.create() 
world=engine.world;
owncharacter= new Character(100, 100);
pirate1= new obstacle(random(100,800), random(100, 400), 150, 150);
pirate2= new obstacle(random(100,800), random(100, 400), 150, 150);
pirate3= new obstacle(random(100,800), random(100, 400), 150, 150);
pirate4= new obstacle(random(100,800), random(100, 400), 150, 150);
pirate5= new obstacle(random(100,800), random(100, 400), 150, 150);
}
function draw() {
background(255,255,255);
Engine.update(engine);
owncharacter.display();
pirate1.display();
pirate2.display();
pirate3.display();
pirate4.display();
pirate5.display();

drawSprites();
}
function keyPressed(){
if (keyIsDown(UP_ARROW)){
    owncharacter.y=owncharacter.y-10;
    }
}