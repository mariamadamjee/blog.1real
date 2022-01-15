function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  textSize(width / 3);
  textAlign(CENTER, CENTER);
}

function draw() {
  stroke(30);
  fill(30);
  text("blog", windowWidth / 2, windowHeight / 2);
  stroke(random(255), 180, 255);
  noFill();
  line(0, 0, mouseX, mouseY);
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(0);
}
