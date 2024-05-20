//16.캔버스에서 애니메이션 실행하기
//practice-16-2.궤적이 남는 애니메이션 만들기
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const circle = {
  x: 100,
  y: 100,
  radius: 30,
  dx: 4,
  dy: 4,
  color: "purple"
}

function drawCircle() {
  ctx.beginPath();
  ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2, false);
  ctx.fillStyle = circle.color;
  ctx.fill();
}

// drawCircle();
function move() {
  // ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "rgba(255, 255, 255, 0.3)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  drawCircle();

  circle.x += circle.dx;
  circle.y += circle.dy;
  
  if(circle.x + circle.radius > canvas.width || circle.x - circle.radius < 0) {
    circle.dx = -circle.dx
  }
  if(circle.y + circle.radius > canvas.height || circle.y - circle.radius < 0) {
    circle.dy = -circle.dy
  }

  requestAnimationFrame(move);
}

move();