const buttons = document.querySelectorAll("p > span"); // 모든 삭제 버튼을 가져옴.

for(button of buttons) {
  button.addEventListener("click", function() {
    this.parentNode.remove();
  });
}