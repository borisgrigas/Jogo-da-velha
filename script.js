let squares = document.querySelectorAll('.square');
let resetButton = document.querySelector('#reset');
let currentPlayer = 'x';
let gameActive = true;

function handleMove(square, index) {
  if (gameActive && square.innerText === '') {
    square.innerText = currentPlayer;
    square.classList.add(currentPlayer);
    checkWin();
    currentPlayer = currentPlayer === 'x' ? 'o' : 'x';
  }
}

function checkWin() {
  let winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (let i = 0; i < winningCombos.length; i++) {
    let combo = winningCombos[i];
    let a = squares[combo[0]];
    let b = squares[combo[1]];
    let c = squares[combo[2]];
    if (a.innerText !== '' && a.innerText === b.innerText && b.innerText === c.innerText) {
      gameActive = false;
      a.classList.add('win');
      b.classList.add('win');
      c.classList.add('win');
      alert(`${currentPlayer.toUpperCase()} ganhou!`);
    }
  }
}

function resetGame() {
  for (let i = 0; i < squares.length; i++) {
    squares[i].innerText = '';
    squares[i].classList.remove('x');
    squares[i].classList.remove('o');
    squares[i].classList.remove('win');
  }
  currentPlayer = 'x';
  gameActive = true;
}

for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener('click', function() {
      handleMove(this, i);
    });
  }
  
  resetButton.addEventListener('click', resetGame);