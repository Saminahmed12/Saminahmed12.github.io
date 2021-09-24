// SpiderPac battle interactive scene
// Samin Ahmed
// 9/24/2021

// Extra for Experts:
// the canvas resizes to fit your screen (when refreshed)
// added music, it doesnt work unless you interact the screen while its still loading
// Made custom characters



// music
let bgTheme;

//globalVariables4Ghost1(greengoblin design)
let g1x;
let g1y;
let g1w;
let g1h;
let g1Speedx = 7;
let g1Speedy = 18;
let hitG1;

//globalVariables4Ghost4(venom design)
let g4x;
let g4y;
let g4w;
let g4h;
let g4Speedx = -5;
let g4Speedy = -14;
let hitG4;

//globalVariablesPacman
let px;
let py;
let pw;
let ph;
let pSpeed = 15;

//preloadCharacters
function preload() {
  bgTheme = loadSound('assets/spider.mp3');
  ghost1 = loadImage('assets/ghost1b.png');
  ghost4 = loadImage('assets/ghost4b.png');
  pm = loadImage('assets/pac.png');
  pmbg = loadImage('assets/pmbg.jpg');
}

//setup
function setup() {
if (mouseIsPressed) {  
  bgTheme.loop();
}

  createCanvas(windowWidth, windowHeight);

  g1x = width/2
  g1y = height/2

  g4x = g1x
  g4y = g1y
  px = g1x
  py = g1y

  if (height > width){
    g1w = width/20
    g1h = width/20
  }
  else{
    g1w = height/20
    g1h = height/20
  }

  g4w = g1w
  g4h = g1h
  pw = g1w
  ph = g1h
}

//drawTheInteractiveScene
function draw() {
  if (keyIsDown(32)) {  
    bgTheme.loop();
  }
  background(pmbg);
  image(ghost1 ,g1x,g1y,g1w,g1h);
  image(ghost4 ,g4x,g4y,g4w,g4h);
  image(pm,px,py,pw,ph);
  moveGhost1();
  moveGhost4();
  movePacman();
  speedUp();
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
    g4Speedx = -g4Speedx;
  }
  g4y = g4y- g4Speedy;
  if (g4y>= windowHeight - g4h || g4y <= 0) {
    g4Speedy = -g4Speedy;
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
  if (pSpeed >15){
    pSPeed = 15
  }
}
  

 // Notes/to-do               /
  // checked off everything \/
