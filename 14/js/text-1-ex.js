//14-3.캔버스에 텍스트 그리기
//14-3-1.텍스트를 그리는 메서드
//14-3-1-1.캔버스에 텍스트 그리기
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

ctx.fillText("HELLO", 50, 70);
ctx.strokeText("HELLO", 50, 150);