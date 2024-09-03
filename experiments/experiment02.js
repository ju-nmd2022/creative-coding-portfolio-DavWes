function setup() {
  createCanvas(1000, 1000);
}

const size = 5;
const divider = 10;
const numRows = 100;
const numCols = 100;

function draw() {
  background(255, 255, 255);
  noStroke();
  fill(0, 0, 0);

  for (let y = 0; y < numRows; y++) {
    for (let x = 0; x < numCols; x++) {
      const value = noise(x / divider, y / divider) * size;
      const posX = size / 2 + x * size;
      const posY = size / 2 + y * size;

      if (random() < 0.5) {
        // Draw an ellipse
        ellipse(posX, posY, value);
      } else {
        // Draw a square
        rectMode(CENTER);
        rect(posX, posY, value, value);
      }
    }
  }

  noLoop();
}
