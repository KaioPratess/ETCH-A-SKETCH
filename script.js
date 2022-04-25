const board = document.querySelector('.board');
const sizeInput = document.querySelector('.square-size input');
const sizeLabel = document.querySelector('.square-size label');
const clearBtn = document.querySelector('.clear-btn');
const paintColor = document.querySelector('.paint-color input');
const randomColor = document.querySelector('.random-color input');
const colorPalette = document.querySelector('.palette input');
const eraser = document.querySelector('.eraser input');

// Set default size and display
sizeInput.value = 16;
const squareSize = +sizeInput.value;
sizeLabel.textContent = `${sizeInput.value} x ${sizeInput.value}`;

createMatrix(squareSize);

// Create a square div
function createSquare(squareSize)  {
  const div = document.createElement('div'); 
  div.style.border = '1px solid rgba(0,0,0,.1)';
  div.style.flex = `1 1 calc(100% / ${squareSize})`;
  div.classList.add('square');
  board.appendChild(div);  
}

// Create a matrix and start paint and clear functions
function createMatrix(squareSize) {
  board.textContent = '';
  const matrix = new Array(squareSize).fill(0).map(() => new Array(squareSize).fill(0));
  for(let column of matrix) {
    for(let row of column) {
      createSquare(squareSize);
    }
  }
  const square = document.querySelectorAll('.square');
  setPaintEvent(square);
  removePaintEvent(square);
  clearBoard(square);
}

let opacityLevel = 0;

function paintSquare(event) {
  if(randomColor.checked) {
    const colorRandom = `rgba(${getRandom(0,255)},${getRandom(0,255)},${getRandom(0,255)}, ${Math.random() * (1 - 0) + 0})`;
    event.target.style.backgroundColor = colorRandom;
  } 
  else if(eraser.checked) {
      event.target.style.backgroundColor = 'white';
  }
  else {
    if(colorPalette.checked) {
      if(opacityLevel <= 1) {
        opacityLevel += 0.1;
      } else {
        opacityLevel = 0.1;
      }
      event.target.style.opacity = opacityLevel;
    }
    const color =  `${paintColor.value}`;
    event.target.style.backgroundColor = color;
  }
} 

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min) + min)
}  

function setPaintEvent(square) {
  board.addEventListener('mousedown', (event) => {
    paintSquare(event);
    square.forEach((item) => {
      item.addEventListener('mouseenter', paintSquare)
    });
  })
}

function removePaintEvent(square) {
  board.addEventListener('mouseup', () => {
    square.forEach((item) => {
      item.removeEventListener('mouseenter', paintSquare)
    })
  });
}

function clearBoard(square) {
  clearBtn.addEventListener('click', () => {
    square.forEach((item) => {
      item.style.backgroundColor = 'white';
      item.style.opacity = 1;
    })
  });
}

// change the label text content
sizeInput.addEventListener('input', function() {
  sizeLabel.textContent = `${sizeInput.value} x ${sizeInput.value}`;
  createMatrix(+this.value)
});
