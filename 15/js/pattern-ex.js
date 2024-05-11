//15.캔버스로 그래픽 요소 다루기
//15-1.다양한 그래픽 스타일 지정하기
//15-1-4.패턴 채우기
//15-1-4-1-1.패턴 만들고 적용하기
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

let img = new Image();
img.onload = () => {
  let pattern = ctx.createPattern(img, "repeat"); // 패턴 객체를 만듦.
  ctx.fillStyle = pattern; // 채우기 스타일을 패턴으로 지정.
  ctx.fillRect(0, 0, 200, 200); // 패턴을 채운 사각형을 그림.
}
img.src = "images/pattern.png";