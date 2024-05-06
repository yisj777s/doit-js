//14-2.캔버스에 기본 도형 그리기
//14-2-4.곡선 그리기
//14-2-4-2.3차 베지에 곡선
//14-2-4-2-1.2개의 조절점을 사용해서 곡선 그리기
const canvas = document.querySelector("canvas");
const ctx= canvas.getContext("2d");

ctx.beginPath();
ctx.moveTo(50, 100);
ctx.bezierCurveTo(90, 250, 310, 10, 350, 100);
ctx.strokeStyle = 'mediumspringgreen';
ctx.stroke();