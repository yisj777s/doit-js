//15.캔버스로 그래픽 요소 다루기
//15-2.그래픽 요소 변형하기
//practice-15-2-1.버튼을 클릭할 때마다 도형 회전시키기
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const button = document.querySelector("button");
const origin = {x: 200, y:200}; // 옮길 원점 좌표
const alpha = 0.7; // 불투명도값

ctx.fillStyle = 'wheat';
ctx.fillRect(200, 200, 100, 100);

button.onclick = () => {
  let color = randomRGB(); // 무작위 색상 가져옴.
  
  ctx.globalAlpha = alpha; // 불투명도를 지정.
  ctx.translate(origin.x, origin.y); // 원점 이동.
  ctx.rotate(Math.PI / 180 * 30) // 회전
  ctx.fillStyle = color;
  ctx.fillRect(0, 0, 100, 100);
  ctx.translate(-origin.x, -origin.y); // 원점 복구.
}

function randomRGB() {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  return `rgb(${red}, ${green}, ${blue})`;
}