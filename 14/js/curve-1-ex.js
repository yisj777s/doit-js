//14-2.캔버스에 기본 도형 그리기
//14-2-4.곡선 그리기
//14-2-4-1.2차 베지에 곡선
//14-2-4-1-1.1개의 조절점을 사용해서 곡선 그리기
const canvas = document.querySelector("canvas");
const ctx= canvas.getContext("2d");

ctx.beginPath();
ctx.moveTo(50 , 200); //곡선의 시작 위치
ctx.quadraticCurveTo(200, 50, 350, 200); // 시작 위치부터 (350, 200)까지 곡선 만들기
ctx.stroke();