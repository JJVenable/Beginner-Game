//Global variables
let player = 'RED';
const gameBoard = document.getElementById('game-board');
const boardTiles = [];

// tell me who is playing
const currentPlayerTurn = () => `It's ${player}'s turn.`;
document.getElementById('turnReadout').innerHTML = currentPlayerTurn();

// // Restart Game Button// broken @ merge
// document.getElementById('restartButton').addEventListener('click', function () {
//   // document.getElementByClass("innerTile").innerHTML = '';
//   document
//     .querySelectorAll('.innerTile')
//     .forEach((innerTile) => (innerTile.innerHTML = ''));
//   document
//     .querySelectorAll('.redStarterTile')
//     .forEach((redStarterTile) => (redStarterTile.innerHTML = 'R'));
//   document
//     .querySelectorAll('.blackStarterTile')
//     .forEach((blackStarterTile) => (blackStarterTile.innerHTML = 'B'));
// });
///===== from playground ==

class Tile {
  constructor(tile, coords) {
    this.tile = tile;
    this.coords = coords;
  }
}

/// got this to work by moving script
// needed for makeTheBoard
const placeNewTileDown = (className) => {
  let newTile = document.createElement('div');
  newTile.classList = `innerTile ${className}`;
  gameBoard.appendChild(newTile);
  return newTile;
};

/// make checkerboard colors
const makeTheBoard = () => {
  for (let i = 0; i < 8; i++) {
    let className = i % 2 === 0 ? 'light' : 'dark';
    let tile = placeNewTileDown(className);
    //console.log(tile.getBoundingClientRect()); // coordinates
    let newTile = new Tile(tile, tile.getBoundingClientRect());
  }
  for (let i = 8; i < 16; i++) {
    let className = i % 2 === 0 ? 'dark' : 'light';
    let tile = placeNewTileDown(className);
    //console.log(tile.getBoundingClientRect()); // coordinates
    let newTile = new Tile(tile, tile.getBoundingClientRect());
  }
  for (let i = 16; i < 24; i++) {
    let className = i % 2 === 0 ? 'light' : 'dark';
    let tile = placeNewTileDown(className);
    //console.log(tile.getBoundingClientRect()); // coordinates
    let newTile = new Tile(tile, tile.getBoundingClientRect());
  }
  for (let i = 24; i < 32; i++) {
    let className = i % 2 === 0 ? 'dark' : 'light';
    let tile = placeNewTileDown(className);
    //console.log(tile.getBoundingClientRect()); // coordinates
    let newTile = new Tile(tile, tile.getBoundingClientRect());
  }
  for (let i = 32; i < 40; i++) {
    let className = i % 2 === 0 ? 'light' : 'dark';
    let tile = placeNewTileDown(className);
    //console.log(tile.getBoundingClientRect()); // coordinates
    let newTile = new Tile(tile, tile.getBoundingClientRect());
  }
  for (let i = 40; i < 48; i++) {
    let className = i % 2 === 0 ? 'dark' : 'light';
    let tile = placeNewTileDown(className);
    //console.log(tile.getBoundingClientRect()); // coordinates
    let newTile = new Tile(tile, tile.getBoundingClientRect());
  }
  for (let i = 48; i < 56; i++) {
    let className = i % 2 === 0 ? 'light' : 'dark';
    let tile = placeNewTileDown(className);
    //console.log(tile.getBoundingClientRect()); // coordinates
    let newTile = new Tile(tile, tile.getBoundingClientRect());
  }
  for (let i = 56; i < 64; i++) {
    let className = i % 2 === 0 ? 'dark' : 'light';
    let tile = placeNewTileDown(className);
    //console.log(tile.getBoundingClientRect()); // coordinates
    let newTile = new Tile(tile, tile.getBoundingClientRect());
  }
};

// RUN IT ALL
makeTheBoard();
///== from playground ==
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
  .querySelectorAll('.dark')
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
