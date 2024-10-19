//2D arrays of each player's position
// 0 indicates the (initial) position of the player on the board.
var player1CanMove = true;
var player2CanMove = true;
var player3CanMove = true;
var player4CanMove = true;

var player1Score = 0;
var player2Score = 0;
var player3Score = 0;
var player4Score = 0;
var turn = 1;
var turnLimit = 20;
var scoreCalculated = false;

var player1Joined = false;
var player2Joined = false;
var player3Joined = false;
var player4Joined = false;

var player1Name = "none";
var player2Name = "none";
var player3Name = "none";
var player4Name = "none";
var playerList = [];

var acidRain = false;
var acidRainProbability = 0;

// var mapArray = [
//   [1, 1, 1, 1, 1, 1, 1, 1],
//   [1, 1, 1, 0, 0, 1, 1, 1],
//   [1, 1, 0, 0, 0, 0, 1, 1],
//   [1, 0, 0, 1, 1, 0, 0, 1],
//   [1, 0, 0, 1, 1, 0, 0, 1],
//   [1, 1, 0, 0, 0, 0, 1, 1],
//   [1, 1, 1, 0, 0, 1, 1, 1],
//   [1, 1, 1, 1, 1, 1, 1, 1]
// ];

var mapArray = [
  [1, 0, 1, 1, 1, 1, 0, 1],
  [0, 1, 1, 0, 0, 1, 1, 0],
  [1, 1, 0, 1, 1, 0, 1, 1],
  [1, 0, 1, 0, 0, 1, 0, 1],
  [1, 0, 1, 0, 0, 1, 0, 1],
  [1, 1, 0, 1, 1, 0, 1, 1],
  [0, 1, 1, 0, 0, 1, 1, 0],
  [1, 0, 1, 1, 1, 1, 0, 1]
];

var player1Array = [
  [0, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1]
];

var player2Array = [
  [1, 1, 1, 1, 1, 1, 1, 0],
  [1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1]
];

var player3Array = [
  [1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1],
  [0, 1, 1, 1, 1, 1, 1, 1]
];

var player4Array = [
  [1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 0]
];

//2D arrays of Apples (normal) and Rotten Apples
//To be updated with 0 (present) and 1 (absent) by calling functions
//Initialised to 0 

var appleArray = [
  [1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1]
];

var rottenAppleArray = [
  [1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1]
];

var playerCountArray = [
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0]
];


//Updates the position of a player in their array
function movePlayer(playerNumber, newPosition) {
  var playerArray = [];
  if (playerNumber == 1) {
    let currentPosition = findPosition(player1Array);
    let i = currentPosition[0];
    let j = currentPosition[1];

    let iNew = newPosition[0];
    let jNew = newPosition[1];

    player1Array[i][j] = 1;
    player1Array[iNew][jNew] = 0;
  }

  else if (playerNumber == 2) {
    let currentPosition = findPosition(player2Array);
    let i = currentPosition[0];
    let j = currentPosition[1];

    let iNew = newPosition[0];
    let jNew = newPosition[1];

    player2Array[i][j] = 1;
    player2Array[iNew][jNew] = 0;
  }

  else if (playerNumber == 3) {
    
    let currentPosition = findPosition(player3Array);
    let i = currentPosition[0];
    let j = currentPosition[1];

    let iNew = newPosition[0];
    let jNew = newPosition[1];

    player3Array[i][j] = 1;
    player3Array[iNew][jNew] = 0;
  }

  else if (playerNumber == 4) {
    let currentPosition = findPosition(player4Array);
    let i = currentPosition[0];
    let j = currentPosition[1];

    let iNew = newPosition[0];
    let jNew = newPosition[1];

    player4Array[i][j] = 1;
    player4Array[iNew][jNew] = 0;
  }
}

//Finds the position of the only 0 element in a 2D array
//Does not work for apples (normal and rotten)
function findPosition(array2D) {
  let zeroRow = -1;
  let zeroCol = -1;

  for (let rowIndex = 0; rowIndex < array2D.length; rowIndex++) {
    const row = array2D[rowIndex];
    for (let columnIndex = 0; columnIndex < row.length; columnIndex++) {
      if (row[columnIndex] === 0) {
        zeroRow = rowIndex;
        zeroCol = columnIndex;
        break; // Once found, break out of the inner loop.
      }
    if (zeroRow !== -1) {
      break; //Once found, break out of the outer loop.
    }  
      }
    }
  let positionArray = [zeroRow, zeroCol];
  return positionArray; //[row, col]
  
  }

function renderMap() {
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      let pngFile = "";

      if (mapArray[i][j] === 1) {
        pngFile = pngFile + "Dirt";
        
      }
      else if (mapArray[i][j] === 0) {
        pngFile = pngFile + "Forest";
      }
      
      if (player1Array[i][j] === 1) {
        pngFile = pngFile + "0";
      }

      else if (player1Array[i][j] === 0) {
        pngFile = pngFile + "1";
      }
      
      if (player2Array[i][j] === 1) {
        pngFile = pngFile + "0";
      }

      else if (player2Array[i][j] === 0) {
        pngFile = pngFile + "1";
      }

      if (player3Array[i][j] === 1) {
        pngFile = pngFile + "0";
      }

      else if (player3Array[i][j] === 0) {
        pngFile = pngFile + "1";
      }

      if (player4Array[i][j] === 1) {
        pngFile = pngFile + "0";
      }

      else if (player4Array[i][j] === 0) {
        pngFile = pngFile + "1";
      }

      if (appleArray[i][j] === 1) {
        pngFile = pngFile + "0";
      }

      else if (appleArray[i][j] === 0) {
        pngFile = pngFile + "1";
      }

      if (rottenAppleArray[i][j] === 1) {
        pngFile = pngFile + "0";
      }

      else if (rottenAppleArray[i][j] === 0) {
        pngFile = pngFile + "1";
      }

      pngFile = pngFile + ".png";
      cellNumber = i*8 + j + 1;
      document.getElementById(cellNumber).style.backgroundImage=`url("${pngFile}")`;
      

    }
  }
}

function checkLeft(playerArray) {
  var currentPosition = findPosition(playerArray);

  if (currentPosition[1] == 0) {
    // console.log("player cannot move left");
    return false;
  }
  else {
    // console.log("player can move left");
    return true;
  }

}

function checkRight(playerArray) {
  var currentPosition = findPosition(playerArray);

  if (currentPosition[1] == 7) {
    // console.log("player cannot move right");
    return false;
  }

  else {
    // console.log("player can move right");
    return true;

  }
}

function checkUp(playerArray) {
  var currentPosition = findPosition(playerArray);

  if (currentPosition[0] == 0) {
    // console.log("player cannot move up");
    return false;
  }

  else {
    // console.log("player can move up");
    return true;
  }
}

function checkDown(playerArray) {
  var currentPosition = findPosition(playerArray);

  if (currentPosition[0] == 7) {
    // console.log("player cannot move down")
    return false;
  }

  else {
    // console.log("player can move down")
    return true;
  }
}

function isPlayerOnForest(playerPosition, theMapArray) {
  var x = playerPosition[0];
  var y = playerPosition[1];

  if (theMapArray[x][y] == 0) {
    // console.log("player is on forest");
    return true;
  }

  else {
    // console.log("player is on dirt");
    return false;
  }
  
}
/**
 * generateApples will randomly generate 3 apples on each row of the board
 * @param {Array} appleArray - 2D array that is 8 rows and 8 columns
 */
function generateApples(appleArray) {
  for (let i = 0; i < 8; i++) {
    let randomInts = generateUniqueRandomNumbers(2, 7);
    appleArray[i][randomInts[0]] = 0;
    appleArray[i][randomInts[1]] = 0;
  }
}

//Old, bugged function
function generateRottenApples(rottenAppleArray, currentPosition) {
  var x = currentPosition[0];
  var y = currentPosition[1];

  var cellNumber = x*8 + y + 1;
  var rottenAppleCells = [cellNumber-9, cellNumber+9, cellNumber-7, cellNumber+7]
  var validRottenAppleCells = rottenAppleCells.filter(num => num >= 1 && num <= 64)

  for (let i = 0; i < validRottenAppleCells.length; i++) {
    var cellCoordinates = numberToCoordinates(validRottenAppleCells[i]);
    rottenAppleArray[cellCoordinates[0]][cellCoordinates[1]] = 0;

  }
}

function newGenerateRottenApples(rottenAppleArray, currentPosition) {
  var x = currentPosition[0];
  var y = currentPosition[1];

  var rottenAppleCells = [[x-1, y-1], [x+1, y-1], [x-1, y+1], [x+1, y+1]]
  for (let i = 0; i < rottenAppleCells.length; i++) {
    var cellCoordinates = rottenAppleCells[i];

    if (rottenAppleCells[i].includes(-1)) {
      console.log("index is out of bounds");
    }
    else if (rottenAppleCells[i].includes(8)) {
      console.log("index is out of bounds");
    }
    else {
      rottenAppleArray[cellCoordinates[0]][cellCoordinates[1]] = 0;
    }
  }
}

//Unused function
function cleanRottenApples(rottenAppleArray, currentPosition) {
  var x = currentPosition[0];
  var y = currentPosition[1];

  var cleanCells = [[x+1, y], [x-1, y], [x, y], [x, y+1], [x, y-1]]
  for (let i = 0; i < cleanCells.length; i++) {
    var cellCoordinates = cleanCells[i];

    if (cleanCells[i].includes(-1)) {
      console.log("index is out of bonds");
    }
    else if (cleanCells[i].includes(8)) {
      console.log("index is out of bounds");
    }
    else {
      rottenAppleArray[cellCoordinates[0]][cellCoordinates[1]] = 0;
    }
  }
}

function generateUniqueRandomNumbers(count, max) {
  const numbers = new Set();
  
  while (numbers.size < count) {
      const randomNum = Math.floor(Math.random() * (max + 1));
      numbers.add(randomNum);
  }

  return Array.from(numbers);

}

//Unused
function coordinatesToNumber(coordinates) {
  var x = coordinates[0];
  var y = coordinates[1];

  var cellNumber = (x * 8 + y + 1);
  return cellNumber;
}

function numberToCoordinates(number) {
  theNumber = number - 1;
  var x = Math.floor(theNumber/8);
  var y = theNumber % 8;

  return [x, y];
}

function shrinkMap() {
  if (turn == 14) {
    rottenAppleArray[0][0] = 0;
    rottenAppleArray[1][0] = 0;
    rottenAppleArray[0][1] = 0;
    rottenAppleArray[0][6] = 0;
    rottenAppleArray[0][7] = 0;
    rottenAppleArray[1][7] = 0;
    rottenAppleArray[6][0] = 0;
    rottenAppleArray[7][0] = 0;
    rottenAppleArray[7][1] = 0;
    rottenAppleArray[6][7] = 0;
    rottenAppleArray[7][6] = 0;
    rottenAppleArray[7][7] = 0;
  }

  else if (turn == 15) {
    rottenAppleArray[0][0] = 0;
    rottenAppleArray[1][0] = 0;
    rottenAppleArray[0][1] = 0;
    rottenAppleArray[0][6] = 0;
    rottenAppleArray[0][7] = 0;
    rottenAppleArray[1][7] = 0;
    rottenAppleArray[6][0] = 0;
    rottenAppleArray[7][0] = 0;
    rottenAppleArray[7][1] = 0;
    rottenAppleArray[6][7] = 0;
    rottenAppleArray[7][6] = 0;
    rottenAppleArray[7][7] = 0;

    rottenAppleArray[2][0] = 0;
    rottenAppleArray[0][2] = 0;
    rottenAppleArray[1][1] = 0;
    rottenAppleArray[0][5] = 0;
    rottenAppleArray[1][6] = 0;
    rottenAppleArray[2][7] = 0;
    rottenAppleArray[5][0] = 0;
    rottenAppleArray[6][1] = 0;
    rottenAppleArray[7][2] = 0;
    rottenAppleArray[5][7] = 0;
    rottenAppleArray[6][6] = 0;
    rottenAppleArray[7][5] = 0;
  }

  else if (turn >= 16) {
    rottenAppleArray[0][0] = 0;
    rottenAppleArray[1][0] = 0;
    rottenAppleArray[0][1] = 0;
    rottenAppleArray[0][6] = 0;
    rottenAppleArray[0][7] = 0;
    rottenAppleArray[1][7] = 0;
    rottenAppleArray[6][0] = 0;
    rottenAppleArray[7][0] = 0;
    rottenAppleArray[7][1] = 0;
    rottenAppleArray[6][7] = 0;
    rottenAppleArray[7][6] = 0;
    rottenAppleArray[7][7] = 0;

    rottenAppleArray[2][0] = 0;
    rottenAppleArray[0][2] = 0;
    rottenAppleArray[1][1] = 0;
    rottenAppleArray[0][5] = 0;
    rottenAppleArray[1][6] = 0;
    rottenAppleArray[2][7] = 0;
    rottenAppleArray[5][0] = 0;
    rottenAppleArray[6][1] = 0;
    rottenAppleArray[7][2] = 0;
    rottenAppleArray[5][7] = 0;
    rottenAppleArray[6][6] = 0;
    rottenAppleArray[7][5] = 0;

    rottenAppleArray[3][0] = 0;
    rottenAppleArray[4][0] = 0;
    rottenAppleArray[0][3] = 0;
    rottenAppleArray[0][4] = 0;
    rottenAppleArray[3][7] = 0;
    rottenAppleArray[4][7] = 0;
    rottenAppleArray[7][3] = 0;
    rottenAppleArray[7][4] = 0;
    rottenAppleArray[2][1] = 0;
    rottenAppleArray[1][2] = 0;
    rottenAppleArray[1][5] = 0;
    rottenAppleArray[2][6] = 0;
    rottenAppleArray[5][1] = 0;
    rottenAppleArray[6][2] = 0;
    rottenAppleArray[6][5] = 0;
    rottenAppleArray[5][6] = 0;
  }

}
function playGame() {
  
  renderMap();
  document.getElementById("player1").innerHTML = "Player Red - Score:" + player1Score;
  document.getElementById("player2").innerHTML = "Player Yellow - Score:" + player2Score;
  document.getElementById("player3").innerHTML = "Player Blue - Score:" + player3Score;
  document.getElementById("player4").innerHTML = "Player White - Score:" + player4Score;
  document.getElementById("turn").innerHTML = turn;
  document.getElementById("weather").innerHTML = "Sunny";
  
  startPhase();
}

function startPhase() {
  startAcidRain();
  appleArray = [
  [1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1]
  ];
  generateApples(appleArray);
  renderMap();
}

function appleScoreCalculator() {

  updatePlayerCountArray();
  let player1Position = findPosition(player1Array);
  let player2Position = findPosition(player2Array);
  let player3Position = findPosition(player3Array);
  let player4Position = findPosition(player4Array);

  if (appleArray[player1Position[0]][player1Position[1]] === 0) {
    let playerCount = playerCountArray[player1Position[0]][player1Position[1]];
    player1Score += 12/playerCount;
    document.getElementById("player1").innerHTML = "Player Red - Score: " + player1Score;
    // console.log("player 1 gets:" + 12/playerCount);
  }

  if (appleArray[player2Position[0]][player2Position[1]] === 0) {
    let playerCount = playerCountArray[player2Position[0]][player2Position[1]];
    player2Score += 12/playerCount;
    document.getElementById("player2").innerHTML = "Player Yellow - Score: " + player2Score;
    // console.log("player 2 gets:" + 12/playerCount);
  }

  if (appleArray[player3Position[0]][player3Position[1]] === 0) {
    let playerCount = playerCountArray[player3Position[0]][player3Position[1]];
    player3Score += 12/playerCount;
    document.getElementById("player3").innerHTML = "Player Blue - Score: " + player3Score;
    // console.log("player 3 gets:" + 12/playerCount);
  }

  if (appleArray[player4Position[0]][player4Position[1]] === 0) {
    let playerCount = playerCountArray[player4Position[0]][player4Position[1]];
    player4Score += 12/playerCount;
    document.getElementById("player4").innerHTML = "Player White - Score: " + player4Score;
    // console.log("player 4 gets:" + 12/playerCount);
  }
}

function updatePlayerCountArray() {
  playerCountArray = [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0]
  ];

  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (player1Array[i][j] === 0) {
        playerCountArray[i][j] += 1;
      }

      if (player2Array[i][j] === 0) {
        playerCountArray[i][j] += 1;
      }

      if (player3Array[i][j] === 0) {  
        playerCountArray[i][j] += 1;
      }

      if (player4Array[i][j] === 0) {
        playerCountArray[i][j] += 1;
      }
    }
  }
}

function rottenAppleScoreCalculator() {

  rottenApplesList = []
  player1Position = findPosition(player1Array);
  player2Position = findPosition(player2Array);
  player3Position = findPosition(player3Array);
  player4Position = findPosition(player4Array);

  if (rottenAppleArray[player1Position[0]][player1Position[1]] === 0) {
    player1Score -= 15;
    document.getElementById("player1").innerHTML = "Player Red - Score: " + player1Score;
    rottenApplesList.push(player1Position);

  }

  if (rottenAppleArray[player2Position[0]][player2Position[1]] === 0 ) {
    player2Score -= 15;
    document.getElementById("player2").innerHTML = "Player Yellow - Score: " + player2Score;
    rottenApplesList.push(player2Position);
    
  }

  if (rottenAppleArray[player3Position[0]][player3Position[1]] === 0) {
    player3Score -= 15;
    document.getElementById("player3").innerHTML = "Player Blue - Score: " + player3Score;
    rottenApplesList.push(player3Position);
    
  }

  if (rottenAppleArray[player4Position[0]][player4Position[1]] === 0) {
    player4Score -= 15;
    document.getElementById("player4").innerHTML = "Player White - Score: " + player4Score;
    rottenApplesList.push(player4Position);
    
  }

  return rottenApplesList;
}

function removeUsedRottenApples(usedRottenApplesList) {
  for (let i = 0; i < usedRottenApplesList.length; i++) {
    let x1 = usedRottenApplesList[i][0];
    let y1 = usedRottenApplesList[i][1];
    rottenAppleArray[x1][y1] = 1;
    renderMap();
  }
}

function acidRainScoreCalculator() {
  if (acidRain) {
    var player1Position = findPosition(player1Array);
    var player2Position = findPosition(player2Array);
    var player3Position = findPosition(player3Array);
    var player4Position = findPosition(player4Array);

    if (!isPlayerOnForest(player1Position, mapArray)) {
      player1Score -= 10;
      document.getElementById("player1").innerHTML = "Player Red - Score: " + player1Score;
    }

    if (!isPlayerOnForest(player2Position, mapArray)) {
      player2Score -= 10;
      document.getElementById("player2").innerHTML = "Player Yellow - Score: " + player2Score;
    }

    if (!isPlayerOnForest(player3Position, mapArray)) {
      player3Score -= 10;
      document.getElementById("player3").innerHTML = "Player Blue - Score: " + player3Score;
    }

    if (!isPlayerOnForest(player4Position, mapArray)) {
      player4Score -= 10;
      document.getElementById("player4").innerHTML = "Player White - Score: " + player4Score;
    }
  }
}

function scoreCalculator() {
  if (!player1CanMove && !player2CanMove && !player3CanMove && !player4CanMove) {
    appleScoreCalculator();
    let rottenApplesList = rottenAppleScoreCalculator();
    removeUsedRottenApples(rottenApplesList);
    acidRainScoreCalculator();
    scoreCalculated = true;
    if (turn < turnLimit) {
      startNewTurn();
    }
    else {
      console.log("Game is not over");
    }
  } 
}
function startNewTurn() {
  if (!player1CanMove && !player2CanMove && !player3CanMove && !player4CanMove && scoreCalculated) {
    turn += 1
    shrinkMap();
    document.getElementById("turn").innerHTML = turn;
    player1CanMove = true;
    player2CanMove = true;
    player3CanMove = true;
    player4CanMove = true;
    scoreCalculated = false;
    startPhase();
  }
}

function showWaitingList() {
  let waitingList = [player1CanMove, player2CanMove, player3CanMove, player4CanMove];
  let output = "";

  if (waitingList[0]) {
    output = output + player1Name + " ";
  }

  if (waitingList[1]) {
    output = output + player2Name + " ";
  }

  if (waitingList[2]) {
    output = output + player3Name + " ";
  }

  if (waitingList[3]) {
    output = output + player4Name + " ";
  }

  document.getElementById("wait").innerHTML = output;
}

function startAcidRain() {
  if (Math.random() < acidRainProbability) {
    acidRain = true;
    document.getElementById("weather").innerHTML = "Acid Rain";
  }

  else {
    acidRain = false;
    document.getElementById("weather").innerHTML = "Sunny";
  }
  
  acidRainProbability += 0.03;
}

//ComfyJS - Twitch Integration
ComfyJS.onCommand = (user, command, message, flags, extra) => {
  var player1Position = findPosition(player1Array);
  var player2Position = findPosition(player2Array);
  var player3Position = findPosition(player3Array);
  var player4Position = findPosition(player4Array);

  let joined = playerList.includes(user)

  if( command == "moveredleft" && player1CanMove && user == player1Name) {
    if (checkLeft(player1Array)) {
      let newPosition = [player1Position[0], player1Position[1]-1];
      movePlayer(1, newPosition);
      player1CanMove = false;
      scoreCalculator();
      renderMap();
    }
    else {
      console.log("Invalid move");
    }
  }
  else if (command == "moveredright" && player1CanMove && user == player1Name) {
    if (checkRight(player1Array)) {
      let newPosition = [player1Position[0], player1Position[1]+1];
      movePlayer(1, newPosition);
      player1CanMove = false;
      scoreCalculator();
      
      renderMap();
    }

    else {
      console.log("Invalid move");
    }
  }

  else if (command == "moveredup" && player1CanMove && user == player1Name) {
    if (checkUp(player1Array)) {
      let newPosition = [player1Position[0]-1, player1Position[1]];
      movePlayer(1, newPosition);
      player1CanMove = false;
      scoreCalculator();
      
      renderMap();
    }

    else {
      console.log("Invalid move");
    }
  }

  else if (command == "movereddown" && player1CanMove && user == player1Name) {
    if (checkDown(player1Array)) {
      let newPosition = [player1Position[0]+1, player1Position[1]];
      movePlayer(1, newPosition);
      player1CanMove = false;
      scoreCalculator();
      
      renderMap();
    }

    else {
      console.log("Invalid move");
    }
  }

  else if( command == "moveyellowleft" && player2CanMove && user == player2Name) {
    if (checkLeft(player2Array)) {
      let newPosition = [player2Position[0], player2Position[1]-1];
      movePlayer(2, newPosition);
      player2CanMove = false;
      scoreCalculator();
      
      renderMap();
    }

    else {
      console.log("Invalid move");
    }
  }
  else if (command == "moveyellowright" && player2CanMove && user == player2Name) {
    if (checkRight(player2Array)) {
      let newPosition = [player2Position[0], player2Position[1]+1];
      movePlayer(2, newPosition);
      player2CanMove = false;
      scoreCalculator();
      
      renderMap();
    }

    else {
      console.log("Invalid move");
    }
  }

  else if (command == "moveyellowup" && player2CanMove && user == player2Name) {
    if (checkUp(player2Array)) {
      let newPosition = [player2Position[0]-1, player2Position[1]];
      movePlayer(2, newPosition);
      player2CanMove = false;
      scoreCalculator();
      
      renderMap();
    }

    else {
      console.log("Invalid move");
    }
  }

  else if (command == "moveyellowdown" && player2CanMove && user == player2Name) {
    if (checkDown(player2Array)) {
      let newPosition = [player2Position[0]+1, player2Position[1]];
      movePlayer(2, newPosition);
      player2CanMove = false;
      scoreCalculator();
      
      renderMap();
    }

    else {
      console.log("Invalid move");
    }
  }

  else if( command == "moveblueleft" && player3CanMove && user == player3Name) {
    if (checkLeft(player3Array)) {
      let newPosition = [player3Position[0], player3Position[1]-1];
      movePlayer(3, newPosition);
      player3CanMove = false;
      scoreCalculator();
      
      renderMap();
    }

    else {
      console.log("Invalid move");
    }
  }
  else if (command == "moveblueright" && player3CanMove && user == player3Name) {
    if (checkRight(player3Array)) {
      let newPosition = [player3Position[0], player3Position[1]+1];
      movePlayer(3, newPosition);
      player3CanMove = false;
      scoreCalculator();
      
      renderMap();
    }

    else {
      console.log("Invalid move");
    }
  }

  else if (command == "moveblueup" && player3CanMove && user == player3Name) {
    if (checkUp(player3Array)) {
      let newPosition = [player3Position[0]-1, player3Position[1]]
      movePlayer(3, newPosition);
      player3CanMove = false;
      scoreCalculator();

      renderMap();
    }

    else {
      console.log("Invalid move");
    }
  }

  else if (command == "movebluedown" && player3CanMove && user == player3Name) {
    if (checkDown(player3Array)) {
      let newPosition = [player3Position[0]+1, player3Position[1]]
      movePlayer(3, newPosition);
      player3CanMove = false;
      scoreCalculator();
      
      renderMap();
    }

    else {
      console.log("Invalid move");
    }
  }

  else if( command == "movewhiteleft" && player4CanMove && user == player4Name) {
    if (checkLeft(player4Array)) {
      let newPosition = [player4Position[0], player4Position[1]-1];
      movePlayer(4, newPosition);
      player4CanMove = false;
      scoreCalculator();
      
      renderMap();
    }

    else {
      console.log("Invalid move");
    }
  }
  else if (command == "movewhiteright" && player4CanMove && user == player4Name) {
    if (checkRight(player4Array)) {
      let newPosition = [player4Position[0], player4Position[1]+1];
      movePlayer(4, newPosition);
      player4CanMove = false;
      scoreCalculator();
      renderMap();
    }

    else {
      console.log("Invalid move");
    }
  }

  else if (command == "movewhiteup" && player4CanMove && user == player4Name) {
    if (checkUp(player4Array)) {
      let newPosition = [player4Position[0]-1, player4Position[1]];
      movePlayer(4, newPosition);
      player4CanMove = false;
      scoreCalculator();
      renderMap();
    }

    else {
      console.log("Invalid move");
    }
  }

  else if (command == "movewhitedown" && player4CanMove && user == player4Name) {
    if (checkDown(player4Array)) {
      let newPosition = [player4Position[0]+1, player4Position[1]];
      movePlayer(4, newPosition);
      player4CanMove = false;
      scoreCalculator();
      
      renderMap();
    }

    else {
      console.log("Invalid move");
    }
  }

  else if (command == "rottenred" && player1CanMove && player1Score >= 5 && user == player1Name) {
    newGenerateRottenApples(rottenAppleArray, player1Position);
    player1CanMove = false;
    player1Score -= 5;
    document.getElementById("player1").innerHTML = "Player Red - Score:" + player1Score;
    scoreCalculator();
    renderMap();
  }

  else if (command == "rottenyellow" && player2CanMove && player2Score >= 5 && user == player2Name) {
    newGenerateRottenApples(rottenAppleArray, player2Position);
    player2CanMove = false;
    player2Score -= 5;
    document.getElementById("player2").innerHTML = "Player Yellow - Score:" + player2Score;
    scoreCalculator();
    renderMap();
  }

  else if (command == "rottenblue" && player3CanMove && player3Score >= 5 && user == player3Name) {
    newGenerateRottenApples(rottenAppleArray, player3Position);
    player3CanMove = false;
    player3Score -= 5;
    document.getElementById("player3").innerHTML = "Player Blue - Score:" + player3Score;
    scoreCalculator();
    renderMap();
  }

  else if (command == "rottenwhite" && player4CanMove && player4Score >= 5 && user == player4Name) {
    newGenerateRottenApples(rottenAppleArray, player4Position);
    player4CanMove = false;
    player4Score -= 5;
    document.getElementById("player4").innerHTML = "Player White - Score:" + player4Score;
    scoreCalculator();
    renderMap();
  }
  
  else if (command == "joinred" && !player1Joined && !joined) {
    player1Name = user;
    playerList.push(user);
    player1Joined = true;
    document.getElementById("player1name").innerHTML = "Player Red: "+ player1Name;
    
  }

  else if (command == "joinyellow" && !player2Joined && !joined) {
    player2Name = user;
    playerList.push(user);
    player2Joined = true;
    document.getElementById("player2name").innerHTML = "Player Yellow: "+ player2Name;
  }

  else if (command == "joinblue" && !player3Joined && !joined) {
    player3Name = user;
    playerList.push(user);
    player3Joined = true;
    document.getElementById("player3name").innerHTML = "Player Blue: "+ player3Name;
  }

  else if (command == "joinwhite" && !player4Joined && !joined) {
    player4Name = user;
    playerList.push(user);
    player4Joined = true;
    document.getElementById("player4name").innerHTML = "Player White: "+ player4Name;
  }

  console.log(user, command, turn);

  if (player1Name == "none" || player2Name == "none" || player3Name == "none" || player4Name == "none") {
    console.log("Not all four players joined.")
  }

  else {
    showWaitingList();
  }
}

renderMap();

//The Twitch channel where the inputs are taken
ComfyJS.Init( "VeryLargeEggYolk" );
playGame();


