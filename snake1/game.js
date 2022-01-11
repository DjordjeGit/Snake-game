'strict-mode';
import * as snake from './snake.js';
import * as food from './food.js';
import { OverGap } from './helpers.js';
const playArea = document.querySelector('.playArea');
const score = document.querySelector('.score');
let start = 0;
let gameOver = false;
let snakeSpeed = 4;
function main(curSec) {
  if (gameOver) {
    if (
      confirm(
        'Tipe ok if you want to play again, for cancel you will leave page!'
      )
    ) {
      window.location.reload();
    } else {
      window.close();
    }
    return;
  }
  window.requestAnimationFrame(main);
  const currentTimeinSec = (curSec - start) / 1000;
  if (currentTimeinSec < 1 / snakeSpeed) return;
  start = curSec;
  update();
  draw();
}
window.requestAnimationFrame(main);

function update() {
  checkDeath();
  snake.updateSnake();
  food.updateFood();
  snake.updateScore(score);
  adjuctSpeed();
}
function draw() {
  playArea.innerHTML = '';
  snake.drawSnake(playArea);
  food.drawFood(playArea);
}

function checkDeath() {
  gameOver = OverGap(snake.snakeHead()) || snake.si();
}

function adjuctSpeed() {
  if (snake.snakeBody.length > 3) {
    snakeSpeed = 5;
  }
  if (snake.snakeBody.length > 10) {
    snakeSpeed = 6;
  }
  if (snake.snakeBody.length > 15) {
    snakeSpeed = 7;
  }
  if (snake.snakeBody.length > 48) {
    snakeSpeed = 9;
  }
  if (snake.snakeBody.length > 70) {
    snakeSpeed = 10;
  }
  if (snake.snakeBody.length > 100) {
    snakeSpeed = 11;
  }
  if (snake.snakeBody.length > 140) {
    snakeSpeed = 12;
  }
}
