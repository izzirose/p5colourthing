function setup() {
  createCanvas(600, 600);
  colorMode(HSB)
}

function draw() {
  
   background(mouseY,100,100);
  noStroke()
  fill(mouseX,100,100)
  circle(300,300,mouseX);
  
  //console.log(mouseX, mouseY)
}

