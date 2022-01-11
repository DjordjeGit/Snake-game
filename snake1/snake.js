import { getCords } from './constolMovment.js';
let segments = 0;
export let snakeBody = [{ x: 11, y: 11 }];

export function updateSnake() {
  expandSnake();
  let cords = getCords();
  for (let i = snakeBody.length - 2; i >= 0; i--) {
    snakeBody[i + 1] = { ...snakeBody[i] };
  }
  console.log(snakeBody.length);
  snakeBody[0].x += cords.x;
  snakeBody[0].y += cords.y;
}

export function drawSnake(body) {
  snakeBody.forEach((el, i) => {
    const div = document.createElement('div');
    div.style.gridColumnStart = el.x;
    div.style.gridRowStart = el.y;
    div.classList.add('snake');
    if (i % 2 === 0) {
      div.classList.add('head');
    } else {
      div.classList.add('snake');
    }
    body.appendChild(div);
  });
}

export function addSegments(number) {
  segments += number;
}

function expandSnake() {
  for (let i = 0; i < segments; i++) {
    snakeBody.push(snakeBody[snakeBody.length]);
  }
  segments = 0;
}

export function onSnake(food, { ignoreHead = false } = {}) {
  return snakeBody.some((el, i) => {
    if (ignoreHead && i === 0) return false;
    return IntersectionEements(el, food);
  });
}

function IntersectionEements(pos1, pos2) {
  return pos1.x === pos2.x && pos1.y === pos2.y;
}

export function snakeHead() {
  return snakeBody[0];
}

export function si() {
  return onSnake(snakeBody[0], { ignoreHead: true });
}

export function updateScore(div) {
  let score = 0;
  snakeBody.forEach((_, i) => {
    score++;
  });
  setTimeout(function () {
    div.innerHTML = score;
  }, 1000);
}
