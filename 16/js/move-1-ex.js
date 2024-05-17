//16.캔버스에서 애니메이션 실행하기
//16-2.애니메이션 효과 추가하기
//16-2-1.그래픽 요소 옮기기
//16-2-1-1.좌표 옮기기
//16-2-1-2.window.RequestAnimationFrame()메서드
//16-2-1-2-1.가로로 특정 크기만큼 원 움직이기
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const circle = {
  x: 100,
  y: 100,
  radius: 30,
  dx: 4,  // 가로로 움직일 크기(x축 이동 속도)
  dy: 4,  // 세로로 움직일 크기(y축 이동 속도)
  color: "maroon"
}

function drawCircle() {
  ctx.beginPath();
  ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2, false);
  ctx.fillStyle = circle.color;
  ctx.fill();
}

function move() {
  drawCircle();
  circle.x += circle.dx;
  requestAnimationFrame(move); // move 함수를 반복.
}

move();