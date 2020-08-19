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

let playerScore = {
  playerX: [],
  playerO: []
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
  playerScore.playerX.push(parseInt(id.slice(3)));
}

const addO = (id) => {
  document.getElementById(id).innerHTML = '0';
  document.getElementById('message').innerHTML = 'Time for X to go!';
  gameValues.turn++;
  gameValues.selectedBoxes.push(id);
  playerScore.playerO.push(id.slice(3));
}


const gameReset = () => {
  gameValues.turn = 1;
  gameValues.selectedBoxes = [];
  let squares = document.getElementsByClassName('square');
  for (let i = 0; i < 9; i++) {
    let id = squares[i].id;
    document.getElementById(id).innerHTML = '';
  }
  document.getElementById('message').innerHTML = 'X goes first!';
}


