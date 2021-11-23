//Global variables //
let player = 'RED';
const gameBoard = document.getElementById('game-board');
const boardTiles = [];
let jsPhoneBook = [];

///===== from playground ==

// construct TILE  //
class Tile {
  constructor(tile, coords) {
    this.tile = tile;
    this.coords = coords;
  }
}
// neighbor Functions //
// figure out how to do a function to call for TOPLeft,TOPRright,BTMLleft,BTMRight
// function urncoords(tile) {
//   // coords is a list {0,1}
//   let x = this.tile.coords;
//   let y = this.tile.coords;

//   let urncoords = [x + 40, y + 40];

//   return urncoords;
// }

///
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
    let newTile = new Tile(tile, tile.getBoundingClientRect());
    // push newTile into js phonebook
    row1.push(newTile);
  }
  jsPhoneBook.push(row1);
  let row2 = [];
  for (let i = 8; i < 16; i++) {
    let className = i % 2 === 0 ? 'dark' : 'light';
    let tile = placeNewTileDown(className);
    let newTile = new Tile(tile, tile.getBoundingClientRect());
    row2.push(newTile);
  }
  jsPhoneBook.push(row2);
  let row3 = [];
  for (let i = 16; i < 24; i++) {
    let className = i % 2 === 0 ? 'light' : 'dark';
    let tile = placeNewTileDown(className);
    let newTile = new Tile(tile, tile.getBoundingClientRect());
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
    let newTile = new Tile(tile, tile.getBoundingClientRect());
    row6.push(newTile);
  }
  jsPhoneBook.push(row6);
  let row7 = [];
  for (let i = 48; i < 56; i++) {
    let className = i % 2 === 0 ? 'light' : 'dark';
    let tile = placeNewTileDown(className);
    let newTile = new Tile(tile, tile.getBoundingClientRect());
    row7.push(newTile);
  }

  jsPhoneBook.push(row7);
  let row8 = [];
  for (let i = 56; i < 64; i++) {
    let className = i % 2 === 0 ? 'dark' : 'light';
    let tile = placeNewTileDown(className);
    let newTile = new Tile(tile, tile.getBoundingClientRect());
    row8.push(newTile);
  }

  jsPhoneBook.push(row8);
};

// RUN IT ALL //
makeTheBoard();

// tell me who is playing //
const currentPlayerTurn = () => `It's ${player}'s turn.`;
document.getElementById('turnReadout').innerHTML = currentPlayerTurn();

// // Restart Game Button// broken @ merge
document.getElementById('restartButton').addEventListener('click', function () {
  document
    .querySelectorAll('.innerTile')
    .forEach((innerTile) => (innerTile.innerHTML = '')); //just clear board
  let testStarter = document.elementFromPoint(288.5, 312);
  // document.elementFromPoint(328, 272);
  // has to cycle through an array. One at a time. ugh.
  testStarter.innerHTML = 'Work?';
  document
    .querySelectorAll('.blackStarterTile')
    .forEach((blackStarterTile) => (blackStarterTile.innerHTML = 'B'));
});

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

// click listener for playble tiles
document
  .querySelectorAll('.dark')
  .forEach((clickableTile) =>
    clickableTile.addEventListener('click', whenTileClicked)
  );

// CLICK FUNCTION //  when tile clicked
// save for breaking
function whenTileClicked(clickedTileEvent) {
  const clickedTile = clickedTileEvent.target;
  // am I targeting html or javascript element?
  // urncoords = urncoords(clickedTile);
  // console.log(urncoords);
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
// this is the bottom right most tile coords
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
// document.elementFromPoint(288.5, 312);

// nest inside creator, or 2nd option, define starters through external function
// function redStarters() {
//   let testStarter = jsPhoneBook[3-7]
//   testStarter.id = 'redStarterTile';
//   testStarter.innerHTML = 'StartS';
// }
// redStarters();
