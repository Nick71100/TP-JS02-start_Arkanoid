"use strict";

const ball = document.getElementById("ball");

let x = 100;
let y = 100;
let speedX = 3;
let speedY = 3;

function moveBall() {
  const ballWidth = ball.offsetWidth;
  const ballHeight = ball.offsetHeight;
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;

  x += speedX;
  y += speedY;

  if (x <= 0 || x + ballWidth >= windowWidth) {
    vx = -speedX;
  }
  if (y <= 0 || y + ballHeight >= windowHeight) {
    vy = -speedY;
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
