//
let player = 'RED';
// tell me who is playing
const currentPlayerTurn = () => `It's ${player}'s turn.`;
document.getElementById('turnReadout').innerHTML = currentPlayerTurn();

// Restart Game Button
document.getElementById('restartButton').addEventListener('click', function () {
  // document.getElementByClass("innerTile").innerHTML = '';
  document
    .querySelectorAll('.innerTile')
    .forEach((innerTile) => (innerTile.innerHTML = ''));
  document
    .querySelectorAll('.redStarterTile')
    .forEach((redStarterTile) => (redStarterTile.innerHTML = 'R'));
  document
    .querySelectorAll('.blackStarterTile')
    .forEach((blackStarterTile) => (blackStarterTile.innerHTML = 'B'));
});

// Change Current Player Button
document
  .getElementById('playerTurnButton')
  .addEventListener('click', function () {
    changePlayer();
  });
// Change Player
function changePlayer() {
  player = player === 'RED' ? 'BLACK' : 'RED';
  document.getElementById('turnReadout').innerHTML = currentPlayerTurn();
}

// click listener for playble tiles
document
  .querySelectorAll('.clickableTile')
  .forEach((clickableTile) =>
    clickableTile.addEventListener('click', whenTileClicked)
  );

// CLICK FUNCTION when tile clicked
//select square, select other square, delete first square,
// put element into second.
function whenTileClicked(clickedTileEvent) {
  const clickedTile = clickedTileEvent.target;
  switch (player) {
    case 'RED':
      // IN HERE CHECK IF FULL, EMPTY IT, CHANGE MESSAGE
      clickedTile.innerHTML = 'R';
      break;
    case 'BLACK':
      clickedTile.innerHTML = 'B';
      break;
  }
}

// CLICK FUNCTION when tile clicked
//select square, select other square, delete first square,
// put element into second.
// function whenTileClicked(clickedTileEvent) {
//   const clickedTile = clickedTileEvent.target;
//   switch (player) {
//     case 'RED':
//       // IN HERE CHECK IF FULL, EMPTY IT, CHANGE MESSAGE TO WHERE TO MOVE?>
//       switch case clickedTile.innerHTML = '':{
//         clickedTile.innerHTML = 'R';
//         break;
//       case clickedTile.innerHTML = 'R':
//         clickedTile.innerHTML = '';
//         break;
//       default:
//         alert("something went wrong1");
//       }
//     case 'BLACK':
//       case clickedTile.innerHTML = '': {
//         clickedTile.innerHTML = 'B';
//         break;
//       case clickedTile.innerHTML = 'B'
//         clickedTile.innerHTML = '';
//         break;
//       default:
//         alert("something went wrong2")
//   }
// }
