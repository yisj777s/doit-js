//14-3.캔버스에 텍스트 그리기
//14-3-2.글꼴 및 글자 스타일 지정하기-font 속성
//14-3-2-3.글자 스타일 지정하기2
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext("2d");

ctx.font = "italic 60px serif"; // 기울임꼴, 60px, 세리프체
ctx.fillStyle = "#FFFF00";
ctx.strokeStyle = "#FF0000";
ctx.fillText("Javascript", 50, 70);
ctx.strokeText("Javascript", 50, 70);
ctx.font = "bold 60px snas-serif" // 굵은 글꼴, 60px, 산세리프체
ctx.fillText("Javascript", 50, 150);
ctx.strokeText("Javascript", 50, 150);