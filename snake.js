
// board
var blocksize = 12.5;
var rowes = 40;
var cols = 40;
var board;
var context;

// snake body
 var snakebody = [];


// snakee head 
var snakeX = blocksize * 5;
var snakeY = blocksize * 5;

var velocityX = 0;
var velocityY = 0;
// food
var foodX;
var foodY;

var gameover = false;





window.onload = function() {
   board = document.getElementById("board");
   board.height = rowes * blocksize;
   board.width = cols * blocksize;
   context = board.getContext("2d"); // used for drawing on the board

   placefood();
   document.addEventListener("keyup", changeDirection);
   // update
   setInterval(update, 1000/10); // every 100 milsecs
}

function update() {
    if (gameover){
        return;
    }
    context.fillStyle='black';
    context.fillRect(0, 0, board.width, board.height);

    context.fillStyle="red";
    context.fillRect(foodX, foodY, blocksize, blocksize);

    if (snakeX == foodX && snakeY == foodY) {
        snakebody.push([foodX, foodY]);
        placefood()
    }

for (let i = snakebody.length-1; i > 0; i--) {
    snakebody[i] = snakebody[i-1];
} 
if (snakebody.length) {
    snakebody[0] = [snakeX, snakeY];
}

    context.fillStyle="#000080";
    snakeX += velocityX * blocksize;
    snakeY +=  velocityY * blocksize;
    context.fillRect(snakeX, snakeY, blocksize, blocksize);
    for (let i = 0; i < snakebody.length; i++) {
        context.fillRect(snakebody[i][0], snakebody[i][1], blocksize, blocksize)
    }

// game over conditions
if (snakeX < 0 || snakeX > cols * blocksize || snakeY <0 || snakeY > rowes * blocksize) {
    gameover = true;
    alert("game Over refresh to try Again");
}

for (let i = 0; i < snakebody.length; i++) {
    if (snakeX == snakebody[i][0] && snakeY == snakebody[i][1]) {
        gameover = true;
        alert("Game over refresh to try again");
    }
}





}

function changeDirection(e) {
    if (e.code == "ArrowUp" && velocityY != 1) {
        velocityX = 0;
        velocityY = -1;

    }
    else if (e.code == "ArrowDown" && velocityY != -1) {
        velocityX = 0;
        velocityY = 1;

    }
    else if (e.code == "ArrowLeft" && velocityX != 1) {
        velocityX = -1;
        velocityY = 0;

    }
    else if (e.code == "ArrowRight" && velocityX != -1) {
        velocityX = 1;
        velocityY = 0;

    }
}




function placefood() {
    foodX = Math.floor(Math.random() * cols) * blocksize;
    foodY = Math.floor(Math.random() * rowes) * blocksize;
}

console.log(snakebody);


















