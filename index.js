//const cells = document.getElementsByClassName("cell");

const gameArea = document.getElementById("board");
gameArea.addEventListener("click", function (clickEvent) {
  clickEvent.target.innerText = "X";
});
