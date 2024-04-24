// 동기 처리 방식
// 소스 실행 순서에 따라 함수 처리하기
function displayA() {
  console.log("A");
}
function displayB() {
  console.log("B");
}
function displayC() {
  console.log("C");
}

displayA();
displayB();
displayC();