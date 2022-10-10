let click = "X";
// let cells = Array.from(document.getElementsByClassName(cell));
const gameArea = document.getElementById("board");
gameArea.addEventListener("click", function (clickEvent) {
  if (!clickEvent.target.innerText.length) {
    clickEvent.target.innerText = click;
    checkWin();

    if (click === "X") {
      click = "O";
    } else {
      click = "X";
    }
  }
});

const gameBoard = document.getElementById("board");

const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
function checkWin() {
  let cell0 = document.getElementById("0");
  let cell1 = document.getElementById("1");
  let cell2 = document.getElementById("2");
  let cell3 = document.getElementById("3");
  let cell4 = document.getElementById("4");
  let cell5 = document.getElementById("5");
  let cell6 = document.getElementById("6");
  let cell7 = document.getElementById("7");
  let cell8 = document.getElementById("8");

  const gameWinner = document.getElementById("winningMessage");

  if (
    click === cell0.innerText &&
    click === cell1.innerText &&
    click === cell2.innerText
  ) {
    gameWinner.innerText = "player " + click + " wins!";
  }
  if (
    click === cell3.innerText &&
    click === cell4.innerText &&
    click === cell5.innerText
  ) {
    gameWinner.innerText = "player " + click + " wins!";
  }
  if (
    click === cell6.innerText &&
    click === cell7.innerText &&
    click === cell8.innerText
  ) {
    gameWinner.innerText = "player " + click + " wins!";
  }
  if (
    click === cell0.innerText &&
    click === cell3.innerText &&
    click === cell6.innerText
  ) {
    gameWinner.innerText = "player " + click + " wins!";
  }
  if (
    click === cell1.innerText &&
    click === cell4.innerText &&
    click === cell7.innerText
  ) {
    gameWinner.innerText = "player " + click + " wins!";
  }
  if (
    click === cell2.innerText &&
    click === cell5.innerText &&
    click === cell8.innerText
  ) {
    gameWinner.innerText = "player " + click + " wins!";
  }
  if (
    click === cell0.innerText &&
    click === cell4.innerText &&
    click === cell8.innerText
  ) {
    gameWinner.innerText = "player " + click + " wins!";
  }
  if (
    click === cell2.innerText &&
    click === cell4.innerText &&
    click === cell6.innerText
  ) {
    gameWinner.innerText = click;
  }
}

// function computerTurn() {
//   let randomCell = math.floor(math.random() * 9);
//   if (cells[randomCell.innerText === ""]) {
//     cells[randomCell].innerText = "O";
//     checkWin();
//   } else {
//     computerTurn();
//   }
// }
// let number = getRandomNumber();

// let cell0 = document.getElementById("0");
// let cell1 = document.getElementById("1");
// let cell2 = document.getElementById("2");
// let cell3 = document.getElementById("3");
// let cell4 = document.getElementById("4");
// let cell5 = document.getElementById("5");
// let cell6 = document.getElementById("6");
// let cell7 = document.getElementById("7");
// let cell8 = document.getElementById("8");

// const cellArr = [cell0, cell1, cell2, cell3, cell4, cell5, cell6, cell7, cell8];

// cellArr.forEach(function (cell) {
//   if (cell.innerText === "") {
//     cell.innerText = "O";
//   }
// });
// console.log(number);

// function getRandomNumber() {
//   return Math.floor(Math.random() * 9);
//}

// computerTurn();

// let singlePlayerGame;

// let singlePlayerBut/ton = document.getElementById("singlePlayerGame");
// singlePlayerButton.addEventListener("click", (singlePlayerGame = true));

// let twoPlayerButton = document.getElementById("twoPlayerGame");
// twoPlayerButton.addEventListener("click", (singlePlayerGame = false));

window.onload = function () {
  let username = window.prompt("Enter Player Name");
  document.getElementById("winningMessage").innerHTML = "Welcome " + username;
};

function endOfGame() {
  if (winningPlayer === true || draw === true) {
    gameOver = true;
    restartButton.style.visibility = "visible";
    restartButton.addEventListener("click", resetGrid);
  }
}
// function resetGrid() {
//   for (let i = 0; i < cells.length; i++) {
//     cells[i].innerText = "";
//   }
//   gameWinner = false;

//   winMessage.innerText = "Game On!";
// }
