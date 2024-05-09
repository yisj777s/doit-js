//practice-14-2.이미지 표시하고 타원형으로 클리핑하기.
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

let img = new Image();
img.onload = () => {
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
}
img.src = "images/cat.jpg";

ctx.beginPath();
ctx.ellipse(250,200,180,200,0,0,Math.PI * 360);
ctx.clip(); 