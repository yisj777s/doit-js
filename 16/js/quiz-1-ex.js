//quiz-16-1.도형 객체 정의 및 사용
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

function Rect(x, y, width, height, color) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.color = color;

  this.draw = () => {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}

const rect1 = new Rect(50, 50, 200, 200, "#00ffff");
const rect2 = new Rect(70, 70, 160, 160, "#000080");

rect1.draw();
rect2.draw();

//solution
// const canvas = document.querySelector("canvas");
// const ctx = canvas.getContext("2d");

// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

// function Rect(x, y, width, height, color) {
//   this.x = x;
//   this.y = y;
//   this.width = width;
//   this.height = height;
//   this.color = color;

//   this.draw = function() {
//     ctx.beginPath();
//     ctx.fillStyle = this.color;
//     ctx.fillRect(this.x, this.y, this.width, this.height);    
//   }
// }

// const box1 = new Rect(10, 10, 100, 100, "red");
// const box2 = new Rect(30, 30, 60, 60, "blue");
// box1.draw();
// box2.draw();