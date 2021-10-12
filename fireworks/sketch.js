// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let fireworks = [];


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background("black");
  
  for (let i = fireworks.length-1; i >= 0 ; i--) {
    if (fireworks[i].isDead()){
      fireworks.splice(i,1);
    }
    else {
      fireworks[i].update();
      fireworks[i].display();
    }
     
  }
}

function mousePressed() {
  for (let i = 0; i < 100; i++) {
    let someParticle = new Particle(width/2,height/2);
    fireworks.push(someParticle);
  }
}

class Particle{
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.size = 10;
    this.dx = random(-7,7);
    this.dy = random(-7,7);
    this.alpha = 255;
    this.color = color(255,55,134,this.alpha);
  }

  display() {
    this.color = color(255,55,134,this.alpha);
    fill(this.color);
    noStroke();
    circle(this.x,this.y,this.size);
  }

  update() {
    this.x += this.dx;
    this.y += this.dy;

    this.alpha--;
  }

  isDead() {
    return this.alpha <= 0;
  }

}


