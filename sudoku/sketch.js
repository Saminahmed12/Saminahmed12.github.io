// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let initialGrid = [
  [0,2,4,3,8,0,0,0,0],
  [0,0,0,0,0,6,0,0,7],
  [0,5,8,0,0,0,4,0,0],
  [4,0,0,0,1,0,0,0,0],
  [0,0,0,7,0,5,0,0,0],
  [0,0,0,0,2,0,0,0,8],
  [0,0,1,0,0,0,6,7,0],
  [3,0,0,5,0,0,0,0,0],
  [0,0,0,0,4,9,2,1,0],
];
let gridDi = 9;
let cellSize; 
let grid;


function setup() {
  createCanvas(windowWidth, windowHeight);
  if (windowWidth < windowHeight){
    createCanvas(windowWidth,windowWidth);
  }
  else{
    createCanvas(windowHeight,windowHeight);
  }
  grid = initialGrid;
  cellSize = width/gridDi; 
}

function draw() {
  background(220);
  displayGrid();
}

function displayGrid() {
  for (let y = 0; y <gridDi; y++){
    for (let x = 0; x <gridDi; x++){
      fill("white");
      strokeWeight(1)
      rect(cellSize*x,cellSize*y,cellSize,cellSize);
      fill("black");
      if (grid[y][x] !== 0){
        
        textSize(cellSize/2);
        textAlign(CENTER, CENTER);
        text(grid[y][x],cellSize*x + cellSize/2,cellSize*y + cellSize/2);
      }
      
      
    }
  }

  drawCageLines();

}

function drawCageLines(){
  
  for (let location = 0; location <=9; location += 3){
    strokeWeight(4.5);
    line(0,location*cellSize,width,location*cellSize);
    line(location*cellSize,0,location*cellSize, height);
  }
  
}

