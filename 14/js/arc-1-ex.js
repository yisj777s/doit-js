//14-2.캔버스에 기본 도형 그리기
//14-2-3.원이나 호 그리기
//14-2-3-1.원 그리기
//14-2-3-1-1.원 그리고 색 채우기
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext("2d");

ctx.fillStyle = "yellow"; // 채우기 색상
ctx.strokeStyle = "red"; // 선 색상

ctx.beginPath();
ctx.arc(200, 150, 100, 0, Math.PI * 2, true) // 0~360˚ 까지 경로를 만듦.
ctx.closePath(); // 경로를 닫음.
ctx.fill(); // 색상을 채움.
ctx.stroke(); // 선을 그림.