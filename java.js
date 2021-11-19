//
let player = 'p1';
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
  player = player === 'p1' ? 'p2' : 'p1';
  document.getElementById('turnReadout').innerHTML = currentPlayerTurn();
}

// click listener for playble tiles
document
  .querySelectorAll('.clickableTile')
  .forEach((clickableTile) =>
    clickableTile.addEventListener('click', whenTileClicked)
  );

// CLICK FUNCTION
//select square, select other square, delete first square,
// put element into second.
function whenTileClicked(clickedTileEvent) {
  const clickedTile = clickedTileEvent.target;
  clickedTile.innerHTML = 'x';
}
