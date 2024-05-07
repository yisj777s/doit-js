//14-3.캔버스에 텍스트 그리기
//14-3-2.글꼴 및 글자 스타일 지정하기-font 속성
//14-3-2-1.글꼴과 글자 크기를 지정한 텍스트 그리기
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext("2d");

ctx.font = "60px Arial";
ctx.fillText("HELLO", 50, 70);
ctx.strokeText("HELLO", 50, 150);