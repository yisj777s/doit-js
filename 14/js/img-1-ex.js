//14-4.캔버스에 이미지 표시하기
//14-4-1.이미지 표시하기
//14-4-1-1.원래 크기대로 이미지 그리기
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

let img = new Image();
img.onload  = function() {
  // ctx.drawImage(img, 0, 0);
  // ctx.drawImage(img, 0, 0, 300, 200); // 이미지 크기 지정.
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height); // 캔버스 크기에 맞게 지정.
};
img.src = "images/cat.jpg";