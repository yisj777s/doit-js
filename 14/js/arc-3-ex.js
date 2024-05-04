//14-2.캔버스에 기본 도형 그리기
//14-2-3.원이나 호 그리기
//14-2-3-1.원 그리기
//14-2-3-1-1.원 그리고 색 채우기
//14-2-3-2.반원과 호 그리기
//14-2-3-2-1.반원과 호 그리기
//14-2-3-2-2.반지름의 길이가 50인 왼쪽 반원 그리기
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "brown";
ctx.beginPath();
ctx.arc(150, 150, 50, (Math.PI / 180) * 270, (Math.PI / 180) * 90, true);
ctx.fill();

ctx.beginPath();
ctx.arc(250, 150, 50, (Math.PI / 180) * 90, (Math.PI / 180) * 270, false);
ctx.closePath();
ctx.strokeStyle = "indigo";
ctx.stroke();