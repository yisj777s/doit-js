const title = document.querySelector("#title"); // #title 요소를 가져옵니다.

title.onclick = () => {
  title.style.backgroundColor = "black"; // title 요소의 배경색을 수정합니다.
  title.style.color = "white"; // title 요소의 글자색을 수정합니다.
}