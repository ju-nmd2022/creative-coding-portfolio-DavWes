function setup() {
  createCanvas(800, 800); // Create a canvas of width 800 and height 800
  noLoop(); // Draw once
}

const squareSize = 22; // Define the size of each square
const spacing = 0; // Define the spacing between squares
const rows = 22; // Number of rows
const cols = 12; // Number of columns

function draw() {
  background(255); // Set the background to white

  // Calculate total width and height of the grid
  let totalWidth = cols * (squareSize + spacing) - spacing;
  let totalHeight = rows * (squareSize + spacing) - spacing;

  // Calculate starting positions
  let startX = (width - totalWidth) / 2; // Centering X position
  let startY = (height - totalHeight) / 3.3; // Centering Y position

  for (let i = 0; i < rows; i++) {
    // Loop for rows
    for (let j = 0; j < cols; j++) {
      // Loop for columns
      // Calculate the x and y positions for each square
      let x = startX + j * (squareSize + spacing); // Calculate x position
      let y = startY + i * (squareSize + spacing); // Calculate y position

      rect(x, y, squareSize, squareSize); // Draw the square
    }
  }
}
