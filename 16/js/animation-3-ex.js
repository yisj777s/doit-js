//16.캔버스에서 애니메이션 실행하기
//practice-16-3.여러 개의 도형이 무작위로 움직이는 애니메이션 만들기
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function Circle(x, y, radius, color) {
  this.x = x;
  this.y = y;
  this.radius = radius;
  this.color = color;
  
  this.dx = Math.floor(Math.random() * 5);
  this.dy = Math.floor(Math.random() * 5);

  this.draw = function() {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.fill();
  }

  this.animate = () => {
    this.x += this.dx;
    this.y += this.dy;

    if (this.x + this.radius > canvas.width || this.x - this.radius < 0 ){
      this.dx = -this.dx;
    }
    if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
      this.dy = -this.dy;
    }

    this.draw();
  }
}

const objs = [];
for (let i = 0; i < 20; i++) {
  const radius = Math.floor((Math.random() * 50)) + 10;
  const x = Math.random() * (canvas.width - radius * 2) + radius;
  const y = Math.random() * (canvas.height - radius * 2) + radius;
  const color = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
  objs.push(new Circle(x, y, radius, color));      
}

// for (let i = 0; i < objs.length; i++) {
//   objs[i].draw();
// }

function update() {
  //캔버스 지우기
  //for() {
  //objs의 각 요소마다 애니메이션 실헹하기
  //}
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < objs.length; i++) {
    let obj = objs[i];
    obj.animate();
  }
  requestAnimationFrame(update);
}

update();