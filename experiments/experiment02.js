function setup() {
  createCanvas(1000, 1000);
}

const size = 40;
const divider = 10;
const numRows = 10;
const numCols = 10;

function draw() {
  background(255, 255, 255);
  noStroke();
  fill(0, 0, 0);

  // noiseSeed(0);
  for (let y = 0; y < numRows; y++) {
    for (let x = 0; x < numCols; x++) {
      const value = noise(x / divider, y / divider) * size;
      ellipse(size / 2 + x * size, size / 2 + y * size, value);
    }
  }

  noLoop();
}
