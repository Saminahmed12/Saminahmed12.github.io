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

  for (let i= 0; i < 5; i++){
    spawnBall();
  }
  window.setInterval(spawnBall, 1000);
}

function draw() {
  background('lightblue');

  checkIfTouching();
  displayBall();
  moveBall();
}

function mousePressed(){
  spawnBall();
  ballArray[ballArray.length -1].x = mouseX;
  ballArray[ballArray.length -1].y = mouseY;
}

function checkIfTouching(){
  for (let i = ballArray.length-1; i>= 0 ; i--){
    let howFar = dist(ballArray[i].x, ballArray[i].y, mouseX,mouseY);
    if (howFar < ballArray[i].radius){
      ballArray.splice(i,1);
    }
  }
}

function spawnBall(){
  // for (let i = 0; i < 100; i ++){
    let newBall = {
      x: random(width),
      y: random(height),
      radius: random(10, 30),
      ballColour: color(random(255), random(255), random(255), random(255)),
      dx: random(5,10),
      dy: random(5,10),
      xTime: random(0, 1000),
      yTime: random(0, 1000),
      timeChange: random(0.001, 0.01)
    };
    ballArray.push(newBall);
  // }
}

function moveBall() {
  for (let theBall of ballArray) {
    // theBall.x+= theBall.dx; 
    // theBall.y+= theBall.dy;
    // theBall.dx = random(-5,5);
    // theBall.dy = random(-5,5);

    theBall.x = noise(theBall.xTime) * width;
    theBall.y = noise(theBall.yTime) * height;

    theBall.xTime += theBall.timeChange;
    theBall.yTime += theBall.timeChange;
}

}


function displayBall() {
  for (let ball of ballArray){
    noStroke();
    fill(ball.ballColour);
    circle(ball.x,ball.y,ball.radius*2);
    
  }
}


