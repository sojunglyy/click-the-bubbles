let bubbles = [];


function setup() {
  createCanvas(windowWidth, windowHeight);
  noCursor();
  for (let i = 0; i < 100; i++) {
    let x = random(width);
    let y = random(height);
    let r = random(10, 40);
    bubbles[i] = new Bubble(x, y, r);
  }
}

function mousePressed() {
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].clicked(mouseX, mouseY);
  }
}

//function mousePressed(){
//let r=random(20,60);
//let b = new Bubble(mouseX, mouseY, r);
//bubbles.push(b);
//}

function draw() {
  background(0);
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].move();
    bubbles[i].show();
  }
  noStroke();
  fill(255,0,0);
  ellipse(mouseX,mouseY,10,10);
}