//15.캔버스로 그래픽 요소 다루기
//15-3.그래픽 요소 합성하기
//15-3-1.소스의 작성 순서에 따라 겹쳐지는 그래픽 요소
//15-3-1-1.도형 위에 다른 도형 겹치기
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "fuchsia";
ctx.fillRect(100, 50, 100, 100);

ctx.fillStyle = "cyan";
ctx.beginPath();
ctx.arc(180, 120, 50, 0, Math.PI * 2, false);
ctx.fill();