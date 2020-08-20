
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
      tieCheck(playerX);
    } else {
      addO(id);
      tieCheck(playerO);
    }
  } else if (turn === 10) {

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
        deactivateClick();
        setTimeout(() => {
          document.getElementById('message').innerHTML = 'Press New Game! to play again!';
        }, 1800);
      }
    }
  }
}

const tieCheck = (player, noWin) => {
  for (let key in player) {
    if (player[key] !== 3) {
      noWin = true;
    }
  }

  if (noWin === true && gameValues.turn === 10) {
    document.getElementById('message').innerHTML = `There is a tie! NO ONE wins!!`;
    deactivateClick();
    setTimeout(() => {
      document.getElementById('message').innerHTML = 'Press New Game! to play again!';
    }, 2500);
  }
}

const deactivateClick = () => {
  let squares = document.getElementsByClassName('square');
  for (let i = 0; i < 9; i++) {
    let id = squares[i].id;
    document.getElementById(id).removeAttribute('onClick');
  }
}

const gameReset = () => {
  gameValues.turn = 1;
  gameValues.selectedBoxes = [];
  let squares = document.getElementsByClassName('square');
  for (let i = 0; i < 9; i++) {
    let id = squares[i].id;
    document.getElementById(id).innerHTML = '';
    document.getElementById(id).setAttribute('onClick', 'addXO(event)');
  }
  for (let key in playerX) {
    playerX[key] = 0;
    playerO[key] = 0;
  }
  document.getElementById('message').innerHTML = 'New game! X goes first!';
}