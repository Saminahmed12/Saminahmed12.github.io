// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let blake;
let drake;
let nate;
function setup() {
  createCanvas(windowWidth, windowHeight);
  blake = new Walker(width/2, height/2, "blue");
  drake = new Walker(width/2,height/2,"red");
  nate = new Walker(width/2,height/2,"green");
}

function draw() {
  // background(220);
  blake.move();
  blake.display();

  drake.move();
  drake.display();

  nate.move();
  nate.display();
}

class Walker{
  constructor(x, y, theColor){
    this.x = x;
    this.y = y;
    this.color = theColor;
    this.speed = 15;
    this.radius = 2;
  }

  display(){
    fill(this.color);
    stroke(this.color);
    circle(this.x,this.y,this.radius*2);
  }
  move(){
    let theChoice = random(100);
    if (theChoice <25){
      this.y -=this.speed;
    }
    else if(theChoice < 50) {
      this.y += this.speed;
    }
    else if (theChoice < 75) {
      this.x -= this.speed;
    }
    else {
      this.x += this.speed;
    }
  }

}

