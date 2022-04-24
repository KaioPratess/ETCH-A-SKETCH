const clearBtn = document.querySelector('.clear-btn');
const board = document.querySelector('.board');
const sizeInput = document.querySelector('.square-size input');
const sizeLabel = document.querySelector('.square-size label');

sizeInput.value = 16;
const squareSize = +sizeInput.value;
sizeLabel.textContent = `${sizeInput.value} x ${sizeInput.value}`;

createMatrix(squareSize);


function createSquare(squareSize)  {
  const div = document.createElement('div'); 
  div.style.border = '0.5px solid black';
  div.style.flex = `1 1 calc(100% / ${squareSize})`;
  div.classList.add('square');
  board.appendChild(div);  
}

function createMatrix(squareSize) {
  board.textContent = '';
  const matrix = new Array(squareSize).fill(0).map(() => new Array(squareSize).fill(0));
  for(let column = 0; column < matrix.length; column++) {
    for(let row = 0; row < matrix[column].length; row++) {
      createSquare(squareSize);
    }
  }
}

sizeInput.addEventListener('change', function () {
  createMatrix(+this.value)
});

sizeInput.addEventListener('input', () => {
  sizeLabel.textContent = `${sizeInput.value} x ${sizeInput.value}`;
})

const square = document.querySelectorAll('.board div');
console.log(square)


function paintSquare(event) {
  event.target.style.backgroundColor = 'black';
} 

board.addEventListener('mousedown', (event) => {
  paintSquare(event);
  square.forEach((item) => {
    item.addEventListener('mouseenter', paintSquare)
  });
})

board.addEventListener('mouseup', () => {
  square.forEach((item) => {
    item.removeEventListener('mouseenter', paintSquare)
  })
});


function clearBoard() {
  square.forEach((item) => {
    item.style.backgroundColor = 'white';
  })
}

clearBtn.addEventListener('click', clearBoard);




  
// 2. prompt the user for a square size
// 3. Allow the user to select a color
// 4. Allow the user to clear the board
// 5. Display configurations in the board
//     2. set the div’s size to the user input
//     3. set a hover effect that changes the color of the div when the mouse go through it