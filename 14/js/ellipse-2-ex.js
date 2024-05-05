//14-2.캔버스에 기본 도형 그리기
//14-2-3.원이나 호 그리기
//14-2-3-4.원을 변형해서 타원 그리기
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

ctx.strokeStyle = "fuchsia";
ctx.scale(1, 0.7); //가로 길이는 그대로, 세로 길이는 축소.
ctx.beginPath();
ctx.arc(200, 150, 80, 0, Math.PI * 2, true); // 바깥쪽 원
ctx.stroke();

ctx.beginPath();
ctx.arc(200, 150, 30, 0, Math.PI * 2, false); // 안쪽 원
ctx.strokeStyle = "lime";
ctx.stroke();
ctx.closePath();