// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let gridDemensions = 5;
let grid;
let cellSize;
let mole;
let timer = 3;
// let spawnSpeed = 2000;
// let emptySlot;
// let time = 2000;
let grass;
function preload(){
  mole = loadImage("assets/mole.png");
  grass = loadImage("assets/grass.jpg");
}
function setup() { 
  if (windowHeight > windowWidth){
    createCanvas(windowWidth, windowWidth);
  }
  else{
    createCanvas(windowHeight,windowHeight);
  }
  
  grid = createRandomArray(gridDemensions);
  cellSize = width/gridDemensions;
  // emptySlot = [];
}

function draw() {
  background(grass);
  displayGrid();
  // spawnMole();
  gameTimer();
}

function mousePressed() {
  if (mouseX <= width && mouseY <= height) {
    let cellX = Math.floor(mouseX/cellSize);
    let cellY = Math.floor(mouseY/cellSize);
    swap(cellX, cellY);
    
  }
}
  

function swap(x, y) {
  if (x >= 0 && x < gridDemensions && y >= 0 && y < gridDemensions) {
    if (grid[y][x] === 0) {
      grid[y][x] = 1;
    }
    else if (grid[y][x] === 1) {
      grid[y][x] = 0;
    }
  }
}


function displayGrid() {
  for (let y=0; y<gridDemensions; y++) {
    for (let x=0; x<gridDemensions; x++) {
      if(grid[y][x] === 0) {
        fill("white");
        noStroke();
        rect(x*cellSize, y*cellSize, cellSize, cellSize);
      }
      else if(grid[y][x] === 1) {
        image(mole,x*cellSize, y*cellSize, cellSize, cellSize);
      }
      
    }
  }
}


function createRandomArray(howLarge){
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
  textAlign(CENTER, CENTER);
  textSize(100);
  fill("black");
  text(timer, width/2, height/2);

  if (frameCount % 60 === 0 && timer > 0) { 
    timer --;
  }
  if (timer === 0) {
    text("GAME OVER", width/2, height*0.7);
  }
}


// function spawnMole(){

//   if (millis()> time){
//     for (let y = 0; y< gridDemensions; y++){
//       for(let x = 0; x< gridDemensions;x++){
//         if (grid[y][x] === 0){
//           emptySlot.push({x, y});
//         }
//       }
//     }

//     for (let y = 0; y< emptySlot.length;y++){
//       for(let x = 0; x< emptySlot[y].length;x++){
//         swap(random(grid[emptySlot.y][emptySlot.x]));
//         time = millis() + 2000;
//       }
//     }
//   }
// }