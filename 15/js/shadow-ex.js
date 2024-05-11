//15.캔버스로 그래픽 요소 다루기
//15-1.다양한 그래픽 스타일 지정하기
//15-1-5.그림자 효과 추가하기
//15-1-5-1.도형에 그림자 효과 추가하기
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

let radGrad = ctx.createRadialGradient(50, 60, 10, 80, 90, 100); // 원형 그러데이션 객체
radGrad.addColorStop(0, "rgb(255, 255, 255)"); // 시작 위치에 흰색 원
radGrad.addColorStop(0.4, "rgb(255, 255, 0)"); // 0.4 위치에 노란색 원
radGrad.addColorStop(1, "rgb(255, 165, 0)"); // 끝 위치에 주황색 원
// 그림자 효과 추가
ctx.shadowColor = "#ccc";
ctx.shadowOffsetX = 15; // 그림자 가로 오프셋
ctx.shadowOffsetY = 10; // 세로 오프셋
ctx.shadowBlur = 10; // 그림자 흐림 정도

ctx.fillStyle = radGrad;
ctx.arc(100, 100, 80, 0, Math.PI * 2, false);
ctx.fill();