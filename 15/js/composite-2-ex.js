//15.캔버스로 그래픽 요소 다루기
//15-3.그래픽 요소 합성하기
//15-3-2.겹쳐진 그래픽 요소 합성하기 - globalCompositeOperation 속성
//15-3-2-1.globalCompositeOperation 값 살펴보기
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

//destination
ctx.fillStyle = "#0ff"
ctx.fillRect(100, 50, 100, 100);
ctx.strokeRect(100, 50 , 100, 100);

ctx.globalCompositeOperation = "xor";

// source
ctx.fillStyle = "lawngreen";
ctx.arc(180, 120, 50, 0, Math.PI * 2);
ctx.fill();