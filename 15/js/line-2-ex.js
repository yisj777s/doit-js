//10.캔버스로 그래픽 요소 다루기
//15-1.다양한 그래픽 스타일 지정하기
//15-1-6.텍스트 선과 관련된 스타일 속성 살펴보기
//15-1-6-3-1.선과 선의 교차점 지정하기
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const lineJoin = ['bevel', 'miter', 'round'];

ctx.strokeStyle = "#333";
for(i = 0; i < lineJoin.length; i++) {
  ctx.lineWidth = 20;
  ctx.lineJoin = lineJoin[i];
  ctx.beginPath();
  ctx.moveTo(60, 60 * i + 50);
  ctx.lineTo(100, 60 * i + 15); // 교차하는 위치
  ctx.lineTo(140, 60 * i +50); // 끝 위치
  ctx.stroke();
}