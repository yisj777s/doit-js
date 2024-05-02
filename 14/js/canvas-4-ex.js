//14-2.캔버스에 기본 도형 그리기
//14-2-1.사각형 그리기
//14-2-1-2.채우기 색과 선 색지정하기
//14-2-1-2-1.기본적인 사각형 그리기
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "rgb(200, 0, 0)";
ctx.strokeStyle = "black";  
ctx.fillRect(10, 10, 200, 100);
ctx.strokeRect(10, 10, 200, 100);

ctx.fillStyle = "blue"
ctx.fillRect(50, 50, 120, 100);

ctx.clearRect(70, 80, 80, 45);