//14-4.캔버스에 이미지 표시하기
//14-4-2.이미지의 일부분만 표시하기
//14-4-2-2.이미지 클리핑하기
//14-4-2-2-1.캔버스의 크기에 맞춰서 이미지 그리기
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext("2d");

let img = new Image();
img.onload = () => {
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
}
img.src = "images/bird.jpg";