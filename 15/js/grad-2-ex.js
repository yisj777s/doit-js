//15.캔버스로 그래픽 요소 다루기
//15-1.다양한 그래픽 스타일 지정하기
//15-1-3.그러데이션 채우기
//15-1-3-3-1.원형 그러데이션 만들고 적용하기
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

let radGrad = ctx.createRadialGradient(50, 60, 10, 80, 90, 100); // 원형 그러데이션 객체
radGrad.addColorStop(0, "rgb(255, 255, 255)"); // 시작 위치에 흰색 원
radGrad.addColorStop(0.4, "rgb(255, 255, 0)"); // 0.4 위치에 노란색 원
radGrad.addColorStop(1, "rgb(255, 165, 0)"); // 끝 위치에 주황색 원

ctx.fillStyle = radGrad;
ctx.arc(100, 100, 80, 0, Math.PI * 2, false);
ctx.fill();