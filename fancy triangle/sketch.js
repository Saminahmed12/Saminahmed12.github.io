// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let triVertex = [
  {x: 400, y: 100},
  {x: 100, y: 700},
  {x: 700, y: 700},

];

let depth = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);

}

function draw() {
  background(220);
  recTri(triVertex, depth);
}

function mousePressed(){
  depth++;
}

function recTri(points, degree){

  let theCOlours =["blue", "green", "red","orange","yellow","black","purple","navy","white","lightblue","lightgreen","pink","cyan"];
  fill(theCOlours[degree]);
  noStroke();
  triangle(points[0].x, points[0].y,points[1].x, points[1].y,points[2].x, points[2].y);

  if (degree > 0) {
    recTri([points[0], 
      getMid(points[0], points[1]),
      getMid(points[0], points[2])],
    degree-1);

    recTri([points[1], 
      getMid(points[0], points[1]),
      getMid(points[1], points[2])],
    degree-1);

    recTri([points[2], 
      getMid(points[0], points[2]),
      getMid(points[1], points[2])],
    degree-1);
  }

}

function getMid(point1, point2){
  let xDif = (point1.x + point2.x)/2;
  let yDif = (point1.y + point2.y)/2;
  let midpoint = {x: xDif, y: yDif};
  return midpoint;
}