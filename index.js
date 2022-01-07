import Game from "./Game.js";
import GameView from "./GameView.js";

let game = new Game();
let gameView = new GameView();
let squares = document.querySelectorAll(".square");
let restart = document.querySelector(".reset-btn");

restart.addEventListener("click", newGame);

squares.forEach((square) => {
    square.addEventListener("click", () => {
        onSquareClick(square.dataset.index);
    })
})

function onSquareClick(i) {
    game.makeMove(i);
    gameView.updateGrid(game);
}

function newGame() {
    game = new Game();
    gameView.updateGrid(game);
}

gameView.updateGrid(game);