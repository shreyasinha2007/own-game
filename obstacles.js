class obstacle{
constructor(x, y, width, height){
 this.body= Matter.Bodies.rectangle(x, y, width, height, {isStatic:false}) 
}
display(){
push()
fill("black");
rectMode(CENTER)
rect(this.body.position.x, this.body.position.y, this.width, this.height)
pop()

}
}