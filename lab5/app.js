/*-------------------------------- Constants --------------------------------*/

const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],   
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],  
  [0, 4, 8],
  [2, 4, 6]    
];

/*---------------------------- Variables (state) ----------------------------*/

let board;  
let turn;    // 'X' أو 'O'
let winner;  // true / false
let tie;     // true / false

/*------------------------ Cached Element References ------------------------*/

const squareEls = document.querySelectorAll('.sqr');
const messageEl = document.querySelector('#message');
const resetBtnEl = document.querySelector('#reset');

/*----------------------------- Event Listeners -----------------------------*/

squareEls.forEach(square => {
  square.addEventListener('click', handleClick);
});

resetBtnEl.addEventListener('click', init);

/*-------------------------------- Functions --------------------------------*/


function init() {
  board = ['', '', '', '', '', '', '', '', ''];
  turn = 'X';
  winner = false;
  tie = false;
  render();
}


function render() {
  updateBoard();
  updateMessage();
}


function updateBoard() {
  board.forEach((value, index) => {
    squareEls[index].textContent = value;
  });
}


function updateMessage() {
  if (!winner && !tie) {
    messageEl.textContent = `It's ${turn}'s turn`;
  } else if (!winner && tie) {
    messageEl.textContent = "It's a tie! 🐱";
  } else {
    messageEl.textContent = `${turn} wins! 🎉`;
  }
}


function handleClick(evt) {
  const sqIdx = parseInt(evt.target.id.replace('sq', ''));


  if (winner || board[sqIdx] !== '') return;

  placePiece(sqIdx);
  checkForWinner();
  checkForTie();
  switchPlayerTurn();
  render();
}

function placePiece(index) {
  board[index] = turn;
}

function checkForWinner() {
  for (let combo of winningCombos) {
    const [a, b, c] = combo;
    if (
      board[a] &&
      board[a] === board[b] &&
      board[a] === board[c]
    ) {
      winner = true;
      return;
    }
  }
  winner = false;
}

function checkForTie() {
  if (winner) return;

  if (board.includes('')) {
    tie = false;
  } else {
    tie = true;
  }
}

function switchPlayerTurn() {
  if (winner) return;
  turn = (turn === 'X') ? 'O' : 'X';
}

/*------------------------------ Start Game --------------------------------*/

init();