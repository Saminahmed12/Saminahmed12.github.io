// terrain


let heights = [];
let numberOfRect;


function setup() {
  createCanvas(windowWidth, windowHeight);
  numberOfRect = width;
  genTer(numberOfRect);
}

function draw() {
  background('lightblue');
  noStroke();
  fill('yellow')
  ellipse(100, 100, 100, 100)
  displayTerrain();
}

function displayTerrain(){
  let rectWidth = width/numberOfRect;
  fill('green');
  noStroke();
  for(let i=0; i <heights.length; i++){
    rect(i*rectWidth,height-heights[i],rectWidth,heights[i]);
  }  
}

function genTer(howMany){
  let time = 0;
  let dTime= 0.001;

  for (let i = 0; i<howMany; i++){
    let currentHeight = noise(time)*height;
    heights.push(currentHeight);
    time+=dTime;

  }
}