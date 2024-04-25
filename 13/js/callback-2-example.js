//13-1-2.비동기 처리와 콜백 함수
//13-1-2-2.익명으로 콜백 함수 작성하기
//익명으로 콜백 함수 작성하기
function displayLetter() {
  console.log("A");
  setTimeout(() => {
    console.log("B");
    setTimeout(() => {
      console.log("C");
      setTimeout(() => {
        console.log("D");
        setTimeout(() => {
          console.log("stop!");
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}

displayLetter();