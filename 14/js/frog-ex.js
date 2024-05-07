//14-2.캔버스에 기본 도형 그리기
//14-2-practice.캔버스로 개구리 얼굴 그리고 파일로 저장하기
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

ctx.scale(1, 0.7); // 세로 길이 줄이기

// 얼굴
ctx.fillStyle = "Yellowgreen";
ctx.strokeStyle = "Midnightblue";
ctx.beginPath();
ctx.arc(150, 150, 80, 0, Math.PI * 2, false);
ctx.fill();

// 눈
ctx.beginPath();
ctx.arc(120, 80, 20, 0, Math.PI * 2, false);
ctx.moveTo(200, 80);
ctx.arc(180, 80, 20, 0, Math.PI * 2, false);
ctx.fillStyle = "white";
ctx.strokeStyle = "Mediumspringgreen";
ctx.fill();
ctx.stroke();

// 눈동자
ctx.beginPath();
ctx.arc(120, 80, 5, 0, Math.PI * 2, false);
ctx.moveTo(200, 80);
ctx.arc(180, 80, 5, 0, Math.PI * 2, false);
ctx.fillStyle = "#000000";
ctx.fill();

// 입
ctx.beginPath();
ctx.arc(150, 150, 50, 0, Math.PI * 1, false);
ctx.strokeStyle = "rgb(0,0,0)";
ctx.lineWidth = 3; // 선 굵기
ctx.stroke();