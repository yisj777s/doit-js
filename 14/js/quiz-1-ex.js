//practice-14-1.별그리기
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.strokeStyle = "#00FF00";
ctx.lineWidth = 10;
ctx.fillStyle = "#FFFF00";
ctx.moveTo(65,150)
ctx.lineTo(330,350);
ctx.lineTo(213,60);
ctx.lineTo(100,350);
ctx.lineTo(370,150);
ctx.closePath();
ctx.stroke();
ctx.fill();