"use strict";

const ball = document.getElementById("ball");

let x = 100;
let y = 100;
let vx = 3;
let vy = 3;

function moveBall() {
  const ballWidth = ball.offsetWidth;
  const windowWidth = window.innerWidth;
  const ballHeight = ball.offsetHeight;
  const windowHeight = window.innerHeight;

  x += vx;
  y += vy;

  if (x <= 0 || x + ballWidth >= windowWidth) {
    vx = -vx;
  }
  if (y <= 0 || y + ballHeight >= windowHeight) {
    vy = -vy;
  }

  ball.style.left = x + "px";
  ball.style.top = y + "px";
}

let running = true;

setInterval(() => {
  if (running) {
    moveBall();
  }
}, 16);

document.addEventListener("click", () => {
  running = !running;
});
