document.addEventListener('DOMContentLoaded', (event) => {
  let squares = document.getElementsByClassName('square');
  for (let i = 0; i < 9; i++) {
    let id = squares[i].id;
    let square = document.getElementById(id)
    square.addEventListener("click", addXO(event));
  }
});

let gameValues = {
  turn: 1,
  selectedBoxes: []
}

let playerX ={
  '012': 0,
  '345': 0,
  '678': 0,
  '036': 0,
  '147': 0,
  '258': 0,
  '048': 0,
  '246': 0
}

let playerO ={
  '012': 0,
  '345': 0,
  '678': 0,
  '036': 0,
  '147': 0,
  '258': 0,
  '048': 0,
  '246': 0
}

const addXO = (event) => {
  let id = event.target.id;

  if (gameValues.selectedBoxes.indexOf(id) === -1) {
  
    if (gameValues.turn % 2 === 1) {
      addX(id);
    } else {
      addO(id);
    }
    
  } else {
    document.getElementById('message').innerHTML = 'That square is not available! Choose again!';
  }
  // All squares are full when turn = 10
}

const addX = (id) => {
  document.getElementById(id).innerHTML = 'X';
  document.getElementById('message').innerHTML = 'Now it is O\'s turn!';
  gameValues.turn++;
  gameValues.selectedBoxes.push(id);
  let boxString = id.slice(3);
  winnerCheck(boxString, playerX, 'X');
}

const addO = (id) => {
  document.getElementById(id).innerHTML = '0';
  document.getElementById('message').innerHTML = 'Time for X to go!';
  gameValues.turn++;
  gameValues.selectedBoxes.push(id);
  let boxString = id.slice(3);
  winnerCheck(boxString, playerO, 'O');
}

const winnerCheck = (box, nameObj, player) => {
  for (let key in nameObj) {
    if (key.indexOf(box) !== -1) {
      nameObj[key] += 1;
      if (nameObj[key] === 3) {
        document.getElementById('message').innerHTML = `We have a winner! Player ${player} wins!!`;
        setTimeout(gameReset, 1500);
      }
    }
  }
}

const gameReset = () => {
  gameValues.turn = 1;
  gameValues.selectedBoxes = [];
  let squares = document.getElementsByClassName('square');
  for (let i = 0; i < 9; i++) {
    let id = squares[i].id;
    document.getElementById(id).innerHTML = '';
  }
  for (let key in playerX) {
    playerX[key] = 0;
    playerO[key] = 0;
  }
  document.getElementById('message').innerHTML = 'New game! X goes first!';
}