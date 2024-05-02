const canvas = document.querySelector('canvas'); // 캔버스 영역을 가져옴.
const ctx = canvas.getContext("2d"); // 2차원 콘텍스트를 생성.

ctx.fillStyle = "rgb(200, 0, 0)";
ctx.fillRect(10, 10, 50 ,100);