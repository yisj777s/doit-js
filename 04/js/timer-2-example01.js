let counter = 0;

let timer = setInterval(() => { // 타이머를 시작합니다.
  console.log("안녕하세요?");
  counter++; //인사말 표시 횟수가 1 증가합니다.
  if (counter === 5)
    clearInterval(timer); // counter = 5이면 타이머를 종료합니다.
})