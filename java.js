//Global variables //
let player = 'RED';
const gameBoard = document.getElementById('game-board');
const boardTiles = [];
let jsPhoneBook = [];

// construct TILE  //
class Tile {
  constructor(tile, coords, starter) {
    this.tile = tile;
    this.coords = coords;
    this.starter = starter;
  }
}
// neighbor Functions //
function urnCoords(tile) {
  // coords is a list {0,1}
  let x = tile.coords.x;
  let y = tile.coords.y;
  let urnCoordPlot = [x + 40, y - 40];
  console.log(urnCoordPlot);
  return urnCoordPlot;
}
function ulnCoords(tile) {
  let x = tile.coords.x;
  let y = tile.coords.y;
  let ulnCoordPlot = [x - 40, y - 40];
  console.log(ulnCoordPlot);
  return ulnCoordPlot;
}
function lrnCoords(tile) {
  let x = tile.coords.x;
  let y = tile.coords.y;
  let lrnCoordPlot = [x + 40, y + 40];
  console.log(lrnCoordPlot);
  return lrnCoordPlot;
}
function llnCoords(tile) {
  let x = tile.coords.x;
  let y = tile.coords.y;
  let llnCoordPlot = [x - 40, y + 40];
  console.log(llnCoordPlot);
  return llnCoordPlot;
}

// needed for makeTheBoard  //
const placeNewTileDown = (className) => {
  let newTile = document.createElement('div');
  newTile.classList = `innerTile ${className}`;
  gameBoard.appendChild(newTile);
  return newTile;
};

/// make checkerboard w/ colors //
const makeTheBoard = () => {
  let row1 = [];
  for (let i = 0; i < 8; i++) {
    let className = i % 2 === 0 ? 'light' : 'dark';
    let tile = placeNewTileDown(className);
    let newTile = new Tile(tile, tile.getBoundingClientRect(), tile.starterRed);
    // push newTile into js phonebook
    row1.push(newTile);
  }
  jsPhoneBook.push(row1);
  let row2 = [];
  for (let i = 8; i < 16; i++) {
    let className = i % 2 === 0 ? 'dark' : 'light';
    let tile = placeNewTileDown(className);
    let newTile = new Tile(tile, tile.getBoundingClientRect(), tile.starterRed);
    row2.push(newTile);
  }
  jsPhoneBook.push(row2);
  let row3 = [];
  for (let i = 16; i < 24; i++) {
    let className = i % 2 === 0 ? 'light' : 'dark';
    let tile = placeNewTileDown(className);
    let newTile = new Tile(tile, tile.getBoundingClientRect(), tile.starterRed);
    row3.push(newTile);
  }
  jsPhoneBook.push(row3);
  let row4 = [];
  for (let i = 24; i < 32; i++) {
    let className = i % 2 === 0 ? 'dark' : 'light';
    let tile = placeNewTileDown(className);
    let newTile = new Tile(tile, tile.getBoundingClientRect());
    row4.push(newTile);
  }
  jsPhoneBook.push(row4);
  let row5 = [];
  for (let i = 32; i < 40; i++) {
    let className = i % 2 === 0 ? 'light' : 'dark';
    let tile = placeNewTileDown(className);
    let newTile = new Tile(tile, tile.getBoundingClientRect());
    row5.push(newTile);
  }
  jsPhoneBook.push(row5);
  let row6 = [];
  for (let i = 40; i < 48; i++) {
    let className = i % 2 === 0 ? 'dark' : 'light';
    let tile = placeNewTileDown(className);
    let newTile = new Tile(
      tile,
      tile.getBoundingClientRect(),
      tile.starterBlue
    );
    row6.push(newTile);
  }
  jsPhoneBook.push(row6);
  let row7 = [];
  for (let i = 48; i < 56; i++) {
    let className = i % 2 === 0 ? 'light' : 'dark';
    let tile = placeNewTileDown(className);
    let newTile = new Tile(
      tile,
      tile.getBoundingClientRect(),
      tile.starterBlue
    );
    row7.push(newTile);
  }
  jsPhoneBook.push(row7);
  let row8 = [];
  for (let i = 56; i < 64; i++) {
    let className = i % 2 === 0 ? 'dark' : 'light';
    let tile = placeNewTileDown(className);
    let newTile = new Tile(
      tile,
      tile.getBoundingClientRect(),
      tile.starterBlue
    );
    row8.push(newTile);
  }
  jsPhoneBook.push(row8);
};

// RUN IT ALL Below//
makeTheBoard();
// populateGame();
// tell me who is playing //
const currentPlayerTurn = () => `It's ${player}'s turn.`;
document.getElementById('turnReadout').innerHTML = currentPlayerTurn();

// // Restart Game Button//
document.getElementById('restartButton').addEventListener('click', function () {
  location.reload();
});

/// populate game board for start
let populateGame = () => {
  document.elementFromPoint(328.5, 47).innerHTML = 'B';
  document.elementFromPoint(408.5, 47).innerHTML = 'B';
  document.elementFromPoint(488.5, 47).innerHTML = 'B';
  document.elementFromPoint(568.5, 47).innerHTML = 'B';
  document.elementFromPoint(288.5, 87).innerHTML = 'B';
  document.elementFromPoint(368.5, 87).innerHTML = 'B';
  document.elementFromPoint(448.5, 87).innerHTML = 'B';
  document.elementFromPoint(528.5, 87).innerHTML = 'B';
  document.elementFromPoint(328.5, 127).innerHTML = 'B';
  document.elementFromPoint(408.5, 127).innerHTML = 'B';
  document.elementFromPoint(488.5, 127).innerHTML = 'B';
  document.elementFromPoint(568.5, 127).innerHTML = 'B';
  document.elementFromPoint(288.5, 247).innerHTML = 'R';
  document.elementFromPoint(368.5, 247).innerHTML = 'R';
  document.elementFromPoint(448.5, 247).innerHTML = 'R';
  document.elementFromPoint(528.5, 247).innerHTML = 'R';
  document.elementFromPoint(328.5, 287).innerHTML = 'R';
  document.elementFromPoint(408.5, 287).innerHTML = 'R';
  document.elementFromPoint(488.5, 287).innerHTML = 'R';
  document.elementFromPoint(568.5, 287).innerHTML = 'R';
  document.elementFromPoint(288.5, 327).innerHTML = 'R';
  document.elementFromPoint(368.5, 327).innerHTML = 'R';
  document.elementFromPoint(448.5, 327).innerHTML = 'R';
  document.elementFromPoint(528.5, 327).innerHTML = 'R';
  // fix 145-153, cant tag "red and blue" need to target the Tile??
};
populateGame();

// Change Current Player Button //
document
  .getElementById('playerTurnButton')
  .addEventListener('click', function () {
    changePlayer();
  });

// Change Player //
function changePlayer() {
  player = player === 'RED' ? 'BLACK' : 'RED';
  document.getElementById('turnReadout').innerHTML = currentPlayerTurn();
}

// click listener for playble tiles //
document
  .querySelectorAll('.dark')
  .forEach((clickableTile) =>
    clickableTile.addEventListener('click', whenTileClicked)
  );

// CLICK FUNCTION //
function whenTileClicked(clickedTileEvent) {
  const clickedTile = clickedTileEvent.target;
  switch (player) {
    case 'RED':
      clickedTile.innerHTML = 'R';
      console.log(clickedTile.getBoundingClientRect());
      console.log(clickedTile);
      break;
    case 'BLACK':
      clickedTile.innerHTML = 'B';
      console.log(clickedTile.getBoundingClientRect());
      break;
  }
}

//  FUNCTION TEST Zone   ////
