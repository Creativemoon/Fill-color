function setup() {
  createCanvas(440, 280);
}

function draw() {
  background( '#d5ea4d')
  
  stroke(0);
  strokeWeight(1);
  fill(200, 0, 0);
  ellipse(150, 150, 160, 160);

  fill(150, 120, 0);
  rect(145, 40, 10, 30);

  stroke(50, 150, 0);
  strokeWeight(2);
  fill(0, 225, 0);
  quad(145, 70, 120, 60, 110, 45, 125, 50);

  noStroke();
  fill('#d5ea4d');
  ellipse(220, 120, 60, 60);
  
  
}