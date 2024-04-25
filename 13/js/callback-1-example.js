//13-1-2.비동기 처리와 콜백 함수
//13-1-2-1.함수 이름을 콜백으로 사용하기
//콜백 함수를 사용해 비동기 처리하기
function order(coffee, callback) {
  console.log(`${coffee} 주문 접수`);
  setTimeout(() => {
    callback(coffee);
  }, 3000)
}
function display(result) {
  console.log(`${result} 준비 완료`);
}

order("아메리카노", display);