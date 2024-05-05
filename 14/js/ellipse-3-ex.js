//14-2.캔버스에 기본 도형 그리기
//14-2-3.원이나 호 그리기
//14-2-3-4-2.원을 변형해서 타원그리기2(반지름의 길이가 50인 원을 그리고 가로 길이를 0.7로 축소해서 세로로 긴 타원을 그려 보세요.)
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

ctx.strokeStyle = "violet";
ctx.beginPath();
ctx.scale(0.7, 1);
ctx.arc(200, 150, 50, 0, Math.PI * 2, true);
ctx.stroke();
ctx.closePath();