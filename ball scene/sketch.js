// ball scene
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let ballArray =[];
// let x, y, dx, dy, radius, ballColour; 



function setup() {
  createCanvas(windowWidth, windowHeight);


  for (let i = 0; i < 100000; i ++){
    let newBall = {
      x: random(width),
      y: random(height),
      radius: random(10, 30),
      ballColour: color(random(255), random(255), random(255), random(255)),
      dx: random(5,10),
      dy: random(5,10)
    };
    ballArray.push(newBall);
  }
}

function draw() {
  background('lightblue');
  displayBall();
  moveBall();
}

function moveBall() {
  for (let theBall of ballArray) {
    theBall.x+= theBall.dx; 
    theBall.y+= theBall.dy;
    theBall.dx = random(-5,5);
    theBall.dy = random(-5,5);
}

}


function displayBall() {
  for (let ball of ballArray){
    noStroke();
    fill(ball.ballColour);
    circle(ball.x,ball.y,ball.radius*2);
    
  }
}


