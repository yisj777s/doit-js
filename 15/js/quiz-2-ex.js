//quiz-15-2.quiz-1에서 만든 텍스트에 이미지 채우기
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

ctx.font = "bold 300px sans-serif";
ctx.fillText("GOOD", 100, 320);

let img = new Image();
img.onload = () => {
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
}
img.src = "images/text-bg.jpg";

ctx.globalCompositeOperation = "source-in";

// solution
// const canvas = document.querySelector("canvas");
// const ctx = canvas.getContext("2d");

// ctx.beginPath();
// ctx.font = "bold 300px sans-serif";
// ctx.fillText("GOOD", 100, 320);

// ctx.beginPath();
// ctx.globalCompositeOperation = "source-in";
// let img = new Image();
// img.onload = function() {
//   ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
// }
// img.src = "images/text-bg.jpg";