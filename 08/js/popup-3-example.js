const bttn = document.querySelector("button");
const popWidth = 600; // 팝업 창 너비
const popHeight = 500; // 팝업 창 높이

bttn.addEventListener("click", function() {
  let left = (screen.availWidth - popWidth) / 2; // 화면 너비 -
  let top = (screen.availHeight - popHeight) / 2;
  window.open("notice.html", "이벤트팝업", `width = ${popWidth} height = ${popHeight} left = ${left} top = ${top}`);
});