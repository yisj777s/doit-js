//16.캔버스에서 애니메이션 실행하기
//16-1.객체를 사용해 도형 그리기
//practice-16-1-1.무작위로 여러 개의 도형 그리기
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function Circle(x, y, radius, color) {
  this.x = x;
  this.y = y;
  this.radius = radius;
  this.color = color;

  this.draw = () => {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.fill();
  }
}

const objs = []; // 인스턴스를 저장할 변수
for (let i = 0; i < 20; i++) {
  const radius = Math.floor(Math.random() * 50) + 10;
  const x = Math.random() * (canvas.width - radius * 2) + radius;
  const y = Math.random() * (canvas.height - radius * 2) + radius;
  const color = `rgb(${Math.random() * 256}, ${Math.random() * 256}, ${Math.random() * 256})`;
  objs.push(new Circle(x, y, radius, color)); // ojbs에 인스턴스 추가.
}
// console.log(objs);

for (let i = 0; i < objs.length; i++) {
  objs[i].draw();
}