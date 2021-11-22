//Global variables
let player = 'RED';
const gameBoard = document.getElementById('game-board');
const boardTiles = [];

// tell me who is playing
const currentPlayerTurn = () => `It's ${player}'s turn.`;
document.getElementById('turnReadout').innerHTML = currentPlayerTurn();

// // Restart Game Button// broken @ merge
document.getElementById('restartButton').addEventListener('click', function () {
  // document.getElementByClass("innerTile").innerHTML = '';
  document
    .querySelectorAll('.innerTile')
    .forEach((innerTile) => (innerTile.innerHTML = ''));
  let testStarter = document.elementFromPoint(288.5, 312 & 328, 272);
  testStarter.innerHTML = 'Work?';
  document
    .querySelectorAll('.blackStarterTile')
    .forEach((blackStarterTile) => (blackStarterTile.innerHTML = 'B'));
});
///===== from playground ==

// construct TILE
class Tile {
  constructor(tile, coords) {
    this.tile = tile;
    this.coords = coords;
  }
}

///
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
// save for breaking
function whenTileClicked(clickedTileEvent) {
  const clickedTile = clickedTileEvent.target;
  switch (player) {
    case 'RED':
      clickedTile.innerHTML = 'R';
      console.log(clickedTile.getBoundingClientRect());
      break;
    case 'BLACK':
      clickedTile.innerHTML = 'B';
      console.log(clickedTile.getBoundingClientRect());
      break;
  }
}

//  FUNCTION TEST Zone
// this is the bottom right most tile
// {
//   "x": 288.5,
//   "y": 312,
//   "width": 40,
//   "height": 40,
//   "top": 312,
//   "right": 328.5,
//   "bottom": 352,
//   "left": 288.5
// }

// console.log(document.elementFromPoint(288.5, 312));

// function redStarters() {
//   let testStarter = document.elementFromPoint(288.5, 312);
//   testStarter.id = 'redStarterTile';
//   testStarter.innerHTML = 'StartS';
// }
// redStarters();
