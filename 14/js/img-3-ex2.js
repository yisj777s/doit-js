//14-4.캔버스에 이미지 표시하기
//14-4-2.이미지의 일부분만 표시하기
//14-4-2-2.이미지 클리핑하기
//14-4-2-2-2.이미지를 원형으로 클리핑하기
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext("2d");

let img = new Image();
img.onload = () => {
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
}
img.src = "images/bird.jpg";

ctx.beginPath();
ctx.arc(300, 200, 150, 0, Math.PI * 2, false); // 원 경로를 만듦.
ctx.clip(); // 클리핑