//14-2.캔버스에 기본 도형 그리기
//14-2-3.원이나 호 그리기
//14-2-3-3.타원 그리기
//14-2-3-3-1.타원 그리기
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

ctx.strokeStyle = "red";
ctx.beginPath();
ctx.ellipse(200, 70, 80, 50, 0, 0, Math.PI * 2);
ctx.stroke();

ctx.strokeStyle = "blue";
ctx.beginPath();
ctx.ellipse(150, 200, 80, 50, (Math.PI / 180) * -30, 0, Math.PI * 2); // -30˚ 회전
ctx.stroke();