//15.캔버스로 그래픽 요소 다루기
//15-2.그래픽 요소 변형하기
//15-2-4.크기 조절하기 - scale() 메서드
//15-2-4-1.도형 확대/축소하기
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext("2d");

// 기본 사각형
ctx.fillStyle = 'mediumvioletred';
ctx.fillRect(50, 50, 100, 50);
ctx.save();

// 확대한 사각형
ctx.scale(3, 2);
ctx.strokeRect(17, 70, 100, 50); // strokeRect(51, 140, 300, 100);

ctx.restore();

ctx.strokeRect(200, 50, 100, 50); 