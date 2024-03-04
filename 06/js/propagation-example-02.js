// 모든 요소를 가져와 elements에 저장.
const elements = document.querySelectorAll("*");

// 모든 요소를 순회하면서
// click 이벤트가 발생하면
// event.target인 태그 이름과 event.currentTarget인 태그 이름을 출력.
for (let element of elements) {
  element.addEventListener("click", e => {
    console.log(`event.target : ${e.target.tagName}, event.currentTarget : ${e.currentTarget.tagName}`);
  }, true); // 이벤트 리스너 세 번째 옵션 true로 지정해 이벤트 캡처링 사용.
}