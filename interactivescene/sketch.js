// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


//globalVariables4Ghost1
let g1x = 400;
let g1y = 400;
let g1w = 40;
let g1h = 40;
let g1Speedx = 4;
let g1Speedy = 10;
let hitG1;

//globalVariables4Ghost4
let g4x = 400;
let g4y = 400;
let g4w = 40;
let g4h = 40;
let g4Speedx = 2;
let g4Speedy = 7;
let hitG4;

//globalVariablesPacman
let px = 400
let py = 400
let pw = 40
let ph = 40
let pSpeed = 15

//preloadCharacters
function preload() {
  ghost1 = loadImage('assets/ghost1b.png');
  ghost4 = loadImage('assets/ghost4b.png');
  pm = loadImage('assets/pac.png');
  pmbg = loadImage('assets/pmbg.jpg')
}

//setup
function setup() {
  createCanvas(windowWidth, windowHeight);
  
}

//drawTheInteractiveScene
function draw() {
  background(pmbg);
  image(ghost1 ,g1x,g1y,g1w,g1h);
  image(ghost4 ,g4x,g4y,g4w,g4h);
  image(pm,px,py,pw,ph)
  moveGhost1();
  moveGhost4();
  movePacman();
  speedUp();
  console.log(pSpeed);
  speedDown();
  speedControl();

// collisionDetection  
  hitG1 = collideRectRect(g1x, g1y, g1w, g1h, px, py, pw, ph);
  hitG4 = collideRectRect(g4x, g4y, g4w, g4h, px, py, pw, ph);
  
}

// movingGhost1
function moveGhost1() {
  g1x = g1x + g1Speedx;
  if (g1x >= windowWidth - g1w || g1x <= 0) {
    g1Speedx = -g1Speedx;
  }
  g1y = g1y- g1Speedy;
  if (g1y>= windowHeight - g1h || g1y <= 0) {
    g1Speedy = -g1Speedy;
  }
}

// movingGhost4
function moveGhost4() {
  g4x = g4x + g4Speedx;
  if (g4x >= windowWidth - g4w || g4x <= 0) {
    g4Speedx = -g4Speedy
  }
  g4y = g4y- g4Speedy;
  if (g4y>= windowHeight - g4h || g4y <= 0) {
    g4Speedy = -g4Speedy
  }
}

// movingPacman
function movePacman(){
  if (keyIsDown(68)) {
    px += pSpeed;
  }
  if (keyIsDown(65)) {
    px -= pSpeed;
  }
  if (px >= width -pw){
    px = 0 + pw;
  }
  if (px <= 0 - pw){
    px = width - pw;
  }
}

// clickingGhosts
function speedUp(){
//   ghost 1
  if (mouseIsPressed){
    if (mouseX >= g1x && mouseX <= g1x+g1w && mouseY >= g1y && mouseY <= g1y+g1h) {
      pSpeed = pSpeed+10;
    }
    }
//   ghost 4
  if (mouseIsPressed){
    if (mouseX >= g4x && mouseX <= g4x+g4w && mouseY >= g4y && mouseY <= g4y+g4h) {
      pSpeed = pSpeed+1;
    }
    }
}

// pacCollision
function speedDown(){
  if (hitG1){
    pSpeed = pSpeed-1
  }
  if (hitG4){
    pSpeed = pSpeed-2
  }
}

// speed
function speedControl(){
  if (pSpeed < 0){
    pSpeed = 0
  }
}


  

// Notes/to-do

  // make pacman turn left/right  

  // Make noises everytime ghosts touch pacman, or ghosts is pressed

  // make header (//name // teacher // class //project name)
