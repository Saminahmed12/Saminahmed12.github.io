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
let spawnSpeed = 2000;
let emptySlot = [];

function preload(){
  mole = loadImage("assets/mole.png");
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
}

function draw() {
  background(220);
  displayGrid();
  spawnMoles();
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


function spawnMoles(){
  for (let y = 0; y<gridDemensions; y++){
    for(let x = 0; x< gridDemensions;x++){
      if (grid [y] [x] === 0){
        emptySlot.push(x,y);
      }
    }
  }
}