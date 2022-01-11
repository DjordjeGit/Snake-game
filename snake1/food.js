import { randomFood } from './helpers.js';
import * as snake from './snake.js';
let food = randFood();
let expandRate = Math.floor(Math.random() * 3) + 1;
export function updateFood() {
  if (snake.onSnake(food, false)) {
    if (snake.snakeBody.length > 52) {
      console.log(snake.snakeBody.length);
      expandRate = 2;
    } else if (snake.snakeBody.length > 92) {
      expandRate = 1;
    }
    snake.addSegments(expandRate);
    food = randFood();
  }
}

export function drawFood(body) {
  const div = document.createElement('div');
  div.style.gridColumnStart = food.x;
  div.style.gridRowStart = food.y;
  div.classList.add('food');
  body.appendChild(div);
}
function randFood() {
  let foodPos;
  if (foodPos == null || snake.onSnake(foodPos, { ignoreHead: false })) {
    foodPos = randomFood();
  }
  return foodPos;
}
