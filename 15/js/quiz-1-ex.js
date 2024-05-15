//quiz-15-1.캔버스에 다음 조건을 가진 텍스트 표시.
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

ctx.font = "bold 300px sans-serif";
ctx.fillText("GOOD", 100, 320);