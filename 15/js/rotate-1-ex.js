//15.캔버스로 그래픽 요소 다루기
//15-2.그래픽 요소 변형하기
//15-2-3.회전시키기 - rotate() 메서드
//15-2-3-1.도형 회전시키기 1
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext("2d");

// aquamarine 사각형
ctx.fillStyle = "aquamarine";
ctx.fillRect(150, 150, 100, 100); 

// 마름모 사각형
ctx.rotate(45 * Math.PI / 180); // 45도 회전
ctx.strokeRect(150, 150, 100, 100); // 선으로 그리기.