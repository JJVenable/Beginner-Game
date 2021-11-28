//Variable Storage //
let player = 'RED';
const gameBoard = document.getElementById('game-board');
const boardTiles = [];
let jsPhoneBook = [];

// Construct TILE  //
class Tile {
  constructor(tile, coords, starter) {
    this.tile = tile;
    this.coords = coords;
    this.starter = starter;
  }
}
// Neighbor Functions //
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

// Needed for makeTheBoard  //
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

// RUN IT Below//
makeTheBoard();

// tell me who is playing //
const currentPlayerTurn = () => `It's ${player}'s turn.`;
document.getElementById('turnReadout').innerHTML = currentPlayerTurn();

// // Restart Game Button//
document.getElementById('restartButton').addEventListener('click', function () {
  location.reload();
});

/// populate game board for start
let populateGame = () => {
  document.elementFromPoint(328.5, 47).classList.add('blackToken');
  document.elementFromPoint(408.5, 47).classList.add('blackToken');
  document.elementFromPoint(488.5, 47).classList.add('blackToken');
  document.elementFromPoint(568.5, 47).classList.add('blackToken');
  document.elementFromPoint(288.5, 87).classList.add('blackToken');
  document.elementFromPoint(368.5, 87).classList.add('blackToken');
  document.elementFromPoint(448.5, 87).classList.add('blackToken');
  document.elementFromPoint(528.5, 87).classList.add('blackToken');
  document.elementFromPoint(328.5, 127).classList.add('blackToken');
  document.elementFromPoint(408.5, 127).classList.add('blackToken');
  document.elementFromPoint(488.5, 127).classList.add('blackToken');
  document.elementFromPoint(568.5, 127).classList.add('blackToken');
  document.elementFromPoint(288.5, 247).classList.add('redToken');
  document.elementFromPoint(368.5, 247).classList.add('redToken');
  document.elementFromPoint(448.5, 247).classList.add('redToken');
  document.elementFromPoint(528.5, 247).classList.add('redToken');
  document.elementFromPoint(328.5, 287).classList.add('redToken');
  document.elementFromPoint(408.5, 287).classList.add('redToken');
  document.elementFromPoint(488.5, 287).classList.add('redToken');
  document.elementFromPoint(568.5, 287).classList.add('redToken');
  document.elementFromPoint(288.5, 327).classList.add('redToken');
  document.elementFromPoint(368.5, 327).classList.add('redToken');
  document.elementFromPoint(448.5, 327).classList.add('redToken');
  document.elementFromPoint(528.5, 327).classList.add('redToken');
};
populateGame();

// Change Current Player Button //
document
  .getElementById('playerTurnButton')
  .addEventListener('click', function () {
    changePlayer();
    winCondition();
  });

// Pick up Piece Button //
let clickToggle = 0;
document.getElementById('pickUpPiece').addEventListener('click', function () {
  clickToggle++;
  if (clickToggle % 2 == 1) {
    changePlayer();
    document.getElementById('turnReadout').innerHTML = '';
    document.getElementById('instructionsReadout').innerHTML =
      'Select man to pick up.';
    document.getElementById('pickUpPiece').innerHTML = 'Done clearing pieces.';
    console.log(player);
  } else {
    document.getElementById('turnReadout').innerHTML = `It's ${player}'s turn.`;
    document.getElementById('instructionsReadout').innerHTML =
      'Select tile to move.';
    document.getElementById('pickUpPiece').innerHTML = 'Pick up a Piece.';
    changePlayer();
    console.log(player);
  }
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
      clickedTile.classList.toggle('redToken');
      break;
    case 'BLACK':
      clickedTile.classList.toggle('blackToken');
      break;
  }
}

// Win Condition & Run it  ////
function winCondition() {
  let redPieces = document.getElementsByClassName('redToken');
  let blackPieces = document.getElementsByClassName('blackToken');
  console.log(redPieces);
  let redRemaining = redPieces.length;
  let blackRemaining = blackPieces.length;
  console.log(redRemaining);
  if (redRemaining < 5) {
    alert('Black Won!');
  } else if (blackRemaining < 5) {
    alert('Red Won!');
  } else {
    console.log('Remove more pieces for a win condition.');
  }
}
winCondition();
