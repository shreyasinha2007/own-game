class Character{
constructor(x, y, width, height){
this.body= Matter.Bodies.rectangle(x, y, 50, 50, {isStatic:false}) 
this.width=50;
this.height=50;
}

display(){
push()
fill("red");
rectMode(CENTER)
rect(this.body.position.x, this.body.position.y, this.width, this.height)
pop()

} 
}