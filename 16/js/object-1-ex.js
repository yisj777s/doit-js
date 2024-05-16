//16.캔버스에서 애니메이션 실행하기
//16-1.객체를 사용해 도형 그리기
//16-1-1.객체로 여러 개의 원 그리기
//16-1-1-1.객체 만들기
//16-1-1-1-1.Circle 객체 만들기
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function Circle(x, y, radius, color) {
  this.x = x; 
  this.y = y; 
  this.radius = radius;
  this.color = color;

  // 원을 그리는 draw 메서드
  this.draw = () => {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.fill();
  }
}
//16-1-1-2.인스턴스를 만들고 화면에 그리기
//16-1-1-2-1.Circle 객체의 인스턴스 만들기
const circleOne = new Circle(100, 100, 50, "springgreen");
const circleTwo = new Circle(200, 200, 20, "steelblue");
circleOne.draw();
circleTwo.draw();