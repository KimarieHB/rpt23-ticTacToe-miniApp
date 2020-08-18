let turn = 1;

const addXO = (event) => {
  let id = event.target.id;
  if (turn % 2 === 1) {
   document.getElementById(id).innerHTML = 'X';
   document.getElementById('message').innerHTML = 'Now it is O\'s turn!';
  } else {
   document.getElementById(id).innerHTML = '0';
   document.getElementById('message').innerHTML = 'Time for X to go!';
  }
  turn++;
}

const gameReset = () => {
  turn = 1;
  let squares = document.getElementsByClassName('square');
  for (let i = 0; i < 9; i++) {
    let id = squares[i].id;
    document.getElementById(id).innerHTML = '';
  }
  document.getElementById('message').innerHTML = 'X goes first!';

}