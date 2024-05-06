//14-2.캔버스에 기본 도형 그리기
//14-2-4.곡선 그리기
//14-2-4-1.2차 베지에 곡선
//14-2-4-1-2.베지에 곡선을 활용해서 물결 그리기
const canvas = document.querySelector("canvas");
const ctx= canvas.getContext("2d");

ctx.beginPath();
ctx.moveTo(50, 100);
ctx.quadraticCurveTo(100, 50, 150, 100);
ctx.quadraticCurveTo(200, 150, 250, 100);
ctx.quadraticCurveTo(300, 50, 350, 100);
ctx.stroke();