//15.캔버스로 그래픽 요소 다루기
//15-1.다양한 그래픽 스타일 지정하기
//15-1-2.투명도 조절하기
//15-1-2-2.rgba() 메서드
//15-1-2-2-1.rgba()메서드를 사용해 각 도형의 불투명도 조절하기
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "rgb(0, 0, 255, .2)"; // 거의 투명하게 alpha 값을 지정.
ctx.fillRect(50, 50, 60, 50);
ctx.fillStyle = "rgb(0, 0, 255, .4)";
ctx.fillRect(110, 50, 60, 50);
ctx.fillStyle = "rgb(0, 0, 255, .6)";
ctx.fillRect(170, 50, 60, 50);
ctx.fillStyle = "rgb(0, 0, 255, .8)";
ctx.fillRect(230, 50, 60, 50);
ctx.fillStyle = "rgb(0, 0, 255, 1)"; // 불투명하게 alpha 값을 지정.
ctx.fillRect(290, 50, 60, 50);