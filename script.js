//     1. create div’s to fullfil a 920px container
// 1. Set default square size
const board = document.querySelector('.board');
const boardWidth = board.clientWidth;
let size = 5;

function createSquare()  {
  const div = document.createElement('div'); 
  div.style.height = 'auto';
  div.style.minWidth = 'auto';
  div.style.border = '0.5px solid black';
  div.classList.add('squares');
  board.appendChild(div);
}

let matrix = new Array(5).fill(0).map(() => new Array(5).fill(0));

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