// whack a mole with a bad twist
// Samin Ahmed
// 10/18/2021
//testing local machine


// globalVariables
let gridDim = 5;
let grid;
let sqrSize;
let mole;
let timer = 4;
let grass;
let theme;
let squish;

function preload(){
  // loadsSoundsAndImages
  theme = loadSound("assets/theme.mp3");
  squish = loadSound("assets/squish.mp3");
  mole = loadImage("assets/mole.png");
  grass = loadImage("assets/grass.jpg");
}
function setup() { 
  // setsUpCanvasAndArray
  if (windowHeight > windowWidth){
    createCanvas(windowWidth, windowWidth);
  }
  else{
    createCanvas(windowHeight,windowHeight);
  }
  
  grid = createRandomArray(gridDim);
  sqrSize = width/gridDim;
}

function draw() {
  // drawsEverything
  background(grass);
  displayGrid();
  gameTimer();
  if (keyIsDown(32)){
    theme.loop();
  }
}

function mousePressed() {
  // swapsTilesWhenMouseClicked
  if (timer > 0){
    if (mouseX <= width && mouseY <= height) {
      let sqrX = Math.floor(mouseX/sqrSize);
      let sqrY = Math.floor(mouseY/sqrSize);
      swap(sqrX, sqrY);
    }
  }
}
  

function swap(x, y) {
  // swaps0To1AndViseVersa
  if (x >= 0 && x < gridDim && y >= 0 && y < gridDim) {
    if (grid[y][x] === 0) {
      grid[y][x] = 1;
    }
    else if (grid[y][x] === 1) {
      grid[y][x] = 0;
      squish.play();
    }
  }
}


function displayGrid() {
  // displaysTheGrid
  for (let y=0; y<gridDim; y++) {
    for (let x=0; x<gridDim; x++) {
      if(grid[y][x] === 0) {
        fill("white");
        noStroke();
        rect(x*sqrSize, y*sqrSize, sqrSize, sqrSize);
      }
      else if(grid[y][x] === 1) {
        image(mole,x*sqrSize, y*sqrSize, sqrSize, sqrSize);
      }
      
    }
  }
}


function createRandomArray(howLarge){
  // createsNewAraay
  let newArray = [];
  for (let y = 0; y < howLarge; y++){
    newArray.push([]);
    for (let x = 0; x < howLarge; x++){
      if (random(0,100) > 50){
        newArray[y].push(0);
      }
      else{
        newArray[y].push(1);
      }
      
    }
  }
  return newArray;
}

function gameTimer() {
  // timerForTheGame
  textAlign(CENTER, CENTER);
  textSize(100);
  fill("black");
  if (timer > 0){
    text(timer, width/2, height/2);
  }
  if (frameCount % 60 === 0 && timer > 0) { 
    timer --;
  }
  if (timer === 0) {
    if (didYouWin()){
      text("YOU WIN", width/2, height/2);
    }
    else {
      text("GAME OVER", width/2, height/2); 
    }
    
  }
}


function didYouWin(){
  // checkingIfYouWon
  let counter =0;
  for (let y=0; y<gridDim; y++){
    for (let x=0; x<gridDim; x++){
      if (grid[y][x] === 1){
        counter++;
      }  
    }
  }
  if (counter === 0){
    return true;
  }
}

