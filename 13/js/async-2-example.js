//13-1-1-3.비동기 처리 방식
//함수 안에 다른 함수를 넣어 비동기 처리하기
function displayA() {
  console.log("A");
}
function displayB(callback) {
  setTimeout(() => {console.log("B"); callback();}, 2000);
}
function displayC() {
  console.log("C");
}    

displayA();
displayB(displayC);