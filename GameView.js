class GameView {
    constructor(){
       console.log("init GameView");
    }

// updates game board
    updateGrid(game){
        this.updateTurn(game);
        const winningCombination = game.findWinningCombinations();
        for (let i = 0; i < game.grid.length; i++) {
            let square = document.querySelector(`.square[data-index='${i}']`);
            square.textContent = game.grid[i];
            square.classList.remove("winner");
            let squareType = game.grid[i] == "X" ? "squareX" : "squareO";
            square.innerHTML = `<span class=${squareType}>${game.grid[i] ? game.grid[i] : ""}</span>`
            //tile.textContent = game.grid[i];
            if (winningCombination && winningCombination.includes(i)) {
                square.classList.add("winner");
            }
        }

    }
// changes turn display
    updateTurn(game){
        let playerX = document.querySelector(".playerX");
        let playerO = document.querySelector(".playerO");
        if (game.turn == "X") {
            playerX.classList.add("active");
            playerO.classList.remove("active");
        } else {
            playerO.classList.add("active");
            playerX.classList.remove("active");
        }
    }


}

export default GameView;