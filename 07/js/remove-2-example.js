const items = document.querySelectorAll("li");

for (item of items) { // item은 items 노드 리스트의 li.
  item.addEventListener("click", function() {
    this.parentNode.removeChild(this); // 부모 노드에서 삭제.
  });
}