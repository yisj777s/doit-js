//14-2.캔버스에 기본 도형 그리기
//14-2-2.삼각형 그리기
//14-2-2-1.캔버스에 직선 그리기
//14-2-2-1-1.(350, 50)부터 (200, 200) 까지 빨간색 선 그리기 추가.
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext("2d");

ctx.beginPath(); // 경로를 시작.
ctx.moveTo(50, 50); // 경로가 시작되는 위치 지정.
ctx.lineTo(200, 200); // (200, 200) 까지 경로를 만듦.
ctx.stroke();

ctx.beginPath(); // 경로를 시작.
ctx.moveTo(350, 50);
ctx.lineTo(200, 200);
ctx.strokeStyle = "red";  
ctx.stroke();