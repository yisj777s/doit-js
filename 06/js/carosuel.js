const container = document.querySelector("#container"); // 캐러셀 영역

// 이미지 배열
const pics = ["pic-1.jpg", "pic-2.jpg", "pic-3.jpg", "pic-4.jpg", "pic-5.jpg"];

// 첫 번째 이미지를 기본으로 표시.
container.style.backgroundImage = `url(images/${pics[0]})`;

const arrows = document.querySelectorAll(".arrow"); //선택요소 여러개 = All 사용
let i = 0; //  배열 인덱스

arrows.forEach( arrow => {
  arrow.addEventListener("click", (e) => {
    if (e.target.id === "left"){
      i--;  // 이전 이미지로 이동.
      if (i < 0) { // 첫 번째 이미지인 경우
        i = pics.length - 1; // 마지막 이미지로 이동.
      }
    }
    else if (e.target.id === "right") {
      i++; // 다음 이미지로 이동.
      if ( i >= pics.length ) { // 마지막 이미지인 경우
        i = 0; // 첫 번째 이미지로 이동.
      }
    }
    container.style.backgroundImage = `url(images/${pics[i]})`;
  });
});