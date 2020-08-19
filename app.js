let gameValues = {
  turn: 1,
  selectedBoxes: []
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
}

const addO = (id) => {
  document.getElementById(id).innerHTML = '0';
  document.getElementById('message').innerHTML = 'Time for X to go!';
  gameValues.turn++;
  gameValues.selectedBoxes.push(id);
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
