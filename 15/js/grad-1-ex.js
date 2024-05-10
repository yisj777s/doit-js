//15.캔버스로 그래픽 요소 다루기
//15-1.다양한 그래픽 스타일 지정하기
//15-1-3.그러데이션 채우기
//15-1-3-2-1.선형 그러데이션의 색 중지점 만들기
//15-1-3-2-2.선형 그러데이션 적용하기
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

let linGrad = ctx.createLinearGradient(0, 0, 0, 200);
linGrad.addColorStop(0, "#000"); // 시작 위치에 검은색을 지정.
linGrad.addColorStop(0.6, "#fff"); // 0.6 위치에 흰색 지정.
linGrad.addColorStop(1, "#eee"); // 끝나는 위치에 회색 지정.

ctx.fillStyle = linGrad; 
ctx.fillRect(0, 0, 100, 200); 