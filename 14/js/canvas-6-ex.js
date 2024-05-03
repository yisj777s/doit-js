//14-2.캔버스에 기본 도형 그리기
//14-2-2.삼각형 그리기
//14-2-2-1.캔버스에 직선 그리기
//14-2-2-2.캔버스에 삼각형 그리기
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext("2d");

ctx.beginPath() // 경로 시작.
ctx.moveTo(50, 50) // 시작점을 (50, 50) 위치로 이동.
ctx.lineTo(150, 100) // 시작점에서 (150,100)까지 경로를 만듭니다.
ctx.lineTo(50, 150) // 이전 경로의 끝점에서 (50, 150)까지 경로를 만듦.
ctx.closePath(); // 경로를 닫습니다.(닫힌 도형).
ctx.stroke(); // 지금까지 만든 경로를 선으로 그림.

ctx.beginPath() // 경로 시작.
ctx.moveTo(150, 100) // 시작점을 (150, 100) 위치로 이동.
ctx.lineTo(250, 50) // 시작점에서 (250,50)까지 경로를 만듭니다.
ctx.lineTo(250, 150) // 이전 경로의 끝점에서 (250, 150)까지 경로를 만듦.
ctx.closePath(); // 경로를 닫습니다.(닫힌 도형).
ctx.fillStyle = 'rgb(0, 200, 0'; // 채우기 색 지정.
ctx.fill(); // 만든(닫힌) 도형에 색을 채움.