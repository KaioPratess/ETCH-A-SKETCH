const board = document.querySelector('.board');
const defaultSize = 16;

function createSquare()  {
  const div = document.createElement('div'); 
  div.style.border = '0.5px solid black';
  div.classList.add('squares');
  div.style.flex = `1 1 calc(100% / ${defaultSize})`;
  board.appendChild(div);
}


// Create multidimensional array
let matrix = new Array(defaultSize).fill(0).map(() => new Array(defaultSize).fill(0));

// Loops through the array
for(let column = 0; column < matrix.length; column++) {
  for(let row = 0; row < matrix[column].length; row++) {
    createSquare();
  }
}


// 2. prompt the user for a square size
// 3. Allow the user to select a color
// 4. Allow the user to clear the board
// 5. Display configurations in the board
//     2. set the div’s size to the user input
//     3. set a hover effect that changes the color of the div when the mouse go through it