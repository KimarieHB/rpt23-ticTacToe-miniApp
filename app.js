let turn = 1;
const gamePlay = () => {
  turn = 1;
}

const addXO = (event) => {
  let id = event.target.id;
  if (turn % 2 === 1) {
   document.getElementById(id).innerHTML = 'X';
  } else {
   document.getElementById(id).innerHTML = '0';
  }
  turn++;
}

const gameReset = () => {
  gamePlay();
  let squares = document.getElementsByClassName('square');
  for (let i = 0; i < 9; i++) {
    let id = squares[i].id;
    document.getElementById(id).innerHTML = '';
  }
  document.getElementById('message').innerHTML = 'X goes first!';

}