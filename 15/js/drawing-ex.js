//10.캔버스로 그래픽 요소 다루기
//15-1.다양한 그래픽 스타일 지정하기
//15-1-6.텍스트 선과 관련된 스타일 속성 살펴보기
//practice-15-1-6-1.나만의 드로잉 앱 만들기
const canvas = document.querySelector("canvas");
const toolbar = document.querySelector("#toolbar");

// 캔버스 너비와 높이. toolbar.offsetHeight는 툴바의 높이.
canvas.width = window.innerWidth;
canvas.height = window.innerHeight - toolbar.offsetHeight;

const canvasOffsetX = canvas.offsetLeft; // 화면 왼쪽에서 얼마나 떨어졌는지 계산.
const canvasOffsetY = canvas.offsetTop; // 화면 위쪽에서 얼마나 떨어졌는지 계산.

const ctx = canvas.getContext("2d");

let isDrawing = false; // 드로잉 상태인지 확인.
// let startX; // 그리기 시작하는 x좌표  // ?
// let startY; // 그리기 시작하는 y좌표  // ?
let lineWidth = 2; // 선 굵기

// 선 색과 선 굵기를 선택하면
toolbar.addEventListener("change", e => {
  if (e.target.id === "stroke") {
    ctx.strokeStyle = e.target.value; // 선 색
  }
  if (e.target.id === "lwidth") {
    lineWidth = e.target.value; // 선 굵기
  }
});

//[지우기]버튼을 클릭하면 캔버스를 지움.
toolbar.addEventListener("click", e => {
  if (e.target.id === "reset") {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
  }
});

canvas.addEventListener("mousedown", e => {
  isDrawing = true;
  // startX = e.clientX;  // ?
  // startY = e.clientY;  // ?
});

canvas.addEventListener("mousemove", e => {
  if (!isDrawing) return; // 마우스가 클릭된 상태가 아닐 때는 함수를 실행시키지 않음.
  ctx.lineWidth = lineWidth;
  ctx.lineCap = "round";
  ctx.lineTo(e.clientX, e.clientY - canvasOffsetY);
  ctx.stroke();
});

canvas.addEventListener("mouseup", () => {
  isDrawing = false;
  ctx.beginPath();
});