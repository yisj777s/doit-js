//15.캔버스로 그래픽 요소 다루기
//15-1.다양한 그래픽 스타일 지정하기
//15-1-2.투명도 조절하기
//15-1-2-1.globalAlpha 속성
//15-1-2-1-1.전체 불투명도 조절하기
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "rgb(255, 0, 0)";
ctx.fillRect(50, 50, 100, 50);
ctx.fillStyle = "rgb(0, 0, 255)";
ctx.fillRect(150, 50, 100, 50);
ctx.fillStyle = "rgb(0, 255, 0)";
ctx.fillRect(250, 50, 100, 50);
ctx.fillStyle = "rgb(255, 255, 0)";
ctx.fillRect(350, 50, 100, 50);

ctx.globalAlpha = 0.3;  // 이후 모든 도형에 투명도 적용.
ctx.fillStyle = "rgb(255, 0, 0)";
ctx.fillRect(50, 150, 100, 50);
ctx.fillStyle = "rgb(0, 0, 255)";
ctx.fillRect(150, 150, 100, 50);
ctx.fillStyle = "rgb(0, 255, 0)";
ctx.fillRect(250, 150, 100, 50);
ctx.fillStyle = "rgb(255, 255, 0)";
ctx.fillRect(350, 150, 100, 50);