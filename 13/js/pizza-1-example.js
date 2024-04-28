//13-2-4.콜백 함수로 여러 단계 연결하기
//콜백 함수로 여러 단계 연결하기
const step1 = (callback) => {
  setTimeout(() => {
    console.log('피자 도우 준비');
    callback();
  }, 2000);
}

const step2 = (callback) => {
  setTimeout(() => {
    console.log('토핑 완료');
    callback();
  }, 1000)
}

const step3 = (callback) => {
  setTimeout(() => {
    console.log('굽기 완료');
    callback();
  }, 2000)
}

console.log("피자를 주문합니다.");
step1(function() {
  step2(function() {
    step3(function() {
      console.log("피자가 준비되었습니다.");
    });
  });
});