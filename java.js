//
let player = 'p1';
const currentPlayerTurn = () => `It's ${player}'s turn.`;
document.getElementById('turnReadout').innerHTML = currentPlayerTurn();

// Restart Game Button
document.getElementById('restartButton').addEventListener('click', function () {
  // document.getElementByClass("innerTile").innerHTML = '';
  document
    .querySelectorAll('.innerTile')
    .forEach((innerTile) => (innerTile.innerHTML = ''));
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

// event listener
document
  .querySelectorAll('.innerTile')
  .forEach((innerTile) => innerTile.addEventListener('click', whenTileClicked));

// when tile Clicked
function whenTileClicked(clickedTileEvent) {
  const clickedTile = clickedTileEvent.target;
  clickedTile.innerHTML = 'x';
}
