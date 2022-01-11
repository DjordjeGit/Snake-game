export function randomFood() {
  return {
    x: Math.floor(Math.random() * 21) + 1,
    y: Math.floor(Math.random() * 21) + 1,
  };
}

export function OverGap(el) {
  return el.x < 1 || el.y < 1 || el.x > 21 || el.y > 21;
}
