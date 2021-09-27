// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let gridSize = 10;
let grid;

function setup() {
  if (windowWidth > windowHeight){
    createCanvas(windowHeight, windowHeight);
  }
  else{
    createCanvas(windowWidth,windowWidth);
  }
    
  grid = ranGrid(gridSize);
}

function draw() {
  background(220);

  displayGrid();
}

function displayGrid(){
  let cellSize = width/gridSize;
  for (let y=0; y <grid.length; y++){
    for(let x=0;x<grid[y].length; x++){
      if(grid[y][x] === 0){
        fill("white");
      }
      else if(grid[x][y] === 1){
        fill("black");
      }
      rect(x*cellSize,y*cellSize,cellSize,cellSize);
    }
  }
}


function mtGrid(howLarge){
  let mtArray = [];
  for (let y=0; y<howLarge; y++){
    mtArray.push([]);
    for (let x=0; x<howLarge; x++){
      mtArray[y].push(0);
    }
  }
  return mtArray;
}

function ranGrid(howLarge){
  let mtArray = [];
  for (let y=0; y<howLarge; y++){
    mtArray.push([]);
    for (let x=0; x<howLarge; x++){
      if(random(0,100)>50){
        mtArray[y].push(0);
      }
      else{
        mtArray[y].push(1);
      }
    }
  }
  return mtArray;
}