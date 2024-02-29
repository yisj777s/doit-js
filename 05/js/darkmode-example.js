const bttn = document.querySelector("#toggle-box button"); // 버튼 요소를 가져옵니다.

bttn.onclick = () => {
  document.body.classList.toggle("dark"); // 버튼 클릭할 때마다 .dark 스타일을 토글합니다.
}