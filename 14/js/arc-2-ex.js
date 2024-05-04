//14-2.캔버스에 기본 도형 그리기
//14-2-3.원이나 호 그리기
//14-2-3-1.원 그리기
//14-2-3-1-1.원 그리고 색 채우기
//14-2-3-2.반원과 호 그리기
//14-2-3-2-1.반원과 호 그리기
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext("2d");

// 반원 채우기
ctx.fillStyle = "red";
ctx.beginPath();
ctx.arc(120, 100, 50, 0, (Math.PI / 180) * 180, true); // 반시계 방향
ctx.arc(280, 100, 50, 0, (Math.PI / 180) * 180, false); // 시계 방향
ctx.fill();

// 선으로 반원 그리기
ctx.beginPath();
ctx.arc(120, 200, 50, (Math.PI / 180) * 90, (Math.PI / 180) * 270, false);
ctx.closePath();
ctx.stroke  ();

// 선으로 호 그리기
ctx.strokeStyle = "blue";
// ctx.moveTo(300, 100);
ctx.beginPath();
ctx.arc(200, 200, 50, 0, (Math.PI / 180) * 60, false);
ctx.stroke();