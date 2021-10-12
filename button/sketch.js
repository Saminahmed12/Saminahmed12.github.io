// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let bgclr = "white";
let buttonOne;


function setup() {
  createCanvas(windowWidth, windowHeight);
  buttonOne = new Button(300,400,200,100);
}

function draw() {
  background(bgclr);
  buttonOne.display();
}

function mousePressed(){
  if (buttonOne.checkIfInside(mouseX,mouseY)){
    bgclr = color(random(255));
  }
} 

class Button {
  constructor ( x, y, w, h){
    this.x = x;
    this.y = y;
    this.width = w;
    this.height = h;
    this.hvrclr = "blue";
    this.dfltclr = "navy";
  }

  display() {
    if (this.checkIfInside(mouseX, mouseY)){
      fill(this.hvrclr);
    }
    else {
      fill(this.dfltclr);
    }
    rect(this.x,this.y,this.width,this.height);
  }

  checkIfInside(x,y){
    return x >= this.x && x <= this.x + width && y >=this.y && y <= this.y + this.height;
  }
}