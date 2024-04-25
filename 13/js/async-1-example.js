// 13-1-1-2.자바스크립트는 싱글 스레드 언어
// 함수 처리하기
function displayA() {
  console.log("A");
}
function displayB() {
  setTimeout(()=>console.log("B"), 2000);
}
function displayC() {
  console.log("C");
}

displayA();
displayB();
displayC();