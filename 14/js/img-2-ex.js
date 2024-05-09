//14-4.캔버스에 이미지 표시하기
//14-4-2.이미지의 일부분만 표시하기
//14-4-2-1.이미지의 일부분만 화면에 그리기
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

let img = new Image();
img.onload = () => {
  ctx.drawImage(img, 100, 50, 280, 350, 160, 100, 140, 175);
}
img.src = "images/cat.jpg";