//
let player = 'p1';

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
function changePlayer(player) {
  alert('change text!');
  if (player === 'p1') player = 'p2';
  else if (player === 'p2');
  player = 'p1';
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
