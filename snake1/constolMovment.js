let prevCords = { x: 0, y: 0 };
let curCords = { x: 0, y: 0 };

window.addEventListener('keydown', function (e) {
  switch (e.key) {
    case 'w':
      if (prevCords.y !== 0) return;
      curCords = { x: 0, y: -1 };
      break;
    case 's':
      if (prevCords.y !== 0) return;
      curCords = { x: 0, y: 1 };
      break;
    case 'a':
      if (prevCords.x !== 0) return;
      curCords = { x: -1, y: 0 };
      break;
    case 'd':
      if (prevCords.x !== 0) return;
      curCords = { x: 1, y: 0 };
      break;
  }
});

export function getCords() {
  prevCords = curCords;
  return curCords;
}
