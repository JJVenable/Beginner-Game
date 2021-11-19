//
// clear the board
document.getElementById('restartButton').addEventListener('click', function () {
  // document.getElementByClass("innerTile").innerHTML = '';
  alert('button was successfully clicked.');
});

// tile click- change to be for one clicked
// document.querySelectorAll('.innerTile').forEach((tile) => {
//   tile.addEventListener('click', (whatever) => {
//     // alert('tile was clicked');
//     document.getElementById('a8').innerHTML = 'X';
//   });
// });
document
  .querySelectorAll('.innerTile')
  .forEach((innerTile) => innerTile.addEventListener('click', whenTileClicked));

function whenTileClicked() {
  alert('tile clicked!');
}
